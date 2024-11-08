"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { motion } from 'framer-motion';

const Projects = () => {

    const handleViewProjects = (Link: string): void => {
        window.open(Link);
    };

    const handleScrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      };

  return (
    <div className='p-6'>
        <div className='bg-emerald-950 rounded-full h-10 m-4 my-8'>
            <motion.div
<<<<<<< HEAD
            initial={{ x: 50 }}
=======
            initial={{ x: 40 }}
>>>>>>> 3553fbd6e84c08816ac6d291a5919452dffde3e8
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            >
            <h1 className='text-green-400 font-bold text-2xl text-center pt-1 animate-in slide-in-from-right-full transition-transform transform duration-300'>
                <strong>Next.JS Projects</strong>
            </h1>
            </motion.div>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 animate-in slide-in-from-bottom-full transition-transform transform duration-300'>
            {/* Project-1 */}
            <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
                <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>MovieVerse</h2>
                <Image
                src="/MovieAppPicForPortfolio.PNG"
                alt='MovieVerse'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='flex flex-row text-black text-lg mt-2'>
                    Search Movies & Browse popular flicks.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://movie-app-gules-alpha.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button> 
                </h3>
                </div>
            </article>
            {/* Project-2 */}
            <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
            <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Password Generator</h2>
                <Image
            src="/passwordgenerator.PNG"
            alt='Password Generator'
            width={400}
            height={100}
            className='h-96 rounded-2xl'
            />
            <h3 className='text-black text-lg flex flex-row mt-2'>
                Create secure passwords with few clicks.
            <Button
            variant="ghost"
            size="icon"
            className='hover:bg-transparent active:scale-90 transition-transform'
            onClick={() => handleViewProjects("https://password-generator-project-9-next-js.vercel.app/")}
            >
                <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
            </Button> 
            </h3>
            </div>
            </article>
            {/* Project-3 */}
            <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
            <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
              <h2 className='text-lg font-bold text-center'>Pomodoro Timer</h2>
            <Image
            src="/PomodoroTimer.PNG"
            alt='Pomodoro Timer'
            width={400}
            height={100}
            className='h-96 rounded-2xl'
            />
            <h3 className='text-black text-lg flex flex-row mt-2'>
                Transforms time into a valuable ally.
            <Button
            variant="ghost"
            size="icon"
            className='hover:bg-transparent active:scale-90 transition-transform'
            onClick={() => handleViewProjects("https://pomodoro-timer-project-14-next-js.vercel.app/")}
            >
                <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
            </Button>
            </h3>
            </div>
              </article>
              {/* Project-4 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
              <h2 className='text-lg font-bold text-center'>BMI Calculator</h2>
            <Image
            src="/BMICalculator.PNG"
            alt='BMI Calculator'
            width={400}
            height={100}
            className='h-96 rounded-2xl'
            />
            <h3 className='text-black text-lg flex flex-row mt-2'>
                Easily calculate your BMI.
            <Button
            variant="ghost"
            size="icon"
            className='hover:bg-transparent active:scale-90 transition-transform'
            onClick={() => handleViewProjects("https://bmi-calculator-project-11-next-js.vercel.app/")}
            >
                <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
            </Button>
            </h3>
            </div>
              </article>
              {/* Project-5 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Meme Generator</h2>
                <Image
                src="/Meme-Generator.PNG"
                alt='Meme Generator'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Create custom memes with our easy-to-use generator.
                <Button
                variant="ghost"
                size="icon"
                className='hover:bg-transparent active:scale-90 transition-transform'
                onClick={() => handleViewProjects("https://meme-generator-project-17-next-js.vercel.app/")}
                >
                    <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                </Button>
                </h3>
                </div>
              </article>
              {/* Project-6 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Tip Calculator</h2>
                <Image
                src="/TipCalculator.png"
                alt='Tip Calculator'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    This app makes it easy to calculate your tip and total bill amount.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://tip-calculator-project-9-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-7 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Currency Converter</h2>
                <Image
                src="/CurrencyConverter.PNG"
                alt='Currency Converter'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Convert between various currencies seamlessly.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://currency-converter-project-18-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-8 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Movie Search App</h2>
                <Image
                src="/MovieSearch.PNG"
                alt='Movie Search App'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Search your favourite movies & get detailed information.
                <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://movie-search-project-16-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-9 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>HTML Previewer</h2>
                <Image
                src="/HTMLPreviewer.PNG"
                alt='HTML Previewer'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    This tool allows users to input HTML code and instantly see the rendered result.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://html-previewer-project-13-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-10 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Expense Tracker</h2>
                <Image
                src="/Expense-Tracker.PNG"
                alt='Expense Tracker'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    This application allows users to easily manage their expenses, providing a clear view of their financial habits.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://expense-tracker-project-15-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-11 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Calculator</h2>
                <Image
                src="/simpleCalculator.png"
                alt='Calculator App'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    A simple Calculator app.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://simple-calculator-project-5-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-12 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Unit Converter</h2>
                <Image
                src="/UnitConverter.PNG"
                alt='Unit Converter'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Switch between different units for length, weight, and volume, & Perform conversion.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://unit-converter-project-12-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-13 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Digital Clock</h2>
                <Image
                src="/digitalclock1.PNG"
                alt='Digital Clock'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Digital Clock with 12/24-Hour Toggle.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://digital-clock-project-6-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-14 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
                <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Random Joke Generator</h2>
                <Image
                src="/randomjokegenerator.png"
                alt='Random Joke Generator'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Fetches random jokes from an external API.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://random-joke-generator-project-7-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-15 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Birthday Celebration App</h2>
                <Image
                src="/BirthdayWishNext.js.png"
                alt='Birthday Celebration App'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Celebrate your birthday with confetti bursts.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://birthday-wish-project-3-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-16 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Color Picker App</h2>
                <Image
                src="/ColorPicker.PNG"
                alt='Color Picker App'
                width={400}
                height={100}
                className='h-96 rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Pick colors & view their hex and RGB values.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://color-picker-project-8-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-17 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Number Guessing Game</h2>
                <Image
                src="/numberguessinggame2next.png"
                alt='Number Guessing Game'
                width={400}
                height={100}
                className='h-96 w-fit rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Guess a number that falls between 1 and 10.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://number-guessing-game-project-4-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-18 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Weather Widget</h2>
                <Image
                src="/Weather-widget-next.js-project-2.PNG"
                alt='Weather Widget'
                width={400}
                height={100}
                className='h-96 rounded-2xl w-fit'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    Search current weather for any city & get tailored messages based on weather conditions.
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://weather-widget-project-2-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
              </article>
              {/* Project-19 */}
              <article className='flex flex-col items-center hover:scale-105 transition-transform transform duration-300'>
              <div className='p-4 bg-slate-200 rounded-3xl hover:shadow-xl bg-opacity-70 mb-5'>
                <h2 className='text-lg font-bold text-center'>Countdown Timer</h2>
                <Image
                src="/CountdownTimer.Nextjs.PNG"
                alt='Countdown Timer'
                width={400}
                height={100}
                className='h-96 w-fit rounded-2xl'
                />
                <h3 className='text-black text-lg flex flex-row mt-2'>
                    The timer features start, pause, resume, and reset functionalities
                    <Button
                    variant="ghost"
                    size="icon"
                    className='hover:bg-transparent active:scale-90 transition-transform'
                    onClick={() => handleViewProjects("https://countdown-timer-project-1-next-js.vercel.app/")}
                    >
                        <FaExternalLinkSquareAlt size={20} className='mb-3 text-black bg-inherit hover:text-gray-700' />
                    </Button>
                </h3>
                </div>
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

export default Projects
