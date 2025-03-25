"use client";
import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const sheetNavItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const navItems = [
  {
    name: "Home",
    href: "/",
    duration: 0.1,
  },
  {
    name: "About",
    href: "/about",
    duration: 0.3,
  },
  {
    name: "Projects",
    href: "/projects",
    duration: 0.6,
  },
  {
    name: "Skills",
    href: "/skills",
    duration: 0.9,
  },
];

const Header = () => {
  return (
    <header className="bg-emerald-950 bg-opacity-70 flex flex-row justify-between items-center p-1 lg:p-4 h-20 rounded-full absolute top-5 left-1/2 -translate-x-1/2 z-50 shadow-lg w-[90%] max-w-5xl">
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

      <Link href="/contact">
        <Button
          variant="gooeyLeft"
          className="hidden md:flex font-bold text-lg rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 p-4"
        >
          Contact
        </Button>
      </Link>

      <Sheet>
        <SheetTrigger className="md:hidden flex">
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-black/70 bg-opacity-55 border-emerald-400">
          {sheetNavItems.map((item) => (
            <ul className="font-bold text-xl flex flex-col">
              <Link key={item.name} href={item.href}>
                <Button
                  className="font-bold text-lg p-0 mb-2"
                  variant="linkHover2"
                >
                  <li>{item.name}</li>
                </Button>
              </Link>
            </ul>
          ))}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
