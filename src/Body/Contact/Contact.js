import { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

import { Row, Col, Container } from "react-bootstrap";
import { CONTACT } from "./Style";
class Contact extends Component {
  render() {
    return (
      <CONTACT>
        <Container
          fluid
          style={{
            backgroundColor: "red",
            background: `url('${process.env.PUBLIC_URL}/background1.jpg')`,
            backgroundPosition: "top center",

            // backgroundSize: "cover",
          }}
        >
          <div style={{ height: 40 }}></div>
          <MDBRow>
            <MDBCol></MDBCol>
            <MDBCol>
              {" "}
              <form>
                <h3>Write to us</h3>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Your name
                </label>
                <input
                  type="text"
                  id="defaultFormContactNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormContactEmailEx"
                  className="grey-text"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormContactEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormContactSubjectEx"
                  className="grey-text"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="defaultFormContactSubjectEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Your message
                </label>
                <textarea
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="3"
                />
                <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </Container>
      </CONTACT>
    );
  }
}
export default Contact;
