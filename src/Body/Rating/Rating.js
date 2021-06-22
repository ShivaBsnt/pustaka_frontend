import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBContainer,
} from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { RatingWrapper } from "./Style";

class RatingPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };
  createStars = (num) => {
    let stars = [];

    for (let i = 0; i < num; i++) {
      stars.push(
        <FontAwesomeIcon style={{ color: "#f0ad4e" }} icon={faStar} />
      );
    }
    return stars;
    console.log("create star", num);
  };
  getCustomerReview = () => {
    axios
      .get("http://localhost:90/customer/")
      .then((response) => {
        this.setState({
          data: response.data.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  componentDidMount() {
    this.getCustomerReview();
  }
  render() {
    console.log(this.state.data);
    return (
      <RatingWrapper>
        <MDBContainer className="RATE">
          <div style={{ height: 40 }}></div>
          <h3>
            Our Customer{" "}
            <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} /> Us
          </h3>
          <div style={{ height: 40 }}></div>
          <MDBRow style={{ textAlign: "start" }}>
            <MDBContainer></MDBContainer>
           
            
                <MDBCol md={3} style={{ align: "center" }}>
                  <MDBCard style={{ maxWidth: "18rem" }} className="z-depth-4">
                   
                    <MDBCardBody>
                      <h6> {this.createStars(5)}</h6>
                      <MDBCardTitle
                        style={{ color: "#464844", fontSize: "18px" }}
                      >
                      Kristy
                      </MDBCardTitle>
                      <span style={{ color: "#999" }}>10 Jun 2021</span>

                      <MDBCardText>
                        <div
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            color: "#999",
                          }}
                        >
                          <span
                            className="d-inline-block text-truncate "
                            style={{ maxWidth: "16rem" }}
                          >
                            Amazing. Like new condition, fast shipping easy or...
                          </span>
                        </div>
                      </MDBCardText>
                      <a href="/review" style={{ color: "#84c6ff" }}>
                        Read More
                      </a>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                
                
                <MDBCol md={3} style={{ align: "center" }}>
                  <MDBCard style={{ maxWidth: "18rem" }} className="z-depth-4">
                   
                    <MDBCardBody>
                      <h6> {this.createStars(5)}</h6>
                      <MDBCardTitle
                        style={{ color: "#464844", fontSize: "18px" }}
                      >
                      Celeste A
                      </MDBCardTitle>
                      <span style={{ color: "#999" }}>12 Jun 2021</span>

                      <MDBCardText>
                        <div
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            color: "#999",
                          }}
                        >
                          <span
                            className="d-inline-block text-truncate "
                            style={{ maxWidth: "16rem" }}
                          >
                           I was skeptical because I had never ordered from t...
                          </span>
                        </div>
                      </MDBCardText>
                      <a href="/review" style={{ color: "#84c6ff" }}>
                        Read More
                      </a>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>


                
                <MDBCol md={3} style={{ align: "center" }}>
                  <MDBCard style={{ maxWidth: "18rem" }} className="z-depth-4">
                   
                    <MDBCardBody>
                      <h6> {this.createStars(5)}</h6>
                      <MDBCardTitle
                        style={{ color: "#464844", fontSize: "18px" }}
                      >
                     Kim
                      </MDBCardTitle>
                      <span style={{ color: "#999" }}>12 Jun 2021</span>

                      <MDBCardText>
                        <div
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            color: "#999",
                          }}
                        >
                          <span
                            className="d-inline-block text-truncate "
                            style={{ maxWidth: "16rem" }}
                          >
                            Book came quickly and is in described condition....
                          </span>
                        </div>
                      </MDBCardText>
                      <a href="/review" style={{ color: "#84c6ff" }}>
                        Read More
                      </a>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>


                
                <MDBCol md={3} style={{ align: "center" }}>
                  <MDBCard style={{ maxWidth: "18rem" }} className="z-depth-4">
                   
                    <MDBCardBody>
                      <h6> {this.createStars(5)}</h6>
                      <MDBCardTitle
                        style={{ color: "#464844", fontSize: "18px" }}
                      >
                      Perrell W
                      </MDBCardTitle>
                      <span style={{ color: "#999" }}>11 Jun 2021</span>

                      <MDBCardText>
                        <div
                          style={{
                            fontSize: "16px",
                            textAlign: "left",
                            color: "#999",
                          }}
                        >
                          <span
                            className="d-inline-block text-truncate "
                            style={{ maxWidth: "16rem" }}
                          >
                            AWESOME!!!! Got my book quickly!
                          </span>
                        </div>
                      </MDBCardText>
                      <a href="/review" style={{ color: "#84c6ff" }}>
                        Read More
                      </a>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
         
          </MDBRow>
          <div style={{height:60}}></div>
        </MDBContainer>
      </RatingWrapper>
    );
  }
}

export default RatingPage;
