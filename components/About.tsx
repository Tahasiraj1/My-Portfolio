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
          <div className="m-4 font-mono text-base sm:text-lg">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>

            <p className="mb-4">
              👋 Hi, I&apos;m <strong>Taha Siraj</strong>, a{" "}
              <strong>full-stack developer</strong> passionate about building
              scalable and interactive applications. My journey began in{" "}
              <strong>February 2023</strong> with TypeScript, and since then,
              I&apos;ve built projects ranging from{" "}
              <strong>e-commerce platforms</strong> to{" "}
              <strong>dynamic dashboards and interactive web apps</strong>.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">🚀 My Journey</h3>
            <p className="mb-4">
              I started with a <strong>50-day TypeScript challenge</strong>,
              followed by a <strong>30-day DSA challenge</strong>, strengthening
              my problem-solving skills. I then participated in a{" "}
              <strong>milestone-based hackathon</strong>, developing a{" "}
              <strong>Dynamic Resume Builder</strong> with real-time editing,
              unique user paths, and PDF downloads.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              🌟 Projects & Experience
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Full-Stack E-Commerce Store</strong> – Secure
                authentication, Stripe payments, and admin management.
              </li>
              <li>
                <strong>Admin Dashboard</strong> – Integrated Google Analytics,
                order tracking, and customer management.
              </li>
              <li>
                <strong>Martial Arts Academy Website</strong> – Interactive
                student portal with course management.
              </li>
              <li>
                <strong>Dynamic Blog & Landing Pages</strong> – SEO-friendly,
                responsive, and optimized for performance.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              🎯 Current Focus
            </h3>
            <p className="mb-4">
              I’m diving deeper into{" "}
              <strong>full-stack development with Next.js</strong>, exploring{" "}
              <strong>state management, UI/UX optimization</strong>, and
              advancing into <strong>Agentic AI and Generative AI</strong> using
              Python.
            </p>

            <p className="mt-6">
              🔍 <strong>Open to collaborations!</strong> Let’s connect and
              build something amazing together. 🚀
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
