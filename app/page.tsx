import About from "@/components/About";
import Skills from "@/components/Skills";
import React from "react";
import Contact from "@/components/Contact";
import ProjectsShowcase from "@/components/Projects";
import Hero from "@/components/Hero";

const page = () => {
  return (
    <div className="bg-neutral-950 flex-col justify-center items-center h-auto overflow-hidden">
      <Hero />
      <Skills />
      <About />
      <ProjectsShowcase />
      <Contact />
    </div>
  );
};

export default page;
