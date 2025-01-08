import React from "react";
import GeneralProvider from "../Context/GeneralProvider";
import Header from "./Header";
import SideHeader from "./SideHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <GeneralProvider>
      <section className="selection:bg-[#df4f3e] shadow-2xl shadow-zinc-950 selection:text-black rounded-2xl bg-zinc-800 mx-auto max-sm:my-0 xl:mt-12 max-xl:w-screen max-xl:h-screen xl:w-[1200px] xl:h-[600px] duration-500 scroll-smooth overflow-auto scrollbar-hide relative">
        <Header />
        <SideHeader />
        <Outlet />
        {/* <Profile />
        <AboutMe />
        <Resume />
        <Portfolio />
        <Contact /> */}
      </section>
    </GeneralProvider>
  );
};

export default Layout;
