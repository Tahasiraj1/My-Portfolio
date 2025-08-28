"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Textarea } from "./ui/textarea";
import { SlantedHeading } from "./ui/RoundedSlantHeading";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kb0095m",
        "template_drjojyg",
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({ description: "Your message has been sent." });
        },
        (error) => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: `${error.text}`,
            variant: "destructive",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }
      );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact">
      <SlantedHeading text="Let&rsquo;s Connect" />
      <div className="flex flex-col items-center justify-center w-full h-full py-12 px-10 space-y-4 container mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-center w-full h-full pt-10">
          <div className="flex flex-col items-start justify-center w-full h-full space-y-4">
            <h2 className="text-lg md:text-xl font-bold ">
              Contact Information
            </h2>
            <p className="flex items-center justify-center text-sm md:text-lg text-gray-500">
              <MdEmail className="text-emerald-500 mr-2" />
              <span className="text-md">tahasiraj242@gmail.com</span>
            </p>
            <p className="flex items-center justify-center text-sm md:text-lg text-gray-500">
              <FaPhoneAlt className="text-emerald-500 mr-2" />
              <span className="text-md">+92 3311245238</span>
            </p>
            <span className="flex items-center justify-center gap-2">
              <Link href="https://x.com/Tahasiraj111" target="_blank">
                <FaXTwitter
                  size={25}
                  className="text-neutral-400 hover:text-white mr-2"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/taha-siraj-521b512b7/"
                target="_blank"
              >
                <FaLinkedin
                  size={25}
                  className="text-neutral-400 hover:text-white mr-2"
                />
              </Link>
              <Link href="https://github.com/Tahasiraj1" target="_blank">
                <FaGithub
                  size={25}
                  className="text-neutral-400 hover:text-white mr-2"
                />
              </Link>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full space-y-4 mt-10 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center w-full h-full space-y-4"
            >
              <Input
                id="name"
                name="name"
                type="name"
                value={formData.name}
                onChange={handleChange} // Handle input change
                required
                placeholder="Full Name"
                className="bg-neutral-950 border-neutral-800 py-6 px-4 focus:border-emerald-700"
              />
              <Input
                id="email"
                name="email"
                type="email" // Correct email type
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange} // Handle input change
                required
                className="bg-neutral-950 border-neutral-800 py-6 px-4 focus:border-emerald-700"
              />
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={3}
                value={formData.message}
                onChange={handleChange} // Handle input change
                required
                className="w-full bg-neutral-950 border-neutral-800 focus:border-emerald-700"
              />
              <Button 
                type="submit" 
                className="w-full relative overflow-hidden hover:bg-emerald-950 bg-emerald-950 border-2 border-emerald-600/[0.15] shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.6)_100%)] group"
              >
                {/* Shining gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative z-10 font-semibold">Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
