import Container from "./Container";
import ContrastDetail from "./ContactDetail";
import useGeneralStore from "../store/useGeneralStore";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import useScrollReveal from "../Hooks/useScrollReveal";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { navBar } = useGeneralStore();

  return (
    <section>
      <Container>
        <div className=" overflow-visible w-full grid max-sm:mb-5 max-lg:mb-10 max-sm:border-b-2 max-sm:border-r-2 max-md:border-b-4 max-lg:border-[#df4f3e]  max-sm:grid-cols-2 max-md:gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 lg:gap-2  ">
          <section className=" flex md:items-center justify-center ">
            {/* <div className=" max-sm:w-full max-md:w-8/12 md:w-10/12 xl:w-3/4 lg:w-12/12 xl:m-auto">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" select-none max-sm:rounded-full max-lg:rounded-full xl:rounded-full lg:rounded-full"
                src="/Aung Chan Myae.jpg"
                alt=""
              />
            </div> */}

            <motion.iframe
              initial={{ opacity: 0, translateY: 16 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className=" w-full h-full"
              src="https://lottie.host/embed/b5365161-8777-4919-a803-5e91ee37fa3a/TnrZRUPjjG.lottie"
            ></motion.iframe>
          </section>
          <section className="md:hidden max-lg:flex max-sm:justify-end max-lg:justify-center max-lg:items-center max-lg:col-span-1">
            <div className="">
              <div className=" max-lg:p-4 ">
                <h1 className="max-sm:text-5xl text-right max-lg:text-7xl mb-2 text-white font-medium font-serif ">
                  Aung<br></br>
                  chAn
                  <br></br>
                  myAe
                </h1>
              </div>
            </div>
          </section>
          <section className=" md:hidden max-lg:w-12/12 max-lg:pb-5 max-lg:col-span-2">
            <div>
              <div>
                <p className=" max-lg:flex max-lg:justify-center max-lg:items-center max-lg:w-full px-3 max-sm:py-2 max-lg:py-3 rounded shadow-2xl shadow-zinc-950 text-stone-400 max-sm:text-xl max-lg:text-4xl font-mono ">
                  Junior Web Developer
                </p>
              </div>
            </div>
          </section>

          <section className=" sm:col-span-1 max-md:hidden md:col-span-3 lg:col-span-2 bg-blue">
            <div className=" h-full md:flex md:flex-col lg:gap-5">
              <div className=" sm:m-auto md:py-0 lg:p-5 sm:border-b-4 sm:border-[#df4f3e] sm:justify-center sm:items-center sm:flex sm:flex-col md:gap-4 lg:gap-2">
                <motion.h1
                  initial={{ opacity: 0, translateY: -14 }}
                  whileInView={{ opacity: 1, translateY: 1 }}
                  transition={{ duration: 1 }}
                  className="  mb-2 text-white text-4xl font-medium font-serif "
                >
                  Hi! I'm
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, translateY: -14 }}
                  whileInView={{ opacity: 1, translateY: 1 }}
                  transition={{ duration: 1 }}
                  className="  mb-2 text-white text-5xl font-medium font-serif "
                >
                  Aung Chan Myae
                </motion.h1>
                {/* <TypeAnimation
                  sequence={[
                    1500,
                    "Aung Chann Myae", // Types 'One'
                    1500, // Waits 1s
                    "Aung Chan Myae", // Deletes 'One' and types 'Two'
                  ]}
                  wrapper="span"
                  speed={60}
                  cursor={false}
                  repeat={0}
                  className="  mb-2 text-white text-5xl font-medium font-serif "
                /> */}

                <TypeAnimation
                  sequence={[
                    "Junior Web Developer",
                    1500,
                    "Junior Front-end Developer",
                  ]}
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                  className=" labelReveal px-3 py-1 rounded shadow-2xl shadow-zinc-950 text-stone-400 text-2xl font-mono "
                />
              </div>
              <div className=" max-lg:hidden ">
                {/* <ContrastDetail /> */}
                {/* <h1 className="  max-lg:text-2xl max-lg:mb-6 inline-block text-white font-bold xl:text-2xl lg:text-2xl mb-6">
                  What I'm Doing.
                </h1> */}
                {/* <section className=" hover:scale-[1.02] hover:translate-x-2 duration-200 grid max-lg:grid-cols-1 max-lg:gap-4 lg:grid-cols-2 xl:gap-5 lg:gap-8">
                </section> */}
                <motion.div
                  initial={{ opacity: 0, translateY: 16 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" p-5 inline-block rounded-lg"
                >
                  {/* <h1 className=" underline underline-offset-2 max-lg:text-xl xl:text-xl lg:text-xl text-white mb-3">
                      Front-end Developer
                    </h1> */}
                  <p className=" text-center indent-4 text-stone-400 text-lg font-mono line-clamp-3">
                    Bringing visual designs to life in a way that is
                    interactive, efficient, and user-friendly.
                  </p>
                </motion.div>
              </div>
              <div className=" mx-auto flex items-center">
                <Link
                  to={"/about"}
                  className=" h-fit cursor-pointer shadow-2xl shadow-zinc-950 ml-auto px-3 py-2 hover-1 duration-200 rounded hover:text-black text-white text-xl font-bold font-mono"
                  type="submit"
                >
                  More About Me
                </Link>
                <svg
                  fill="#df4f3e"
                  viewBox="-5.5 0 32 32"
                  version="1.1"
                  className=" w-16 h-16 p-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>facebook</title>{" "}
                    <path d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"></path>{" "}
                  </g>
                </svg>
                <svg
                  viewBox="0 0 16 16"
                  className=" w-12 h-12 p-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 1a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2H3zm1.102 4.297a1.195 1.195 0 100-2.39 1.195 1.195 0 000 2.39zm1 7.516V6.234h-2v6.579h2zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084 1.438 0 2.219.953 2.219 2.766 0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234z"
                      fill="#df4f3e"
                    ></path>{" "}
                  </g>
                </svg>
                <svg
                  fill="#df4f3e"
                  viewBox="-2 -2 24 24"
                  className=" w-12 h-12 p-0"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                  class="jam jam-github"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </section>
        </div>
        <section className=" lg:hidden max-lg:w-full max-lg:col-span-2">
          <div className=" "></div>
        </section>
      </Container>
    </section>
  );
};

export default Profile;
