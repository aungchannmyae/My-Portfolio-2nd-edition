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
              <h1 className=" inline-block pb-5 mb-5 border-b-4 border-[#df4f3e] text-2xl text-white font-bold ">
                Resume
              </h1>
              <div className=" pl-3">
                <h1 className=" text-white font-bold text-xl mb-5 flex items-end gap-2">
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
                    <ul className=" text-[#df4f3e] mb-5 list-inside list-disc">
                      <li className=" mb-2">
                        <h1 className=" ml-[18px] inline-block text-white font-semibold tracking-wider">
                          B.E.H.S (2) Insein
                        </h1>
                        <p className=" text-stone-400 mx-[42px] font-mono">
                          2019
                        </p>
                        <p className=" text-stone-400 mx-[42px] font-mono">
                          Undergraduate
                        </p>
                      </li>
                      <li className=" mb-2">
                        <h1 className=" ml-[18px] inline-block text-white font-semibold tracking-wider">
                          West Yangon Technology University
                        </h1>
                        <p className=" text-stone-400 mx-[42px] font-mono">
                          2019
                        </p>
                        <p className=" text-stone-400 mx-[42px] font-mono">
                          First Year Mechatronics Specialization
                        </p>
                      </li>
                      <li className=" mb-2">
                        <h1 className=" ml-[18px] inline-block text-white font-semibold tracking-wider">
                          West Yangon University
                        </h1>
                        <p className=" text-stone-400 mx-[42px] font-mono">
                          2024 - <span>{new Date().getFullYear()}</span>
                        </p>

                        <p className=" text-stone-400 mx-[42px] font-mono">
                          First Year E-Major (Distance) Specialization
                        </p>
                      </li>
                      <li className=" mb-2">
                        <h1 className=" ml-[18px] inline-block text-white font-semibold tracking-wider">
                          Started Learning Web Development In MMS-IT Since 2022
                        </h1>
                      </li>
                    </ul>
                  </div>
                </section>
                <h1 className=" text-white font-bold text-xl mb-5 flex items-end gap-2">
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
                    <ul className=" text-[#df4f3e] mb-5 list-inside list-disc">
                      <li className=" mb-2">
                        <h1 className=" ml-[18px] inline-block text-white font-semibold tracking-wider">
                          Native Burmese.
                        </h1>
                      </li>
                      <li className=" mb-2">
                        <h1 className=" ml-[18px] inline-block text-white font-semibold tracking-wider">
                          Intermediate English.
                        </h1>
                      </li>
                    </ul>
                  </div>
                </section>
                <h1 className=" text-white font-bold text-xl mb-5 flex items-end gap-2">
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
                      d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                    />
                  </svg>
                  Skill
                </h1>
                <section>
                  <div>
                    <div>
                      <h1 className=" ml-[41px] mb-2 inline-block text-white font-semibold tracking-wider">
                        Responsive Web Design
                      </h1>
                      <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                        <p className=" w-11/12 h-full bg-[#df4f3e] rounded-lg"></p>
                      </span>
                    </div>
                    <div>
                      <h1 className=" ml-[41px] mb-2 inline-block text-white font-semibold tracking-wider">
                        Tailwind Css
                      </h1>
                      <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                        <p className=" w-12/12 h-full bg-[#df4f3e] rounded-lg"></p>
                      </span>
                    </div>
                    <div>
                      <h1 className=" ml-[41px] mb-2 inline-block text-white font-semibold tracking-wider">
                        React.js
                      </h1>
                      <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                        <p className=" w-10/12 h-full bg-[#df4f3e] rounded-lg"></p>
                      </span>
                    </div>
                    <div>
                      <h1 className=" ml-[41px] mb-2 inline-block text-white font-semibold tracking-wider">
                        Basic Knowledges in PHP, MySQL Database
                      </h1>
                      <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                        <p className=" w-5/12 h-full bg-[#df4f3e] rounded-lg"></p>
                      </span>
                    </div>
                    <div>
                      <h1 className=" ml-[41px] mb-2 inline-block text-white font-semibold tracking-wider">
                        Git & GitHub, Figma and familiar with other frontend libraries and tools
                      </h1>
                      <span className=" block mx-auto mb-5 w-[93%] h-[5px] rounded-lg bg-neutral-700">
                        <p className=" w-12/12 h-full bg-[#df4f3e] rounded-lg"></p>
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Body;
