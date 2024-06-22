import React from "react";
import Title from "./Title";
import { ProjectItems } from "@/data";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <Title title="Projects" />
      <div className="grid cols-1 sm:grid-cols-2 pt-20">
        {ProjectItems.map((project, index) => {
          return <Link href={project.link} key={index}></Link>;
        })}
      </div>
    </div>
  );
};

export default Projects;
