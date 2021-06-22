import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { MDBContainer, MDBInputGroup, MDBBtn } from "mdbreact";
import { SubscribeWrapper } from "./Style";

class Subscribe extends Component {
  render() {
    return (
      <SubscribeWrapper>
        <div style={{ backgroundColor: "#82c0ff" }}>
          <div style={{ backgroundColor: "#82c0fe", height: 50 }}></div>
          <Container>
            <Row>
              {" "}
              <Col>
                <span style={{ color: "white", fontSize: "1.25em" }}>
                  Subscribe to coupons, promos and BooksRun deals and save up to
                  90% on textbooks!
                </span>
              </Col>
              <Col>
                <MDBContainer>
                  <MDBInputGroup
                    hint="Enter your email"
                    containerClassName="mb-3"
                    append={
                      <MDBBtn outline className="m-0 px-3 py-2 z-depth-0">
                        Subscribe
                      </MDBBtn>
                    }
                  />
                </MDBContainer>
              </Col>
            </Row>
          </Container>
          <div style={{ backgroundColor: "#82c0fe", height: 50 }}></div>
        </div>
      </SubscribeWrapper>
    );
  }
}
export default Subscribe;
