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
import { Row, Col } from "react-bootstrap";
import { BestSellerWrapper } from "./Style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class BestSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestsellers: [],
      requestBook: {
        book: "",
        book_owner: "",
      },
      config: {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    };
  }
  shuffle = (arr) =>
    [...arr].reduceRight(
      (res, _, __, s) => (
        res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
      ),
      []
    );

  componentDidMount() {
    axios
      .get("http://localhost:90/book")
      .then((response) => {
        const shuffledData = this.shuffle(response.data.data);
        this.setState({ bestsellers: shuffledData });
      })
      .catch((err) => console.log("error", err));
  }
  // requestBook = (data) => {
  //   if (localStorage.getItem("token")) {
  //     toast("⚠️We will look after your request!", {
  //       position: "top-right",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     console.log(data);
  //     axios
  //       .post(
  //         "http://localhost:90/book/request",
  //         this.state.requestBook,
  //         this.state.config
  //       )
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => console.log("error", err));
  //   } else {
  //     toast("⚠️Please login!", {
  //       position: "top-right",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };
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
    console.log(this.state.requestBook);
    return (
      <BestSellerWrapper>
        <div className="BESTSELLER"></div>
        <MDBContainer>
          <div className="title best-seller-title ">
            <div className="row">
              <div className="col-md-10 col-sm-8 col-8">
                <h3>BestSeller</h3>
              </div>{" "}
              <div className="col-md-2 col-sm-4 col-4">
                <span className="float-right view">
                  <a href="/bestseller" className="no-margin">
                    VIEW ALL
                  </a>
                </span>
              </div>
            </div>
          </div>
          <MDBRow>
            {this.state.bestsellers.slice(0, 6).map((book) => (
              <MDBCol
                md="2"
                sm="3"
                xs={12}
                style={{ align: "center" }}
                key={book._id}
              >
                <MDBCard style={{ maxWidth: "10rem" }} className="card__book">
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

                  <ToastContainer />
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </BestSellerWrapper>
    );
  }
}

export default BestSeller;
