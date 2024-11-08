"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm("service_kb0095m", "template_drjojyg", e.currentTarget, "bTwY4Z7BY_xc4CM9q")
    .then((result) => {
      console.log("Message sent successfully:", result.text);
    }, (error) => {
      console.log("Failed to send message:", error.text);
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleProfileViews = (Link: string): void => {
    window.open(Link);
  };

  return (
    <div className='pb-20 pt-16 px-12 lg:px-96 md:px-72'>
        <div className='bg-emerald-950 rounded-full'>
        <motion.div
        initial={{ x: 30 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        >
        <h1 className='py-1 flex justify-center mb-8 font-bold text-3xl text-green-400'>
            Let&rsquo;s Connect
        </h1>
        </motion.div>
        </div>
      <form onSubmit={handleSubmit} className='h-96 bg-slate-300 bg-opacity-55 flex flex-col justify-center p-4 border-2 border-emerald-700 rounded-2xl'>
        <Label htmlFor='name'>Name:</Label>
        <Input
          id='name'
          name='name'
          type='name'
          placeholder='Enter your name'
          value={formData.name}
          onChange={handleChange} // Handle input change
          required
          className='items-center mt-2 bg-emerald-100'
        />
        
        <Label className='mt-4' htmlFor='email'>Email:</Label>
        <Input
          id='email'
          name='email'
          type='email' // Correct email type
          placeholder='Enter your email'
          value={formData.email}
          onChange={handleChange} // Handle input change
          required
          className='items-center mt-2 bg-emerald-100'
        />

        <Label className='mt-4' htmlFor='message'>Message:</Label>
        <Textarea
          id='message'
          name='message'
          placeholder='Enter your message'
          rows={3}
          value={formData.message}
          onChange={handleChange} // Handle input change
          required
          className='items-center mt-2 bg-emerald-100'
        />

        <Button
          type='submit' // Set button type to 'submit'
          className='mt-4 w-36 mx-auto rounded-full bg-emerald-950 hover:bg-emerald-800 active:scale-95'
        >
          Submit
        </Button>
      </form>
      <div className='bg-emerald-950 my-10 rounded-full'>
      <motion.div
        initial={{ x: 30 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        >
        <h2 className='py-1 animate-in slide-in-from-right-full transition-transform transform duration-300 flex justify-center mb-6 font-bold text-3xl text-green-400'>
            Follow Me
        </h2>
        </motion.div>
      </div>
      <div className=' flex justify-center gap-8'>
        <Button
          onClick={() => handleProfileViews("https://www.linkedin.com/in/taha-siraj-521b512b7/")}
          className='bg-inherit hover:bg-transparent'
          >
      <Linkedin size={60} className='hover:text-blue-700 text-white active:scale-95 transition-transform transform duration:300' />
        </Button>
        <Button
          onClick={() => handleProfileViews("https://github.com/Tahasiraj1")}
          className='bg-inherit hover:bg-transparent'
          >
      <Github size={60}  className='hover:text-black text-white active:scale-95 transition-transform transform duration:300 ' />
        </Button>
      </div>
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      >
      <p className='mt-8 text-lg font-mono'>
      Stay connected and join my journey!<br/><br/>
      ✦ Connect with me on <strong>LinkedIn</strong> to stay updated on my professional growth, tech insights, and exciting projects I&rsquo;m working on.<br/><br/>
      ✦ Follow me on <strong>GitHub</strong> where I share open-source contributions, coding challenges, and the latest projects I&rsquo;m developing.
      </p>
      </motion.div>
    </div>
  );
};

export default Contact;

