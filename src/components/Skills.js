import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full  pt-16 pb-4 px-8  text-center">
      <h1 className="text-reddish text-2xl font-bold my-6 md:text-4xl">
        Skills
      </h1>
      <p className="text-blackish text-base mb-6 md:text-lg md:max-w-lg md:mx-auto">
        I enjoy creating things, whether that be websites, applications, or
        anything in between.
      </p>
      <ol className="list-decimal mb-0 text-blueish text-xl list-inside text-left md:text-2xl md:max-w-md md:mx-auto ">
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>NodeJs</li>
        <li>Python</li>
      </ol>
    </div>
  );
};

export default Skills;
