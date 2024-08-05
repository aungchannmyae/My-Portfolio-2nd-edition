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
        <div className=" w-full grid grid-cols-3 lg:gap-2 ">
          <section className=" flex lg:items-start justify-center col-span-1">
            <div className=" xl:w-3/4 lg:w-12/12 xl:m-auto">
              <img className=" select-none xl:rounded-full lg:rounded-[110px]" src={img[0]} alt="" />
            </div>
          </section>
          <section className=" col-span-2 bg-blue">
            <div className=" flex flex-col gap-5">
              <div className=" mb-5 m-auto p-5 border-b-4 border-[#df4f3e] justify-center items-center flex flex-col gap-2">
                <h1 className=" mb-2 text-white text-5xl font-medium font-serif ">
                  Aung Chan Myae
                </h1>
                <p className=" px-3 py-1 rounded shadow-2xl shadow-zinc-950 text-stone-400 text-2xl font-mono ">
                  Junior Web Developer
                </p>
              </div>
              <div className=" xl:m-auto lg:mx-3">
                <ContrastDetail/>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Profile;
