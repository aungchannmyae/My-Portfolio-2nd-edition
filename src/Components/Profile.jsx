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
        <div className=" w-full grid max-sm:mb-5 max-sm:border-b-2 max-sm:border-r-2 max-sm:border-[#df4f3e] max-sm:grid-cols-2 max-sm:gap-3 sm:grid-cols-3 lg:gap-2 ">
          <section className=" flex md:items-start justify-center col-span-1">
            <div className=" max-sm:w-full max-lg:w-8/12 xl:w-3/4 lg:w-12/12 xl:m-auto">
              <img
                className=" select-none max-sm:rounded-[100px] xl:rounded-full lg:rounded-[110px]"
                src={img[0]}
                alt=""
              />
            </div>
          </section>
          <section className="sm:hidden max-sm:col-span-1">
            <div className="">
              <div className=" max-sm:p-4">
                <h1 className="max-sm:flex max-sm:justify-end max-sm:text-6xl mb-2 text-white font-medium font-serif ">
                  Aung<br></br>
                  chAn
                  <br></br>
                  myAe
                </h1>
              </div>
            </div>
          </section>
          <section className=" sm:hidden max-sm:m-auto max-sm:w-12/12 max-sm:pb-5 max-sm:col-span-2">
            <div>
              <div>
                <p className=" px-3 py-1 rounded shadow-2xl shadow-zinc-950 text-stone-400 text-2xl font-mono ">
                  Junior Web Developer
                </p>
              </div>
            </div>
          </section>

          <section className=" max-sm:hidden sm:col-span-2 bg-blue">
            <div className=" sm:flex sm:flex-col gap-5">
              <div className=" mb-5 sm:m-auto sm:p-5 sm:border-b-4 sm:border-[#df4f3e] sm:justify-center sm:items-center sm:flex sm:flex-col gap-2">
                <h1 className="  mb-2 text-white text-5xl font-medium font-serif ">
                  Aung Chan Myae
                </h1>
                <p className=" px-3 py-1 rounded shadow-2xl shadow-zinc-950 text-stone-400 text-2xl font-mono ">
                  Junior Web Developer
                </p>
              </div>
              <div className=" xl:m-auto lg:mx-3">
                <ContrastDetail />
              </div>
            </div>
          </section>
        </div>
        <section className=" sm:hidden max-sm:w-full max-sm:col-span-2">
          <div className=" ">
            <ContrastDetail />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Profile;
