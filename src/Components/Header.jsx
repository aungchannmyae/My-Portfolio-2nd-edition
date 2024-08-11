import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralProvider";
import "animate.css";
const Header = () => {
  const navBarItems = ["Profile", "About Me", "Resume", "Projects", "Contract"];
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
    <header className=" select-none animate__animated animate__slideInDown lg:w-full z-50 sticky max-lg:bg-black max-lg:bg-opacity-50 top-0 right-0">
      <section className=" max-lg:flex lg:hidden justify-end items-center px-3 py-2">
        <svg
          onClick={handleSideBar}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={` ${
            sideBar ? " rotate-[900deg] duration-700" : " rotate-0 duration-700"
          } size-10 rounded-lg text-[#df4f3e] hover:bg-zinc-800`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </section>
      <div className=" bg-stone-600 flex">
        <ul className="max-lg:hidden xl:px-3 xl:pt-3 lg:px-3 lg:pt-3 xl:text-base lg:text-lg flex gap-1 items-center text-stone-400 ">
          <li
            onClick={handleProfile}
            className={` ${
              !profile
                ? " bg-transparent text-stone-400 hover:bg-zinc-700 hover:bg-opacity-50 duration-300"
                : " duration-200 after:inline-block after:w-8 after:h-1 after:rounded after:absolute after:top-9 after:bg-[#df4f3e] bg-zinc-800"
            } cursor-pointer  xl:w-[150px] xl:px-3 xl:py-2 lg:w-[120px] lg:px-3 lg:py-2 relative flex justify-center rounded-t-lg`}
          >
            Profile
          </li>
          <li
            onClick={handleAboutMe}
            className={` ${
              !aboutMe
                ? " bg-transparent text-stone-400 hover:bg-zinc-700 hover:bg-opacity-50 duration-300"
                : " duration-200 after:inline-block after:w-8 after:h-1 after:rounded after:absolute after:top-12 after:bg-[#df4f3e] bg-zinc-800"
            } cursor-pointer xl:w-[150px] xl:px-3 xl:py-2 lg:w-[120px] lg:px-3 lg:py-2 flex justify-center rounded-t-lg`}
          >
            About Me
          </li>
          <li
            onClick={handleResume}
            className={` ${
              !resume
                ? " bg-transparent text-stone-400 hover:bg-zinc-700 hover:bg-opacity-50 duration-300"
                : " duration-200 after:inline-block after:w-8 after:h-1 after:rounded after:absolute after:top-12 after:bg-[#df4f3e] bg-zinc-800"
            } cursor-pointer xl:w-[150px] xl:px-3 xl:py-2 lg:w-[120px] lg:px-3 lg:py-2 flex justify-center rounded-t-lg`}
          >
            Resume
          </li>
          <li
            onClick={handlePortfolio}
            className={` ${
              !portfolio
                ? " bg-transparent text-stone-400 hover:bg-zinc-700 hover:bg-opacity-50 duration-300"
                : " duration-200 after:inline-block after:w-8 after:h-1 after:rounded after:absolute after:top-12 after:bg-[#df4f3e] bg-zinc-800"
            } cursor-pointer xl:w-[150px] xl:px-3 xl:py-2 lg:w-[120px] lg:px-3 lg:py-2 flex justify-center rounded-t-lg`}
          >
            Projects
          </li>
          <li
            onClick={handleContrast}
            className={` ${
              !contrast
                ? " bg-transparent text-stone-400 hover:bg-zinc-700 hover:bg-opacity-50 duration-300"
                : " duration-200 after:inline-block after:w-8 after:h-1 after:rounded after:absolute after:top-12 after:bg-[#df4f3e] bg-zinc-800"
            } cursor-pointer xl:w-[150px] p xl:px-3 xl:py-2 lg:w-[120px] lg:px-3 lg:py-2 flex justify-center rounded-t-lg`}
          >
            Contrast
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

//Old NavBar//

{/* <ul className=" shadow-2xl shadow-zinc-950 flex items-center w-fit ml-auto text-white bg-neutral-700 rounded-lg">
          <li onClick={handleProfile} className=" mx-3 my-1 px-2 py-1 h-8 relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#df4f3e] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#df4f3e] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            Profile
          </li>
          <li onClick={handleAboutMe} className=" mx-3 my-1 px-2 py-1 h-8 relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#df4f3e] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#df4f3e] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            About Me
          </li>
          <li onClick={handleResume} className=" mx-3 my-1 px-2 py-1 h-8 relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#df4f3e] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#df4f3e] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            Resume
          </li>
          <li onClick={handlePortfolio} className=" mx-3 my-1 px-2 py-1 h-8 relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#df4f3e] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#df4f3e] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            Projects
          </li>
          <li onClick={handleContrast} className=" mx-3 my-1 px-2 py-1 h-8 relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#df4f3e] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#df4f3e] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            Contrast
          </li>
        </ul> */}