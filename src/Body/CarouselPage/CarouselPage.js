import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <div style={{ height: 70 }}></div>
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={false}
        showIndicators={false}
        className="z-depth-5"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 "
                src={process.env.PUBLIC_URL + "/carousel1.jpg"}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/carousel3.png"}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <div style={{ height: 70 }}></div>
    </MDBContainer>
  );
};

export default CarouselPage;
