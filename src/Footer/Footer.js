import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import { FooterWrapper } from "./Style";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Footer = () => {
  return (
    <FooterWrapper>
      <MDBFooter color="blue" className=" font-small pt-4 mt-4 ">
        <MDBContainer fluid className="text-center text-md-left">
          <div style={{ height: 40 }}></div>
          <MDBRow>
            <MDBCol md="2"></MDBCol>
            <MDBCol md="3" id="footer-left">
              <h5 className="title text-start ">ABOUT PUSTAKA NEPAL</h5>
              <p className="text-start">
                PUSTAKA is a website that eases up the task of finding the right
                place to sell your used textbooks. Simply enter your book’s ISBN
                into the search box, and you can see one of the best buyback
                quotes on the market—free shipping included. Also, there is a
                great opportunity to sell, rent or buy textbooks you need at
                affordable prices.
              </p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Quick Links</h5>
              <li className="list-unstyled">
                <Link
                  activeClass="active"
                  to="HOME"
                  spy={true}
                  smooth="easeInOutQuint"
                  offset={5}
                  duration={100}
                >
                  <a href="/">Home</a>
                </Link>
              </li>

              <li className="list-unstyled">
                <Link
                  activeClass="active"
                  to="ABOUT"
                  spy={true}
                  smooth="easeInOutQuint"
                  offset={5}
                  duration={100}
                >
                  <a href="/">About</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link
                  activeClass="active"
                  to="BESTSELLER"
                  spy={true}
                  smooth="easeInOutQuint"
                  offset={5}
                  duration={100}
                >
                  <a href="/">BestSeller</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link
                  activeClass="active"
                  to="NEWARRIVAL"
                  spy={true}
                  smooth="easeInOutQuint"
                  offset={5}
                  duration={100}
                >
                  <a href="/">NewArrival</a>
                </Link>
              </li>
              <li className="list-unstyled">
                <Link
                  activeClass="active"
                  to="RATE"
                  spy={true}
                  smooth="easeInOutQuint"
                  offset={5}
                  duration={100}
                >
                  <a href="/">Rating</a>
                </Link>
              </li>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Others</h5>

              <li className="list-unstyled">
                <a href="/review">Review</a>
              </li>
              <li className="list-unstyled">
                <a href="/bestseller">BestSellerFullPage</a>
              </li>
              <li className="list-unstyled">
                <a href="/newarrival">NewArrivalFullPage</a>
              </li>
            </MDBCol>
          </MDBRow>
          <div style={{ height: 40 }}></div>
        </MDBContainer>
        <hr></hr>
        <div className=" text-center py-3" style={{ color: "white" }}>
          <MDBContainer fluid>
            <span style={{ fontSize: "24px" }} className="connect">Connect With Us: </span>
            <MDBIcon fab icon="instagram" size="2x" />{" "}
            <MDBIcon fab icon="facebook-square" size="2x" />{" "}
            <MDBIcon fab icon="twitter" size="2x" />{" "}
            <MDBIcon fab icon="youtube" size="2x" />{" "}
            <MDBIcon fab icon="pinterest" size="2x" />{" "}
            <MDBIcon fab icon="discord" size="2x" />{" "}
          </MDBContainer>
        </div>
        <hr></hr>
        <div>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="2"></MDBCol>
              <MDBCol md="3">
                <h5 className="title text-start">Pustakanepal</h5>
                <p className="text-start">Deliver Something New!</p>
              </MDBCol>
              <MDBCol md="3"></MDBCol>
              <MDBCol md="3">
                <h6 className="title text-start">PHYSICAL STORE:</h6>

                <p className="text-start">
                  Nepal PUSTAKA Book Shop, Lakeside Pokhara
                  contact@pustakanepal.com mandalabookshop@gmail.com
                  +977-061-457203, +977-061-453789 PO Box Number : 81
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            {/* &copy; {new Date().getFullYear()} Copyright:{" "} All rights reserved */}
            Developed with ❤️ by
            <a href="https://www.shivabahadurbasnet.com.np/">
              {" "}
              shivabahadurbasnet.com.np
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </FooterWrapper>
  );
};

export default Footer;
