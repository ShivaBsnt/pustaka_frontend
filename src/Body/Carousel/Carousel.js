import React, { Component } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBView,
} from "mdbreact";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

class CarouselBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:90/book")
      .then((response) => this.setState({ books: response.data.data }))
      .catch((err) => console.log("error", err));
  }
  render() {
    console.log(this.state.books);

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 6, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div style={{ background: "rgb(224, 239, 255)" }}>
        <div style={{ height: 40 }}></div>

        <Container style={{ background: "rgb(224, 239, 255)" }}>
          <h3>MOST POPULAR BUYBACKS</h3>
          <div style={{ height: 40 }}></div>
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS.jpg"
                style={{ height: 200 }}
                waves
              />
            </div>

            <div>
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROr-DHcL--DAX7uzXJAZe0MboooKTh5zzx0-m4meuh-VfSrygJ"
                style={{ height: 200 }}
                waves
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwqB1Sb77zrTbN_FwwBA5It7Br_iRoTIih0WcFMnM6UYgRDk9q"
                style={{ height: 200 }}
                waves
              />
            </div>

            <div>
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQw6jVhmrLY_IH9xtGesndiVULlWWSAdZ_vXEFQS35AbWfk1iM5"
                style={{ height: 200 }}
                waves
              />
            </div>

            <div>
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOj0OLCFTtDdp5Nbz2pJ9Se4mU5g0vA1jV_mNR7k9av50gsm3e"
                style={{ height: 200 }}
                waves
              />
            </div>

            <div>
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQslHcYnGUtcdSy4GkNO2O-9RtXXK3hGzEr5e4yi-XJfHs2AvPE"
                style={{ height: 200 }}
                waves
              />
            </div>

            <div>
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQuQ-AT9haYsqO3q3TSxDqHzoWyI0_j0IDavcUAqJ4s4-9OuFtm"
                style={{ height: 200 }}
                waves
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xT1c9EPLbr5RDnGy_I25JxlkQ43Nc7CzzT3IgOi4QA8I4Mcd"
                style={{ height: 200 }}
                waves
              />
            </div>

            <div>
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQw6jVhmrLY_IH9xtGesndiVULlWWSAdZ_vXEFQS35AbWfk1iM5"
                style={{ height: 200 }}
                waves
              />
            </div>

            <div>
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3EaDYkK-A-mKa3Z5eZqHtFalNfXhZxJvcd1u1Jdqb2hpmZ_Bz"
                style={{ height: 200 }}
                waves
              />
            </div>
          </Carousel>
          <div style={{ height: 70 }}></div>
          {/* <hr></hr> */}
        </Container>
      </div>
    );
  }
}
export default CarouselBook;
