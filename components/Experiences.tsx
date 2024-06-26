import Title from "./Title";
import Image from "next/image";
import { TracingBeam } from "./ui/TracingBeam";
import { ExperiencesList } from "@/data";

export function Experiences() {
  return (
    <div>
      <Title title="Work Experiences" />
      <TracingBeam className="mt-10 px-0">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {ExperiencesList.map((experience, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h1 className="text-2xl mb-0 text-indigo-500 font-bold">
                {experience.company}
              </h1>
              <h2 className="text-sm mb-2 text-indigo-200 font-semibold">
                {experience.role}
              </h2>
              <div>
                {experience.techStack.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    className="relative inline-flex h-7 overflow-hidden rounded-full p-[1px] mr-2"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 text-sm text-white backdrop-blur-3xl">
                      {tech}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-3">
                {experience.descriptionList.map(
                  (description, descriptionIndex) => (
                    <div
                      key={descriptionIndex}
                      className="text-sm mb-1 text-blue-200"
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
    </div>
  );
}
