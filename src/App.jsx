import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import React, { useContext } from "react";
import Resume from "./Components/Resume";
import GeneralProvider, { GeneralContext } from "./Context/GeneralProvider";
import Portfolio from "./Components/Portfolio";
import SideHeader from "./Components/SideHeader";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";

function App() {

  return (
    <>
      <ScrollToTop />
      <GeneralProvider>
        <section className="selection:bg-[#df4f3e] shadow-2xl shadow-zinc-950 selection:text-black rounded-2xl bg-zinc-800 mx-auto max-sm:my-0 xl:mt-12 max-xl:w-screen max-xl:h-screen xl:w-[1200px] xl:h-[600px] duration-500 scroll-smooth overflow-auto scrollbar-hide relative">
          <Header />
          <Profile />
          <AboutMe />
          <Resume />
          <Portfolio />
          <Contact />
          <SideHeader />
        </section>
      </GeneralProvider>
    </>
  );
}

export default App;
