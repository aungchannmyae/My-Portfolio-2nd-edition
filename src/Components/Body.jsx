import React from "react";
import Header from "./Header";
import Container from "./Container";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Contrast from "./Contrast";


const Body = () => {

  return (
    <div className=" ">
      <div className=" relative">
        <Header />
        <AboutMe />
        <Resume/>
        <Contrast/>
      </div>
    </div>
  );
};

export default Body;
