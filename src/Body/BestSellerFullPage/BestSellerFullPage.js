import React, { Component } from "react";
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
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import { BestSellerWrapper } from "../BestSeller/Style";
import PaginationPage from "../Pagination/Pagination";
import NavbarPage from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class BestSellerFullPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestsellers: [],
      currentPage: 1,
      postsPerPage: 6,
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:90/book")
      .then((response) => this.setState({ bestsellers: response.data.data }))
      .catch((err) => console.log("error", err));
  }
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  requestBook = (data) => {
    if (localStorage.getItem("token")) {
      this.setState(
        {
          requestBook: {
            book: data._id,
            book_owner: data.user_id._id,
          },
        },
        function () {
          axios
            .post(
              "http://localhost:90/book/request",
              this.state.requestBook,
              this.state.config
            )
            .then((response) => {
              console.log(response);
              toast.info("Book has been requested!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            })
            .catch((err) => console.log("error", err));
          console.log(this.state.requestBook);
        }
      );
    } else {
      toast.info("⚠️Please login!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  render() {
    const indexOfLastPage = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPage = indexOfLastPage - this.state.postsPerPage;
    const currentPost = this.state.bestsellers.slice(
      indexOfFirstPage,
      indexOfLastPage
    );
    return (
      <BestSellerWrapper>
        <NavbarPage></NavbarPage>;
        <MDBContainer>
          <div style={{ height: 32 }}></div>

          <Container>
            <Row>
              <img src="https://booksmandala.com/images/banner/best-sellers-desktop.jpg" />
            </Row>
          </Container>

          <div className="title best-seller-title">
            <div className="row">
              <div className="col-md-10 col-sm-8 col-8">
                <h3>BestSeller</h3>
              </div>{" "}
              <div className="col-md-2 col-sm-4 col-4">
                <span className="float-right view">
                  {/* <a
                    href="https://booksmandala.com/categories/best-sellers"
                    className="no-margin"
                  >
                    VIEW ALL
                  </a> */}
                </span>
              </div>
            </div>
          </div>
          <MDBRow>
            {currentPost.map((book) => (
              <MDBCol md="2" style={{ align: "center" }}>
                <MDBCard style={{ maxWidth: "10rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src={`http://localhost:90/images/${book.cover_page}`}
                    waves
                    style={{ height: "14rem", width: "100%" }}
                  />
                  <MDBCardBody>
                    <div style={{ fontSize: "16px", textAlign: "left" }}>
                      <span
                        className="d-inline-block text-truncate"
                        style={{ maxWidth: 150 }}
                      >
                        <strong>{book.title}</strong>
                      </span>
                    </div>

                    <div
                      style={{
                        color: "#535766",
                        fontSize: "14px",
                        textAlign: "left",
                      }}
                    >
                      <span
                        class="d-inline-block text-truncate"
                        style={{ maxWidth: 150 }}
                      >
                        by {book.author}
                      </span>
                    </div>
                    {/* <div>Location: {book.address}</div> */}
                    <div style={{ textAlign: "left" }}>
                      <Row>
                        <Col>
                          <strong>For:</strong>
                          {book.service}
                        </Col>
                        <Col>
                          <strong>NPR:</strong>
                          {book.price}
                        </Col>
                      </Row>
                    </div>
                  </MDBCardBody>
                  {localStorage.getItem("username") ===
                  `${book.user_id.username}` ? (
                    <MDBBtn disabled onClick={() => this.requestBook(book)}>
                      Request Book
                    </MDBBtn>
                  ) : (
                    <MDBBtn onClick={() => this.requestBook(book)}>
                      Request Book
                    </MDBBtn>
                  )}
                </MDBCard>
              </MDBCol>
            ))}
                 <ToastContainer />
          </MDBRow>
        </MDBContainer>
        <div>
          <Container>
            <Row>
              <Col> </Col>
              <Col>
                {" "}
                <PaginationPage
                  postsPerPage={this.state.postsPerPage}
                  totalPost={this.state.bestsellers.length}
                  paginate={this.paginate}
                  currentPage={this.state.currentPage}
                ></PaginationPage>
              </Col>
              <Col> </Col>
            </Row>
          </Container>
        </div>
        <Footer></Footer>
      </BestSellerWrapper>
    );
  }
}

export default BestSellerFullPage;
