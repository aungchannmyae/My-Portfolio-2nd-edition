import React from "react";
import Header from "./Header";
import Container from "./Container";
import AboutMe from "./AboutMe";

const Body = () => {
  return (
    <div className=" ">
      <div className=" relative">
        <Header />
        <Container>
          <section>
            <div>
              <h1 className=" inline-block pb-5 border-b-4 border-[#df4f3e] text-2xl text-white font-bold ">
                Resume
              </h1>
              
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Body;
