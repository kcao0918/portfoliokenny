import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-7",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <div
            key={idx}
            className="relative block w-full h-full p-2 group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block w-full h-full rounded-lg bg-neutral-200 dark:bg-purple-700"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-20 w-full p-4 overflow-hidden duration-500 bg-black rounded-md cursor-pointer group-hover:ring-2 ring-indigo-400 trasition-all">
              <div className="relative py-10">
                <Icon className="mx-auto size-8" />
                <p className="font-bold text-center text-gray-300 text-md sm:text-2xl">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
