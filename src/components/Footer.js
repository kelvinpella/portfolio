import React from "react";
import Twitter from "../assets/twitter.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
const Footer = () => {
  return (
    <div className="w-full pt-8  px-8 bg-blueish text-white  ">
      <p className="mx-auto text-center">Connect with me</p>
      <div className="max-w-80 mx-auto pb-6 flex justify-evenly items-center  ">
        <a className="">
          <img src={Twitter} alt="twitter" />
        </a>
        <a className="">
          <img src={Github} alt="twitter" />
        </a>
        <a className="">
          <img src={LinkedIn} alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
