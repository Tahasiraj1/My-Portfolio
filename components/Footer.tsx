import React from 'react'
import { AnimatedShinyText } from "./ui/AnimatedShinyText";


const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className="container mx-auto px-4 py-4">
        <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-center mb-12 text-gray-400 opacity-20">
            <AnimatedShinyText>TAHA SIRAJ</AnimatedShinyText>
        </div>
        
        <div className="mt-12 pt-8 text-center text-sm relative">
          {/* Shiny separator with glow effect */}
          <div className="absolute top-0 left-0 right-0 mx-4 h-0.5 bg-gradient-to-r from-black/55 via-emerald-700 to-black/55 shadow-[0_0_20px_rgba(16,185,129,0.3)] rounded-full" />
          <p className='text-gray-600'>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer