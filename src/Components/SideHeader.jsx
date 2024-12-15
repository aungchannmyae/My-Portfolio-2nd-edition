import React, { useContext } from "react";
import "animate.css";
import useGeneralStore from "../store/useGeneralStore";
import SideHeaderNavBar from "./SideHeaderNavBar";

const SideHeader = () => {
  const { navBar, sideBar } = useGeneralStore();
  return (
    <>
      <section
        className={` ${
          !sideBar && " -translate-y-80 duration-700 "
        } max-lg:inline-block lg:hidden select-none fixed top-16 right-1 max-sm:w-40 max-lg:w-60 rounded-md bg-stone-600 py-1 duration-700 mx-1  `}
      >
        <div className=" ">
          <ul className=" flex flex-col gap-1 justify-center text-xl">
            {navBar.map((nav) => (
              <SideHeaderNavBar key={nav.id} nav={nav} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideHeader;
