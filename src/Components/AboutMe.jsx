import React, { useContext } from "react";
import Container from "./Container";
import GeneralProvider, { GeneralContext } from "../Context/GeneralProvider";
import "animate.css";

const AboutMe = () => {
  const { aboutMe, HandleAboutMe } = useContext(GeneralContext);
  return (
    <section className={` ${ !aboutMe && 'hidden animate__animated animate__fadeOut' } mb-10 animate__animated animate__fadeIn`}>
      <Container>
        <div>
          <h1 className=" inline-block pb-5 mb-5 border-b-4 border-[#df4f3e] text-2xl text-white font-bold ">
            About Me
          </h1>
          <p className=" text-stone-400 font-mono mb-10">
            Started learning web development since 2022. Now I am exploring my
            first time experiences as a Junior Web Developer Position. I
            consider myself a responsible and orderly person. Always looking
            forward the best opportunities in this Software Development
            Community.
          </p>
          <h1 className=" inline-block text-white font-bold text-xl mb-10">
            What I'm Doing.
          </h1>
          <section className=" grid grid-cols-2 gap-5">
            <div className=" shadow-2xl shadow-zinc-950 p-5 inline-block rounded-lg">
              <h1 className=" text-xl text-white mb-3">Frontend Developer</h1>
              <p className=" text-stone-400 font-mono line-clamp-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, dolor.
              </p>
            </div>
            <div className=" shadow-2xl shadow-zinc-950 p-5 inline-block rounded-lg">
              <h1 className=" text-xl text-white mb-3">Frontend Developer</h1>
              <p className=" text-stone-400 font-mono line-clamp-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, dolor.
              </p>
            </div>
            <div className=" shadow-2xl shadow-zinc-950 p-5 inline-block rounded-lg">
              <h1 className=" text-xl text-white mb-3">Frontend Developer</h1>
              <p className=" text-stone-400 font-mono line-clamp-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti, dolor.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
