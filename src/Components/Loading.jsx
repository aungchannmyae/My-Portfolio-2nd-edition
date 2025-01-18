import React from "react";
import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <>
      <main className=" w-full h-screen flex justify-center items-center">
        <section className=" mx-auto ">
          <ThreeDot color="#df4f3e" size="medium" text="" textColor="" />
          
        </section>
      </main>
    </>
  );
};

export default Loading;