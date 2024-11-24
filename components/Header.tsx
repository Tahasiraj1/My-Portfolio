"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
  

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
        <ul className='md:flex justify-center items-center mr-2 hidden'>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
        >
            <Link href="/">
                <Button
                className='font-bold text-lg'
                variant='linkHover2'
                >
                    <li className='text-green-400'>
                        Home
                    </li>
                </Button>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        >
            <Link href="/about">
                <Button
                className='font-bold text-lg'
                variant='linkHover2'
                >
                    <li className='text-green-400'>
                        About
                    </li>
                </Button>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        >
            <Link href="/projects">
                <Button
                className='font-bold text-lg'
                variant='linkHover2'
                >
                    <li className='text-green-400'>
                        Projects
                    </li>
                </Button>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        >
            <Link href="/skills">
                <Button
                className='font-bold text-lg'
                variant='linkHover2'
                >
                    <li className='text-green-400'>
                        Skills
                    </li>
                </Button>
            </Link>
        </motion.div>
        <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        >
            <Link href="/contact">
                <Button
                className='font-bold text-lg'
                variant='linkHover2'
                >
                    <li className='text-green-400'>
                        Contact
                    </li>
                </Button>
            </Link>
        </motion.div>
        </ul>
        <Sheet>
            <SheetTrigger className='md:hidden flex text-green-400'>
                <Menu />
            </SheetTrigger>
            <SheetContent className='bg-emerald-800 border-emerald-400 text-green-200'>
                <ul className='text-green-400 font-bold text-xl flex flex-col'>
                    <Link href="/">
                        <Button
                        className='font-bold text-lg p-0 mb-2'
                        variant='linkHover2'
                        >
                            <li className='text-green-400'>
                                Home
                            </li>
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button
                        className='font-bold text-lg p-0 mb-2'
                        variant='linkHover2'
                        >
                            <li className='text-green-400'>
                                About
                            </li>
                        </Button>
                    </Link>
                    <Link href="/projects">
                        <Button
                        className='font-bold text-lg p-0 mb-2'
                        variant='linkHover2'
                        >
                            <li className='text-green-400'>
                                Projects
                            </li>
                        </Button>
                    </Link>
                    <Link href="/skills">
                        <Button
                        className='font-bold text-lg p-0 mb-2'
                        variant='linkHover2'
                        >
                            <li className='text-green-400'>
                                Skills
                            </li>
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button
                        className='font-bold text-lg p-0'
                        variant='linkHover2'
                        >
                            <li className='text-green-400'>
                                Contact
                            </li>
                        </Button>
                    </Link>
                </ul>
            </SheetContent>
        </Sheet>
    </header>
  )
}

export default Header
