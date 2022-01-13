import React from "react";
import Carousal from "./Carousal";

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
        <h1 className=" text-blueish font-bold text-base md:text-2xl ">
          Interact For Instagram
        </h1>
        <p className="md:text-lg ">
          Share your instagram username and chat with other instagram users.
        </p>
        <Carousal />
        <h2 className=" text-source text-base underline underline-offset-4 mt-4 md:text-lg">
          View source
        </h2>
        <hr className="mt-4 " />
      </div>
      <div className="mb-4 md:max-w-3xl md:mx-auto">
        <h1 className=" text-blueish font-bold text-base md:text-2xl ">
          Intermezzi Blockchain dApp
        </h1>
        <p className="md:text-lg ">
          A blockchain application to identify fake products from retail online
          stores.
        </p>
        {/* <Carousal /> */}
        <h2 className=" text-source text-base underline underline-offset-4 mt-4 md:text-lg">
          View source
        </h2>
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
        {/* <Carousal /> */}
        <h2 className=" text-source text-base underline underline-offset-4 mt-4 md:text-lg">
          View source
        </h2>
        <hr className="mt-4 " />
      </div>
      <p className="text-base text-black md:max-w-3xl md:mx-auto md:text-xl">
        See more of my projects on{" "}
        <a
          href="https://github.com/kelvinpellah"
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
