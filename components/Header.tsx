"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='bg-emerald-950 flex flex-row justify-between items-center p-1 lg:p-2'>
        <Link href="/">
        <Image
        src="/profile1.jpeg"
        alt='Taha Siraj'
        width={70}
        height={100}
        className='rounded-full active:scale-95 transition-transform transform duration-700'
        />
        </Link>

        <ul className='flex gap-2 md:gap-3 justify-center items-center mr-2 font-thin lg:font-bold'>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.1 }}
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
