import React, { useContext } from "react";
import "animate.css";
import { GeneralContext } from "../Context/GeneralProvider";

const SideHeader = () => {
  const { handleSideBar, sideBar } = useContext(GeneralContext);
  return (
    <>
      <section className= {` ${ !sideBar && ' -top-10 select-none duration-200 animate__animated animate__slideOutUp'} max-lg:inline-block lg:hidden select-none animate__animated animate__slideInDown fixed top-14 left-0 rounded-md bg-stone-600 py-2 duration-200 mx-1  `}>
        <div className=" ">
          <ul className=" flex flex-col gap-1 justify-center">
            <li className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              Profile
            </li>
            <li className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              About Me
            </li>
            <li className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              Resume
            </li>
            <li className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              Projects
            </li>
            <li className=" text-black  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1">
              Contrast
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideHeader;
