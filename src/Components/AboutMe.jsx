import React, { useContext } from "react";
import Container from "./Container";
import "animate.css";
import useGeneralStore from "../store/useGeneralStore";

const AboutMe = () => {
  const { navBar } = useGeneralStore();
  return (
    <section
      // className={` ${
      //   !navBar[1].page && "hidden animate__animated animate__fadeOut"
      // } mb-10 animate__animated animate__fadeIn`}
    >
      <Container>
        <div>
          <h1 className=" max-lg:text-3xl max-lg:mb-3 max-lg:pb-3 select-none inline-block pb-5 mb-5 border-b-4 border-[#df4f3e] xl:text-3xl lg:text-3xl text-white font-bold ">
            About Me
          </h1>
          <p className="duration-200 indent-4 hyphens-auto max-lg:mb-6 max-lg:text-xl xl:text-lg lg:text-xl text-stone-400 font-mono mb-10">
            {/* Started learning web development since 2022. Now I am exploring my
            first time experiences as a Junior Web Developer Position. I
            consider myself a responsible and orderly person. Always looking
            forward the best opportunities in this Software Development
            Community. */}
            I began my web development journey in 2022, and since then, I've
            been deeply invested in learning and improving my skills. Currently,
            I am exploring my first professional role as a Junior Web Developer,
            which has been both exciting and challenging. I strive to maintain a
            high level of responsibility and organization in everything I do,
            ensuring that tasks are completed efficiently and to the best of my
            ability. I am always eager to learn new technologies and
            methodologies that can enhance my development practices.
            Collaboration is something I truly value, as I believe teamwork
            often leads to the best solutions. Being part of the software
            development community has exposed me to a wealth of knowledge and
            opportunities for growth. My goal is to continue improving and to
            contribute meaningfully to the projects I work on. I am excited for
            the journey ahead and look forward to the opportunities that will
            help me evolve both professionally and personally.
          </p>
          <h1 className=" max-lg:text-2xl max-lg:mb-6 inline-block text-white font-bold xl:text-2xl lg:text-2xl mb-10">
            What I'm Doing.
          </h1>
          <section className=" duration-200 grid max-lg:grid-cols-1 max-lg:gap-4 lg:grid-cols-2 xl:gap-5 lg:gap-8">
            <div className=" shadow-2xl shadow-zinc-950 p-5 inline-block rounded-lg">
              <h1 className=" underline underline-offset-2 max-lg:text-xl xl:text-xl lg:text-xl text-white mb-3">
                Frontend Developer
              </h1>
              <p className=" indent-4 text-stone-400 text-lg font-mono line-clamp-3">
                Bringing visual designs to life in a way that is interactive,
                efficient, and user-friendly.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
