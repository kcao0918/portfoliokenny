"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ResumeButton from "./ui/ResumeButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="relative flex justify-center my-20 x-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="text-xs tracking-widest text-center text-blue-100 uppercase max-w-80">
            My Personal Portfolio with NextJS and TailwindCSS
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Welcome to my Personal Portfolio"
          />
          <p className="mb-3 text-sm text-center md:tracking-wider md:text-lg lg:text-2xl">
            Hi, I&apos;m Kenny, a Software Developer from New York City
          </p>
          <ResumeButton title="Download Resume" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
