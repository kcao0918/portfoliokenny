import React from "react";
import { Highlight } from "./ui/HeroHighlight";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="w-full text-center pt-20">
      <Highlight className="text-3xl font-bold">{title}</Highlight>
    </div>
  );
};

export default Title;
