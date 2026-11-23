"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navigation, { isRouteActive } from "./navigation";

// Mobile drop-down menu.
const SideHeader = ({ sideBar, onCloseSideBar }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`${
        sideBar
          ? "translate-y-0 opacity-100"
          : "-translate-y-96 opacity-0 pointer-events-none"
      } z-40 max-lg:inline-block lg:hidden select-none fixed top-16 right-2 max-sm:w-56 max-lg:w-72 rounded-2xl border border-white/10 bg-zinc-900/95 shadow-2xl shadow-black/60 backdrop-blur-md p-2 duration-500 mx-1`}
    >
      <ul className=" flex flex-col gap-1 justify-center text-xl">
        {navigation.map(({ id, name, route, icon: Icon }) => {
          const isActive = isRouteActive(pathname, route);
          return (
            <li key={id}>
              <Link
                href={route}
                onClick={onCloseSideBar}
                tabIndex={sideBar ? 0 : -1}
                aria-current={isActive ? "page" : undefined}
                className={`group/item relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-xl duration-200 ${
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "text-stone-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {/* active left accent bar */}
                <span
                  className={`absolute left-0 top-1/2 w-1 -translate-y-1/2 rounded-r-full bg-[#df4f3e] duration-300 ${
                    isActive ? "h-6 opacity-100" : "h-0 opacity-0"
                  }`}
                />
                <Icon
                  className={`size-5 shrink-0 duration-200 ${
                    isActive
                      ? "text-[#df4f3e]"
                      : "text-stone-500 group-hover/item:text-stone-300"
                  }`}
                />
                <span className="flex-1 truncate">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideHeader;
