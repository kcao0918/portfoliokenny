import { socials } from "@/data";
import React from "react";
import Title from "./Title";

const Footer = () => {
  return (
    <section id="contact" className="w-full px-0 py-0 mb-10">
      <div className="container items-center justify-center w-full sm:flex-row sm:justify-between max-sm:flex-col">
        <Title title="Contact Me" />
        <ul className="flex justify-center w-full gap-10 mt-10">
          {socials.map((item, index) => {
            const Icon = item.Icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors rounded-full size-12 hover:bg-blue-900"
              >
                <Icon className="size-12" /> {/* Adjust the size as needed */}
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
