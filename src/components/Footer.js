import React from "react";
import Twitter from "../assets/twitter.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
const Footer = () => {
  return (
    <div className="w-full pt-8  px-8 bg-blueish text-white  ">
      <p className="mx-auto text-center md:max-w-md  md:text-lg">
        Connect with me
      </p>
      <div className="max-w-80 mx-auto pb-6 flex justify-evenly items-center md:max-w-md  ">
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
      <footer className=" w-full p-2.5  text-center  text-xs md:text-sm">
        <p className=" md:mb-7">
          &copy; {new Date().getFullYear()} Kelvin Pella
        </p>
      </footer>
    </div>
  );
};

export default Footer;
