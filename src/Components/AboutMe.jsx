import React, { useContext, useEffect } from "react";
import Container from "./Container";
import "animate.css";
import useGeneralStore from "../store/useGeneralStore";
import ScrollReveal from "scrollreveal";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import ProgressLine from "./ProgressLine";
import { LuArrowUpRight } from "react-icons/lu";
import { Marquee } from "@devnomic/marquee";
import StackIcon from "tech-stack-icons";

const AboutMe = () => {
  const { navBar } = useGeneralStore();

  return (
    <>
      <section className="">
        <div className=" mb-6 ">
          <motion.h1
            initial={{ opacity: 0, translateX: 18 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8 }}
            className="  max-lg:text-3xl max-lg:mb-3 max-lg:pb-3 select-none inline-block pb-5 mb-5 xl:text-3xl lg:text-3xl text-white font-bold "
          >
            About Me
          </motion.h1>

          {/* <TypeAnimation
              sequence={[
                1500,
                `Started learning web development since 2022. Now I am exploring my
            first time experiences as a Junior Web Developer Position. I
            consider myself a responsible and orderly person. Always looking
            forward the best opportunities in this Software Development
            Community.`
                
              ]}
              wrapper="span"
              speed={80}
              cursor={true}
              repeat={0}
              className=" block duration-200 indent-4 hyphens-auto text-pretty max-lg:mb-6 max-lg:text-xl xl:text-lg lg:text-xl text-stone-400 font-mono mb-10"
              // style={{ fontSize: "2em", display: "inline-block" }}
            /> */}
          <div className=" ">
            <div className=" mx-5 max-w-[200px] float-end p-10 bg-[#df4f3e] rounded-lg">
              <p className=" text-wrap text-base italic">
                Bringing visual designs to life in a way that is interactive,
                efficient, and user-friendly.
              </p>
            </div>
            <p className=" block duration-200 indent-4 hyphens-auto text-balance max-lg:mb-6 max-lg:text-xl xl:text-lg lg:text-xl text-stone-400 font-mono mb-10">
              {" "}
              I began my web development journey in 2022, and since then, I've
              been deeply invested in learning and improving my skills.
              Currently, I am exploring my first professional role as a Junior
              Web Developer, which has been both exciting and challenging. I
              strive to maintain a high level of responsibility and organization
              in everything I do, ensuring that tasks are completed efficiently
              and to the best of my ability. I am always eager to learn new
              technologies and methodologies that can enhance my development
              practices. Collaboration is something I truly value, as I believe
              teamwork often leads to the best solutions. Being part of the
              software development community has exposed me to a wealth of
              knowledge and opportunities for growth. My goal is to continue
              improving and to contribute meaningfully to the projects I work
              on. I am excited for the journey ahead and look forward to the
              opportunities that will help me evolve both professionally and
              personally.
            </p>
          </div>
        </div>

        <div className=" ">
          <motion.h1
            initial={{ opacity: 0, translateX: 18 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8 }}
            className="  inline-block pb-5 mb-5 max-lg:pb-3 max-lg:mb-3 max-lg:text-3xl xl:text-3xl lg:text-3xl text-white font-bold "
          >
            Resume
          </motion.h1>
          <div className="  flex flex-col gap-6">
            <div className="" id=" skills">
              <motion.h1
                initial={{ opacity: 0, translateX: 18 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8 }}
                className=" pl-3 text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 -translate-x-[13px] text-stone-400 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                  />
                </svg>
                Skills
              </motion.h1>
              <section>
                <div className=" w-full px-14 overflow-hidden">
                  <div className=" my-4 flex flex-col gap-8 ">
                    <div className=" ">
                      <Marquee fade={true} className=" duration-100">
                        <span className="  text-lg text-stone-300 bg-stone-700 px-2 py-1 rounded-md ">
                          Responsive Web Design{" "}
                        </span>
                        <span className="  text-lg text-stone-300 bg-stone-700 px-2 py-1 rounded-md ">
                          React.js{" "}
                        </span>
                        <span className="  text-lg text-stone-300 bg-stone-700 px-2 py-1 rounded-md ">
                          Next.js{" "}
                        </span>
                        <span className="  text-lg text-stone-300 bg-stone-700 px-2 py-1 rounded-md ">
                          Tailwind Css{" "}
                        </span>
                        <span className="  text-lg text-stone-300 bg-stone-700 px-2 py-1 rounded-md ">
                          Rest Api{" "}
                        </span>
                        <span className="  text-lg text-stone-300 bg-stone-700 px-2 py-1 rounded-md ">
                          Necessary Tools{" "}
                        </span>
                      </Marquee>
                    </div>
                    <motion.h1
                      initial={{ opacity: 0, translateX: 18 }}
                      whileInView={{ opacity: 1, translateX: 0 }}
                      transition={{ duration: 0.8 }}
                      className=" text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2"
                    >
                      Tech Stack
                    </motion.h1>
                    <div className=" ">
                      <Marquee
                        fade={true}
                        reverse={true}
                        className=" gap-20 duration-100"
                        innerClassName=" gap-20"
                      >
                        <StackIcon className=" w-10 h-10" name="js" />
                        <StackIcon className=" w-10 h-10" name="reactjs" />
                        <StackIcon
                          className=" w-10 h-10 bg-white"
                          name="nextjs"
                        />
                        <StackIcon className=" w-10 h-10" name="vitejs" />
                        <StackIcon className=" w-10 h-10" name="tailwindcss" />
                        <StackIcon className=" w-10 h-10" name="figma" />
                        <StackIcon className=" w-10 h-10" name="netlify2" />
                        <StackIcon className=" w-10 h-10" name="git" />
                        <StackIcon
                          className=" w-10 h-10 bg-white"
                          name="github"
                        />
                        <StackIcon className=" w-10 h-10" name="postman" />
                        <StackIcon className=" w-10 h-10" name="vscode" />
                      </Marquee>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className=" pl-3" id=" experience">
              <motion.h1
                initial={{ opacity: 0, translateX: 18 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8 }}
                className=" text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 -translate-x-[13px] text-stone-400 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                Work Experience
              </motion.h1>
              <section>
                <motion.p
                  initial={{ opacity: 0, translateX: 18 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.8 }}
                  className=" max-lg:text-lg xl:text-base lg:text-lg lg:mx-[41px] text-stone-400 font-mono"
                >
                  Software Developer who is seeking the work Experiences in the
                  position as a junior Front End Developer. 
                </motion.p>
              </section>
            </div>
            <div className=" pl-3" id=" education">
              <motion.h1
                initial={{ opacity: 0, translateX: 18 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8 }}
                className="  text-white font-bold max-lg:mb-3 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 -translate-x-[13px] text-stone-400 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                Education
              </motion.h1>
              <section>
                <div>
                  <ul className=" ">
                    <li className="  border-l-2 border-[#df4f3e] mb-4 relative">
                      <div className=" flex justify-between items-center">
                        <motion.h1
                          initial={{ opacity: 0, translateX: 18 }}
                          whileInView={{ opacity: 1, translateX: 0 }}
                          transition={{ duration: 0.8 }}
                          className=" ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                        >
                          B.E.H.S (2) Insein
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, translateX: 18 }}
                          whileInView={{ opacity: 1, translateX: 0 }}
                          transition={{ duration: 0.8 }}
                          className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono"
                        >
                          ( 2019 )
                        </motion.p>
                      </div>
                      <motion.p
                        initial={{ opacity: 0, translateX: 18 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono"
                      >
                        Undergraduate
                      </motion.p>
                    </li>
                    <li className="  border-l-2 border-[#df4f3e] mb-4 relative">
                      <div className=" flex justify-between items-center">
                        <motion.h1
                          initial={{ opacity: 0, translateX: 18 }}
                          whileInView={{ opacity: 1, translateX: 0 }}
                          transition={{ duration: 0.8 }}
                          className=" ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                        >
                          West Yangon<br className="sm:hidden"></br>Technology
                          University
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, translateX: 18 }}
                          whileInView={{ opacity: 1, translateX: 0 }}
                          transition={{ duration: 0.8 }}
                          className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono"
                        >
                          ( 2019 )
                        </motion.p>
                      </div>
                      <motion.p
                        initial={{ opacity: 0, translateX: 18 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono"
                      >
                        First Year Mechatronics Specialization
                      </motion.p>
                    </li>
                    <li className="  border-l-2 border-[#df4f3e] mb-4 relative">
                      <div className=" flex justify-between items-center">
                        <motion.h1
                          initial={{ opacity: 0, translateX: 18 }}
                          whileInView={{ opacity: 1, translateX: 0 }}
                          transition={{ duration: 0.8 }}
                          className=" ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                        >
                          West Yangon University
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, translateX: 18 }}
                          whileInView={{ opacity: 1, translateX: 0 }}
                          transition={{ duration: 0.8 }}
                          className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono"
                        >
                          ( 2024 - <span>{new Date().getFullYear()}</span> )
                        </motion.p>
                      </div>

                      <motion.p
                        initial={{ opacity: 0, translateX: 18 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono"
                      >
                        First Year E-Major (Distance) Specialization
                      </motion.p>
                    </li>
                    <li className="  border-l-2 border-[#df4f3e] mb-4 relative ">
                      <motion.h1
                        initial={{ opacity: 0, translateX: 18 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                      >
                        Started Learning Web Development<br className=""></br>
                        In MMS-IT<br className=" sm:hidden"></br> Since 2022
                      </motion.h1>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            {/* <div className=" pl-3" id=" language">
              <motion.h1
                initial={{ opacity: 0, translateX: 18 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8 }}
                className=" text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 -translate-x-[13px] text-stone-400 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
                Language
              </motion.h1>
              <section>
                <div>
                  <ul className=" ">
                    <li className="  border-l-2 border-[#df4f3e] mb-4 relative">
                      <motion.h1
                        initial={{ opacity: 0, translateX: 18 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                      >
                        Native Burmese.
                      </motion.h1>
                    </li>
                    <li className="  border-l-2 border-[#df4f3e] mb-4 relative">
                      <motion.h1
                        initial={{ opacity: 0, translateX: 18 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                      >
                        Intermediate English.
                      </motion.h1>
                    </li>
                    <li className="  border-l-2 border-[#df4f3e] mb-4 relative">
                      <motion.h1
                        initial={{ opacity: 0, translateX: 18 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: 0.8 }}
                        className=" ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                      >
                        Japanese (N4-level)
                      </motion.h1>
                    </li>
                  </ul>
                </div>
              </section>
            </div> */}

            {/* <div id=" certificates">
              <motion.h1
                initial={{ opacity: 0, translateX: 18 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8 }}
                className=" pl-3 text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 -translate-x-[13px] text-stone-400 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
                Certificates
              </motion.h1>

              <section>
                <div className=" w-fit py-2 duration-200 grid max-sm:grid-cols-1 max-lg:gap-6 xl:grid-cols-3 md:grid-cols-2 xl:gap-6 lg:gap-10">
                  <div className=" group ">
                    <motion.div
                      initial={{ opacity: 0, translateY: 16 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.5 }}
                      className=" py-1 px-2 flex flex-row justify-between items-center shadow-2xl rounded-lg shadow-zinc-950"
                    >
                      <div className=" h-[60px] w-[100px] ">
                        <img
                          className=" w-full h-full select-none opacity-80 group-hover:opacity-100 duration-500 rounded-md object-cover object-center"
                          src="/photo1.png"
                          alt=""
                        />
                      </div>
                      <div className=" flex flex-col gap-2 p-2">
                        <p className=" text-lg text-stone-400">
                          {" "}
                          <span className=" text-stone-400 text-lg text-wrap">
                            Responsive Web Design at{" "}
                          </span>
                        </p>

                        <p className=" inline-flex gap-5 text-lg text-stone-400">
                          {" "}
                          <a
                            target="_blank"
                            href="https://freecodecamp.org"
                            className=" text-sm hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                          >
                            Freecodecamp.org{" "}
                            <LuArrowUpRight className="w-4 h-4" />
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className=" group ">
                    <motion.div
                      initial={{ opacity: 0, translateY: 16 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.5 }}
                      className=" py-1 px-2 flex flex-row justify-between items-center shadow-2xl rounded-lg shadow-zinc-950"
                    >
                      <div className=" h-[60px] w-[100px] ">
                        <img
                          className=" w-full h-full select-none opacity-80 group-hover:opacity-100 duration-500 rounded-md object-cover object-center"
                          src="/photo2.png"
                          alt=""
                        />
                      </div>
                      <div className=" flex flex-col gap-2 p-2">
                        <p className=" text-lg text-stone-400">
                          {" "}
                          <span className=" text-stone-400 text-lg text-wrap">
                            CS50T Understanding Technology at{" "}
                          </span>
                        </p>

                        <p className=" inline-flex gap-5 text-lg text-stone-400">
                          {" "}
                          <a
                            target="_blank"
                            href="https://burma.ac"
                            className=" text-sm hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                          >
                            Burma Academy <LuArrowUpRight className="w-4 h-4" />
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className=" group ">
                    <motion.div
                      initial={{ opacity: 0, translateY: 16 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.5 }}
                      className=" py-1 px-2 flex flex-row justify-between items-center shadow-2xl rounded-lg shadow-zinc-950"
                    >
                      <div className=" h-[60px] w-[100px] ">
                        <img
                          className=" w-full h-full select-none opacity-80 group-hover:opacity-100 duration-500 rounded-md object-cover object-center"
                          src="/Swd.jpg"
                          alt=""
                        />
                      </div>
                      <div className=" flex flex-col gap-2 p-2">
                        <p className=" text-lg text-stone-400">
                          {" "}
                          <span className=" text-stone-400 text-lg text-wrap">
                            Frontend Development Course at{" "}
                          </span>
                        </p>

                        <p className=" inline-flex gap-5 text-lg text-stone-400">
                          {" "}
                          <a
                            target="_blank"
                            href="https://mms-it.com"
                            className=" text-sm hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                          >
                            MMS-It <LuArrowUpRight className="w-4 h-4" />
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
