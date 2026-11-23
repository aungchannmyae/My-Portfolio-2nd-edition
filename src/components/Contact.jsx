"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";

const FORMSPREE_FORM_ID = "mpwqbqnk";

const inputClass =
  " outline-2 focus:outline outline-[#df4f3e] w-full bg-neutral-700 text-stone-400 px-5 py-2 rounded";

const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <div className="  my-5 mx-auto ">
        <iframe
          title="Message sent animation"
          className=" mx-auto"
          src="https://lottie.host/embed/9f14a984-035e-4444-bac8-b4a0c1d6154f/fSji93e6RA.lottie"
        ></iframe>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className=" text-center text-stone-200 text-3xl font-semibold mx-auto"
        >
          Thanks for your message!
        </motion.p>
      </div>
    );
  }

  return (
    <section>
      <SectionTitle>Contact Me</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form onSubmit={handleSubmit}>
          <div className=" mb-5 shadow-2xl shadow-zinc-950 p-5 rounded-lg border border-white border-opacity-5 grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                className={inputClass}
                type="text"
                name="name"
                placeholder="Your Name : "
                required
                id="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder="Email : "
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-sm text-[#df4f3e]"
              />
            </div>
            <div className=" col-span-2">
              <label htmlFor="textarea" className="sr-only">
                Your message
              </label>
              <textarea
                className={inputClass}
                name="textarea"
                placeholder="Your Message"
                id="textarea"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className=" flex items-center">
            <button
              className=" shadow-2xl shadow-zinc-950 ml-auto px-2 py-1 hover-1 duration-200 rounded hover:text-black text-white text-xl font-bold font-mono"
              type="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
