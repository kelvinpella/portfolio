import React from "react";
import { BsArrowRight } from "react-icons/bs";
const LandingPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center  px-8 bg-blueish text-white  ">
      <div className="text-center ">
        <h1 className="font-bold text-3xl uppercase mb-2 ">Kelvin Pella</h1>
        <h2 className=" ">Front-End Developer</h2>
        <div className="mt-4 py-2 px-4 border ">
          <span className="inline-block align-middle mr-2">View my work </span>
          <span className="inline-block align-middle">
            <BsArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
