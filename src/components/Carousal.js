import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Interact2 from "../assets/interact2.jpg";
const Carousal = () => {
  return (
    <Carousel variant="dark" className="w-full">
      <Carousel.Item className="w-full">
        <img className="w-full" src={Interact2} alt="First slide" />
      </Carousel.Item>
      {/* <Carousel.Item className="w-full">
        <img className="w-full" src={Boys} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item className="w-full">
        <img className="w-full" src={Girls} alt="Third slide" />
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Carousal;
