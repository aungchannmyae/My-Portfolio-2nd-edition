import React, { useEffect } from 'react'
import ScrollReveal from "scrollreveal";

const useScrollReveal = () => {

    const sr = ScrollReveal({
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      opacity: 0,
      delay: 0,
      // reset: false,
    });

  return {sr}
}

export default useScrollReveal