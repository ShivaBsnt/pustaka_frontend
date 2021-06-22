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
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { HeadWrapper } from "./Style";
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <HeadWrapper>
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarBrand className="">
          <a href="/home">
              <img
                style={{ height: 60, width: 50, marginLeft:50 }}
                src={"logo.png"}
                className="z-depth-4"
              />
            </a>
            <strong className="white-text " style={{marginLeft:15}}>Pustaka</strong>
            
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          
         
          </MDBCollapse>
        </MDBNavbar>
      </HeadWrapper>
    );
  }
}

export default NavbarPage;
