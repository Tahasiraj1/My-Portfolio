"use client";
import React, { useState } from "react";

const HoverEffect = ({ children, gradient }: { children: React.ReactNode, gradient: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <div
      className="relative group p-[1px] rounded-lg bg-neutral-950 transition-all duration-300"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`absolute inset-0 rounded-xl ${gradient} opacity-0 group-hover:opacity-100 blur-md transition-opacity`}
        style={{
          maskImage: `radial-gradient(
          circle at ${mousePosition.x}px ${mousePosition.y}px,
          black 20%,
          transparent 70%
        )`,
          WebkitMaskImage: `radial-gradient(
          circle at ${mousePosition.x}px ${mousePosition.y}px,
          black 20%,
          transparent 70%
        )`,
        }}
      />
      {children}
    </div>
  );
};

export default HoverEffect;