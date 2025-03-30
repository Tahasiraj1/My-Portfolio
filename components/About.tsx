"use client";

import React from "react";
import { SlantedHeading } from "./ui/RoundedSlantHeading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-8 relative">
      <SlantedHeading text="About Me" />
      <section id="about">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-8 px-4"
        >
          <div className="m-4 font-mono text-base sm:text-lg space-y-4 text-gray-300">
            <p>
                I&apos;m a <strong>TypeScript, React, and Next.js Developer</strong> with a passion for building seamless, high-performance web applications. 
                With experience in frameworks like <strong>Tailwind CSS</strong>, I specialize in crafting dynamic and responsive user interfaces that enhance user experience.
            </p>
            <p>
                Currently, I&apos;m diving into the exciting world of <strong>Agentic AI</strong>, exploring how to integrate intelligence into applications using 
                the <strong>OpenAI Agents SDK</strong>. My goal is to bridge the gap between AI and web development, creating innovative solutions that push 
                the boundaries of what&apos;s possible with AI.
            </p>
            <p>
                When I&apos;m not coding, you&apos;ll find me experimenting with new technologies, refining my craft, and staying ahead of the ever-evolving web ecosystem.
            </p>
            <p><strong>Let&apos;s build something amazing together! 🚀</strong></p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
