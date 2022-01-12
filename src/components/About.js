import React from "react";
import Kelvin from "../assets/kelvin.jpg";
const About = () => {
  return (
    <div id="about" className="w-full text-center pt-8  px-8 bg-white">
      <h1 className="text-reddish text-2xl font-bold my-6">About Me</h1>
      <div className="max-w-80 mx-auto mb-6">
        <img className="w-full" src={Kelvin} alt="kelvin" />
      </div>
      <p className="text-blackish text-base mb-6">
        I am a Front-End developer from Tanzania. I work hard, I care about
        writing clean code and I genuinely love to learn.
      </p>
      <button className="bg-blueish text-sm rounded py-4 px-6 mb-6">
        Download CV
      </button>
    </div>
  );
};

export default About;
