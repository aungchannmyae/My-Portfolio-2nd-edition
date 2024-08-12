import React, { useContext } from "react";
import "animate.css";
import { GeneralContext } from "../Context/GeneralProvider";

const SideHeader = () => {
  const {
    handleAboutMe,
    handleResume,
    handlePortfolio,
    handleContact,
    handleProfile,
    handleSideBar,
    aboutMe,
    resume,
    portfolio,
    contact,
    profile,
    sideBar,
  } = useContext(GeneralContext);

  return (
    <>
      <section
        className={` ${
          !sideBar &&
          " -translate-y-80 duration-500 "
        } max-lg:inline-block lg:hidden select-none fixed top-16 right-1 max-sm:w-40 max-lg:w-60 rounded-md bg-stone-600 py-1 duration-500 mx-1  `}
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
              onClick={handleContact}
              className={`${
                contact ? "bg-zinc-800 text-white flex justify-start pl-0 duration-200" : " pl-9"
              } text-stone-400  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#df4f3e"
                viewBox="0 0 256 256"
                className={` ${ !contact && ' hidden'}`}
              >
                <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
              </svg>
              Contact
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideHeader;
