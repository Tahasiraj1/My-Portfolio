"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Home = () => {

  const handleScrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  return (
    <main className='p-4 sm:p-8 md:p-12'>
      {/* Intro */}
        <section id='intro' className='text-4xl font-bold text-center flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col tracking-tighter md:mr-5'>
        <h1 className='animate-in slide-in-from-left-full transition-transform transform duration-300 bg-gradient-to-b from-emerald-950 via-green-700 to-teal-800 bg-clip-text text-transparent'>
          Hello!<br/>
          I&rsquo;m Taha Siraj.<br/>
          A Web Developer,<br/>
          Exploring the<br/>
          Realm of<br/>
          Generative AI.
        </h1>
        </div>
          <Image
          src="/profile.jpeg"
          alt='Taha Siraj'
          width={200}
          height={100}
          className='animate-in slide-in-from-right-full transition-transform transform duration-300 mt-4 mr-4 object-cover rounded-full flex justify-center items-center'
        />
        </section>
        {/* About */}
        <section id='about'>
          <div className='bg-emerald-950 rounded-full text-center mx-6'>
            <motion.div
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            >
            <h2 className='py-2 m-6 text-green-400 text-3xl'>
              <strong>About Me</strong>
            </h2>
            </motion.div>
          </div>
          <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
          >
            <p className='m-4 font-mono text-emerald-950 text-base sm:text-lg'>
            I am a dedicated Web developer currently honing my skills at Governor Initiative of Artificial Inteligence. My focus is on building robust and scalable web applications, driven by a deep passion for coding and problem-solving. 💻
            <br/>
            <br/>
            With a keen interest in Generative AI, I am consistently striving to expand my knowledge and expertise in this exciting field. My journey is marked by a commitment to continuous learning and innovation, aiming to create impactful and efficient solutions.
            </p>
            </motion.div>
        </section>
        {/* Skills */}
        <section id='skills'>
        <div className='bg-emerald-950 rounded-full text-center my-10 mx-6'>
          <motion.div
          initial={{ x: 40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          >
            <h2 className='py-2 m-6 text-green-400 text-3xl'>
              <strong>Skills</strong>
            </h2>
          </motion.div>
        </div>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
          >
          <div className='flex flex-wrap justify-center gap-4 mb-5 ml-5 items-center'>
        <ImHtmlFive className='hover:scale-110 hover:fill-orange-700 mr-4' size={60} />
        <SiCss3 className='hover:scale-110 hover:fill-blue-500 mr-4' size={60} />
        <FaNodeJs className='hover:scale-110 hover:fill-lime-400 mr-4' size={60} />
        <SiTypescript className='hover:scale-110 hover:fill-blue-700 mr-4' size={60} />
        <FaReact className='hover:scale-110 hover:fill-sky-700 mr-4' size={60} />
        <RiNextjsFill className='hover:scale-110 hover:fill-white mr-4' size={60} />
        <RiTailwindCssFill className='hover:scale-110 hover:fill-blue-600 mr-4' size={60} />
        <SiShadcnui className='hover:scale-110 hover:fill-white mr-4' size={45} />
          </div>
          </motion.div>
        </section>
        {/* Projects */}
        <div className='bg-emerald-950 rounded-full text-center my-10 mx-6'>
          <motion.div
          initial={{ x: 40 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          >
            <h2 className='m-6 py-2 text-3xl text-green-400'>
              <strong>Projects</strong>
            </h2>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          >
        <section id='projects' className='flex justify-center'>
          <div className='m-10 bg-stone-300 rounded-2xl shadow-2xl p-4 bg-opacity-50'>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-6'>
              {/* Project-1 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
          <h2 className='text-lg font-bold text-emerald-900 text-left ml-4'>
            MovieVerse
          </h2>
            <Image
            src="/MovieAppPicForPortfolio.PNG"
            alt='Movie App'
            width={400}
            height={100}
            className='h-96 rounded-2xl'
            />
            <h3 className='text-black text-lg flex flex-row mt-2 ml-8'>Search Movies & Browse popular flicks.
              <Link href="https://movie-app-gules-alpha.vercel.app/">
              <FaExternalLinkSquareAlt className='ml-3 mt-1 hover:text-gray-700' />
              </Link>
            </h3>
              </article>
              {/* Project-2 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
            <h2 className='text-lg font-bold text-emerald-900 text-left ml-4'>Password Generator</h2>
            <Image
            src="/passwordgenerator.PNG"
            alt='Password Generator'
            width={400}
            height={100}
            className='h-96 rounded-2xl'
            />
            <h3 className='text-black text-lg flex flex-row mt-2 ml-8'>Create a secure password with just few clicks.
              <Link href="https://password-generator-project-9-next-js.vercel.app/">
              <FaExternalLinkSquareAlt className='ml-3 mt-1 hover:text-gray-700' />
              </Link>
            </h3>
              </article>
              {/* Project-3 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <h2 className='text-lg font-bold text-emerald-900 text-left ml-4'>Pomodoro Timer</h2>
            <Image
            src="/PomodoroTimer.PNG"
            alt='Pomodoro Timer'
            width={400}
            height={100}
            className='h-96 rounded-2xl'
            />
            <h3 className='text-black text-lg flex flex-row mt-2 ml-8'>Transforms time into a valuable ally.
              <Link href="https://pomodoro-timer-project-14-next-js.vercel.app/">
              <FaExternalLinkSquareAlt className='ml-3 mt-1 hover:text-gray-700' />
              </Link>
            </h3>
              </article>
              {/* Project-4 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <h2 className='text-lg font-bold text-emerald-900 text-left ml-4'>BMI Calculator</h2>
            <Image
            src="/BMICalculator.PNG"
            alt='BMI Calculator'
            width={400}
            height={100}
            className='h-96 rounded-2xl'
            />
            <h3 className='text-black text-lg flex flex-row mt-2 ml-8'>Easily calculate your BMI.
              <Link href="https://bmi-calculator-project-11-next-js.vercel.app/">
              <FaExternalLinkSquareAlt className='ml-3 mt-1 hover:text-gray-700' />
              </Link>
            </h3>
              </article>
            </div>
            <div className='flex justify-center mt-5'>
              <Link href="/projects">
            <Button
            type='button'
            className='w-24 rounded-full bg-emerald-900 hover:bg-emerald-700 active:scale-95'
            >View More</Button>
            </Link>
            </div>
          </div>
        </section>
        </motion.div>
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
    </main>
  )
}

export default Home
