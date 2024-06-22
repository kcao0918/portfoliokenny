import React from "react";
import { Highlight } from "./ui/HeroHighlight";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="w-full text-center">
      <Highlight className="text-2xl font-bold">{title}</Highlight>
    </div>
  );
};

export default Title;
