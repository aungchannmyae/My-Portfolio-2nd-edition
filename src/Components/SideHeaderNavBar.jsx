import React from "react";
import useGeneralStore from "../store/useGeneralStore";

const SideHeaderNavBar = ({nav: {id, name, isActive}}) => {
    const {activeNavBar, activeSideBar} = useGeneralStore()
    const handleSideNavBar = () => {
        activeNavBar(id);
        activeSideBar();
    }
  return (
    <li
      onClick={handleSideNavBar}
      className={`${
        isActive
          ? "bg-zinc-800 text-white flex justify-start pl-0 duration-200"
          : " pl-9"
      } text-stone-400  hover:text-white duration-100 hover:bg-zinc-800 px-5 py-1`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="#df4f3e"
        viewBox="0 0 256 256"
        className={` ${!isActive && " hidden "}`}
      >
        <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
      </svg>
      {name}
    </li>
  );
};

export default SideHeaderNavBar;
