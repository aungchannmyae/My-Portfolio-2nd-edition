import React from "react";
import "animate.css";
import navBar from "../constants/navBar";
import SideHeaderNavBar from "./SideHeaderNavBar";

const SideHeader = ({ sideBar, onCloseSideBar }) => {
  return (
    <>
      <section
        className={`${
          sideBar
            ? "translate-y-0 opacity-100"
            : "-translate-y-96 opacity-0 pointer-events-none"
        } z-40 max-lg:inline-block lg:hidden select-none fixed top-16 right-2 max-sm:w-56 max-lg:w-72 rounded-2xl border border-white/10 bg-zinc-900/95 shadow-2xl shadow-black/60 backdrop-blur-md p-2 duration-500 mx-1`}
      >
        <ul className=" flex flex-col gap-1 justify-center text-xl">
          {navBar.map((nav) => (
            <SideHeaderNavBar
              key={nav.id}
              nav={nav}
              onCloseSideBar={onCloseSideBar}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default SideHeader;
