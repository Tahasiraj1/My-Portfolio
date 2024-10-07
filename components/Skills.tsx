"use client"
import React from 'react'
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";


const Skills = () => {

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  return (
    <div className='flex flex-col justify-center p-8 md:px-40 animate-in slide-in-from-bottom-full transition-transform transform duration-500'>
        {/* HTML */}
        <article className='bg-white bg-opacity-55 hover:scale-105 hover:shadow-xl transition-transform duration-300 border border:2 border-emerald-700 rounded-2xl mb-8'>
      <div className='m-4 flex flex-col items-center hover:text-orange-700'>
      <ImHtmlFive className='hover:scale-110' size={60} />
      <h1 className='text-2xl font-bold mb-4 ml-2'>
        <strong>HTML</strong>
      </h1>
      </div>
      <h2 className='text-lg font-mono ml-4 mb-6'>
        HTML (HyperText Markup Language) is the standard language for creating web pages.
      </h2>
      <h3 className='text-lg ml-4 font-mono mb-4'>
        <strong>Proficiency:</strong><br/>
        Advanced, with expertise in building structured and semantic websites.
      </h3>
      <h4 className='text-lg ml-4 font-mono mb-4'>
        <strong>Experience:</strong><br/>
        Used extensively in building fully responsive web pages and interactive web elements for over 10 projects.
      </h4>
      </article>
      {/* CSS */}
      <article className='bg-white bg-opacity-55 hover:scale-105 hover:shadow-xl transition-transform duration-300 border border:2 border-emerald-700 rounded-2xl mb-8'>
      <div className='m-4 flex flex-col items-center hover:text-blue-500'>
      <SiCss3 className='hover:scale-110' size={60} />
      <h1 className='text-2xl font-bold mb-4 ml-2'>
        <strong>CSS</strong>
      </h1>
      </div>
      <h2 className='text-lg font-mono ml-4 mb-6'>
      CSS (Cascading Style Sheets) is used to style and layout web pages.
      </h2>
      <h3 className='text-lg ml-4 font-mono mb-4'>
        <strong>Proficiency:</strong><br/>
        Advanced, with hands-on experience in creating responsive and modern UI designs using frameworks like Tailwind CSS and animations.
      </h3>
      <h4 className='text-lg ml-4 font-mono mb-4'>
        <strong>Experience:</strong><br/>
        Applied in projects for creating fully responsive designs with cross-browser compatibility.
      </h4>
      </article>
      {/* TypeScript */}
      <article className='bg-white bg-opacity-55 hover:scale-105 hover:shadow-xl transition-transform duration-300 border border:2 border-emerald-700 rounded-2xl mb-8'>
      <div className='m-4 flex flex-col items-center hover:text-blue-700'>
      <SiTypescript className='hover:scale-110' size={60} />
      <h1 className='text-2xl font-bold mb-4 ml-2'>
        <strong>TypeScript</strong>
      </h1>
      </div>
      <h2 className='text-lg font-mono ml-4 mr-2 mb-6'>
      TypeScript is a typed superset of JavaScript that enhances code quality by providing static types.
      </h2>
      <h3 className='text-lg ml-4 font-mono mb-4'>
        <strong>Proficiency:</strong><br/>
        Intermediate, with in-depth knowledge of object-oriented programming principles and type-checking.
      </h3>
      <h4 className='text-lg ml-4 font-mono mb-4'>
        <strong>Experience:</strong><br/>
        Developed scalable and maintainable applications using TypeScript in multiple personal projects.
      </h4>
      </article>
      {/* React */}
      <article className='bg-white bg-opacity-55 hover:scale-105 hover:shadow-xl transition-transform duration-300 border border:2 border-emerald-700 rounded-2xl mb-8'>
      <div className='m-4 flex flex-col items-center hover:text-sky-700'>
      <FaReact className='hover:scale-110' size={60} />
      <h1 className='text-2xl font-bold mb-4 ml-2'>
        <strong>React</strong>
      </h1>
      </div>
      <h2 className='text-lg font-mono ml-4 mb-6'>
      React is a JavaScript library for building user interfaces using components.
      </h2>
      <h3 className='text-lg ml-4 font-mono mb-4'>
        <strong>Proficiency:</strong><br/>
        Intermediate, with expertise in building reusable components, managing state with useState, and handling side effects with useEffect.
      </h3>
      <h4 className='text-lg ml-4 font-mono mb-4'>
        <strong>Experience:</strong><br/>
        Built interactive web applications like a weather widget, a password generator, a BMI calculator & many more using React.
      </h4>
      </article>
      {/* Next.js */}
      <article className='bg-white bg-opacity-55 hover:scale-105 hover:shadow-xl transition-transform duration-300 border border:2 border-emerald-700 rounded-2xl mb-8'>
      <div className='m-4 flex flex-col items-center hover:text-white'>
      <RiNextjsFill className='hover:scale-110' size={60} />
      <h1 className='text-2xl font-bold mb-4 ml-2'>
        <strong>Next.js</strong>
      </h1>
      </div>
      <h2 className='text-lg font-mono ml-4 mb-6'>
      Next.js is a React framework that enables server-side rendering and static site generation for optimal performance.
      </h2>
      <h3 className='text-lg ml-4 font-mono mb-4'>
        <strong>Proficiency:</strong><br/>
        Intermediate, proficient in building SEO-friendly web applications with API integration.
      </h3>
      <h4 className='text-lg ml-4 font-mono mb-4'>
        <strong>Experience:</strong><br/>
        Developed a weather widget project and worked on multiple projects focused on performance optimization using Next.js.
      </h4>
      </article>
      {/* Tailwind CSS */}
      <article className='bg-white bg-opacity-55 hover:scale-105 hover:shadow-xl transition-transform duration-300 border border:2 border-emerald-700 rounded-2xl mb-8'>
      <div className='m-4 flex flex-col items-center hover:text-blue-600'>
      <RiTailwindCssFill className='hover:scale-110' size={60} />
      <h1 className='text-2xl font-bold mb-4 ml-2'>
        <strong>Tailwind CSS</strong>
      </h1>
      </div>
      <h2 className='text-lg font-mono ml-4 mb-6'>
      Tailwind CSS is a utility-first CSS framework that allows for rapid UI development by providing low-level utility classes.
      </h2>
      <h3 className='text-lg ml-4 font-mono mb-4'>
        <strong>Proficiency:</strong><br/>
        Intermediate, with a strong grasp of building responsive and modern designs quickly using Tailwind&rsquo;s utility classes.
      </h3>
      <h4 className='text-lg ml-4 font-mono mb-4'>
        <strong>Experience:</strong><br/>
        Applied Tailwind CSS in various projects like a Movie Application and Password Generator to create responsive, mobile-first interfaces.
      </h4>
      </article>
      {/* Shadcn UI */}
      <article className='bg-white bg-opacity-55 hover:scale-105 hover:shadow-xl transition-transform duration-300 border border:2 border-emerald-700 rounded-2xl mb-8'>
      <div className='m-4 flex flex-col hover:text-white items-center'>
      <SiShadcnui className='hover:scale-110' size={45} />
      <h1 className='text-2xl font-bold mb-4 ml-2'>
        <strong>Shadcn UI</strong>
      </h1>
      </div>
      <h2 className='text-lg font-mono ml-4 mb-6'>
      Shadcn UI provides pre-built components with flexible styling options for building modern UIs using Tailwind CSS.
      </h2>
      <h3 className='text-lg ml-4 font-mono mb-4'>
        <strong>Proficiency:</strong><br/>
        Intermediate, with a focus on integrating complex UI components such as cards, input, select, buttons, and dialogs into React applications.
      </h3>
      <h4 className='text-lg ml-4 font-mono mb-4'>
        <strong>Experience:</strong><br/>
        Used Shadcn UI extensively in projects like a Tip Calculator and Pomodoro Timer to create user-friendly, stylish, and functional interfaces.
      </h4>
      </article>
      {/* Node.js */}
      <article className='bg-white bg-opacity-55 hover:scale-105 hover:shadow-xl transition-transform duration-300 border border:2 border-emerald-700 rounded-2xl mb-8'>
      <div className='m-4 flex flex-col items-center hover:text-lime-600'>
      <FaNodeJs className='hover:scale-110' size={60} />
      <h1 className='text-2xl font-bold mb-4 ml-2'>
        <strong>Node.js</strong>
      </h1>
      </div>
      <h2 className='text-lg font-mono ml-4 mb-6'>
      Node.js is a JavaScript runtime built on Chrome&rsquo;s V8 engine, allowing you to build fast, scalable server-side applications.
      </h2>
      <h3 className='text-lg ml-4 font-mono mb-4'>
        <strong>Proficiency:</strong><br/>
        Intermediate, skilled in using Node.js for managing user interactions in command-line applications and performing asynchronous operations.
      </h3>
      <h4 className='text-lg ml-4 font-mono mb-4'>
        <strong>Experience:</strong><br/>
        Developed interactive CLI tools using inquirer and chalk for quizzes and user input processing.
      </h4>
      </article>
      <div className="flex justify-end mr-2 md:mr-5 mb-10">
        <Button
        variant="ghost"
        size="icon"
        className='bg-emerald-500 hover:bg-emerald-600 rounded-full'
        onClick={handleScrollToTop}
        >
          <FaArrowAltCircleUp size={40} className='active:scale-90 transition-transform transform duration-0' />
        </Button>
        </div>
    </div>
  );
}

export default Skills
