import React, { Component } from "react";

import { Col, Row } from "react-bootstrap";
import { Route } from "react-router";

import About from "./About/About";
import Search from "./Search/Search";
import CarouselBook from "./Carousel/Carousel";
import CarouselPage from "./CarouselPage/CarouselPage";
import Subscribe from "./Subscribe/Subscribe";
import { BODY } from "./Style";
import RatingPage from "./Rating/Rating";
import Contact from "./Contact/Contact";
import BestSeller from "./BestSeller/BestSeller";
import OrderBook from "./OrderBook/OrderBook";
import NewArrival from "./NewArrival/NewArrival";

class Body extends Component {
  render() {
    return (
      <BODY>
        <div>
          <Search></Search>
          <About></About>
          <Subscribe></Subscribe>
          <CarouselPage></CarouselPage>
          <BestSeller></BestSeller>
          <OrderBook></OrderBook>
          <NewArrival></NewArrival>
          <CarouselBook></CarouselBook>
          <RatingPage></RatingPage>
          {/* <Login></Login> */}
          {/* <Contact></Contact> */}
          {/* <Row>
          {" "}
          <Col>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Col>
          <Col>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Col>
          <Col>
            <Route path="/pricing">Pricing</Route>
          </Col>
        </Row> */}
        </div>
      </BODY>
    );
  }
}
export default Body;
