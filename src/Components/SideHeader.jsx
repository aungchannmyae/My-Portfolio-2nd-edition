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
          " -top-16 duration-200 animate__animated animate__slideOutUp"
        } max-lg:inline-block lg:hidden select-none animate__animated animate__slideInDown fixed top-16 right-1 max-sm:w-40 max-lg:w-60 rounded-md bg-stone-600 py-1 duration-200 mx-1  `}
      >
        <div className=" ">
          <ul className=" flex flex-col gap-1 justify-center text-xl">
            <li
              onClick={handleProfile}
              className={`${
                profile ? "bg-zinc-800 text-white flex justify-start pl-0 duration-200" : " pl-9"
              } text-stone-400  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#df4f3e"
                viewBox="0 0 256 256"
                className={` ${ !profile && ' hidden ' }`}
              >
                <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
              </svg>
              Profile
            </li>
            <li
              onClick={handleAboutMe}
              className={`${
                aboutMe ? "bg-zinc-800 text-white flex justify-start pl-0 duration-200" : " pl-9"
              } text-stone-400  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#df4f3e"
                viewBox="0 0 256 256"
                className={` ${ !aboutMe && ' hidden'} `}
              >
                <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
              </svg>
              About Me
            </li>
            <li
              onClick={handleResume}
              className={`${
                resume ? "bg-zinc-800 text-white flex justify-start pl-0 duration-200" : " pl-9"
              } text-stone-400  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#df4f3e"
                viewBox="0 0 256 256"
                className={` ${ !resume && ' hidden'}`}
              >
                <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
              </svg>
              Resume
            </li>
            <li
              onClick={handlePortfolio}
              className={`${
                portfolio ? "bg-zinc-800 text-white flex justify-start pl-0 duration-200" : " pl-9"
              } text-stone-400  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#df4f3e"
                viewBox="0 0 256 256"
                className={` ${ !portfolio && ' hidden'}`}
              >
                <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
              </svg>
              Projects
            </li>
            <li
              onClick={handleContrast}
              className={`${
                contrast ? "bg-zinc-800 text-white flex justify-start pl-0 duration-200" : " pl-9"
              } text-stone-400  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#df4f3e"
                viewBox="0 0 256 256"
                className={` ${ !contrast && ' hidden'}`}
              >
                <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
              </svg>
              Contrast
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideHeader;
