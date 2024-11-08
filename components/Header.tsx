"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='bg-emerald-950 flex flex-row justify-between items-center p-1 lg:p-2'>
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        >  
        <Link href="/">
        <Image
        src="/profile1.jpeg"
        alt='Taha Siraj'
        width={70}
        height={100}
        className='rounded-full active:scale-95 transition-transform transform duration-700'
        />
        </Link>
        </motion.div>
        <ul className='flex gap-2 md:gap-3 justify-center items-center mr-2 font-thin lg:font-bold'>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        >
        <Link href="/">
            <li className='text-green-400 lg:text-lg hover:-translate-y-1 hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                Home
            </li>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        >
            <Link href="/about">
            <li className='text-green-400 lg:text-lg hover:-translate-y-1 hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                About
            </li>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
            <Link href="/projects">
            <li className='text-green-400 lg:text-lg hover:-translate-y-1 hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                Projects
            </li>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        >
            <Link href="/skills">
            <li className='text-green-400 lg:text-lg hover:-translate-y-1 hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                Skills
            </li>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        >
            <Link href="/contact">
            <li className='text-green-400 lg:text-lg hover:-translate-y-1 hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                Contact
            </li>
            </Link>
        </motion.div>
        </ul>
    </header>
  )
}

export default Header
