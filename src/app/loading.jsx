"use client";

import { Mosaic } from "react-loading-indicators";

// Shown by Next.js while a page is loading.
const Loading = () => (
  <div className=" w-full h-full flex justify-center items-center">
    <Mosaic color="#df4f3e" size="medium" text="" textColor="" />
  </div>
);

export default Loading;
