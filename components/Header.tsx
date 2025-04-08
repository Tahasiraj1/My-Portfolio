"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
  {
    name: "About",
    href: "#about",
    duration: 0.3,
  },
  {
    name: "Projects",
    href: "#projects",
    duration: 0.6,
  },
  {
    name: "Skills",
    href: "#skills",
    duration: 0.9,
  },
];

const Header = () => {
  return (
    <header className="bg-emerald-950 bg-opacity-70 flex flex-row justify-between items-center p-4 h-20 rounded-full absolute top-5 left-1/2 -translate-x-1/2 z-50 shadow-lg w-[90%] max-w-5xl">
      <div>
        <Link href="/">
          <h1 className="font-bold text-xl">Taha Siraj</h1>
        </Link>
      </div>

      <ul className="md:flex justify-center items-center mr-2 hidden">
        {navItems.map((item) => (
          <div key={item.name}>
            <Link href={item.href}>
              <Button className="font-bold text-lg" variant="linkHover2">
                <li>{item.name}</li>
              </Button>
            </Link>
          </div>
        ))}
      </ul>

      <Link href="#contact">
        <Button
          variant="gooeyLeft"
          className="font-bold text-lg rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 p-4"
        >
          Contact
        </Button>
      </Link>
    </header>
  );
};

export default Header;
