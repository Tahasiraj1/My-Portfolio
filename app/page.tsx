import About from "@/components/About";
import Skills from "@/components/Skills";
import React from "react";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";

const page = () => {
  return (
    <div className="bg-neutral-950 flex-col justify-center items-center h-auto overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Services />
      <WhyMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default page;
