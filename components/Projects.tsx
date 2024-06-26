import React from "react";
import Title from "./Title";
import { ProjectItems } from "@/data";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/CardEffect";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
      <Title title="Recent Projects" />
      <div className="grid cols-1 lg:grid-cols-2 ">
        {ProjectItems.map((project, index) => {
          return (
            <CardContainer key={index}>
              <CardBody className="bg-gray-50 relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-purple-200/[0.5] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border cursor-pointer">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={`/${project.content}`}
                    height={1000}
                    width={1000}
                    className="object-cover w-full h-70 rounded-xl group-hover:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex items-center justify-end mt-7">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="__blank"
                    className="px-4 py-2 font-normal rounded-xl text-md dark:text-violet-200"
                  >
                    Github →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
