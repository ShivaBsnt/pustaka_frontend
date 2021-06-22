import React, { Component } from "react";
import { Col, Button, Container, Row } from "react-bootstrap";
import { ABOUT } from "./Style";
import {MDBView, MDBMask} from "mdbreact"
class About extends Component {
  render() {
    return (
      <ABOUT>
        <Container className="ABOUT">
          <Row>
            <div style={{ height: 60 }}></div>
            <Col md={4}>
            
              <img
                  src={process.env.PUBLIC_URL + "/biblophile.svg"}
                  style={{ height: 200 }}
                className="img-fluid"
                alt=""
             / > 
         
            </Col>
            <Col md={8}>
              <div style={{ margin: 20 }}>
                <h2>Pustaka Nepal</h2>
                One Stop for buying, selling, or exchanging books 📚 Find a
                match with other bookish friends! Send us your book pictures to
                be featured! Now you can save even more! We offer free shipping
                not only for buybacks but also for purchase and rental orders
                onwards! Need your purchase/rental urgent? Choose expedited
                shipping and receive your books within 2-5 business days!
              </div>
            </Col>
            <div style={{ height: 60 }}></div>
          </Row>
        </Container>

        <Container fluid>
          {" "}
          <Row style={{ backgroundColor: "#E0EFFF", padding: 20 }}>
            <div style={{ height: 60 }}></div>
            <Col md={8}>
              <div style={{ margin: 40 }}>
                <h2> BUY AND RENT eBOOKS INSTANTLY</h2>
                Save up to 60% on eBooks! More than 430 000 titles available and
                added constantly. Instant access from a computer, tablet or
                smartphone! Access your books online anytime, anywhere. Stop
                carrying your heavy loaded backpack! Start saving money and the
                planet.
              </div>
            </Col>
            <Col md={4}>
              
              <img
                src={process.env.PUBLIC_URL + "/ebook.svg"}
                style={{ height: 200 }}
              />
            </Col>
            <div style={{ height: 60 }}></div>
          </Row>
          <Row >
            <div style={{ height: 40 }}></div>
            <h2>HOW PUSTAKA WORKS</h2>
            <div style={{ height: 40 }}></div>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/comic1.svg"}
                style={{ height: 200 }}
              />
              <div style={{ height: 20 }}></div>
              <h5>1. PRICE YOUR BOOK</h5>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/comic2.svg"}
                style={{ height: 200 }}
              />
              <div style={{ height: 20 }}></div>
              <h5>2. SHIP YOUR BOOK</h5>
            </Col>
            <Col>
              <img
                src={process.env.PUBLIC_URL + "/comic3.svg"}
                style={{ height: 200 }}
              />
              <div style={{ height: 20 }}></div>
              <h5>3. GET PAID</h5>
            </Col>
            <div style={{ height: 70 }}></div>
          </Row>
        </Container>
      </ABOUT>
    );
  }
}
export default About;
