"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { FaArrowAltCircleUp } from "react-icons/fa";

const About = () => {

    const handleScrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      };

  return (
    <div className='flex flex-col justify-center p-8 md:px-40'>
      <div className='animate-in slide-in-from-bottom-full transition-transform transform duration-500 bg-white bg-opacity-55 border-2 border-emerald-700 m-4 rounded-2xl'>
        <div className='flex flex-row justify-center'>
      <Image
          src="/profile.jpeg"
          alt='Taha Siraj'
          width={200}
          height={100}
          className='m-4 object-cover rounded-full border-2 border-emerald-700'
        />
        </div>
        <article className='p-4'>
            <h1 className='text-3xl font-bold mb-4'>
                <strong>✦ About Me</strong>
            </h1>
            <p className='font-mono text-lg'>
            I am Taha Siraj, a passionate Web Developer with a strong focus on building robust, scalable, and high-performance web applications. Currently, I am honing my skills at the <strong>Governor Initiative of Artificial Intelligence (GIAIC)</strong>, where I am exploring cutting-edge technologies in web development and Generative AI.<br/><br/>
            With a deep love for coding, problem-solving, and learning, I have embarked on a journey to continuously expand my knowledge and enhance my technical expertise. Over the past few months, I have worked on a wide range of projects, each of which has taught me valuable lessons about design, functionality, and user experience.
            </p>
            <h2 className='text-2xl font-bold my-6'>
                <strong>✦ Key Skills and Experience</strong>
            </h2>
            <p className='font-mono text-lg'>
                <strong>
                TypeScript & JavaScript:
                </strong><br/>
                I have developed numerous web applications using TypeScript, focusing on clean, maintainable, and efficient code. From simple tools to complex applications, I aim to create solutions that are easy to scale and optimize.<br/><br/>
                <strong>
                React & Next.js:
                </strong><br/>
                As a front-end developer, I am skilled in building dynamic, SEO-friendly websites using React and Next.js. My experience includes building weather widgets, unit converters, and digital clocks that prioritize performance and user experience.<br/><br/>
                <strong>
                Node.js:
                </strong><br/>
                I have explored server-side programming and event-driven architecture, creating interactive command-line tools to enhance user interaction and simplify workflows.<br/><br/>
                <strong>
                Tailwind CSS & Shadcn UI:
                </strong><br/>
                My design philosophy revolves around simplicity and functionality, and I use Tailwind CSS and Shadcn UI to create clean, responsive, and aesthetically pleasing user interfaces.<br/><br/>
            </p>
            <h3 className='text-2xl font-bold my-6'>
                <strong>✦ Projects that Define My Journey</strong>
            </h3>
            <p className='font-mono text-lg'>
                <strong>
                Dynamic Resume Builder:
                </strong><br/>
                One of my most significant projects was a Dynamic Resume Builder that allows users to fill out a form, dynamically generating their resume and offering editing features. This project taught me how to manage complex data structures and interactions while focusing on user experience.<br/><br/>
                <strong>
                Weather Widget:
                </strong><br/>
                A Next.js project that showcases my ability to integrate APIs and present real-time data in a user-friendly manner. This was one of my early forays into building applications that interact with external data sources.<br/><br/>
                <strong>
                Password Generator & BMI Calculator:
                </strong><br/>
                Two essential projects that enhanced my skills in logic development and user interface design using React, Tailwind CSS, and Shadcn UI. Both focus on delivering practical, user-centric solutions with modern UI elements.<br/><br/>
            </p>
            <h4 className='text-2xl font-bold my-6'>
                <strong>✦ My Passion for Generative AI</strong>
            </h4>
            <p className='font-mono text-lg'>
            As the field of Generative AI continues to grow, I am especially interested in understanding its impact on web development. I am committed to learning how AI technologies can enhance the efficiency and creativity of applications. My journey at GIAIC has only strengthened this interest, and I aim to integrate AI-driven solutions into my web projects to push the boundaries of what is possible.
            </p>
            <h5 className='text-2xl font-bold my-6'>
                <strong>✦ A Personal Note</strong>
            </h5>
            <p className='font-mono text-lg'>
            Beyond coding, I am a firm believer in the power of perseverance and continuous learning. I approach every challenge as an opportunity to grow, whether it&rsquo;s debugging a tricky piece of code or learning a new framework. I enjoy collaborating with fellow developers, sharing knowledge, and contributing to projects that make a difference.
            </p>
        </article>
      </div>
      <div className="flex justify-end mb-5">
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

export default About
