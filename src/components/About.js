import React from "react";
import Kelvin from "../assets/kelvin.jpg";
const About = () => {
  return (
    <div
      id="about"
      className="w-full text-center pt-16  px-8 md:px-0 bg-white  "
    >
      <h1 className="text-reddish text-2xl font-bold my-6 md:text-4xl">
        About Me
      </h1>
      <div className="max-w-80 mx-auto mb-6 md:max-w-xs">
        <img className="w-full" src={Kelvin} alt="kelvin" />
      </div>
      <p className="w-full text-blackish text-base mb-6 md:text-lg md:max-w-lg md:mx-auto text-justify">
        I am a former Electrical Engineer who transitioned into Web Development.
        While I prefer frontend React development, I am familiar with Node.js
        and Python too. Please view 'Projects' section to see some of my work.
      </p>
      <button className="bg-blueish text-sm rounded py-4 px-6 mb-6 hover:bg-blue-800">
        <a
          href="https://drive.google.com/file/d/1LUtpHwKeactvAsYW1XozYtlEppscnVfJ/view?usp=sharing"
          className="text-white no-underline"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </button>
    </div>
  );
};

export default About;
