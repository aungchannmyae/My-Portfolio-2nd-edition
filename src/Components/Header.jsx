import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralProvider";

const Header = () => {
  const navBarItems = ["Profile", "About Me", "Resume", "Projects", "Contract"];
  const {
    handleAboutMe,
    handleResume,
    handlePortfolio,
    handleContrast,
    handleProfile,
  } = useContext(GeneralContext);
  return (
    <header className=" z-50 sticky top-0 right-0">
      <div className="">
        <ul className=" shadow-2xl shadow-zinc-950 flex items-center w-fit ml-auto text-white bg-neutral-700 rounded-lg">
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
            Portfolio
          </li>
          <li onClick={handleContrast} className=" mx-3 my-1 px-2 py-1 h-8 relative text-white cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#df4f3e] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#df4f3e] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            Contrast
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
