import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
class OrderBook extends Component {
  render() {
    return (
      <MDBContainer>
        <div style={{ height: 70 }}></div>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
            <img
              src={process.env.PUBLIC_URL + "/carousel2.png"}
              className="img-fluid z-depth-5"
              alt=""
            />
          </MDBCol>
        </MDBRow>
        <div style={{ height: 40 }}></div>
      </MDBContainer>
    );
  }
}

export default OrderBook;
