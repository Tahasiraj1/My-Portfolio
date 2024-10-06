"use client";
import React from 'react';
import { Dot, Linkedin, Instagram, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {

  const handleProfileViews = (Link: string): void => {
    window.open(Link);
  };

  return (
    <footer className='font-sans flex flex-col justify-center items-center h-20 bg-emerald-800'>
        <div className='flex flex-row pt-2 font-semibold'>
        <span>&copy; 2024</span>
        <Dot /><span>Taha Siraj</span>
        <Dot /><span>All rights reserved</span>
        </div>
        <div className='flex flex-row'>
          <Button
          onClick={() => handleProfileViews("https://www.linkedin.com/in/taha-siraj-521b512b7/")}
          className='bg-inherit hover:bg-transparent'
          >
            <Linkedin className='hover:text-black active:scale-95 transition-transform transform duration-300' />
          </Button>
          <Button
          onClick={() => handleProfileViews("https://github.com/Tahasiraj1")}
          className='bg-inherit hover:bg-transparent'
          >
            <Github  className='hover:text-black active:scale-95 transition-transform transform duration-300 ' />
          </Button>
          <Button
          onClick={() => handleProfileViews("https://www.instagram.com/taha__siraj/")}
          className='bg-inherit hover:bg-transparent'
          >
            <Instagram className='hover:text-black active:scale-95 transition-transform transform duration-300 ' />
          </Button>
        </div>
    </footer>
  )
}

export default Footer
