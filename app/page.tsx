import About from "@/components/About";
import Skills from "@/components/Skills";
import React from "react";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { MorphingDialogBasicTwo } from "@/components/newprojects";

const page = () => {
  return (
    <div className="bg-neutral-950 flex-col justify-center items-center h-auto overflow-hidden">
      <Hero />
      <Skills />
      <About />
      <MorphingDialogBasicTwo />
      <Contact />
    </div>
  );
};

export default page;
