import React, { useEffect } from "react";
import useGeneralStore from "../store/useGeneralStore";
import { NavLink, useLocation } from "react-router-dom";

const SideHeaderNavBar = ({ nav: { id, name, isRouteActive, route } }) => {
  const { activeNavBar, activeSideBar } = useGeneralStore();
  const handleSideNavBar = () => {
    activeNavBar(id);
    activeSideBar();
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === route) {
      activeNavBar(id);
    }
  }, [location.pathname, route, id, activeNavBar]);

  return (
    <NavLink
      to={`${route}`}
      onClick={handleSideNavBar}
      className={({ isActive }) =>
        isActive
          ? "bg-zinc-800 text-white text-2xl flex justify-start pl-0 duration-200 hover:bg-zinc-800 px-5 py-3"
          : "pl-7 text-stone-400 text-2xl hover:text-white duration-100 hover:bg-zinc-800 px-5 py-3"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="#df4f3e"
        viewBox="0 0 256 256"
        className={`${!isRouteActive && "hidden"}`}
      >
        <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
      </svg>
      {name}
    </NavLink>
  );
};

export default SideHeaderNavBar;
