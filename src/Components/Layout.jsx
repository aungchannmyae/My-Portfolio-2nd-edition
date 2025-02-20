import React, { Suspense, useEffect } from "react";
import GeneralProvider from "../Context/GeneralProvider";
import Header from "./Header";
import SideHeader from "./SideHeader";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "./Loading";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const section = document.querySelector("section.scrollbar-hide");
    if (section) {
      section.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Changed from 'smooth' to 'instant' for immediate scroll
      });
    }
  }, [pathname]);

  return (
    <section className="selection:bg-[#df4f3e] shadow-2xl shadow-zinc-950 selection:text-black rounded-2xl bg-zinc-800 mx-auto max-sm:my-0 xl:mt-12 max-xl:w-screen max-xl:h-screen xl:w-[1200px] xl:h-[600px] duration-500 scroll-smooth overflow-auto scrollbar-hide relative">
      <Header />
      <SideHeader />

      <Suspense fallback={<Loading />}>
        <div className=" max-lg:px-2 max-lg:pb-8 lg:p-6 xl:p-14">
          <Outlet />
        </div>
      </Suspense>
    </section>
  );
};

export default Layout;
