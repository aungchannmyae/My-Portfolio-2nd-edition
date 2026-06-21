import React from "react";
import { NavLink } from "react-router-dom";

const SideHeaderNavBar = ({
  nav: { name, route, icon: Icon },
  onCloseSideBar,
}) => {
  return (
    <NavLink
      to={`${route}`}
      onClick={onCloseSideBar}
      className={({ isActive }) =>
        `group/item relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-xl duration-200 ${
          isActive
            ? "bg-zinc-800 text-white"
            : "text-stone-400 hover:bg-white/5 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* active left accent bar */}
          <span
            className={`absolute left-0 top-1/2 w-1 -translate-y-1/2 rounded-r-full bg-[#df4f3e] duration-300 ${
              isActive ? "h-6 opacity-100" : "h-0 opacity-0"
            }`}
          />
          {Icon && (
            <Icon
              className={`size-5 shrink-0 duration-200 ${
                isActive
                  ? "text-[#df4f3e]"
                  : "text-stone-500 group-hover/item:text-stone-300"
              }`}
            />
          )}
          <span className="flex-1 truncate">{name}</span>
        </>
      )}
    </NavLink>
  );
};

export default SideHeaderNavBar;
