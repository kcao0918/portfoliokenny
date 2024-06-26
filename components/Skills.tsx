"use client";

import React from "react";
import { HoverEffect } from "./ui/HoverEffect";
import { skillsList } from "@/data";
import Title from "./Title";

const Skills = () => {
  return (
    <div>
      <Title title="Technical Skills" />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skillsList} />
      </div>
    </div>
  );
};

export default Skills;
