import React from "react";
import { Highlight } from "./ui/HeroHighlight";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="w-full pt-20 text-center">
      <Highlight className="text-3xl font-semibold">{title}</Highlight>
    </div>
  );
};

export default Title;
