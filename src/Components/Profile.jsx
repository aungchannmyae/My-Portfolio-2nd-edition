import React from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import { LuArrowUpRight, LuDownload, LuMail, LuMails } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import StackIcon from "tech-stack-icons";
import { GrLocation } from "react-icons/gr";
import { RxGithubLogo } from "react-icons/rx";

const Profile = () => {
  return (
    <>
      <ScrollToTop />
      <div className=" flex max-lg:flex-col lg:flex-row gap-8 ">
        {/* Side Section */}
        <div className=" z-30 lg:min-w-52 lg:max-w-52">
          <div className=" sticky lg:top-10 flex max-md:flex-col md:flex-row lg:flex-col gap-4">
            <motion.div
              initial={{ opacity: 0.1, translateX: -16 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className=" flex max-lg:justify-between max-lg: gap-3 items-center lg:flex-col bg-slate-200 rounded-lg p-3 shadow-2xl"
            >
              <img
                className=" rounded-md max-md:w-[140px] md:w-[200px] md:h-60 max-md:h-48 lg:w-full lg:h-52 object-cover object-center"
                src="./Aung Chan Myae.jpg"
                alt=""
              />
              <div className=" flex flex-col max-lg:gap-2 lg:gap-3">
                <h1 className=" text-2xl font-normal">
                  I'm <br className=" " /> Aung Chan Myae
                </h1>
                <p>Web Developer .</p>
                <hr className=" border-black border-dotted" />
                <p className=" text-sm italic">
                  Bringing visual designs to life in a way that is interactive,
                  efficient, and user-friendly.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0.1, translateX: -16 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className=" bg-slate-200 rounded-lg p-3 flex flex-col justify-center gap-2 shadow-2xl"
            >
              <p className=" inline-flex items-center gap-2">
                <GrLocation />
                Yangon , Myanmar
              </p>
              <a
                target="_blank"
                href="mailto:myae0517@gmail.com"
                className=" inline-flex items-center gap-2 "
              >
                <LuMails /> myae0517@gmail.com
              </a>
              <a
                target="_blank"
                href="https://github.com/aungchannmyae"
                className=" inline-flex items-center gap-2 "
              >
                <RxGithubLogo />
                aungchannmyae
              </a>
            </motion.div>
          </div>
        </div>

        {/* about section */}
        <div className=" overflow-hidden max-lg:w-full lg:w-fit flex flex-col gap-10">
          <div className=" flex flex-col">
            <h1 className=" text-5xl font-bold text-white mb-5">
              {" "}
              Hello I'm <br />{" "}
              <span className=" text-[#df4f3e]">Frontend Developer</span>{" "}
            </h1>
            <p className=" text-wrap text-stone-400">
              I began working in web development in 2022. I think of myself as
              someone who is responsible and organized. Always looking forward
              to the best opportunities in this software development community.
              In 2024, I actively participated as a Frontend developer in three
              real-world projects that all involved admin dashboards.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, translateX: 18 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="/Aung Chan Myae Resume.pdf"
              download="Aung_Chan_Myae_CV.pdf"
            >
              <button className="inline-flex items-center gap-2 shadow-2xl shadow-zinc-950 w-fit px-2 py-1 hover-1 duration-200 rounded hover:text-black text-white text-xl font-semibold font-mono">
                DownLoad CV <LuDownload className="w-5 h-5" />
              </button>
            </a>
          </motion.div>
          {/* About section */}
          <section className="">
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
                    <div className=" w-full lg:px-14 overflow-hidden">
                      <div className=" my-4 flex flex-col gap-8 ">
                        <div className=" ">
                          <Marquee
                            fade={true}
                            className=" max-lg:w-full lg:max-w-3xl duration-100"
                          >
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

                        <div className=" ">
                          <Marquee
                            fade={true}
                            reverse={true}
                            className=" max-lg:gap-8 gap-20 max-lg:w-full lg:max-w-3xl duration-100"
                            innerClassName=" max-lg:gap-8 gap-20"
                          >
                            <StackIcon className=" w-10 h-10" name="js" />
                            <StackIcon className=" w-10 h-10" name="reactjs" />
                            <StackIcon
                              className=" w-10 h-10 bg-white"
                              name="nextjs"
                            />
                            <StackIcon className=" w-10 h-10" name="vitejs" />
                            <StackIcon
                              className=" w-10 h-10"
                              name="tailwindcss"
                            />
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

                {/* <div className=" pl-3" id=" experience">
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
                      
                    </motion.p>
                  </section>
                </div> */}
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
                          <div className=" flex max-lg:flex-col justify-between lg:items-center">
                            <motion.h1
                              initial={{ opacity: 0, translateX: 18 }}
                              whileInView={{ opacity: 1, translateX: 0 }}
                              transition={{ duration: 0.8 }}
                              className=" max-lg:ml-[16px] lg:ml-[42px] lg:inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                            >
                              B.E.H.S (2) Insein
                            </motion.h1>
                            <motion.p
                              initial={{ opacity: 0, translateX: 18 }}
                              whileInView={{ opacity: 1, translateX: 0 }}
                              transition={{ duration: 0.8 }}
                              className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 max-lg:mx-[16px] lg:mx-[42px] font-mono"
                            >
                              ( 2019 )
                            </motion.p>
                          </div>
                          <motion.p
                            initial={{ opacity: 0, translateX: 18 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.8 }}
                            className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 max-lg:mx-[16px] lg:mx-[42px] font-mono"
                          >
                            Undergraduate
                          </motion.p>
                        </li>
                        <li className="  border-l-2 border-[#df4f3e] mb-4 relative">
                          <div className=" flex max-lg:flex-col justify-between lg:items-center">
                            <motion.h1
                              initial={{ opacity: 0, translateX: 18 }}
                              whileInView={{ opacity: 1, translateX: 0 }}
                              transition={{ duration: 0.8 }}
                              className=" max-lg:ml-[16px] lg:ml-[42px] lg:inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                            >
                              West Yangon Technology University
                            </motion.h1>
                            <motion.p
                              initial={{ opacity: 0, translateX: 18 }}
                              whileInView={{ opacity: 1, translateX: 0 }}
                              transition={{ duration: 0.8 }}
                              className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 max-lg:mx-[16px] lg:mx-[42px] font-mono"
                            >
                              ( 2019 )
                            </motion.p>
                          </div>
                          <motion.p
                            initial={{ opacity: 0, translateX: 18 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.8 }}
                            className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 max-lg:mx-[16px] lg:mx-[42px] font-mono"
                          >
                            First Year Mechatronics Specialization
                          </motion.p>
                        </li>
                        <li className="  border-l-2 border-[#df4f3e] mb-4 relative">
                          <div className=" flex max-lg:flex-col justify-between lg:items-center">
                            <motion.h1
                              initial={{ opacity: 0, translateX: 18 }}
                              whileInView={{ opacity: 1, translateX: 0 }}
                              transition={{ duration: 0.8 }}
                              className=" max-lg:ml-[16px] lg:ml-[42px] lg:inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                            >
                              West Yangon University
                            </motion.h1>
                            <motion.p
                              initial={{ opacity: 0, translateX: 18 }}
                              whileInView={{ opacity: 1, translateX: 0 }}
                              transition={{ duration: 0.8 }}
                              className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 max-lg:mx-[16px] lg:mx-[42px] font-mono"
                            >
                              ( 2024 - <span>{new Date().getFullYear()}</span> )
                            </motion.p>
                          </div>

                          <motion.p
                            initial={{ opacity: 0, translateX: 18 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.8 }}
                            className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 max-lg:mx-[16px] lg:mx-[42px] font-mono"
                          >
                            First Year E-Major (Distance) Specialization
                          </motion.p>
                        </li>
                        <li className="  border-l-2 border-[#df4f3e] mb-4 relative ">
                          <motion.h1
                            initial={{ opacity: 0, translateX: 18 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.8 }}
                            className=" max-lg:ml-[16px] lg:ml-[42px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider"
                          >
                            Started Learning Web Development
                            <br className=""></br>
                            In MMS-IT Since 2022
                          </motion.h1>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>

                {/* <motion.div
                  initial={{ opacity: 0, translateX: 18 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <NavLink
                    className=" inline-flex items-center gap-2 shadow-2xl shadow-zinc-950 w-fit px-2 py-1 hover-1 duration-200 rounded hover:text-black text-white text-xl font-semibold font-mono"
                    to="/about"
                  >
                    More About Me <LuArrowUpRight className="w-4 h-4" />
                  </NavLink>
                </motion.div> */}
              </div>
            </div>
          </section>

          {/* <section className="">
            <div>
              <motion.h1
                initial={{ opacity: 0, translateX: 18 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.8 }}
                className=" inline-block lg:pb-5 lg:mb-5 max-lg:pb-3 max-lg:mb-3 max-lg:text-3xl xl:text-3xl lg:text-3xl text-white font-bold "
              >
                Projects
              </motion.h1>
              <section>
                <div className="  py-2 duration-200 flex flex-col gap-5 ">
                  <div className=" opacity-75 hover:opacity-100 duration-300 hover:translate-y-[-5px]">
                    <motion.div
                      initial={{ opacity: 0, translateY: 16 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className=" flex max-md:flex-col md:flex-row gap-5 shadow-2xl rounded-lg shadow-zinc-950"
                    >
                      <div className="h-[280px] max-md:px-4 p-2">
                        <a target="_blank" href="#">
                          <img
                            className=" max-sm:w-full md:max-w-[300px] lg:max-w-[400px] h-full select-none rounded-lg object-cover object-center"
                            src="/nextShop.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className=" flex flex-col gap-2 max-md:px-4 max-md:pb-4">
                        <h1 className="block max-lg:text-2xl xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                          Next Shop
                        </h1>
                        <p className=" text-lg text-stone-400">
                          {" "}
                          <span className=" text-white font-semibold rounded-md px-1 bg-blue-500">
                            In Progress
                          </span>
                        </p>
                        <p className=" text-lg text-stone-400">
                          {" "}
                          <span className=" text-stone-400 text-wrap">
                            My 2nd Next.js project. I'm building it like a
                            real-world e-commerce project. You can test it by
                            adding items to the cart and wishlist. Using Platzi
                            fake store API. Updates will come soon.
                          </span>
                        </p>
                        <p className=" text-lg text-stone-400 flex gap-5 flex-wrap">
                          {" "}
                          <span className=" px-2 border border-stone-300 rounded-md ">
                            Next.js
                          </span>
                          <span className=" px-2 border border-stone-300 rounded-md ">
                            Tailwind Css
                          </span>
                          <span className=" px-2 border border-stone-300 rounded-md ">
                            Vercel{" "}
                          </span>
                        </p>
                        <p className=" inline-flex py-2 gap-5 text-lg text-stone-400">
                          {" "}
                          <a
                            target="_blank"
                            href="#"
                            className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-xl text-[#df4f3e]"
                          >
                            Website Link <LuArrowUpRight className="w-5 h-5" />
                          </a>
                          <a
                            target="_blank"
                            href="#"
                            className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-xl text-[#df4f3e]"
                          >
                            GitHub <LuArrowUpRight className="w-5 h-5" />
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <div className=" opacity-75 hover:opacity-100 duration-300 hover:translate-y-[-5px]">
                    <motion.div
                      initial={{ opacity: 0, translateY: 16 }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className=" flex max-md:flex-col md:flex-row gap-5 shadow-2xl rounded-lg shadow-zinc-950"
                    >
                      <div className="h-[280px] max-md:px-4 p-2">
                        <a
                          target="_blank"
                          href="https://tinyverse-kindergarten.vercel.app/"
                        >
                          <img
                            className=" max-sm:w-full md:max-w-[300px] lg:max-w-[400px] h-full select-none rounded-lg object-cover object-center"
                            src="/Tiny.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className=" flex flex-col gap-2 max-md:px-4 max-md:pb-4">
                        <h1 className="block max-lg:text-2xl xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                          Tinyverse Kindergarten
                        </h1>
                        <p className=" text-lg text-stone-400">
                          {" "}
                          <span className=" text-white font-semibold rounded-md px-1 bg-purple-500">
                            Completed
                          </span>
                        </p>
                        <p className=" text-lg text-stone-400">
                          {" "}
                          <span className=" text-stone-400 text-wrap">
                            One of my workshop group projects from my MMS-It
                            frontend class. This is a profile website. My first
                            time Next.js project.
                          </span>
                        </p>
                        <p className=" text-lg text-stone-400 flex gap-5 flex-wrap">
                          {" "}
                          <span className=" px-2 border border-stone-300 rounded-md ">
                            Next.js
                          </span>
                          <span className=" px-2 border border-stone-300 rounded-md ">
                            Tailwind Css
                          </span>
                          <span className=" px-2 border border-stone-300 rounded-md ">
                            Vercel{" "}
                          </span>
                        </p>
                        <p className=" inline-flex py-2 gap-5 text-lg text-stone-400">
                          {" "}
                          <a
                            target="_blank"
                            href="https://tinyverse-kindergarten.vercel.app/"
                            className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-xl text-[#df4f3e]"
                          >
                            Website Link <LuArrowUpRight className="w-4 h-4" />
                          </a>
                          <a
                            target="_blank"
                            href="https://github.com/aungchannmyae/TinyverseKindergarten-NextJs-MCF4-MCP3-"
                            className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-xl text-[#df4f3e]"
                          >
                            GitHub <LuArrowUpRight className="w-4 h-4" />
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, translateX: 18 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <NavLink
                      className=" inline-flex items-center gap-2 shadow-2xl shadow-zinc-950 w-fit px-2 py-1 hover-1 duration-200 rounded hover:text-black text-white text-xl font-semibold font-mono"
                      to="/projects"
                    >
                      More Projects <LuArrowUpRight className="w-4 h-4" />
                    </NavLink>
                  </motion.div>
                </div>
              </section>
            </div>
          </section> */}

          <Contact />
        </div>
      </div>
    </>
  );
};

export default Profile;
