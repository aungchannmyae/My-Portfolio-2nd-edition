import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import React from "react";
import Resume from "./Components/Resume";
import Contrast from "./Components/Contrast";
import GeneralProvider from "./Context/GeneralProvider";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <GeneralProvider>
      <section className="  ">
        <div className="">
          <div className=" relative">
            <Header />
            <Profile/>
            <AboutMe />
            <Resume />
            <Portfolio/>
            <Contrast />
          </div>
        </div>
      </section>
    </GeneralProvider>
  );
}

export default App;
