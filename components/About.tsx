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
                I&apos;m a <strong>Full-Stack Developer</strong> specializing in <strong>AI-powered solutions</strong> and modern web development. 
                With expertise in <strong>TypeScript, React, and Next.js</strong>, I build intelligent applications that combine cutting-edge AI technology 
                with seamless user experiences.
            </p>
            <p>
                My passion lies in creating <strong>AI agents and automation solutions</strong> that transform how businesses operate. 
                I work extensively with the <strong>OpenAI Agents SDK</strong> to develop intelligent systems that can handle complex tasks, 
                from email automation to data processing and analysis.
            </p>
            <p>
                I also specialize in crafting <strong>stunning portfolio websites</strong> and modern web applications that showcase your work 
                and help you stand out in the digital landscape. Every project I create is built with performance, scalability, and user experience in mind.
            </p>
            <p>
                Whether you need an AI-powered solution to streamline your workflow, a modern website to showcase your portfolio, 
                or custom automation to boost your productivity, I&apos;m here to bring your vision to life.
            </p>
            <p><strong>Ready to build something extraordinary? Let&apos;s create the future together! 🚀</strong></p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
