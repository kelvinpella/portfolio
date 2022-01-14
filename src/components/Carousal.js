import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Carousal = (props) => {
  return (
    <Carousel variant="dark" interval={null} className="w-full">
      <Carousel.Item className="w-full">
        <img className="w-full" src={props.images[0]} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img className="w-full" src={props.images[1]} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img className="w-full" src={props.images[2]} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousal;
