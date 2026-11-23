"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import SideHeader from "./SideHeader";

// The rounded "browser window" that every page renders inside.
const Shell = ({ children }) => {
  const pathname = usePathname();
  const windowRef = useRef(null);

  // Mobile side menu state, shared by <Header /> (toggle) and <SideHeader /> (menu).
  const [sideBar, setSideBar] = useState(false);

  // Close the mobile menu whenever the route changes (incl. browser back/forward).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setSideBar(false);
  }

  useEffect(() => {
    // Jump the scroll area back to the top on route change.
    windowRef.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <section
      ref={windowRef}
      className="selection:bg-[#df4f3e] shadow-2xl shadow-zinc-950 selection:text-black lg:rounded-2xl bg-zinc-800 mx-auto max-sm:my-0 xl:mt-12 max-xl:w-screen max-xl:h-screen xl:w-[1200px] xl:h-[600px] duration-500 scroll-smooth overflow-auto scrollbar-hide relative"
    >
      <Header
        sideBar={sideBar}
        onToggleSideBar={() => setSideBar((open) => !open)}
      />
      <SideHeader sideBar={sideBar} onCloseSideBar={() => setSideBar(false)} />

      <div className=" max-sm:px-2 max-sm:pb-8 sm:p-8 sm:pb-14 lg:p-6 xl:p-14">
        {children}
      </div>
    </section>
  );
};

export default Shell;
