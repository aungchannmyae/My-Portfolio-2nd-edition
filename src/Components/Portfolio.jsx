import Container from "./Container";
import useGeneralStore from "../store/useGeneralStore";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { motion } from "motion/react";

const Portfolio = () => {
  const { navBar } = useGeneralStore();

  return (
    <section className="">
      <Container>
        <div>
          <motion.h1 initial={{ opacity: 0, translateX: 18 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.8}} className=" inline-block lg:pb-5 lg:mb-5 border-b-4 border-[#df4f3e] max-lg:pb-3 max-lg:mb-3 max-lg:text-3xl xl:text-3xl lg:text-3xl text-white font-bold ">
            Projects
          </motion.h1>
          <section>
            <div className=" w-fit py-2 duration-200 grid max-sm:grid-cols-1 max-lg:gap-6 xl:grid-cols-3 md:grid-cols-2 xl:gap-5 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-red overflow-hidden shadow-2xl pb-3 rounded-lg shadow-zinc-950"
              >
                <div className=" h-[200px] overflow-hidden mb-3">
                  <a
                    target="_blank"
                    href="https://joyboi-e-commerce.vercel.app/"
                  >
                    <img
                      className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg h-[200px] object-cover object-center"
                      src="/project-1.png"
                      alt=""
                    />
                  </a>
                </div>
                <p className=" px-3 text-lg text-stone-400">
                  {" "}
                  <span className=" text-[#df4f3e]">React</span> E-Commerce
                  Website
                </p>
                <p className=" px-3 text-md text-stone-400">
                  Design and Production by{" "}
                  <a
                    className=" text-[#df4f3e]"
                    target="_blank"
                    href="https://joyboi.vercel.app"
                  >
                    aungchanmyae
                  </a>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, translateY: 16}}
                whileInView={{ opacity: 1, translateY: 0}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-red overflow-hidden shadow-2xl pb-3 rounded-lg shadow-zinc-950"
              >
                <div className=" overflow-hidden mb-3">
                  <a
                    target="_blank"
                    href="https://joyboi-e-commerce.vercel.app/"
                  >
                    <img
                      className=" select-none hover:opacity-70 duration-300 hover:scale-125 rounded-t-lg h-[200px] object-cover object-center"
                      src="/project-2.png"
                      alt=""
                    />
                  </a>
                </div>
                <p className=" px-3 text-lg text-stone-400">
                  {" "}
                  <span className=" text-[#df4f3e]">React</span> Personal
                  Portfolio Website
                </p>
                <p className=" px-3 text-md text-stone-400">
                  Design and Production by{" "}
                  <a
                    className=" text-[#df4f3e]"
                    target="_blank"
                    href="https://joyboi.vercel.app"
                  >
                    aungchanmyae
                  </a>
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
