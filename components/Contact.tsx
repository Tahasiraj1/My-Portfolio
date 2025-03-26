"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Textarea } from "./ui/textarea";
import { SlantedHeading } from "./ui/RoundedSlantHeading";
import Link from "next/link";

const Contact = () => {
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
        (result) => {
          console.log("Message sent successfully:", result.text);
        },
        (error) => {
          console.log("Failed to send message:", error.text);
        }
      );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id='contact'>
      <SlantedHeading text="Let&rsquo;s Connect" />
      <div className="flex flex-col items-center justify-center w-full h-full py-12 px-10 space-y-4 container mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-center w-full h-full pt-10">
          <div className="flex flex-col items-start justify-center w-full h-full space-y-4">
            <h2 className="text-lg md:text-xl font-bold ">
              Contact Information
            </h2>
            <p className="flex items-center justify-center text-sm md:text-lg text-gray-500">
              <MdOutlineEmail className="text-emerald-500 mr-2" />
              <span className="text-md">tahasiraj242@gmail.com</span>
            </p>
            <p className="flex items-center justify-center text-sm md:text-lg text-gray-500">
              <HiOutlineGlobe className="text-emerald-500 mr-2" />
              <span className="text-md">www.example.com</span>
            </p>
            <span className="flex items-center justify-center gap-2">
              <FaTwitter
                size={25}
                className="text-neutral-400 hover:text-white mr-2"
              />
              <Link href="https://www.linkedin.com/in/taha-siraj-521b512b7/" target="_blank">
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
                className="bg-neutral-950 border-neutral-800 py-6 px-4 focus:border-fuchsia-500/50"
              />
              <Input
                id="email"
                name="email"
                type="email" // Correct email type
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange} // Handle input change
                required
                className="bg-neutral-950 border-neutral-800 py-6 px-4 focus:border-fuchsia-500/50"
              />
              <Textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={3}
                value={formData.message}
                onChange={handleChange} // Handle input change
                required
                className="w-full bg-neutral-950 border-neutral-800 focus:border-fuchsia-500/50"
              />
              <Button type="submit" variant="shine" className="w-full">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
