import React, { useCallback, useContext } from "react";
import Container from "./Container";
import "animate.css";
import ContrastDetail from "./ContrastDetail";
import useGeneralStore from "../store/useGeneralStore";

const Contact = () => {

  const { navBar} = useGeneralStore();
  return (
    <section
      // className={` ${
      //   !navBar[3].page && " animate__animated animate__fadeOut hidden"
      // } animate__animated animate__fadeIn mb-10`}
    >
      <Container>
        <div>
          <h1 className=" inline-block pb-5 mb-5 border-b-4 border-[#df4f3e] max-lg:mb-3 max-lg:pb-3 max-lg:text-3xl xl:text-3xl lg:text-3xl text-white font-bold ">
            Contact
          </h1>
          <ContrastDetail />
          <legend className=" inline-block text-white font-bold max-lg:mb-3 max-lg:text-2xl xl:text-2xl lg:text-2xl mb-10">
            Contact Form
          </legend>
          <fieldset className=" cursor-not-allowed blur-[2px] opacity-45 disabled:opacity-50">
            <form action="" method="post">
              <div className=" mb-5 shadow-2xl shadow-zinc-950 p-5 rounded-lg border border-white border-opacity-5 grid grid-cols-2 gap-2">
                <div>
                  {/* <label className=" ml-[18px] inline-block text-white font-semibold tracking-wider" for="name">Your Name : </label> */}
                  <input
                    className=" cursor-not-allowed focus:outline-dashed outline-[#df4f3e] w-full bg-neutral-700 text-stone-400 px-5 py-2 rounded"
                    type="text"
                    name="name"
                    placeholder="Your Name : "
                    required
                    id="name"
                  ></input>
                </div>
                <div>
                  <input
                    className=" cursor-not-allowed focus:outline-dashed outline-[#df4f3e] w-full bg-neutral-700 text-slate-400 px-5 py-2 rounded"
                    type="email"
                    name="email"
                    placeholder="Email : "
                    id="email"
                  ></input>
                </div>
                <div className=" col-span-2">
                  <textarea
                    className=" cursor-not-allowed focus:outline-dashed outline-[#df4f3e] w-full bg-neutral-700 text-slate-400 px-5 py-2 rounded"
                    type="text"
                    name="textarea"
                    placeholder="Your Message"
                    id="textarea"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className=" flex items-center">
                <button
                  className=" cursor-not-allowed shadow-2xl shadow-zinc-950 ml-auto px-2 py-1 hover-1 duration-200 rounded hover:text-black text-white text-xl font-bold font-mono"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
