import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={styles.Container}>
      <div
        id="home"
        className="w-full h-full flex justify-center items-center  px-8 bg-inherit text-white bg-cover bg-origin-border "
      >
        <div className="text-center ">
          <h1 className="font-bold text-3xl uppercase mb-2 ">Kelvin Pella</h1>
          <h2 className=" ">Front-End Developer</h2>
          <a
            href="#about"
            className="mt-4 py-2 px-4 border block hover:bg-blue-800 text-white no-underline"
          >
            <span className="inline-block align-middle mr-2">
              View my work{" "}
            </span>
            <span className="inline-block align-middle">
              <BsArrowRight />
            </span>
          </a>
        </div>
      </div>
      <div className={`${styles.light} ${styles.x1}`}></div>
      <div className={`${styles.light} ${styles.x2}`}></div>
      <div className={`${styles.light} ${styles.x3}`}></div>
      <div className={`${styles.light} ${styles.x4}`}></div>
      <div className={`${styles.light} ${styles.x5}`}></div>
      <div className={`${styles.light} ${styles.x6}`}></div>
      <div className={`${styles.light} ${styles.x7}`}></div>
      <div className={`${styles.light} ${styles.x8}`}></div>
      <div className={`${styles.light} ${styles.x9}`}></div>
    </div>
  );
};

export default LandingPage;
