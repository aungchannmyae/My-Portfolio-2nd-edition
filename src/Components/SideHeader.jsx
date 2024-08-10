import React, { useContext } from "react";
import "animate.css";
import { GeneralContext } from "../Context/GeneralProvider";

const SideHeader = () => {
  const {
    handleAboutMe,
    handleResume,
    handlePortfolio,
    handleContrast,
    handleProfile,
    handleSideBar,
    aboutMe,
    resume,
    portfolio,
    contrast,
    profile,
    sideBar,
  } = useContext(GeneralContext);

  return (
    <>
      <section
        className={` ${
          !sideBar &&
          " top-1 duration-600 animate__animated animate__slideOutUp"
        } max-lg:inline-block lg:hidden select-none animate__animated animate__slideInDown fixed top-16 right-1 max-sm:w-32 max-lg:w-40 rounded-md bg-stone-600 py-1 duration-200 mx-1  `}
      >
        <div className=" ">
          <ul className=" flex flex-col gap-1 justify-center">
            <li onClick={handleProfile} className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              Profile
            </li>
            <li onClick={handleAboutMe} className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              About Me
            </li>
            <li onClick={handleResume} className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              Resume
            </li>
            <li onClick={handlePortfolio} className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              Projects
            </li>
            <li onClick={handleContrast} className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              Contrast
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideHeader;
