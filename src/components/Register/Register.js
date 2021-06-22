import React, { Component } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import {
  MDBInput,
  MDBCol,
  MDBCard,
  MDBRow,
  MDBContainer,
  MDBBtn,
  MDBCardBody,
} from "mdbreact";
import axios from "axios";
import { RegisterWrapper } from "./Style";
import Swal from "sweetalert2";
class Register extends Component {
  state = {
    username: "",
    password: "",
    email: "",

    // profile: "shiva.jpg",
  };
  registerUser = (e) => {
    console.log("button clicked");
    e.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      repeat_password: this.state.password,
    };
    axios
      .post("http://localhost:8000/user/register/", user)
      .then((response) => {
        Swal.fire(
          "Registration Successful!",
          "You are successfully registered now!",
          "success"
        ).then(function () {
          window.location.href = "/";
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <RegisterWrapper>
        <div
          style={{
            backgroundColor: "#52beff",
            opacity: 0.8,

            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
          }}
        >
          <div style={{ height: 20 }}></div>
          <MDBContainer>
            <MDBRow>
              <MDBCol></MDBCol>
              <MDBCol md="4">
                <MDBCard>
                  <MDBCardBody>
                    <MDBRow>
                      <h5 style={{ color: "black" }}>Register</h5>
                      <p style={{ color: "black" }}>
                        Already have an account? <a href="/">Sign In</a>
                      </p>
                      <MDBCol></MDBCol>
                      <MDBCol xl="5" md="4" className="mb-1 text-center">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/mdbbootstrap_image.jpg"
                          }
                          className="img-fluid z-depth-2 rounded-circle"
                          alt=""
                        />
                      </MDBCol>
                      <MDBCol></MDBCol>
                    </MDBRow>
                    <form>
                      <MDBInput
                        label="Your username"
                        // icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={this.state.username}
                        onChange={(event) =>
                          this.setState({ username: event.target.value })
                        }
                      />
                      <MDBInput
                        label="Your email"
                        // icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        value={this.state.email}
                        onChange={(event) =>
                          this.setState({ email: event.target.value })
                        }
                      />

                      <MDBInput
                        label="Enter your new password"
                        // icon="lock"
                        group
                        type="password"
                        validate
                        value={this.state.password}
                        onChange={(event) =>
                          this.setState({ password: event.target.value })
                        }
                      />
                      <MDBInput
                        label="Repeat your  password"
                        // icon="lock"
                        group
                        type="password"
                        validate
                      />
                      <MDBBtn
                        type="submit"
                        style={{ backgroundColor: "#f0ad4e !important" }}
                        onClick={this.registerUser}
                      >
                        Register
                      </MDBBtn>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol></MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </RegisterWrapper>
    );
  }
}
export default Register;
