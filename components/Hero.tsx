"use client";

import React from "react";
import { motion } from "motion/react";
import { TextLoop } from "./ui/TextLoop";
import ElegantShape from "@/components/ui/ElegantShape";
import { AnimatedShinyText } from "./ui/AnimatedShinyText";
import { Button } from "./ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Hero({
  title1 = "I'm Taha Siraj",
}: {
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          blur="backdrop-blur-[2px]"
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          blur="backdrop-blur-[2px]"
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          blur="backdrop-blur-[2px]"
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] hidden md:block"
        />

        <ElegantShape
          blur="backdrop-blur-[2px]"
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%] hidden md:block"
        />

        <ElegantShape
          blur="backdrop-blur-[2px]"
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%] hidden md:block"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center text-center group gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <span className="transition-transform duration-400 animate-wiggle">
              👋
            </span>
            <span className="tracking-wide ">
              <AnimatedShinyText>Hello There!</AnimatedShinyText>
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-bold mb-6 md:mb-8 tracking-tight">
              <span className="text-4xl sm:text-6xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                {title1}
              </span>
              <br />
              <span className="text-4xl md:text-5xl ">
                <TextLoop>
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">Full Stack Developer</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">Agentic AI Developer</span>
                </TextLoop>
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Crafting exceptional digital experiences through innovative design
              and cutting-edge technology.
            </p>
          </motion.div>
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="\Resume.pdf" download={true}>
              <Button
                variant="gooeyLeft"
                className="font-bold text-lg rounded-full bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-800 p-6 items-center justify-center"
              >
                Download Resume <Download className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
