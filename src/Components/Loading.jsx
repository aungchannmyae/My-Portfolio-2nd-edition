import React from "react";
import { FourSquare, Mosaic, ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <>
      <main className=" w-full h-full flex justify-center items-center">
        <section className=" mx-auto ">
          {/* <ThreeDot color="#df4f3e" size="medium" text="" textColor="" /> */}
          <Mosaic color="#df4f3e" size="medium" text="" textColor="" />
          {/* <FourSquare color="#df4f3e" size="medium" text="" textColor="" /> */}
          
        </section>
      </main>
    </>
  );
};

export default Loading;