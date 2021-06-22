import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Swal from "sweetalert2";
import { Rating } from "@material-ui/lab";
import { MDBRating } from "mdbreact";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faTv, faStar } from "@fortawesome/free-solid-svg-icons";

import { HeadWrapper } from "./Style";
import { Redirect } from "react-router-dom";
import auth from "../Auth/Auth";
import axios from "axios";
import { lighten } from "@material-ui/core";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isOpen: false,
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
    ratingValue: 3,
    review: "",
  };

  toggleCollapse = () => {
    console.log("state value", this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  };
  signOut = () => {
    auth.logout();
    localStorage.clear();
    window.location.href = "/";
  };

  state = {
    modal14: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  rate = (e) => {
    this.setState({
      modal14: false,
    });
    const data = {
      rating: this.state.ratingValue,
      review: this.state.review,
    };
    Swal.fire({
      title: "Thank you for rating us!😜",
      width: 600,
      padding: "3em",
      background: "#fff url(/trees.png)",
      backdrop: `
        rgba(0,34,69,0.4)
        url("nyan-cat.gif")
        left top
        no-repeat
      `,
      timer: 1500,
    });
    // console.log(localStorage.getItem("token"));
    // console.log(this.state.config);
    // console.log(this.state.ratingValue);
    // console.log(this.state.review);
    if (this.state.ratingValue != undefined && this.state.review != undefined) {
      axios
        .post("http://localhost:90/customer/insert", data, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    this.setState({
      review: "",
    });
  };

  // handlePickerValue = () => {};
  // handleOnSubmnit = (e) => {
  //   console.log(e);
  // };
  changeHandler = (e) => {
    this.setState({
      review: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log(e);

    if (e.target.class === "nav-link Ripple-parent active") {
      e.target.className = "";
      console.log("remove");
    } else {
      e.target.className = "nav-link Ripple-parent active";
      console.log("add class");
    }
  };
  render() {
    return (
      <div>
        <HeadWrapper>
          {" "}
          <MDBNavbar color="default-color" dark expand="md">
            <Container>
              <MDBNavbarBrand>
                <strong className="white-text">
                  {" "}
                  <a href="/">
                    <img
                      style={{ height: 60, width: 50 }}
                      src={"logo.png"}
                      className="z-depth-4"
                    />
                  </a>
                </strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav left className="leftNav">
                  <MDBNavItem onClick={this.handleClick.bind(this)}>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem onClick={this.handleClick.bind(this)}>
                    <MDBNavLink to="/bestseller">BestSeller</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={this.handleClick.bind(this)}>
                    <MDBNavLink to="/newarrival">NewArrival</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem onClick={this.handleClick.bind(this)}>
                    <MDBNavLink to="/review">Rating</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>

                {(() => {
                  if (localStorage.getItem("username")) {
                    return (
                      <MDBNavbarNav right className="rightNav">
                        <MDBNavItem></MDBNavItem>

                        <MDBNavItem>
                          <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                              <MDBIcon icon="user" /> hi{" "}
                              {localStorage.getItem("username")}
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                              <MDBDropdownItem href="/dashboard">
                                <FontAwesomeIcon icon={faTv} /> Dashboard
                              </MDBDropdownItem>
                              <MDBDropdownItem onClick={this.toggle(14)}>
                                <FontAwesomeIcon icon={faStar} /> Rate Us
                              </MDBDropdownItem>
                              <MDBDropdownItem onClick={this.signOut}>
                                <FontAwesomeIcon icon={faSignInAlt} /> Sign Out
                              </MDBDropdownItem>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                        </MDBNavItem>
                        <MDBContainer>
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
                                <h4>
                                  Tell others what you think about this app
                                </h4>
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
                              <MDBBtn
                                color="secondary"
                                onClick={this.toggle(14)}
                              >
                                Close
                              </MDBBtn>
                              <MDBBtn color="primary" onClick={this.rate}>
                                Save changes
                              </MDBBtn>
                            </MDBModalFooter>
                          </MDBModal>
                        </MDBContainer>
                      </MDBNavbarNav>
                    );
                  } else {
                    return (
                      <MDBNavbarNav right className="rightNav">
                        <MDBNavItem>
                          <MDBNavLink
                            className="waves-effect waves-light"
                            to="/login"
                          >
                            <FontAwesomeIcon icon={faSignInAlt} />
                          </MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                          <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                              <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                              <MDBDropdownItem href="/login">
                                Sign In
                              </MDBDropdownItem>
                            </MDBDropdownMenu>
                          </MDBDropdown>
                        </MDBNavItem>
                      </MDBNavbarNav>
                    );
                  }
                })()}
              </MDBCollapse>
            </Container>
          </MDBNavbar>
        </HeadWrapper>
      </div>
    );
  }
}
export default Header;
