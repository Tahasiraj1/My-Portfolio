"use client";

import { useState } from "react";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiTypescript, SiStreamlit, SiSanity } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SlantedHeading } from "./ui/RoundedSlantHeading";
import { Badge } from "@/components/ui/badge";
import HoverEffect from "./ui/HoverEffect";
import { AiOutlineOpenAI } from "react-icons/ai";

// Enhanced skills data with proficiency and categories
const skills = [
  {
    name: "HTML",
    icon: <ImHtmlFive className="fill-orange-700" size={60} />,
    proficiency: 90,
    category: "frontend",
    description:
      "Semantic HTML5, accessibility best practices, and SEO optimization",
    yearsExperience: 1,
    color: "bg-orange-500",
    gradient: "bg-gradient-to-r from-orange-500 to-orange-700",
  },
  {
    name: "CSS",
    icon: <SiCss3 className="fill-blue-500" size={60} />,
    proficiency: 65,
    category: "frontend",
    description:
      "Modern CSS techniques including Grid, Flexbox, and animations",
    yearsExperience: 1,
    color: "bg-blue-500",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="fill-lime-400" size={60} />,
    proficiency: 70,
    category: "backend",
    description: "Server-side JavaScript, RESTful APIs, and Express.js",
    yearsExperience: 1,
    color: "bg-green-600",
    gradient: "bg-gradient-to-r from-green-500 to-green-700",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="fill-blue-700" size={60} />,
    proficiency: 65,
    category: "language",
    description:
      "Type-safe JavaScript development with advanced TypeScript features",
    yearsExperience: 1,
    color: "bg-blue-500",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "React",
    icon: <FaReact className="fill-sky-700" size={60} />,
    proficiency: 65,
    category: "frontend",
    description:
      "Component architecture, hooks, context API, and state management",
    yearsExperience: 1,
    color: "bg-blue-600",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill className="fill-white dark:fill-white" size={60} />,
    proficiency: 80,
    category: "frontend",
    description: "Server components, App Router, and full-stack development",
    yearsExperience: 1,
    color: "bg-gray-600",
    gradient: "bg-gradient-to-r from-gray-500 to-gray-700",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="fill-blue-600" size={60} />,
    proficiency: 80,
    category: "frontend",
    description: "Utility-first CSS framework for rapid UI development",
    yearsExperience: 1,
    color: "bg-blue-500",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "Sanity",
    icon: <SiSanity className="fill-red-500" size={60} />,
    proficiency: 80,
    category: "backend",
    description: "Modern CMS for building websites and apps",
    yearsExperience: 1,
    color: "bg-red-500",
    gradient: "bg-gradient-to-r from-red-500 to-red-700",
  },
  {
    name: "Python",
    icon: (
      <FaPython className="fill-yellow-500 dark:fill-yellow-500" size={60} />
    ),
    proficiency: 55,
    category: "language",
    description: "Data analysis, automation, and backend development",
    yearsExperience: '0-1',
    color: "bg-amber-500",
    gradient: "bg-gradient-to-r from-amber-500 to-amber-700",
  },
  {
    name: "Streamlit",
    icon: <SiStreamlit className="fill-red-500 dark:fill-red-500" size={45} />,
    proficiency: 50,
    category: "frontend",
    description: "Accessible and interactive data apps with Python",
    yearsExperience: '0-1',
    color: "bg-red-500",
    gradient: "bg-gradient-to-r from-red-500 to-red-700",
  },
  {
    name: 'OpenAI Agents SDK',
    icon: <AiOutlineOpenAI className="fill-white" size={45} />,
    proficiency: 30,
    category: 'Agents Development',
    description: 'Develop AI Agents using Python',
    yearsExperience: '0-1',
    color: 'bg-gray-600',
    gradient: 'bg-gradient-to-r from-gray-500 to-gray-700',
  }
];

const Skills = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="relative">
      <SlantedHeading text="Skills" />
      <section id="skills" className="container mx-auto px-4 py-4">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <AnimatePresence mode="wait">
            {skills.map((skill, index) => (
              <HoverEffect gradient={skill.gradient} key={skill.name} >
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="bg-card rounded-xl p-6 relative group bg-neutral-900 overflow-hidden"
                onViewportEnter={() => setIsInView(true)}
              >
                {/* Background accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 group-hover:w-28 group-hover:h-28 transition-all transform duration-300 ease-in-out ${skill.color}`}
                />

                {/* Skill Header */}
                <div className="flex items-center mb-4">
                  <div className="p-3 mr-4 transition-transform duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold ">{skill.name}</h3>
                    <Badge className="mt-1 text-white bg-neutral-700 hover:bg-neutral-700">
                      {skill.yearsExperience}{" "}
                      {skill.yearsExperience === 1 ? "year" : "years"}
                    </Badge>
                  </div>
                </div>

                {/* Skill Bar */}
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm font-medium">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{
                        width: isInView ? `${skill.proficiency}%` : 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>

                {/* Skill Details - Revealed on hover */}
                <div className="mt-4 overflow-hidden">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-muted-foreground"
                  >
                    {skill.description}
                  </motion.div>
                </div>
              </motion.div>
              </HoverEffect>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Skills;
