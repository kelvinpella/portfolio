import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full  pt-8  px-8 mb-6">
      <h1 className="text-reddish text-2xl font-bold my-6">Skills</h1>
      <p className="text-blackish text-base mb-6">
        I enjoy creating things, whether that be websites, applications, or
        anything in between.
      </p>
      <ol className="list-decimal text-blueish text-xl list-inside ">
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>Javascript</li>
        <li>NodeJs</li>
        <li>Python</li>
        <li>Solidity</li>
      </ol>
    </div>
  );
};

export default Skills;
