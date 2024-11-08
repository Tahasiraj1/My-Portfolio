import React from 'react';
import { Dot, Linkedin, Instagram, Github } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='font-sans flex flex-col justify-center items-center h-20 bg-emerald-800'>
        <div className='flex flex-row pt-2 font-semibold'>
        <span>&copy; 2024</span>
        <Dot /><span>Taha Siraj</span>
        <Dot /><span>All rights reserved</span>
        </div>
        <div className='flex flex-row mt-2 gap-10 mb-2'>

        <Link href="https://www.linkedin.com/in/taha-siraj-521b512b7/" target='_blank'>
            <Linkedin size={26} className='hover:text-black text-white active:scale-95 transition-transform transform duration-300 ' />
          </Link>

          <Link href="https://www.instagram.com/taha__siraj/" target='_blank'>
            <Instagram size={26} className='hover:text-black text-white active:scale-95 transition-transform transform duration-300 ' />
          </Link>

          <Link href="https://github.com/Tahasiraj1" target='_blank'>
            <Github size={26} className='hover:text-black text-white active:scale-95 transition-transform transform duration-300 ' />
          </Link>

          <Link href="https://wa.me/923311245238" target='_blank'>
            <FaWhatsapp size={26} className='hover:text-black text-white active:scale-95 transition-transform transform duration-300 ' />
          </Link>

        </div>
    </footer>
  )
}

export default Footer;