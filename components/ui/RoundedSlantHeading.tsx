import React from "react";
import { motion } from "framer-motion";

interface SlantedHeadingProps {
  text: string;
  paragraph?: string;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
}

export const SlantedHeading: React.FC<SlantedHeadingProps> = ({
  text,
  paragraph,
  backgroundColor = "bg-emerald-950",
  textColor = "text-white",
  width = "max-w-[600px]",
}) => {
  return (
    <motion.div
      initial={{ x: -200 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${backgroundColor} ${textColor} py-4 px-10 w-full ${width} relative text-center rounded-r-full bg-linear-to-r to-transparent backdrop-blur-[2px] border-2 border-emerald-600/[0.15] shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] after:absolute after:inset-0 after:rounded-full after:bg-radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.4), transparent 60%)
`}
    >
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-4xl font-semibold uppercase">{text}</h1>
        {paragraph && (
          <p className="text-lg font-semibold uppercase">{paragraph}</p>
        )}
      </div>
    </motion.div>
  );
};
