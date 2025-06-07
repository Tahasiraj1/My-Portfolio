import React from 'react'
import { AnimatedShinyText } from "./ui/AnimatedShinyText";


const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className="container mx-auto px-4 py-4">
        <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-center mb-12 text-gray-400 opacity-20">
            <AnimatedShinyText>TAHA SIRAJ</AnimatedShinyText>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700/40 text-center text-sm">
          <p className='text-gray-600'>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer