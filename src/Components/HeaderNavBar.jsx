import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavBar = ({ nav: { id, name, route } }) => {
  return (
    <NavLink
      to={`${route}`}
      className={({ isActive }) =>
        isActive
          ? "duration-500 after:duration-500 after:inline-block after:w-8 after:h-1 after:rounded after:absolute after:top-9 after:bg-[#df4f3e] bg-zinc-800 cursor-pointer md:w-[150px] md:px-3 md:py-2 lg:w-[120px] lg:px-3 lg:py-2 relative flex justify-center rounded-t-lg"
          : "bg-transparent text-stone-400 hover:bg-zinc-700 hover:bg-opacity-50 duration-300 cursor-pointer md:w-[150px] md:px-3 md:py-2 lg:w-[120px] lg:px-3 lg:py-2 relative flex justify-center rounded-t-lg"
      }
    >
      {name}
    </NavLink>
  );
};

export default HeaderNavBar;
