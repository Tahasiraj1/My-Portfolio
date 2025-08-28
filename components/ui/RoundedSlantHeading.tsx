import React from "react";

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
    <div className={`${backgroundColor} ${textColor} py-4 px-10 w-full ${width} relative text-center rounded-r-full rounded-l-none bg-linear-to-r to-transparent backdrop-blur-[2px] border-t-2 border-r-2 border-b-2 border-emerald-600/[0.15] shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] after:absolute after:inset-0 after:rounded-r-full after:rounded-l-none after:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.6)_100%)]`}>
      <div className="flex flex-col">
        <h1 className="text-2xl sm:text-4xl font-semibold uppercase">{text}</h1>
        {paragraph && (
          <p className="text-lg font-semibold uppercase">{paragraph}</p>
        )}
      </div>
    </div>
  );
};
