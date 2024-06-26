import Title from "./Title";
import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";
import { ExperiencesList } from "@/data";

export function Experiences() {
  return (
    <section id="experiences">
      <Title title="Work Experiences" />
      <TracingBeam className="px-0 mt-10 ">
        <div className="relative max-w-2xl pt-4 mx-auto antialiased">
          {ExperiencesList.map((experience, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h1 className="mb-0 text-2xl font-bold text-indigo-500 duration-200 ease-in cursor-pointer hover:text-indigo-200">
                {experience.company}
              </h1>
              <h2 className="mb-2 font-semibold text-indigo-300 text-md">
                {experience.role}
              </h2>
              <div>
                {experience.techStack.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    className="relative inline-flex h-7 overflow-hidden rounded-full p-[1px] mr-2 mb-2 font-semibold"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex items-center justify-center w-full h-full px-3 text-sm text-white rounded-full cursor-pointer bg-slate-950 backdrop-blur-3xl">
                      {tech}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-1">
                {experience.descriptionList.map(
                  (description, descriptionIndex) => (
                    <div
                      key={descriptionIndex}
                      className="mb-2 text-sm text-blue-200"
                    >
                      {description}
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}
