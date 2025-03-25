"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  blur,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  blur?: string | number;
}) {
  const { scrollY } = useScroll();

  // Transform the scrollY value to control the vertical position
  // As scrollY increases (scrolling down), the shape will move up (-300)
  const yPosition = useTransform(
    scrollY,
    [0, 200], // Input range: 0px to 200px of scroll
    [0, -300] // Output range: from 0 (resting position) to -300 (up off screen)
  );

  // Transform scrollY to control opacity
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      style={{
        y: yPosition,
        opacity: opacity,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-linear-to-r to-transparent",
            gradient,
            `${blur} border-2 border-emerald-600/[0.15]`,
            "shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}
