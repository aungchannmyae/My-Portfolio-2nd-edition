import React, { useContext } from "react";
import Container from "./Container";
import "animate.css";
import useGeneralStore from "../store/useGeneralStore";

const Resume = () => {

  const {navBar} = useGeneralStore();
  return (
    <section
      className={` ${
        !navBar[2].page && "animate__animated animate__fadeOut hidden"
      } animate__animated animate__fadeIn mb-10`}
    >
      <Container>
        <div>
          <h1 className=" inline-block pb-5 mb-5 border-b-4 border-[#df4f3e] max-lg:pb-3 max-lg:mb-3 max-lg:text-3xl xl:text-3xl lg:text-3xl text-white font-bold ">
            Resume
          </h1>
          <div className=" flex flex-col gap-6">
            <div className=" pl-3" id=" education">
              <h1 className=" text-white font-bold max-lg:mb-3 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2">
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
              </h1>
              <section>
                <div>
                  <ul className=" text-[#df4f3e] list-inside list-disc">
                    <li className=" mb-2">
                      <h1 className=" ml-[18px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                        B.E.H.S (2) Insein
                      </h1>
                      <p className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono">
                        2019
                      </p>
                      <p className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono">
                        Undergraduate
                      </p>
                    </li>
                    <li className=" mb-2">
                      <h1 className=" ml-[18px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                        West Yangon<br className="sm:hidden"></br>Technology University
                      </h1>
                      <p className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono">
                        2019
                      </p>
                      <p className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono">
                        First Year Mechatronics Specialization
                      </p>
                    </li>
                    <li className=" mb-2">
                      <h1 className=" ml-[18px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                        West Yangon University
                      </h1>
                      <p className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono">
                        2024 - <span>{new Date().getFullYear()}</span>
                      </p>

                      <p className=" max-lg:text-lg xl:text-base lg:text-lg text-stone-400 mx-[42px] font-mono">
                        First Year E-Major (Distance) Specialization
                      </p>
                    </li>
                    <li className=" ">
                      <h1 className=" ml-[18px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                        Started Learning Web<br className=" sm:hidden"></br>Development In MMS-IT<br className=" sm:hidden"></br> Since 2022
                      </h1>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className=" pl-3" id=" language">
              <h1 className=" text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2">
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
              </h1>
              <section>
                <div>
                  <ul className=" text-[#df4f3e] list-inside list-disc">
                    <li className=" mb-2">
                      <h1 className=" ml-[18px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                        Native Burmese.
                      </h1>
                    </li>
                    <li className="">
                      <h1 className=" ml-[18px] inline-block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                        Intermediate English.
                      </h1>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="" id=" skills">
              <h1 className=" pl-3 text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2">
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
                Skill
              </h1>
              <section>
                <div className=" shadow-2xl shadow-zinc-950 max-lg:text-lg xl:text-xl lg:text-xl rounded-lg py-2">
                  <div>
                    <h1 className=" ml-[41px] mb-2 lg:block xl:inline-block text-white font-semibold tracking-wider">
                      Responsive Web Design
                    </h1>
                    <span className="lg:block xl:inline-block ml-[41px] lg:mb-3 text-white tex font-mono">
                      ( 100% )
                    </span>
                    <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                      <p className=" w-12/12 h-full bg-[#df4f3e] rounded-lg"></p>
                    </span>
                  </div>
                  <div>
                    <h1 className=" ml-[41px] mb-2 lg:block xl:inline-block text-white font-semibold tracking-wider">
                      Tailwind Css
                    </h1>
                    <span className="lg:block xl:inline-block ml-[41px] lg:mb-3 text-white tex font-mono">
                      ( 100% )
                    </span>
                    <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                      <p className=" w-12/12 h-full bg-[#df4f3e] rounded-lg"></p>
                    </span>
                  </div>
                  <div>
                    <h1 className=" ml-[41px] mb-2 lg:block xl:inline-block text-white font-semibold tracking-wider">
                      React.js
                    </h1>
                    <span className="lg:block xl:inline-block ml-[41px] lg:mb-3 text-white tex font-mono">
                      ( 100% )
                    </span>
                    <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                      <p className=" w-12/12 h-full bg-[#df4f3e] rounded-lg"></p>
                    </span>
                  </div>
                  <div>
                    <h1 className=" ml-[41px] mb-2 lg:block xl:inline-block text-white font-semibold tracking-wider">
                      Next.js
                    </h1>
                    <span className="lg:block xl:inline-block ml-[41px] lg:mb-3 text-white tex font-mono">
                      ( 10% )
                    </span>
                    <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                      <p className=" w-1/12 h-full bg-[#df4f3e] rounded-lg"></p>
                    </span>
                  </div>
                  <div>
                    <h1 className=" ml-[41px] mb-2 lg:block xl:inline-block text-white font-semibold tracking-wider">
                      Rest API
                    </h1>
                    <span className="lg:block xl:inline-block ml-[41px] lg:mb-3 text-white tex font-mono">
                      ( 100% )
                    </span>
                    <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                      <p className=" w-12/12 h-full bg-[#df4f3e] rounded-lg"></p>
                    </span>
                  </div>
                  <div>
                    <h1 className=" ml-[41px] mb-2 lg:block xl:inline-block text-white font-semibold tracking-wider">
                      Basic Knowledge in PHP, MySQL Database
                    </h1>
                    <span className="lg:block xl:inline-block ml-[41px] lg:mb-3 text-white tex font-mono">
                      ( 90% )
                    </span>
                    <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                      <p className=" w-11/12 h-full bg-[#df4f3e] rounded-lg"></p>
                    </span>
                  </div>
                  <div className=" ">
                    <h1 className=" ml-[41px] mb-2 lg:block xl:inline-block text-white font-semibold tracking-wider">
                      Git & GitHub, Figma and familiar with other frontend
                      libraries and tools
                    </h1>
                    <span className="lg:block xl:inline-block ml-[41px] lg:mb-3 text-white tex font-mono">
                      ( 100% )
                    </span>
                    <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                      <p className=" w-12/12 h-full bg-[#df4f3e] rounded-lg"></p>
                    </span>
                  </div>
                </div>
              </section>
            </div>
            <div className=" pl-3" id=" experience">
              <h1 className=" text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2">
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
              </h1>
              <section>
                <p className=" max-lg:text-lg xl:text-base lg:text-lg lg:mx-[41px] text-stone-400 font-mono">
                  Software Developer who is seeking the work Experiences in the
                  position as an internship or junior Front End Developer.
                </p>
              </section>
            </div>
            <div id=" certificates">
              <h1 className=" pl-3 text-white font-bold max-lg:mb-6 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-5 flex items-end gap-2">
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
              </h1>

              <section>
                <div className=" duration-300 grid max-sm:grid-cols-1 max-lg:gap-6 xl:grid-cols-3 lg:grid-cols-2 xl:gap-5 lg:gap-10">
                  <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                    <div className=" h-[220px] overflow-hidden ">
                      <a href="">
                        <img
                          className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full"
                          src="/photo1.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <p className=" ml-[41px] py-3 text-stone-400 font-mono line-clamp-3">
                      Responsive Web Design at{" "}
                      <span className=" text-gray-400">
                        <a href="https://freecodecamp.org">freecodecamp.org</a>
                      </span>
                    </p>
                  </div>
                  <div className="bg-red overflow-hidden shadow-2xl rounded-lg shadow-zinc-950">
                    <div className=" h-[220px] overflow-hidden ">
                      <a href="">
                        <img
                          className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg w-full"
                          src="/photo2.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <p className=" ml-[41px] py-3 text-stone-400 font-mono line-clamp-3">
                      CS50T Understanding Technology at{" "}
                      <span className=" text-gray-400">
                        <a href="https://burma.ac">Burma Academy</a>
                      </span>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
