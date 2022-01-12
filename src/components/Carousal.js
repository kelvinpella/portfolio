import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Interact from "../assets/interact.png";
import Boys from "../assets/boys.jpg";
import Girls from "../assets/girls.jpg";
const Carousal = () => {
  return (
    <Carousel className="w-full">
      <Carousel.Item className="w-full">
        <img className="w-full" src={Interact} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img className="w-full" src={Boys} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img className="w-full" src={Girls} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousal;
