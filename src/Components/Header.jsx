import "animate.css";
import useGeneralStore from "../store/useGeneralStore";
import HeaderNavBar from "./HeaderNavBar";
import { motion } from "motion/react";
const Header = () => {
  const { navBar, activeSideBar, sideBar } = useGeneralStore();
  const handleSideBar = () => {
    activeSideBar();
  };

  return (
    <motion.header
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1 }}
      className=" select-none md:w-full z-50 sticky max-lg:bg-opacity-50 top-0 right-0"
    >
      <section className=" max-md:flex md:hidden justify-end items-center px-3 py-2">
        {/* <svg
          onClick={handleSideBar}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={` ${
            sideBar ? " rotate-[540deg] duration-700" : " rotate-0 duration-700"
          } size-10 p-1 rounded-lg text-[#df4f3e] hover:bg-zinc-800 cursor-pointer`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg> */}
        <button
          onClick={handleSideBar}
          className="group max-lg:h-16 max-lg:w-16 max-sm:h-10 max-sm:w-10 rounded-md hover:bg-zinc-800 hover:bg-opacity-80 cursor-pointer p-2 duration-300"
        >
          <div className="grid justify-center items-center gap-1.5">
            <span
              className={`h-1 w-8 rounded-full bg-[#df4f3e] duration-300 ${ sideBar && 'transition rotate-45 translate-y-2.5'} `}
            ></span>
            <span className={`h-1 w-8 rounded-full bg-[#df4f3e] duration-300 ${ sideBar && 'scale-x-0 transition'} `}></span>
            <span className={`h-1 w-8 rounded-full bg-[#df4f3e] duration-300 ${ sideBar && '-rotate-45 -translate-y-2.5'} `}></span>
          </div>
        </button>
      </section>
      <div className="hidden bg-stone-600 md:flex">
        <ul className=" md:px-3 md:pt-3 lg:px-3 lg:pt-3 md:text-base lg:text-lg flex gap-3 items-center text-stone-400 ">
          {navBar.map((nav) => (
            <HeaderNavBar key={nav.id} nav={nav} />
          ))}
        </ul>
      </div>
    </motion.header>
  );
};

export default Header;
