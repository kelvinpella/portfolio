import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { ImCross } from "react-icons/im";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-blueish pt-2 px-2 z-50 ">
      <div className="mb-2 md:hidden ">
        {!menu && (
          <div onClick={toggleMenu}>
            <CgMenu className="w-8 h-8" />
          </div>
        )}
        {menu && (
          <div onClick={toggleMenu}>
            <ImCross className="w-6 h-6" />
          </div>
        )}
      </div>
      {(menu || document.body.clientWidth >= 768) && (
        <div
          onClick={toggleMenu}
          className=" w-full py-2  bg-sky-900  text-lg  md:bg-transparent "
        >
          <ul className="w-full md:mb-0 md:flex  items-center ">
            <li className="mb-2 p-2 md:mb-0 md:mr-4 hover:bg-blue-800">
              <a href="#home" className=" text-white  no-underline  ">
                Home
              </a>
            </li>
            <li className="mb-2 p-2 md:mb-0 md:mr-4 hover:bg-blue-800">
              <a
                href="#about"
                className=" text-white  no-underline hover:text-red-600"
              >
                About
              </a>
            </li>
            <li className="mb-2 p-2 md:mb-0 md:mr-4 hover:bg-blue-800">
              <a
                href="#skills"
                className=" text-white  no-underline hover:text-red-600"
              >
                Skills
              </a>
            </li>
            <li className="mb-2 p-2 md:mb-0 md:mr-4 hover:bg-blue-800">
              <a
                href="#projects"
                className=" text-white  no-underline hover:text-red-600"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
