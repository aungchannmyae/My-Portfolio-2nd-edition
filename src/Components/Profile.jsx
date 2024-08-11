import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralProvider";
import Container from "./Container";
import Contrast from "./Contrast";
import ContrastDetail from "./ContrastDetail";

const Profile = () => {
  const { profile, handleProfile } = useContext(GeneralContext);
  const img = ["../src/assets/Aung Chan Myae.jpg"];
  return (
    <section
      className={` ${
        !profile && " animate__animated animate__fadeOut hidden"
      } animate__animated animate__fadeIn `}
    >
      <Container>
        <div className=" w-full grid max-sm:mb-5 max-lg:mb-10 max-sm:border-b-2 max-sm:border-r-2 max-md:border-b-4 max-lg:border-[#df4f3e] max-sm:grid-cols-2 max-md:gap-3 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 lg:gap-2 ">
          <section className=" flex md:items-center justify-center max-md:col-span-1 md:col-span-2 lg:col-span-1">
            <div className=" max-sm:w-full max-md:w-8/12 md:w-10/12 xl:w-3/4 lg:w-12/12 xl:m-auto">
              <img
                className=" select-none max-sm:rounded-full max-lg:rounded-full xl:rounded-full lg:rounded-full"
                src="../public/Aung Chan Myae.jpg"
                alt=""
              />
            </div>
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
              <div className=" mb-5 sm:m-auto md:py-5 lg:p-5 sm:border-b-4 sm:border-[#df4f3e] sm:justify-center sm:items-center sm:flex sm:flex-col md:gap-4 lg:gap-2">
                <h1 className="  mb-2 text-white text-5xl font-medium font-serif ">
                  Aung Chan Myae
                </h1>
                <p className=" px-3 py-1 rounded shadow-2xl shadow-zinc-950 text-stone-400 text-2xl font-mono ">
                  Junior Web Developer
                </p>
              </div>
              <div className=" max-lg:hidden xl:m-auto lg:mx-3">
                <ContrastDetail />
              </div>
            </div>
          </section>
        </div>
        <section className=" lg:hidden max-lg:w-full max-lg:col-span-2">
          <div className=" ">
            <ContrastDetail />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Profile;
