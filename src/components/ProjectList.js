import React from "react";
import Carousal from "./Carousal";
import Prairi1 from "../assets/prairi1.jpg";
import Prairi2 from "../assets/prairi2.jpg";
import Prairi3 from "../assets/prairi3.jpg";
import Interact1 from "../assets/interact1.jpg";
import Interact2 from "../assets/interact2.jpg";
import Interact3 from "../assets/interact3.jpg";
import Intermezzi1 from "../assets/intermezzi1.jpg";
import Intermezzi2 from "../assets/intermezzi2.jpg";
import Intermezzi3 from "../assets/intermezzi3.jpg";
import Intercept1 from "../assets/intercept1.jpg";
import Intercept2 from "../assets/intercept2.jpg";
import Intercept3 from "../assets/intercept3.jpg";
const ProjectList = () => {
  return (
    <div
      id="projects"
      className="w-full pt-16  pb-4 px-4  bg-white  text-blackish  "
    >
      <h1 className="text-reddish  text-2xl font-bold mb-6 text-center md:text-4xl">
        Projects
      </h1>
      <div className="mb-4 md:max-w-3xl md:mx-auto">
        <a
          href="https://prairi-e67a4.web.app/"
          target="_blank"
          rel="noreferrer"
          className="no-underline mb-2 block text-blueish font-bold text-base md:text-2xl "
        >
          Prairi
        </a>
        <p className="md:text-lg ">
          Match with Startups and Investors.
        </p>
        <Carousal images={[Prairi1,Prairi2,Prairi3]} />
        <hr className="mt-4 " />
      </div>
      <div className="mb-4 md:max-w-3xl md:mx-auto">
        <a
          href="https://interact-for-instagram-86ecb.web.app/"
          target="_blank"
          rel="noreferrer"
          className="no-underline mb-2 block text-blueish font-bold text-base md:text-2xl "
        >
          Interact For Instagram
        </a>
        <p className="md:text-lg ">
          Share your instagram username and chat with other instagram users.
        </p>
        <Carousal images={[Interact1, Interact2, Interact3]} />
        <a
          href="https://github.com/kelvinpellah/interact"
          target="_blank"
          rel="noreferrer"
          className=" block text-source text-base underline underline-offset-4 mt-4 md:text-lg"
        >
          View source
        </a>
        <hr className="mt-4 " />
      </div>
      <div className="mb-4 md:max-w-3xl md:mx-auto">
        <a
          href="https://intermezzi-16dd9.web.app/"
          target="_blank"
          rel="noreferrer"
          className="no-underline mb-2 block text-blueish font-bold text-base md:text-2xl "
        >
          Intermezzi Blockchain dApp
        </a>
        <p className="md:text-lg ">
          A blockchain application to identify fake products from retail online
          stores.
        </p>
        <Carousal images={[Intermezzi1, Intermezzi2, Intermezzi3]} />
        <a
          href="https://github.com/kelvinpellah/intermezzi"
          target="_blank"
          rel="noreferrer"
          className=" block text-source text-base underline underline-offset-4 mt-4 md:text-lg"
        >
          View source
        </a>
        <hr className="mt-4 " />
      </div>
      <div className="mb-4 md:max-w-3xl md:mx-auto">
        <h1 className=" text-blueish font-bold text-base md:text-2xl ">
          Intercept Automation Tool
        </h1>
        <p className="md:text-lg ">
          This is an automation tool for Catia Composer, which simplifies
          interaction with excel files.
        </p>
        <Carousal images={[Intercept1, Intercept2, Intercept3]} />
        <a
          href="https://github.com/kelvinpellah/Intercept"
          target="_blank"
          rel="noreferrer"
          className=" block text-source text-base underline underline-offset-4 mt-4 md:text-lg"
        >
          View source
        </a>
        <hr className="mt-4 " />
      </div>
      <p className="text-base text-black md:max-w-3xl md:mx-auto md:text-xl">
        See more of my projects on{" "}
        <a
          href="https://github.com/kelvinpella"
          target="_blank"
          rel="noreferrer"
          className="text-blueish font-bold no-underline md:text-2xl"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default ProjectList;
