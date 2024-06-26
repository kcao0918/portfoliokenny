"use client";

import React from "react";
import { HoverEffect } from "./ui/HoverEffect";
import { skillsList } from "@/data";
import Title from "./Title";

const Skills = () => {
  return (
    <section id="skills">
      <Title title="Technical Skills" />
      <div className="max-w-5xl px-8 mx-auto">
        <HoverEffect items={skillsList} />
      </div>
    </section>
  );
};

export default Skills;
