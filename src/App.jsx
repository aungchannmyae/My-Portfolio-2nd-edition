import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import React, { useContext } from "react";
import Resume from "./Components/Resume";
import Contrast from "./Components/Contrast";
import GeneralProvider, { GeneralContext } from "./Context/GeneralProvider";
import Portfolio from "./Components/Portfolio";
import SideHeader from "./Components/SideHeader";

function App() {

  return (
    <GeneralProvider>
      <section className="selection:bg-[#df4f3e] selection:text-black rounded-2xl bg-zinc-800 mx-auto max-sm:my-0 xl:my-10 lg:my-24 max-lg:w-screen max-lg:h-screen lg:w-[800px] lg:h-[1000px] xl:w-[1200px] xl:h-[600px] duration-500 scroll-smooth overflow-auto scrollbar-hide relative">
        <Header />
        <Profile />
        <AboutMe />
        <Resume />
        <Portfolio />
        <Contrast />
        <SideHeader />
      </section>
    </GeneralProvider>
  );
}

export default App;
