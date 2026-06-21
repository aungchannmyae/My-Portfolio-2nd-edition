import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavBar = ({ nav: { name, route, icon: Icon } }) => {
  return (
    <NavLink
      to={`${route}`}
      className={({ isActive }) =>
        `group/tab relative flex items-center gap-2 select-none rounded-t-lg duration-0 md:w-[150px] md:px-3 md:py-2 lg:w-[150px] lg:px-3 lg:py-2 ${
          isActive
            ? // active tab merges into the content area, with bottom corners that
              // flare outward into the toolbar (browser-tab style)
              "bg-zinc-800 text-white before:content-[''] before:absolute before:bottom-0 before:-left-2 before:size-2 before:bg-[radial-gradient(circle_at_top_left,transparent_8px,#27272a_8px)] after:content-[''] after:absolute after:bottom-0 after:-right-2 after:size-2 after:bg-[radial-gradient(circle_at_top_right,transparent_8px,#27272a_8px)]"
            : "text-stone-400 hover:bg-zinc-700/50 hover:text-stone-200"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* favicon */}
          {Icon && (
            <Icon
              className={`size-4 shrink-0 duration-300 ${
                isActive
                  ? "text-[#df4f3e]"
                  : "text-stone-500 group-hover/tab:text-stone-300"
              }`}
            />
          )}

          <span className="flex-1 truncate">{name}</span>
        </>
      )}
    </NavLink>
  );
};

export default HeaderNavBar;
