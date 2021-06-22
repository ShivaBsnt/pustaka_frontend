import React from "react";
import { useHistory } from "react-router";
import { Route, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";
import { Button, Modal } from "react-bootstrap";

import NavbarPage from "../Navbar/Navbar";
import { LoginWrapper } from "./style";
import { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class FormPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    headers: {
      authorization: `Token ${localStorage.getItem("token")}`,
    },
    username: "",
    password: "",
    client_id: "",
    show: false,
  };

  handleClose = (e) => {
    console.log("handle close", e);
    if (e != undefined) {
      e.preventDefault();
    }

    const authentication_url = `http://127.0.0.1:8000/oauth/authenticate/token/${this.state.client_id}/`;
    axios
      .get(authentication_url, this.state)
      .then((response) => {
        //   const url = response.data.redirect_url+"?access_token="+response.data.access_token
        const url =
          response.data.redirect_url +
          "oauth/authenticate/" +
          response.data.access_token;
        console.log(url);
        window.location.href = url;
      })
      .catch((err) => {
        console.log("error");
        toast.error("⚠️ Something went wrong!", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const authentication_url = `http://127.0.0.1:8000/oauth/authenticate/${this.state.client_id}/`;
    console.log(authentication_url);
    console.log(this.state);
    axios
      .post(authentication_url, this.state)
      .then((response) => {
        const url =
          response.data.redirect_url +
          "oauth/authenticate/" +
          response.data.access_token;
        console.log(url);
        window.location.href = url;
        
      })
      .catch((err) => {
        console.log("error", err);
        toast.error("⚠️ Invalid username or password!", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    if (this.state.client_id) {
      console.log("yes we have a client id:" + this.state.client_id);
    } else {
      const url = "http://127.0.0.1:8000/user/login/";
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      console.log(data);
      axios.post(url, data).then((response) => {
        if (response.status == 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", this.state.username);

          this.props.history.push("/");
        }
      });
    }
  };

  componentDidMount() {
    var url_string = window.location;
    var url = new URL(url_string);
    var client_id = url.searchParams.get("client_id");
    this.setState({ client_id: client_id });
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      axios
        .get("http://127.0.0.1:8000/user/validate/", {
          headers: { authorization: `Token ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          if (response.status == 200) {
            console.log(response);
            console.log(response.data.username);
            const data = {
              username: response.data.username,
            };
            axios
              .post("http://127.0.0.1:8001/user/check/", data)
              .then((response) => {
                if (response.status == 200 && response.data.is_user) {
                  console.log(
                    "user of pustaka as well as the user of pustaka intake"
                  );
                  this.handleClose();
                } else {
                  this.setState({
                    show: true,
                  });
                  console.log(
                    "user of pustaka but not the user of pustaka intake"
                  );
                }
              })
              .catch((error) => {
                console.log("error", error);
              });
          }
        })
        .catch((error) => {
          console.log("error:", error);
        });
    } else {
      console.log("user is new here let him login");
    }
  }
  render() {
    if (this.state.show) {
      return (
        <>
          <LoginWrapper>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              backdrop="static"
              keyboard={false}
              centered={true}
            >
              <Modal.Header>
                <Modal.Title>
                  <div style={{ fontSize: 16 }}>
                    <img
                      style={{ height: 30, width: 20, marginRight: 10 }}
                      src={"logo.png"}
                    />
                    Sign In with Pustaka
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    style={{ height: 50, width: 50, margin: 20 }}
                    src={"PUSTAKA.png"}
                  />
                  <p>
                    <strong>Pustaka Intake</strong> will receive:<br></br>your
                    public profile, email address and username.
                  </p>
                </div>
              </Modal.Body>

              <Button variant="secondary" onClick={this.handleClose}>
                Continue as {localStorage.getItem("username")}
              </Button>
              <div style={{ textAlign: "center", marginTop: 60 }}>
                <a href="http://localhost:3001/">Cancel</a>
              </div>
              <div style={{ textAlign: "center", margin: 20, fontSize: 12 }}>
                <FontAwesomeIcon icon={faLock} size="xs" />{" "}
                <a>This does not let app to post on Pustaka</a>
              </div>
              <div style={{ textAlign: "center", margin: 15, fontSize: 12 }}>
                <a>Privacy Policy</a>
              </div>
            </Modal>
          </LoginWrapper>
        </>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: "#e9ebee",
            opacity: 10,

            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
          }}
        >
          <NavbarPage></NavbarPage>
          <div style={{ height: 80 }}></div>
          <LoginWrapper>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="4"></MDBCol>
                <MDBCol md="4">
                  <MDBCard className="z-depth-5">
                    <MDBCardBody>
                      <form>
                        <p className="h4 text-center py-4 ">
                          Log In to Pustaka
                        </p>

                        <input
                          type="text"
                          id="defaultFormCardNameEx"
                          className="form-control"
                          placeholder="username"
                          value={this.state.username}
                          onChange={(event) =>
                            this.setState({ username: event.target.value })
                          }
                        />
                        <br />

                        <input
                          id="defaultFormCardEmailEx"
                          className="form-control"
                          placeholder="password"
                          type="password"
                          value={this.state.password}
                          onChange={(event) =>
                            this.setState({ password: event.target.value })
                          }
                        />
                        <div className="text-center py-4 mt-3">
                          <MDBBtn
                            type="button"
                            className="btn-block z-depth-2 "
                            onClick={this.handleSubmit}
                          >
                            Log in
                          </MDBBtn>
                        </div>
                        <div>
                          <span style={{ fontSize: 14 }}>
                            Forgotten account?
                          </span>
                        </div>
                        <div>
                          <MDBRow>
                            <MDBCol md="5">
                              <hr style={{ border: "1px solid " }}></hr>
                            </MDBCol>
                            <MDBCol md="2" style={{ fontSize: 14 }}>
                              or
                            </MDBCol>
                            <MDBCol md="5">
                              <hr style={{ border: "1px solid " }}></hr>
                            </MDBCol>
                          </MDBRow>
                        </div>
                        <div>
                          <a href="/register">
                            <MDBBtn type="button" className=" z-depth-2 login">
                              Create New Account
                            </MDBBtn>
                          </a>
                        </div>
                        <div>
                          <span style={{ fontSize: 14 }}>Not now</span>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="4"></MDBCol>
              </MDBRow>
            </MDBContainer>
          </LoginWrapper>
          <ToastContainer />
        </div>
      );
    }
  }
}

export default withRouter(FormPage);
