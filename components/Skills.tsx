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
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Draggable } from "./dnd";
import { GripVertical } from "lucide-react";

// Enhanced skills data with proficiency and categories
const initialSkills = [
  {
    name: "HTML",
    id: "1",
    icon: <ImHtmlFive className="fill-orange-700" size={60} />,
    dndIcon: 'text-orange-400',
    proficiency: 90,
    yearsExperience: 1,
    color: "bg-orange-500",
    ring: "ring-orange-500",
    gradient: "bg-gradient-to-r from-orange-500 to-orange-700",
  },
  {
    name: "CSS",
    id: "2",
    icon: <SiCss3 className="fill-blue-500" size={60} />,
    dndIcon: 'text-blue-300',
    proficiency: 65,
    yearsExperience: 1,
    color: "bg-blue-500",
    ring: "ring-blue-500",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "Node.js",
    id: "3",
    icon: <FaNodeJs className="fill-lime-400" size={60} />,
    dndIcon: 'text-lime-300',
    proficiency: 70,
    yearsExperience: 1,
    color: "bg-green-600",
    ring: "ring-green-600",
    gradient: "bg-gradient-to-r from-green-500 to-green-700",
  },
  {
    name: "TypeScript",
    id: "4",
    icon: <SiTypescript className="fill-blue-700" size={60} />,
    dndIcon: 'text-blue-400',
    proficiency: 65,
    yearsExperience: 1,
    color: "bg-blue-500",
    ring: "ring-blue-500",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "React",
    id: "5",
    icon: <FaReact className="fill-sky-700" size={60} />,
    dndIcon: 'text-blue-400',
    proficiency: 65,
    yearsExperience: 1,
    color: "bg-blue-600",
    ring: "ring-blue-600",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "Next.js",
    id: "6",
    icon: <RiNextjsFill className="fill-white dark:fill-white" size={60} />,
    dndIcon: 'text-gray-400',
    proficiency: 80,
    yearsExperience: 1,
    color: "bg-gray-600",
    ring: "ring-gray-600",
    gradient: "bg-gradient-to-r from-gray-500 to-gray-700",
  },
  {
    name: "Tailwind CSS",
    id: "7",
    icon: <RiTailwindCssFill className="fill-blue-600" size={60} />,
    dndIcon: 'text-blue-300',
    proficiency: 80,
    yearsExperience: 1,
    color: "bg-blue-500",
    ring: "ring-blue-500",
    gradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    name: "Sanity",
    id: "8",
    icon: <SiSanity className="fill-red-500" size={60} />,
    dndIcon: 'text-red-300',
    proficiency: 80,
    yearsExperience: 1,
    color: "bg-red-500",
    ring: "ring-red-500",
    gradient: "bg-gradient-to-r from-red-500 to-red-700",
  },
  {
    name: "Python",
    id: "9",
    icon: <FaPython className="fill-yellow-500 dark:fill-yellow-500" size={60} />,
    dndIcon: 'text-amber-300',
    proficiency: 55,
    yearsExperience: "0-1",
    color: "bg-amber-500",
    ring: "ring-amber-500",
    gradient: "bg-gradient-to-r from-amber-500 to-amber-700",
  },
  {
    name: "Streamlit",
    id: "10",
    icon: <SiStreamlit className="fill-red-500 dark:fill-red-500" size={60} />,
    dndIcon: 'text-red-300',
    proficiency: 50,
    yearsExperience: "0-1",
    color: "bg-red-500",
    ring: "ring-red-500",
    gradient: "bg-gradient-to-r from-red-500 to-red-700",
  },
  {
    name: "OpenAI Agents SDK",
    id: "11",
    icon: <AiOutlineOpenAI className="fill-white" size={60} />,
    dndIcon: 'text-gray-300',
    proficiency: 30,
    yearsExperience: "0-1",
    color: "bg-gray-600",
    ring: "ring-gray-600",
    gradient: "bg-gradient-to-r from-gray-500 to-gray-700",
  },
];

const Skills = () => {
  const [isInView, setIsInView] = useState(false);
  const [skills, setSkills] = useState(initialSkills);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor),
    useSensor(TouchSensor)
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
          const oldIndex = skills.findIndex((s) => s.id === active.id);
          const newIndex = skills.findIndex((s) => s.id === over?.id);
          setSkills(arrayMove(skills, oldIndex, newIndex));
        }
      }}
    >
      <div className="relative">
        <SlantedHeading text="Skills" />
        <section id="skills" className="container mx-auto px-4 py-4">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <AnimatePresence mode="wait">
              {skills.map((skill, index) => (
                <Draggable key={skill.id} id={String(skill.id)}>
                  {({ setNodeRef, style, dragHandleProps, isDragging, isOver }) => (
                    <motion.div
                      layout
                      layoutId={skill.id}
                      ref={setNodeRef}
                      style={style}
                      className={`rounded-xl group relative overflow-hidden
                        ${isDragging ? "opacity-50 z-50 scale-105" : "opacity-100"}
                        ${isOver ? `ring-2 ${skill.ring}` : ""}
                      `}
                    >
                      <HoverEffect gradient={skill.gradient} key={skill.name}>
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
                          {/* Drag Handle Button */}
                          <div
                            className="absolute top-2 right-2 cursor-grab touch-none"
                            {...dragHandleProps}
                          >
                            <GripVertical className={`${skill.dndIcon}`} />
                          </div>
                          {/* Skill Header */}
                          <div className="flex items-center mb-4">
                            <div className="p-3 mr-4 transition-transform duration-300 group-hover:scale-110">
                              {skill.icon}
                            </div>

                            <div>
                              <h3 className="text-xl font-bold ">
                                {skill.name}
                              </h3>
                              <Badge className="mt-1 text-white bg-neutral-700 hover:bg-neutral-700">
                                {skill.yearsExperience}{" "}
                                {skill.yearsExperience === 1 ? "year" : "years"}
                              </Badge>
                            </div>
                          </div>

                          {/* Skill Bar */}
                          <div className="mt-4">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">
                                Proficiency
                              </span>
                              <span className="text-sm font-medium">
                                {skill.proficiency}%
                              </span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
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
                        </motion.div>
                      </HoverEffect>
                    </motion.div>
                  )}
                </Draggable>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </DndContext>
  );
};

export default Skills;
