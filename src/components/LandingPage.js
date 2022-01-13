import React from "react";
import { BsArrowRight } from "react-icons/bs";
const LandingPage = () => {
  return (
    <div id="home" className="w-full h-screen flex justify-center items-center  px-8 bg-blueish text-white md:bg-background md:bg-transparent bg-cover ">
      <div className="text-center ">
        <h1 className="font-bold text-3xl uppercase mb-2 ">Kelvin Pella</h1>
        <h2 className=" ">Front-End Developer</h2>
        <a href='#about' className="mt-4 py-2 px-4 border block hover:bg-blue-800 text-white no-underline">
          <span className="inline-block align-middle mr-2">View my work </span>
          <span className="inline-block align-middle">
            <BsArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
