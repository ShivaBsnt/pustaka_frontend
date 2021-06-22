import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBRow,
  MDBCol,
  Row,
  Col,
  MDBMask,
  MDBBadge,
  MDBView,
} from "mdbreact";
import {
  MDBBtn,
  MDBModalBody,
  MDBModalHeader,
  MDBModal,
  MDBFooter,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBInput,
  MDBModalFooter,
} from "mdbreact";

import Swal from "sweetalert2";
import { DashboardWrapper } from "./Style";
import NavbarPage from "../../Header/Header";
import Footer from "../../Footer/Footer";
import axios from "axios";
import Register from "../Register/Register";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    books: [],
    activeItemClassicTabs3: "1",
    requestResponseBook: [],
    currentBook: {
      profile: "",
    },
    newBook: {
      title: "",
      author: "",
      description: "",
      category: "",
      service: "",
      price: "",
      cover_page: "",
      address: "",
    },
    userDetail: {},

    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    modal14: false,
    activeItemClassicTabs3: "1",
  };
  submitNewBook = (e) => {
    console.log(this.state.newBook);
    e.preventDefault();
    const data = new FormData();

    data.append("title", this.state.newBook.title);
    data.append("author", this.state.newBook.author);
    data.append("description", this.state.newBook.description);
    data.append("category", this.state.newBook.category);
    data.append("service", this.state.newBook.service);
    data.append("price", this.state.newBook.price);
    data.append("file", this.state.newBook.cover_page);
    data.append("address", this.state.newBook.address);
    console.log(data);

    axios
      .post("http://localhost:90/book/insert", data, this.state.config)
      .then((response) => {
        console.log(response.data.data._id);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your new book has been saved",
          showConfirmButton: false,
          timer: 2000,
        });
        axios
          .put("http://localhost:90/book/" + response.data.data._id, data)
          .then((response) => {
            window.location.href = "/dashboard";
          })
          .catch((err) => {
            console.log("err", err);
          });
      })
      .catch((err) => {
        console.log(err.response);
      });
    this.setState({
      newBook: {},
    });
  };
  fileHandler = (e) => {
    this.setState((prevState) => ({
      newBook: {
        // object that we want to update
        ...prevState.newBook, // keep all other key-value pairs
        cover_page: e.target.files[0], // update the value of specific key
      },
    }));
  };

  fileHandlerForProfile = (e) => {
    this.setState((prevState) => ({
      userDetail: {
        // object that we want to update
        ...prevState.userDetail, // keep all other key-value pairs
        profile: e.target.files[0], // update the value of specific key
      },
    }));
  };
  changeHandler = (e) => {
    this.setState((prevState) => ({
      currentBook: {
        // object that we want to update
        ...prevState.currentBook, // keep all other key-value pairs
        [e.target.name]: e.target.value, // update the value of specific key
      },
    }));

    console.log(this.state.currentBook);
  };
  // change handler for new book
  changeHandlerForNewBook = (e) => {
    this.setState((prevState) => ({
      newBook: {
        // object that we want to update
        ...prevState.newBook, // keep all other key-value pairs
        [e.target.name]: e.target.value, // update the value of specific key
      },
    }));

    console.log(this.state.newBook);
  };

  changeHandlerForProfile = (e) => {
    this.setState(
      (prevState) => ({
        userDetail: {
          // object that we want to update
          ...prevState.userDetail, // keep all other key-value pairs
          [e.target.name]: e.target.value, // update the value of specific key
        },
      }),
      function () {
        console.log(this.state.userDetail);
      }
    );
  };

  toggleClassicTabs3 = (tab) => () => {
    console.log("here");
    localStorage.setItem("toggleClassicTabs3", tab);
    localStorage.setItem("activeItemClassicTabs3", tab);
    if (this.state.activeItemClassicTabs3 !== tab) {
      this.setState({
        activeItemClassicTabs3: tab,
      });
    }
  };
  toggle = (nr, book) => () => {
    console.log(book);
    if (book === "close") {
      console.log("close");
    } else {
      this.setState({
        currentBook: book,
      });
    }

    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  submit = () => {
    axios
      .put("http://localhost:90/book/update", this.state.currentBook)
      .then((response) => console.log(response.data.success))
      .catch((err) => console.log("error", err));

    this.setState({
      modal14: false,
    });
    window.location.href = "/dashboard";
  };

  getBook = () => {
    axios
      .get("http://localhost:90/mybook", this.state.config)
      .then((response) => {
        console.log(response.status);
        if (response) {
          this.setState({ books: response.data.data });
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 401) {
          window.location.href = "/login";
        } else {
          console.log("err", err);
        }
      });
  };
  acceptBook = (book) => {
    book.accepted = true;

    Swal.fire({
      title: "Are you sure?",
      text: "Accept request for book " + `"${book.book.title}"`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accept it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Accepted!", "Request Accepted.", "success");
        axios
          .put(
            "http://localhost:90/book/request/status/update/" + book._id,
            book,
            this.state.config
          )

          .then((response) => {
            console.log("success");
          })
          .catch((err) => {
            console.log("err", err);
          });
        window.location.href = "/dashboard";
      }
    });
  };
  denyRequest = (book) => {
    book.accepted = false;
    Swal.fire({
      title: "Are you sure?",
      text: "Deny request for book " + `"${book.book.title}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Denied!", "Request Denied.", "success");
        axios
          .put(
            "http://localhost:90/book/request/status/update/" + book._id,
            book,
            this.state.config
          )

          .then((response) => {
            console.log("success");
          })
          .catch((err) => {
            console.log("err", err);
          });
        window.location.href = "/dashboard";
      }
    });
  };
  getRequestResponseBook = () => {
    axios
      .get("http://localhost:90/book/request/get", this.state.config)
      .then((response) => {
        console.log(response);
        this.setState({ requestResponseBook: response.data.data });
      })
      .catch((err) => console.log("error", err));
  };

  getLoggedInUserDetails = () => {
    axios
      .get("http://localhost:90/user/detail", this.state.config)
      .then((response) => {
        if (response) {
          this.setState(
            {
              userDetail: response.data.data,
            },
            function () {
              localStorage.setItem("email", response.data.data.email);
              localStorage.setItem("phone", response.data.data.phone);
              localStorage.setItem("username", response.data.data.username);
              localStorage.setItem("profile", response.data.data.profile);
            }
          );
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          window.location.href = "/login";
        } else {
          console.log("err", err);
        }
      });
  };

  saveProfile = () => {
    console.log(this.state.userDetail.profile);

    const data = new FormData();

    data.append("file", this.state.userDetail.profile);

    console.log(data);

    axios
      .put(
        "http://localhost:90/user/update/" + this.state.userDetail._id,
        this.state.userDetail,
        this.state.config
      )
      .then((response) => {
      
        if (this.state.userDetail.profile != localStorage.getItem("profile")) {
          axios
            .put("http://localhost:90/user/id", data, this.state.config)
            .then((response) => {
              window.location.href = "/dashboard";
            })
            .catch((err) => {
              console.log("err", err);
            });
        }
        else {
          window.location.href="/dashboard"
        }
      }
     
      )
      .catch((err) => {
        console.log("err", err);
      });
  };
  componentDidMount() {
    console.log("component did mount");
    if (localStorage.getItem("activeItemClassicTabs3")) {
      this.setState({
        activeItemClassicTabs3: localStorage.getItem("activeItemClassicTabs3"),
      });
    }

    // this.toggleClassicTabs3(localStorage.getItem("activeItemClassicTabs3"));
    this.getBook();
    this.getRequestResponseBook();
    this.getLoggedInUserDetails();
  }

  delete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: `"${id.title}"` + " will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("http://localhost:90/book/delete/" + id._id)
          .then((response) => {
            if (response.data.success === true) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              window.location.href = "/dashboard";
            }
          })
          .catch((err) => {
            Swal.fire("oops!", "Your file has been deleted.", "failed");
            console.log("error", err);
          });
      }
    });
  };
  render() {
    console.log("render method");
    // console.log(this.state.requestResponseBook);
    // const { books } = this.state.books;
    // const { requestResponseBook } = this.state.requestResponseBook;
    // console.log(this.state.requestResponseBook);

    return (
      <div>
        <NavbarPage></NavbarPage>
        <DashboardWrapper>
          <MDBContainer>
            <div className="classic-tabs">
              <MDBRow>
                {" "}
                <MDBNav classicTabs color="primary" className="z-depth-5 mt-5 ">
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "1"}
                      onClick={this.toggleClassicTabs3("1")}
                    >
                      <MDBIcon icon="home" size="lg" />
                      <br />
                      MyBook
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "2"}
                      onClick={this.toggleClassicTabs3("2")}
                    >
                      <MDBIcon icon="list" size="lg" />
                      <br />
                      My Request
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "3"}
                      onClick={this.toggleClassicTabs3("3")}
                    >
                      <MDBIcon icon="plus" size="lg" />
                      <br />
                      Add Book
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "4"}
                      onClick={this.toggleClassicTabs3("4")}
                    >
                      <MDBIcon icon="bell" size="lg" />
                      <MDBBadge color="danger" className="ml-2">
                        {this.state.requestResponseBook.length}
                      </MDBBadge>
                      <br />
                      Notification
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink
                      link
                      to="#"
                      active={this.state.activeItemClassicTabs3 === "5"}
                      onClick={this.toggleClassicTabs3("5")}
                    >
                      <MDBIcon icon="user" size="lg" />
                      <br />
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className="card mb-5"
                  activeItem={this.state.activeItemClassicTabs3}
                >
                  <MDBTabPane tabId="1">
                    {(() => {
                      if (this.state.books != null && this.state.books != "") {
                        return (
                          <div>
                            <table class="table align-middle">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Book</th>
                                  <th scope="col">Title</th>
                                  <th scope="col">Category</th>
                                  <th scope="col">Service</th>
                                  <th scope="col">Address</th>

                                  <th scope="col">Price</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.books.map((book, index) => (
                                  <tr>
                                    <th scope="row">{index + 1}</th>{" "}
                                    <td>
                                      <MDBView hover zoom>
                                        <img
                                          src={`http://localhost:90/images/${book.cover_page}`}
                                          style={{ height: 200 }}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </MDBView>
                                    </td>
                                    <td>{book.title}</td>
                                    <td>{book.category}</td>
                                    <td>{book.service}</td>
                                    <td>{book.address}</td>
                                    <td>{book.price}</td>
                                    <td>
                                      <Row>
                                        <Col>
                                          {" "}
                                          <button
                                            type="button"
                                            onClick={this.toggle(14, book)}
                                            class="btn btn-danger btn-sm px-3"
                                          >
                                            <i class="fas fa-edit"></i>
                                          </button>
                                        </Col>
                                        <Col>
                                          {" "}
                                          <button
                                            type="button"
                                            class="btn btn-danger btn-sm px-3"
                                            onClick={() => this.delete(book)}
                                          >
                                            <i class="fas fa-trash"></i>
                                          </button>
                                        </Col>
                                      </Row>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <h3>OOPs! No Books to show </h3>{" "}
                            <h1>
                              {" "}
                              <img
                                src={process.env.PUBLIC_URL + "/nocontents.svg"}
                                // style={{ height: 200 }}
                                className="img-fluid"
                                alt=""
                              />{" "}
                            </h1>
                          </div>
                        );
                      }
                    })()}
                  </MDBTabPane>
                  <MDBTabPane tabId="2">
                    {(() => {
                      if (
                        this.state.requestResponseBook != null &&
                        this.state.books != ""
                      ) {
                        return (
                          <div>
                            <table class="table align-middle">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Book</th>
                                  <th scope="col">Title</th>
                                  <th scope="col">Price</th>
                                  <th scope="col">Owned By</th>
                                  <th scope="col">Requested By</th>

                                  <th scope="col">Profile</th>
                                  <th scope="col">Action</th>
                                  <th scope="col">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.requestResponseBook.map(
                                  (book, index) => (
                                    <tr>
                                      <th scope="row">{index + 1}</th>
                                      <td>
                                        {" "}
                                        <MDBView hover zoom>
                                          <img
                                            src={`http://localhost:90/images/${book.book.cover_page}`}
                                            style={{ height: 200 }}
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </MDBView>
                                      </td>
                                      <td>{book.book.title}</td>
                                      <td>{book.book.price}</td>
                                      <td>{book.book.user_id.username}</td>
                                      <td>{book.book_requester.username}</td>

                                      <td>
                                        {" "}
                                        <img
                                          src={`http://localhost:90/images/${book.book_requester.profile}`}
                                          style={{ height: 100, width: 100 }}
                                          className="img-fluid z-depth-2 rounded-circle"
                                          alt=""
                                        />
                                      </td>

                                      <td>
                                        <Row>
                                          <Col>
                                            {" "}
                                            <button
                                              type="button"
                                              onClick={() =>
                                                this.acceptBook(book)
                                              }
                                              class="btn btn-danger btn-sm px-3"
                                            >
                                              <i class="fas fa-check"></i>
                                            </button>
                                          </Col>
                                          <Col>
                                            {" "}
                                            <button
                                              type="button"
                                              class="btn btn-danger btn-sm px-3"
                                              onClick={() =>
                                                this.denyRequest(book)
                                              }
                                            >
                                              <i class="fas fa-times"></i>
                                            </button>
                                          </Col>
                                        </Row>
                                      </td>

                                      {book.accepted === "true" ? (
                                        <td>
                                          <span>Accepted</span>
                                        </td>
                                      ) : (
                                        <td>
                                          <span>Pending</span>
                                        </td>
                                      )}
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </div>
                        );
                      } else {
                        return (
                          <div>
                            <h3>OOPs! No Request</h3>{" "}
                            <img
                              src={process.env.PUBLIC_URL + "/nocontents.svg"}
                              // style={{ height: 200 }}
                              className="img-fluid"
                              alt=""
                            />{" "}
                          </div>
                        );
                      }
                    })()}
                  </MDBTabPane>
                  <MDBTabPane tabId="3">
                    <div style={{ height: 40 }}></div>
                    <MDBContainer></MDBContainer>
                    <MDBRow>
                      <Col md={4}>
                        <div style={{ height: 60 }}></div>
                        <img
                          className="img-fluid z-depth-2"
                          src={process.env.PUBLIC_URL + "/add_your_book.jpg"}
                        />
                      </Col>

                      <Col>
                        <MDBContainer style={{ textAlign: "center" }}>
                          <MDBInput
                            label="Book Title"
                            name="title"
                            size="sm"
                            value={this.state.newBook.title}
                            onChange={this.changeHandlerForNewBook}
                          />
                          <MDBInput
                            label="Book Author"
                            size="sm"
                            name="author"
                            value={this.state.newBook.author}
                            onChange={this.changeHandlerForNewBook}
                          />
                          <MDBInput
                            type="textarea"
                            size="sm"
                            label="Book Description"
                            name="description"
                            value={this.state.newBook.description}
                            onChange={this.changeHandlerForNewBook}
                            outline
                          />
                          <MDBInput
                            label="Book Category"
                            size="sm"
                            name="category"
                            value={this.state.newBook.category}
                            onChange={this.changeHandlerForNewBook}
                          />
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                label="choose cover page"
                                aria-describedby="inputGroupFileAddon01"
                                onChange={this.fileHandler}
                              />
                            </div>
                          </div>
                          <MDBInput
                            label="Book Available for:"
                            size="sm"
                            name="service"
                            value={this.state.newBook.service}
                            onChange={this.changeHandlerForNewBook}
                          />
                          <MDBInput
                            label="Offer Price"
                            size="sm"
                            name="price"
                            value={this.state.newBook.price}
                            onChange={this.changeHandlerForNewBook}
                          />
                          <MDBInput
                            label="Address"
                            size="sm"
                            name="address"
                            value={this.state.newBook.address}
                            onChange={this.changeHandlerForNewBook}
                          />
                          <button
                            type="submit"
                            class="btn btn-primary btn-block mb-4"
                            onClick={this.submitNewBook}
                          >
                            Submit
                          </button>
                        </MDBContainer>
                      </Col>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId="4">
                    {this.state.requestResponseBook.map((data) => (
                      <MDBRow>
                        <Col>
                          <MDBCard>
                            <div style={{ height: 20 }}></div>
                            <MDBRow>
                              <MDBCol>
                                {" "}
                                <img
                                  className="img-fluid z-depth-2 rounded-circle"
                                  src={`http://localhost:90/images/${data.book_requester.profile}`}
                                  style={{ height: 100, width: 100 }}
                                />{" "}
                                {data.book_requester.username} has requested
                                your book
                                <MDBCol>
                                  <button class="btn btn-dark hover-effect btn-sm py-0 px-3">
                                    Mark as read
                                  </button>
                                  <button class="btn btn-theme hover-effect btn-sm float-right py-0">
                                    <span>
                                      Read More
                                      <i class="ti-angle-down pl-2"></i>
                                    </span>
                                  </button>
                                </MDBCol>
                              </MDBCol>
                            </MDBRow>
                          </MDBCard>
                        </Col>
                        <Col>
                          <div style={{ height: 20 }}></div>
                          <MDBRow>
                            <MDBCol style={{textAlign:"left"}}>
                              {" "}
                              <img
                                className="img-fluid z-depth-2 "
                                src={`http://localhost:90/images/${data.book.cover_page}`}
                                style={{ height: "8rem", width:"6rem",maxWidth: "10rem" }}
                              />{" "}
                              {data.book.title}
                            </MDBCol>
                          </MDBRow>
                        </Col>
                      </MDBRow>
                    ))}
                  </MDBTabPane>

                  <MDBTabPane tabId="5">
                    <div style={{ height: 40 }}></div>
                    <Container>
                      <Row>
                        <Col style={{ align: "center" }} md={3}>
                          {" "}
                          <img
                            src={`http://localhost:90/images/${localStorage.getItem(
                              "profile"
                            )}`}
                            className="img-fluid z-depth-2 rounded-circle"
                            alt=""
                            style={{ height: 120, width: 120 }}
                          />
                          <div style={{ fontWeight: "bold" }}>
                            {localStorage.getItem("username")}
                          </div>
                          <div style={{ color: "#C0C0C0" }}>
                            {localStorage.getItem("email")}
                          </div>
                          <div>{localStorage.getItem("phone")}</div>
                        </Col>
                        <Col>
                          <h3>Edit Your Profile</h3>{" "}
                          <MDBContainer style={{ textAlign: "center" }}>
                            <MDBInput
                              label="Username"
                              name="username"
                              size="sm"
                              value={this.state.userDetail.username}
                              onChange={this.changeHandlerForProfile}
                            />
                            <MDBInput
                              label="Email"
                              size="sm"
                              name="email"
                              value={this.state.userDetail.email}
                              onChange={this.changeHandlerForProfile}
                            />

                            <MDBInput
                              label="Phone"
                              size="sm"
                              name="phone"
                              value={this.state.userDetail.phone}
                              onChange={this.changeHandlerForProfile}
                            />
                            <div className="input-group">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="inputGroupFile01"
                                  label="choose new profile"
                                  aria-describedby="inputGroupFileAddon01"
                                  onChange={this.fileHandlerForProfile}
                                />
                              </div>
                            </div>

                            <div style={{ height: 40 }}></div>
                            <button
                              type="submit"
                              class="btn btn-primary btn-block mb-4"
                              onClick={this.saveProfile}
                            >
                              Save Profile
                            </button>
                            <ToastContainer />
                          </MDBContainer>
                        </Col>
                        <Col>
                          <div style={{ height: 10 }}></div>
                          <img
                            className="img-fluid z-depth"
                            src={process.env.PUBLIC_URL + "/edit_profile.jpg"}
                          />
                        </Col>
                      </Row>
                    </Container>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBRow>
            </div>
          </MDBContainer>
          <MDBContainer>
            <MDBModal
              isOpen={this.state.modal14}
              toggle={this.toggle(14, "close")}
              scrollable={true}
              centered
            >
              <MDBModalHeader toggle={this.toggle(14, "close")}>
                Edit
              </MDBModalHeader>
              <MDBModalBody>
                <div className="form-group">
                  <MDBInput
                    label="Book Title"
                    name="title"
                    size="lg"
                    value={this.state.currentBook.title}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    label="Book Author"
                    size="lg"
                    name="author"
                    value={this.state.currentBook.author}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    type="textarea"
                    label="Book Description"
                    name="description"
                    value={this.state.currentBook.description}
                    onChange={this.changeHandler}
                    outline
                  />

                  <MDBInput
                    label="Book Category"
                    size="lg"
                    name="category"
                    value={this.state.currentBook.category}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    label="Book Title"
                    size="lg"
                    value={this.state.currentBook.title}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    label="Book Available for:"
                    size="lg"
                    name="service"
                    value={this.state.currentBook.service}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    label="Offer Price"
                    size="lg"
                    name="price"
                    value={this.state.currentBook.price}
                    onChange={this.changeHandler}
                  />
                  <MDBInput
                    label="Address"
                    size="lg"
                    name="address"
                    value={this.state.currentBook.address}
                    onChange={this.changeHandler}
                  />
                </div>{" "}
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle(14, "close")}>
                  Close
                </MDBBtn>
                <MDBBtn color="primary" onClick={this.submit}>
                  Save changes
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        </DashboardWrapper>
        <Footer></Footer>
      </div>
    );
  }
}

export default Dashboard;
