import Container from "./Container";
import useGeneralStore from "../store/useGeneralStore";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";

const Portfolio = () => {
  const { navBar } = useGeneralStore();

  return (
    <section className="">
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
          <div className=" w-fit py-2 duration-200 grid max-sm:grid-cols-1 max-lg:gap-6 xl:grid-cols-3 md:grid-cols-2 xl:gap-6 lg:gap-10">
            <div className=" group">
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className=" shadow-2xl rounded-lg shadow-zinc-950"
              >
                <div className=" h-[260px] p-2">
                  <a
                    target="_blank"
                    // href="#"
                  >
                    <img
                      className=" w-fit h-full select-none opacity-80 group-hover:opacity-100 duration-500 group-hover:scale-105 rounded-lg object-cover object-center"
                      src="/nextShop.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" flex flex-col gap-2 p-2">
                  <h1 className="block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                    Next Shop
                  </h1>
                  <p className=" inline-flex flex-row flex-wrap gap-2 text-lg text-stone-400">
                    {" "}
                    <span className=" text-white font-semibold rounded-md px-1 bg-blue-500">
                      In Progress
                    </span>
                    <span className=" text-white font-semibold rounded-md px-1 bg-red-500">
                      Laptop Only
                    </span>
                  </p>
                  <p className=" text-lg text-stone-400">
                    {" "}
                    <span className=" text-stone-400 text-base text-wrap">
                      My 2nd Next.js project. I'm building it like a real-world
                      e-commerce project. You can test it by adding items to the
                      cart and wishlist. Using Platzi fake store API. Updates
                      will come soon.
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
                  <p className=" inline-flex gap-5 text-lg text-stone-400">
                    {" "}
                    <a
                      target="_blank"
                      // href="#"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      Website Link <LuArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      target="_blank"
                      // href="#"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      GitHub <LuArrowUpRight className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className=" group">
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className=" shadow-2xl rounded-lg shadow-zinc-950"
              >
                <div className=" h-[260px] p-2">
                  <a
                    target="_blank"
                    // href="https://sr-jewelry-design-by-pim.netlify.app/"
                  >
                    <img
                      className=" w-fit h-full select-none opacity-80 group-hover:opacity-100 duration-500 group-hover:scale-105 rounded-lg object-cover object-top"
                      src="/SR.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" flex flex-col gap-2 p-2">
                  <h1 className="block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                    SR Jewelry <br /> (Design by{" "}
                    <a
                      className=" text-green-600 hover:text-green-400 duration-300"
                      target="_blank"
                      href="https://www.linkedin.com/in/pim-pim-wuttyee-shein-06b7b22ab/"
                    >
                      Pim Pim
                    </a>
                    )
                  </h1>
                  <p className=" inline-flex flex-row flex-wrap gap-2 text-lg text-stone-400">
                    {" "}
                    <span className=" text-white font-semibold rounded-md px-1 bg-purple-500">
                      Completed
                    </span>
                    <span className=" text-white font-semibold rounded-md px-1 bg-red-500">
                      Laptop Only
                    </span>
                  </p>
                  <p className=" text-lg text-stone-400">
                    {" "}
                    <span className=" text-stone-400 text-base text-wrap">
                      E-commerce website for a jewelry store. Features include
                      product listings, product details, and a shopping cart.
                      But the website is just design the features can not be
                      used.
                    </span>
                  </p>
                  <p className=" text-lg text-stone-400 flex gap-5 flex-wrap">
                    {" "}
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      React.js
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Tailwind Css
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Vite
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Netlify{" "}
                    </span>
                  </p>
                  <p className=" inline-flex gap-5 text-lg text-stone-400">
                    {" "}
                    <a
                      target="_blank"
                      // href="https://sr-jewelry-design-by-pim.netlify.app/"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      Website Link <LuArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      target="_blank"
                      // href="https://github.com/aungchannmyae/SR-Jewelry-Design-by-Pim"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      GitHub <LuArrowUpRight className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className=" group">
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className=" shadow-2xl rounded-lg shadow-zinc-950"
              >
                <div className=" h-[260px] p-2">
                  <a
                    target="_blank"
                    // href="https://tinyverse-kindergarten.vercel.app/"
                  >
                    <img
                      className=" w-fit h-full select-none opacity-80 group-hover:opacity-100 duration-500 group-hover:scale-105 rounded-lg object-cover object-top"
                      src="/Tiny.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" flex flex-col gap-2 p-2">
                  <h1 className="block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                    Tinyverse Kindergarten
                  </h1>
                  <p className=" inline-flex flex-row flex-wrap gap-2 text-lg text-stone-400">
                    {" "}
                    <span className=" text-white font-semibold rounded-md px-1 bg-purple-500">
                      Completed
                    </span>
                    <span className=" text-white font-semibold rounded-md px-1 bg-green-500">
                      Responsive
                    </span>
                  </p>
                  <p className=" text-lg text-stone-400">
                    {" "}
                    <span className=" text-stone-400 text-base text-wrap">
                      One of my work shop group projects from my MMS-It frontend
                      class. This is a profile website. My first time Next.js
                      project.
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
                  <p className=" inline-flex gap-5 text-lg text-stone-400">
                    {" "}
                    <a
                      target="_blank"
                      // href="https://tinyverse-kindergarten.vercel.app/"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      Website Link <LuArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      target="_blank"
                      // href="https://github.com/aungchannmyae/TinyverseKindergarten-MCF4-MCP3"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      GitHub <LuArrowUpRight className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className=" group">
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className=" shadow-2xl rounded-lg shadow-zinc-950"
              >
                <div className=" h-[260px] p-2">
                  <a
                    target="_blank"
                    // href="https://estatelaproperty-mcf4-mcp3.netlify.app/"
                  >
                    <img
                      className=" w-full h-full select-none opacity-80 group-hover:opacity-100 duration-500 group-hover:scale-105 rounded-lg object-cover object-top"
                      src="/Estatela.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" flex flex-col gap-2 p-2">
                  <h1 className="block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                    Estatela Web design
                  </h1>
                  <p className=" inline-flex flex-row flex-wrap gap-2 text-lg text-stone-400">
                    {" "}
                    <span className=" text-white font-semibold rounded-md px-1 bg-purple-500">
                      Completed
                    </span>
                    <span className=" text-white font-semibold rounded-md px-1 bg-green-500">
                      Responsive
                    </span>
                  </p>
                  <p className=" text-lg text-stone-400">
                    {" "}
                    <span className=" text-stone-400 text-base text-wrap">
                      One of my workshop group projects from my MMS-It frontend
                      class. It is a profile website and can explore properties
                      that is available and the location that you prefer.
                    </span>
                  </p>
                  <p className=" text-lg text-stone-400 flex gap-5 flex-wrap">
                    {" "}
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      React.js
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Tailwind Css
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Vite
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Vercel{" "}
                    </span>
                  </p>
                  <p className=" inline-flex gap-5 text-lg text-stone-400">
                    {" "}
                    <a
                      target="_blank"
                      // href="https://estatelaproperty-mcf4-mcp3.netlify.app/"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      Website Link <LuArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      target="_blank"
                      // href="https://github.com/thet-naing-lin/EstatelaProperty-MCF4-MCP3"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      GitHub <LuArrowUpRight className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className=" group">
              <motion.div
                initial={{ opacity: 0, translateY: 16 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className=" shadow-2xl rounded-lg shadow-zinc-950"
              >
                <div className=" h-[260px] p-2">
                  <a
                    target="_blank"
                    // href="https://joyboi-e-commerce.vercel.app/"
                  >
                    <img
                      className=" w-fit h-full select-none opacity-80 group-hover:opacity-100 duration-500 group-hover:scale-105 rounded-lg object-cover object-top"
                      src="/project-1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className=" flex flex-col gap-2 p-2">
                  <h1 className="block max-lg:text-lg xl:text-xl lg:text-xl text-white font-semibold tracking-wider">
                    React E-commerce
                  </h1>
                  <p className=" inline-flex flex-row flex-wrap gap-2 text-lg text-stone-400">
                    {" "}
                    <span className=" text-white font-semibold rounded-md px-1 bg-orange-500">
                      Experimental
                    </span>
                    <span className=" text-white font-semibold rounded-md px-1 bg-red-500">
                      Laptop Only
                    </span>
                  </p>
                  <p className=" text-lg text-stone-400">
                    {" "}
                    <span className=" text-stone-400 text-base text-wrap">
                      React e-commerce project using fake store api. Can make
                      the process like adding to cart, can see the cart's total
                      prices and can categorize items . Maintenance or updates
                      will not be unavailable.
                    </span>
                  </p>
                  <p className=" text-lg text-stone-400 flex gap-5 flex-wrap">
                    {" "}
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      React.js
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Tailwind Css
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Vite
                    </span>
                    <span className=" px-2 border border-stone-300 rounded-md ">
                      Vercel{" "}
                    </span>
                  </p>
                  <p className=" inline-flex gap-5 text-lg text-stone-400">
                    {" "}
                    <a
                      target="_blank"
                      // href="https://joyboi-e-commerce.vercel.app/"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      Website Link <LuArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      target="_blank"
                      // href="https://github.com/aungchannmyae/react-E-commerce"
                      className=" hover:translate-x-1 duration-200 inline-flex justify-center items-center gap-2 text-[#df4f3e]"
                    >
                      GitHub <LuArrowUpRight className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </section>
      </div>
    </section>
  );
};

export default Portfolio;
