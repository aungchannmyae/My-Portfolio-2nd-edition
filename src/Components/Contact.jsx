import React, { useCallback, useContext, useEffect } from "react";
import Container from "./Container";
import "animate.css";
import ContactDetail from "./ContactDetail";
import useGeneralStore from "../store/useGeneralStore";
import ScrollReveal from "scrollreveal";
import { motion } from "motion/react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwqbqnk");
  if (state.succeeded) {
    return (
      <div className="  my-5 mx-auto ">
        <iframe className=" mx-auto" src="https://lottie.host/embed/9f14a984-035e-4444-bac8-b4a0c1d6154f/fSji93e6RA.lottie"></iframe>
        <motion.p
          initial={{ opacity: 0, translateY: 18 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className=" text-center text-stone-200 text-3xl font-semibold mx-auto"
        >
          Thanks for your message!
        </motion.p>
      </div>
    );
  }
  return (
    <section className=" ">
      <motion.h1
        initial={{ opacity: 0, translateX: 18 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.8 }}
        className=" inline-block pb-5 mb-5 max-lg:mb-3 max-lg:pb-3 max-lg:text-3xl xl:text-3xl lg:text-3xl text-white font-bold "
      >
        Contact Me
      </motion.h1>
      <div className=" relative grid grid-cols-3">
        <motion.div
          initial={{ opacity: 0, translateY: 18 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
          className=" col-span-3"
        >
          <fieldset className="">
            <form onSubmit={handleSubmit} action="" method="post">
              <div className=" mb-5 shadow-2xl shadow-zinc-950 p-5 rounded-lg border border-white border-opacity-5 grid grid-cols-2 gap-2">
                <div>
                  <input
                    className=" outline-2 focus:outline outline-[#df4f3e] w-full bg-neutral-700 text-stone-400 px-5 py-2 rounded"
                    type="text"
                    name="name"
                    placeholder="Your Name : "
                    required
                    id="name"
                  ></input>
                </div>
                <div>
                  <input
                    className=" outline-2 focus:outline outline-[#df4f3e] w-full bg-neutral-700 text-slate-400 px-5 py-2 rounded"
                    type="email"
                    name="email"
                    placeholder="Email : "
                    id="email"
                  ></input>
                </div>
                <div className=" col-span-2">
                  <textarea
                    className=" outline-2 focus:outline outline-[#df4f3e] w-full bg-neutral-700 text-slate-400 px-5 py-2 rounded"
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
                  disabled={state.submitting}
                >
                  Send Message
                </button>
              </div>
            </form>
          </fieldset>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
