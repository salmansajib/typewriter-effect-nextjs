"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = ({ words }) => {
  return (
    <h1 className=" text-5xl md:text-7xl font-bold mt-10 bg-gradient-to-tr from-green-500 to-blue-500 max-w-max mx-auto text-transparent bg-clip-text min-h-[150px] px-2">
      <Typewriter
        words={words}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default TypewriterEffect;
