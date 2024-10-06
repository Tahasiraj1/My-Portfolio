import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-emerald-950 flex flex-row justify-between items-center p-2'>
        <Link href="/">
        <Image
        src="/profile1.jpeg"
        alt='Taha Siraj'
        width={80}
        height={100}
        className='rounded-full active:scale-95 transition-transform transform duration:700'
        />
        </Link>
        <ul className='flex gap-2 md:gap-3 justify-center items-center mr-2 font-bold'>
            <Link href="/about">
            <li className='text-green-400 text-lg hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                About
            </li>
            </Link>
            <Link href="/projects">
            <li className='text-green-400 text-lg hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                Projects
            </li>
            </Link>
            <Link href="/skills">
            <li className='text-green-400 text-lg hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                Skills
            </li>
            </Link>
            <Link href="/contact">
            <li className='text-green-400 text-lg hover:scale-110 active:scale-105 transition-transform transform duration:500'>
                Contact
            </li>
            </Link>
        </ul>
    </header>
  )
}

export default Header

