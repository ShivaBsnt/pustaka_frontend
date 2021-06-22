import React, { Component, state } from "react";
import { Row, Col } from "react-bootstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";
import { Rating } from "@material-ui/lab";
import {
  MDBModal,
  MDBInput,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import NavbarPage from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { FooterWrapper } from "../Review/Style";
import Swal from "sweetalert2";
class Review extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
    basic: [
      {
        tooltip: "Very Bad",
      },
      {
        tooltip: "Poor",
      },
      {
        tooltip: "Ok",
        choosed: true,
      },
      {
        tooltip: "Good",
      },
      {
        tooltip: "Excellent",
      },
    ],
    ratingValue: "",
    review: "",
    rateId: "",
    modal14: false,
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  changeHandler = (e) => {
    this.setState({
      review: e.target.value,
    });
  };
  rate = () => {
    this.setState({
      modal14: false,
    });
    const data = {
      rating: this.state.ratingValue,
      review: this.state.review,
    };

    console.log(localStorage.getItem("token"));
    console.log(this.state.config);
    console.log(this.state.ratingValue);
    console.log(this.state.review);
    if (this.state.ratingValue != undefined && this.state.review != undefined) {
      axios
        .put("http://localhost:90/customer/update/" + this.state.rateId, data, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          console.log(response);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          }).then((response) => {
            window.location.href = "/review";
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    this.setState({
      review: "",
      ratingValue: "",
      rateId: "",
    });
  };

  toggle = (nr, data) => () => {
    if (data === "close") {
      let modalNumber = "modal" + nr;
      this.setState({
        [modalNumber]: !this.state[modalNumber],
      });
    } else {
      let modalNumber = "modal" + nr;
      this.setState({
        [modalNumber]: !this.state[modalNumber],
        ratingValue: data.rating,
        review: data.review,
        rateId: data._id,
      });
    }
    console.log(data);
    console.log(this.state.ratingValue);
  };
  componentDidMount() {
    this.getCustomerReview();
  }
  deleteReview = (reviewData) => {
    console.log(reviewData);
    axios
      .delete(
        "http://localhost:90/customer/delete/" + reviewData._id,
        this.state.config
      )
      .then((response) => {
        Swal.fire("Deleted!", "Review has been deleted!", "success").then(
          function () {
            window.location.href = "/review";
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  editReview = () => {
    console.log("edit review");
  };
  getCustomerReview = () => {
    axios.get("http://localhost:90/customer").then((response) => {
      this.setState({
        data: response.data.data,
      });
      console.log(this.state.data);
    });
  };
  createStars = (num) => {
    let stars = [];

    for (let i = 0; i < num; i++) {
      stars.push(
        <FontAwesomeIcon style={{ color: "#ffb400" }} icon={faStar} />
      );
    }
    return stars;
    console.log("create star", num);
  };
  render() {
    return (
      <FooterWrapper>
        <div>
          <NavbarPage></NavbarPage>
          <div
            style={{
              backgroundColor: "#002245",
              color: "white",
            }}
          >
            <h1>pustaka.com Reviews</h1>
            <h5>
              <a
                href=""
                style={{ borderBottom: "2px solid #ff9000", color: "white" }}
              >
                Compay Reviews
              </a>
            </h5>
            <div style={{ height: 20 }}></div>

            <img src={"rating.PNG"} className="z-depth-4" />
            <div style={{ height: 20 }}></div>
            <div>
              <img src={"badge.png"} className="" />
            </div>
            <div style={{ height: 20 }}></div>
          </div>
          <div style={{ backgroundColor: "rgb(224, 239, 255)" }}>
            <div>
              <MDBContainer>
                <div style={{ height: 20 }}></div>
                <h3 style={{ textAlign: "left" }}>pustaka.com</h3>
              </MDBContainer>
              <div style={{ height: 20 }}></div>
            </div>
            <MDBContainer>
              <MDBCard style={{ borderBottom: 2 }}>
                <MDBCardBody>
                  <MDBCardTitle>About Us</MDBCardTitle>
                  <MDBCardText>
                    BooksRun is a website that eases up the task of finding the
                    right place to sell your used textbooks. Simply enter your
                    book’s ISBN into the search box, and you can see one of the
                    best buyback quotes on the market—free shipping included.
                    Also, there is a great opportunity to sell, rent or buy
                    textbooks you need at affordable prices. BooksRun always
                    aims to provide quality service and is eager to meet our
                    customers’ expectations. We also seek to inform our website
                    visitors on how to identify a counterfeit book,
                    international editions, and how to get the best price for a
                    used textbook. If you have any textbooks to sell or need a
                    cheap one for your next class, choose BooksRun! We have
                    unique promos and offers for our newsletter subscribers.
                    Feel free to contact us for any questions.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
            <div style={{ height: 40 }}></div>
          </div>
          <div>
            <div style={{ height: 40 }}></div>
            <MDBContainer>
              <div>
                <div
                  class="card text-start"
                  style={{
                    // backgroundColor: "red",
                    border: "2px solid #0B2539",
                    boxShadow: "2px 3px 20px 1px rgb(0 0 0 / 50%)",
                  }}
                >
                  <Row>
                    <Col md={1} className="text-end">
                      <img
                        className="img-fluid z-depth-2 rounded-circle"
                        src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/193488814_263429552247043_4970497985773648244_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=FhN1POvy4CUAX8geVYb&_nc_ht=scontent.fktm6-1.fna&oh=62c35f6cf72d6311ba7e7780de07dbeb&oe=60CB0DB1"
                        style={{
                          height: "50px",
                          width: "50px",
                          marginTop: "10px",
                        }}
                      />{" "}
                    </Col>
                    <Col>
                      {" "}
                      <div class="card-body">
                        <h2 class="card-title" style={{ color: "#0e253a" }}>
                          Navin poudel
                        </h2>
                        <h2>
                          {5 + ".0"} {this.createStars(5)}
                        </h2>
                        <p class="card-text" style={{ fontSize: "18px" }}>
                          The package and the book was very well. The book looks
                          like new.
                        </p>
                      </div>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                </div>
                <div style={{ height: 20 }}></div>
              </div>

              <div>
                <div
                  class="card text-start"
                  style={{
                    // backgroundColor: "red",
                    border: "2px solid #0B2539",
                    boxShadow: "2px 3px 20px 1px rgb(0 0 0 / 50%)",
                  }}
                >
                  <Row>
                    <Col md={1} className="text-end">
                      <img
                        className="img-fluid z-depth-2 rounded-circle"
                        src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/139630596_1782751888546152_9054840501555480756_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=vLflkTRTaG8AX-sg8J0&_nc_ht=scontent.fktm6-1.fna&oh=25f60e5df3086db6fe7309d378279208&oe=60CC9B49"
                        style={{
                          height: "50px",
                          width: "50px",
                          marginTop: "10px",
                        }}
                      />{" "}
                    </Col>
                    <Col>
                      {" "}
                      <div class="card-body">
                        <h2 class="card-title" style={{ color: "#0e253a" }}>
                          Shiva Bahadur Basnet
                        </h2>
                        <h2>
                          {5 + ".0"} {this.createStars(5)}
                        </h2>
                        <p class="card-text" style={{ fontSize: "18px" }}>
                          The package and the book was very well. The book looks
                          like new.
                        </p>
                      </div>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                </div>
                <div style={{ height: 20 }}></div>
              </div>

              <div>
                <div
                  class="card text-start"
                  style={{
                    // backgroundColor: "red",
                    border: "2px solid #0B2539",
                    boxShadow: "2px 3px 20px 1px rgb(0 0 0 / 50%)",
                  }}
                >
                  <Row>
                    <Col md={1} className="text-end">
                      <img
                        className="img-fluid z-depth-2 rounded-circle"
                        src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/67887336_2167484330027088_5759003402461773824_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=y5kL--Vj104AX8pmFkT&tn=EEGNHRa2DtoMcqLd&_nc_ht=scontent.fktm6-1.fna&oh=f69e7704e1186a04d2a9b442aa232ee0&oe=60CBC954"
                        style={{
                          height: "50px",
                          width: "50px",
                          marginTop: "10px",
                        }}
                      />{" "}
                    </Col>
                    <Col>
                      {" "}
                      <div class="card-body">
                        <h2 class="card-title" style={{ color: "#0e253a" }}>
                          Rohit Kaji Basnet
                        </h2>
                        <h2>
                          {5 + ".0"} {this.createStars(5)}
                        </h2>
                        <p class="card-text" style={{ fontSize: "18px" }}>
                          The package and the book was very well. The book looks
                          like new.
                        </p>
                      </div>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                </div>
                <div style={{ height: 20 }}></div>
              </div>

              <div>
                <div
                  class="card text-start"
                  style={{
                    // backgroundColor: "red",
                    border: "2px solid #0B2539",
                    boxShadow: "2px 3px 20px 1px rgb(0 0 0 / 50%)",
                  }}
                >
                  <Row>
                    <Col md={1} className="text-end">
                      <img
                        className="img-fluid z-depth-2 rounded-circle"
                        src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/189886690_190705632914572_7314648780665413658_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bluCJQBfA5AAX9Sh7d8&_nc_ht=scontent.fktm6-1.fna&oh=993bad4f8ea32331e56fdce3d960620a&oe=60CBB078"
                        style={{
                          height: "50px",
                          width: "50px",
                          marginTop: "10px",
                        }}
                      />{" "}
                    </Col>
                    <Col>
                      {" "}
                      <div class="card-body">
                        <h2 class="card-title" style={{ color: "#0e253a" }}>
                          Prap Tii
                        </h2>
                        <h2>
                          {5 + ".0"} {this.createStars(5)}
                        </h2>
                        <p class="card-text" style={{ fontSize: "18px" }}>
                          The package and the book was very well. The book looks
                          like new.
                        </p>
                      </div>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                </div>
                <div style={{ height: 20 }}></div>
              </div>
            </MDBContainer>
          </div>
          <MDBModal
            isOpen={this.state.modal14}
            toggle={this.toggle(14)}
            centered
          >
            {/* <MDBModalHeader toggle={this.toggle(14)}>
                              <img
                                style={{ maxWidth:"22rem"}}
                                src={"rateus.png"}
                                className="z-depth-4"
                              />
                            </MDBModalHeader> */}
            <MDBModalBody>
              <img
                style={{ maxWidth: "22rem" }}
                src={"rateus.png"}
                className=""
              />
              <div>
                <h4>Tell others what you think about this app</h4>
              </div>

              <div>
                <span style={{ height: 44 }}>😜</span>
              </div>

              {/* <MDBRating
                                data={this.state.basic}
                                style={{ display: "!important" }}
                                feedback="true"
                                iconSize="4x"
                                getValue={this.handlePickerValue}
                                
                                submitHandler={this.handleOnSubmnit}
                              /> */}
              <Rating
                name="size-large"
                defaultValue={2}
                size="large"
                value={this.state.ratingValue}
                onChange={(event, newValue) => {
                  this.setState({
                    ratingValue: newValue,
                  });
                }}
                // onChangeActive={(event, newHover) => {
                //   this.setState({
                //     ratingValue: newHover,
                //   });
                // }}
              />
              <MDBInput
                name="review"
                type="textarea"
                label="Leave A Review"
                value={this.state.review}
                onChange={this.changeHandler}
                outline
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle(14, "close")}>
                Close
              </MDBBtn>
              <MDBBtn color="primary" onClick={this.rate}>
                Save changes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <Footer></Footer>
        </div>
      </FooterWrapper>
    );
  }
}

export default Review;
