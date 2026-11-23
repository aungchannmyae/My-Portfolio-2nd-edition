"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import navigation, { isRouteActive } from "./navigation";

const Header = ({ sideBar, onToggleSideBar }) => {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1 }}
      className=" select-none md:w-full z-50 sticky max-lg:bg-opacity-50 top-0 right-0"
    >
      <section className=" max-md:flex md:hidden justify-end items-center px-3 py-2">
        <button
          onClick={onToggleSideBar}
          aria-label={sideBar ? "Close menu" : "Open menu"}
          aria-expanded={sideBar}
          className="group max-lg:h-16 max-lg:w-16 max-sm:h-10 max-sm:w-10 rounded-md hover:bg-zinc-800 hover:bg-opacity-80 cursor-pointer p-2 duration-300"
        >
          <div className="grid justify-center items-center gap-1.5">
            <span
              className={`h-1 w-8 rounded-full bg-[#df4f3e] duration-300 ${sideBar && "transition rotate-45 translate-y-2.5"} `}
            ></span>
            <span
              className={`h-1 w-8 rounded-full bg-[#df4f3e] duration-300 ${sideBar && "scale-x-0 transition"} `}
            ></span>
            <span
              className={`h-1 w-8 rounded-full bg-[#df4f3e] duration-300 ${sideBar && "-rotate-45 -translate-y-2.5"} `}
            ></span>
          </div>
        </button>
      </section>
      <nav className="hidden bg-stone-600 md:flex">
        <ul className=" md:px-3 md:pt-3 lg:px-3 lg:pt-3 md:text-base lg:text-lg flex gap-2 items-end text-stone-400 ">
          {navigation.map(({ id, name, route, icon: Icon }) => {
            const isActive = isRouteActive(pathname, route);
            return (
              <li key={id}>
                <Link
                  href={route}
                  aria-current={isActive ? "page" : undefined}
                  className={`group/tab relative flex items-center gap-2 select-none rounded-t-lg duration-0 md:w-[150px] md:px-3 md:py-2 lg:w-[150px] lg:px-3 lg:py-2 ${
                    isActive
                      ? // active tab merges into the content area, with bottom corners that
                        // flare outward into the toolbar (browser-tab style)
                        "bg-zinc-800 text-white before:content-[''] before:absolute before:bottom-0 before:-left-2 before:size-2 before:bg-[radial-gradient(circle_at_top_left,transparent_8px,#27272a_8px)] after:content-[''] after:absolute after:bottom-0 after:-right-2 after:size-2 after:bg-[radial-gradient(circle_at_top_right,transparent_8px,#27272a_8px)]"
                      : "text-stone-400 hover:bg-zinc-700/50 hover:text-stone-200"
                  }`}
                >
                  <Icon
                    className={`size-4 shrink-0 duration-300 ${
                      isActive
                        ? "text-[#df4f3e]"
                        : "text-stone-500 group-hover/tab:text-stone-300"
                    }`}
                  />
                  <span className="flex-1 truncate">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
