import React from "react";
import Carousal from "./Carousal";

const ProjectList = () => {
  return (
    <div id="projects" className="w-full  py-4 px-4  bg-white  text-blackish  ">
      <h1 className="text-reddish  text-2xl font-bold my-6 text-center">
        Projects
      </h1>
      <div className="mb-4">
        <h1 className=" text-blueish font-bold text-base ">
          Interact For Instagram
        </h1>
        <p>
          Share your instagram username and chat with other instagram users.
        </p>
        <Carousal />
        <h2 className=" text-source text-base underline underline-offset-4 mt-4">View source</h2>
        <hr className="mt-4" />
      </div>
      <div className="mb-4">
        <h1 className=" text-blueish font-bold text-base ">
          Intermezzi Blockchain dApp
        </h1>
        <p>
          A blockchain application to identify fake products from retail online
          stores.
        </p>
        <Carousal />
        <h2 className=" text-source text-base underline underline-offset-4 mt-4">View source</h2>
        <hr className="mt-4" />
      </div>
      <div className="mb-4">
        <h1 className=" text-blueish font-bold text-base ">
          Intercept Automation Tool
        </h1>
        <p>
          This is an automation tool for Catia Composer, which simplifies
          interaction with excel files.
        </p>
        <Carousal />
        <h2 className=" text-source text-base underline underline-offset-4 mt-4">View source</h2>
        <hr className="mt-4" />
      </div>
      <p className="text-base text-black">
        See more of my projects on <a href="https://github.com/kelvinpellah" target="_blank" rel="noreferrer" className="text-blueish font-bold no-underline">Github</a>
      </p>
    </div>
  );
};

export default ProjectList;
