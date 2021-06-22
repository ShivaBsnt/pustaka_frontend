import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdbreact";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { NewArrivalWrapper } from "./Style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestsellers: [],
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
  requestBook = (e) => {
    if (localStorage.getItem("token")) {
      toast("⚠️We will look after your request!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    return (
      <NewArrivalWrapper>
        {" "}
        <MDBContainer className="NEWARRIVAL">
          <div style={{ height: 40 }}></div>
          <div className="title best-seller-title">
            <div className="row">
              <div className="col-md-10 col-sm-8 col-8">
                <h3>NewArrival</h3>
              </div>{" "}
              <div className="col-md-2 col-sm-4 col-4">
                <span className="float-right view">
                  <a href="/newarrival" className="no-margin">
                    VIEW ALL
                  </a>
                </span>
              </div>
            </div>
          </div>
          <MDBRow>
            <MDBCol md="2" style={{ align: "center" }}>
              <MDBCard style={{ maxWidth: "10rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src={
                    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1470082995i/29056083.jpg"
                  }
                  waves
                  style={{ height: "14rem", width: "100%" }}
                />
                <MDBCardBody>
                  <div style={{ fontSize: "16px", textAlign: "left" }}>
                    <span
                      className="d-inline-block text-truncate"
                      style={{ maxWidth: 150 }}
                    >
                      <strong>Harry Potter and the Cursed Child</strong>
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
                      by J. K. Rowling, John Tiffany, Jack Thorne,
                      Insight-editions
                    </span>
                  </div>
                  {/* <div>Location: {book.address}</div> */}
                  <div style={{ textAlign: "left" }}>
                    <Row>
                      <Col>
                        <strong>For:</strong>
                        Sell
                      </Col>
                      <Col>
                        <strong>NPR:</strong>
                        Rs 450
                      </Col>
                    </Row>
                  </div>
                </MDBCardBody>
                <MDBBtn onClick={() => this.requestBook()}>Request Book</MDBBtn>

                <ToastContainer />
              </MDBCard>
            </MDBCol>

            <MDBCol md="2" style={{ align: "center" }}>
              <MDBCard style={{ maxWidth: "10rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src={
                    "https://images-na.ssl-images-amazon.com/images/I/81vnLjrT7iS.jpg"
                  }
                  waves
                  style={{ height: "14rem", width: "100%" }}
                />
                <MDBCardBody>
                  <div style={{ fontSize: "16px", textAlign: "left" }}>
                    <span
                      className="d-inline-block text-truncate"
                      style={{ maxWidth: 150 }}
                    >
                      <strong>The President's Daughter: A Thriller</strong>
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
                      by Bill Clinton and James Patterson
                    </span>
                  </div>
                  {/* <div>Location: {book.address}</div> */}
                  <div style={{ textAlign: "left" }}>
                    <Row>
                      <Col>
                        <strong>For:</strong>
                        Sell
                      </Col>
                      <Col>
                        <strong>NPR:</strong>
                        Rs 450
                      </Col>
                    </Row>
                  </div>
                </MDBCardBody>
                <MDBBtn onClick={() => this.requestBook()}>Request Book</MDBBtn>
              </MDBCard>
            </MDBCol>

            <MDBCol md="2" style={{ align: "center" }}>
              <MDBCard style={{ maxWidth: "10rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src={
                    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQMy8ltJqVgule91-0tbhTdBipDmuk25PgJRRsoliJsnzsS87uN"
                  }
                  waves
                  style={{ height: "14rem", width: "100%" }}
                />
                <MDBCardBody>
                  <div style={{ fontSize: "16px", textAlign: "left" }}>
                    <span
                      className="d-inline-block text-truncate"
                      style={{ maxWidth: 150 }}
                    >
                      <strong>One Last Stop</strong>
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
                      by Casey McQuiston
                    </span>
                  </div>
                  {/* <div>Location: {book.address}</div> */}
                  <div style={{ textAlign: "left" }}>
                    <Row>
                      <Col>
                        <strong>For:</strong>
                        Sell
                      </Col>
                      <Col>
                        <strong>NPR:</strong>
                        Rs 450
                      </Col>
                    </Row>
                  </div>
                </MDBCardBody>
                <MDBBtn onClick={() => this.requestBook()}>Request Book</MDBBtn>
              </MDBCard>
            </MDBCol>

            <MDBCol md="2" style={{ align: "center" }}>
              <MDBCard style={{ maxWidth: "10rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUweZVxmyRyLyYBN9y9xUtCpPWGXoswxzbRiHY3J2CJJ1wdNOA"
                  }
                  waves
                  style={{ height: "14rem", width: "100%" }}
                />
                <MDBCardBody>
                  <div style={{ fontSize: "16px", textAlign: "left" }}>
                    <span
                      className="d-inline-block text-truncate"
                      style={{ maxWidth: 150 }}
                    >
                      <strong>Golden Girl</strong>
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
                      by Elin Hilderbrand
                    </span>
                  </div>
                  {/* <div>Location: {book.address}</div> */}
                  <div style={{ textAlign: "left" }}>
                    <Row>
                      <Col>
                        <strong>For:</strong>
                        Sell
                      </Col>
                      <Col>
                        <strong>NPR:</strong>
                        Rs 450
                      </Col>
                    </Row>
                  </div>
                </MDBCardBody>
                <MDBBtn onClick={() => this.requestBook()}>Request Book</MDBBtn>
              </MDBCard>
            </MDBCol>

            <MDBCol md="2" style={{ align: "center" }}>
              <MDBCard style={{ maxWidth: "10rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3spzbl2jYm0VdNulAlYs8A_pv0Q8io8-Hu6EdZviNgkiPi0v"
                  }
                  waves
                  style={{ height: "14rem", width: "100%" }}
                />
                <MDBCardBody>
                  <div style={{ fontSize: "16px", textAlign: "left" }}>
                    <span
                      className="d-inline-block text-truncate"
                      style={{ maxWidth: 150 }}
                    >
                      <strong>Malibu Rising: A Novel</strong>
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
                      by Taylor Jenkins Reid
                    </span>
                  </div>
                  {/* <div>Location: {book.address}</div> */}
                  <div style={{ textAlign: "left" }}>
                    <Row>
                      <Col>
                        <strong>For:</strong>
                        Sell
                      </Col>
                      <Col>
                        <strong>NPR:</strong>
                        Rs 450
                      </Col>
                    </Row>
                  </div>
                </MDBCardBody>
                <MDBBtn onClick={() => this.requestBook()}>Request Book</MDBBtn>

                <ToastContainer />
              </MDBCard>
            </MDBCol>

            <MDBCol md="2" style={{ align: "center" }}>
              <MDBCard style={{ maxWidth: "10rem" }}>
                <MDBCardImage
                  className="img-fluid"
                  src={
                    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3xkZ2yPZnIsPnDw3Es8G8PA67Yp4Jm4JMjXQJYZu93yuV2eY9"
                  }
                  waves
                  style={{ height: "14rem", width: "100%" }}
                />
                <MDBCardBody>
                  <div style={{ fontSize: "16px", textAlign: "left" }}>
                    <span
                      className="d-inline-block text-truncate"
                      style={{ maxWidth: 150 }}
                    >
                      <strong>Legacy</strong>
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
                      by Nora Roberts
                    </span>
                  </div>
                  {/* <div>Location: {book.address}</div> */}
                  <div style={{ textAlign: "left" }}>
                    <Row>
                      <Col>
                        <strong>For:</strong>
                        Sell
                      </Col>
                      <Col>
                        <strong>NPR:</strong>
                        Rs 450
                      </Col>
                    </Row>
                  </div>
                </MDBCardBody>
                <MDBBtn onClick={() => this.requestBook()}>Request Book</MDBBtn>

                <ToastContainer />
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <div style={{ height: 40 }}></div>
        </MDBContainer>
      </NewArrivalWrapper>
    );
  }
}

export default NewArrival;
