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
              <p className="text-xl mb-4">{experience.company}</p>
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {experience.badge}
              </h2>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {experience?.image && (
                  <Image
                    src={`/GideImage.png`}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {experience.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
