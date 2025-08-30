"use client";

import React from "react";
import { SlantedHeading } from "./ui/RoundedSlantHeading";
import { Button } from "./ui/button";
import { ArrowRight, Code, Palette, Database, Zap } from "lucide-react";
import { whatsAppMessages, openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies and best practices for optimal performance and user experience.",
    icon: Code,
    gradient: "from-emerald-500/20 via-teal-500/15 to-cyan-500/20",
    features: [
      "Responsive design for all devices",
      "Fast loading times and optimized performance",
      "SEO-friendly structure and content",
      "Customizable design and branding",
      "Secure and scalable hosting",
    ],
  },
  {
    id: 2,
    title: "AI Agents",
    description:
      "Intelligent AI-powered solutions that automate tasks, enhance productivity, and provide smart insights for your business needs.",
    icon: Zap,
    gradient: "from-purple-500/20 via-violet-500/15 to-indigo-500/20",
    features: [
      "Automated data entry and processing",
      "Intelligent task scheduling and execution",
      "Real-time data analysis and reporting",
      "Customizable AI models and workflows",
      "Scalable and maintainable codebase",
    ],
  },
  {
    id: 3,
    title: "Automation",
    description:
      "Streamline your workflows with custom automation solutions that save time, reduce errors, and boost efficiency across your operations.",
    icon: Database,
    gradient: "from-blue-500/20 via-sky-500/15 to-cyan-500/20",
    features: [
      "Custom workflow automation",
      "Integration with existing systems",
      "Scalable and maintainable code",
      "Real-time monitoring and alerts",
      "Easy to use and integrate",
    ],
  },
  {
    id: 4,
    title: "Portfolios",
    description:
      "Stunning portfolio websites that showcase your work, skills, and achievements with modern design and seamless user experience.",
    icon: Palette,
    gradient: "from-green-500/20 via-emerald-500/15 to-teal-500/20",
    features: [
      "Modern and responsive design",
      "Easy to update and manage",
      "Showcase your work and skills",
      "Seamless user experience",
      "Scalable and maintainable",
    ],
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  className?: string;
}

const ServiceCard = ({
  service,
  className = "",
}: ServiceCardProps) => {
  const handleTryNow = () => {
    let message;
    switch (service.title) {
      case "Website Development":
        message = whatsAppMessages.websiteDevelopment;
        break;
      case "AI Agents":
        message = whatsAppMessages.aiAgents;
        break;
      case "Automation":
        message = whatsAppMessages.automation;
        break;
      case "Portfolios":
        message = whatsAppMessages.portfolios;
        break;
      default:
        message = whatsAppMessages.services(service.title);
    }
    openWhatsApp({ message });
  };

  const IconComponent = service.icon;

  return (
    <div
      className={`gradient-card-alt overflow-hidden h-[400px] w-full rounded-lg flex flex-col ${className}`}
    >
      <div className="pb-3 flex-shrink-0 space-y-3 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl font-semibold">
            {service.title}
          </h3>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <IconComponent className="w-4 h-4 text-emerald-400" />
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
      <div className="flex-1 min-h-0 p-6">
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0">
        <button
          className="font-bold text-sm rounded-md relative overflow-hidden bg-emerald-950 hover:bg-emerald-950 border-2 border-emerald-600/[0.15] shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.6)_100%)] transition-transform duration-300 px-4 py-2 items-center justify-center group w-full"
          onClick={handleTryNow}
        >
          {/* Shining gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          <span className="relative z-10 flex items-center justify-between w-full">
            <span>Contact now</span>
            <motion.div
              className="flex items-center"
              whileHover={{ 
                scale: 1.2,
                x: 2
              }}
              animate={{ 
                scale: 1,
                x: 0
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <ArrowRight className="h-4 w-4 group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </span>
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const handleGetStarted = () => {
    openWhatsApp({ message: whatsAppMessages.getStarted });
  };

  return (
    <div id="services" className="py-20">
      <SlantedHeading text="My Services" />

      <div className="max-w-7xl mx-auto mt-16 px-4 md:px-10">
        {/* Custom grid layout with specific sizing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Top-left: Large card spanning 8 columns */}
          <div className="md:col-span-8">
            <ServiceCard service={services[0]} className="h-full" />
          </div>

          {/* Top-right: Small card spanning 4 columns */}
          <div className="md:col-span-4">
            <ServiceCard service={services[1]} className="h-full" />
          </div>

          {/* Bottom-left: Equal size card spanning 6 columns */}
          <div className="md:col-span-6">
            <ServiceCard service={services[2]} className="h-full" />
          </div>

          {/* Bottom-right: Equal size card spanning 6 columns */}
          <div className="md:col-span-6">
            <ServiceCard service={services[3]} className="h-full" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between gap-6 p-6 rounded-2xl gradient-card-alt border border-emerald-500/20 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(16,185,129,0.15)]">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 text-sm">
                Let's discuss how I can help bring your ideas to life
              </p>
            </div>
            <Button 
              className="relative overflow-hidden bg-emerald-950 hover:bg-emerald-950 border-2 border-emerald-600/[0.15] shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.6)_100%)] group"
              onClick={handleGetStarted}
            >
              {/* Shining gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 flex items-center justify-between w-full">
                <span className="mr-2">Get Started</span>
                <motion.div
                  className="flex items-center"
                  whileHover={{ 
                    scale: 1.2,
                    x: 2
                  }}
                  animate={{ 
                    scale: 1,
                    x: 0
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <ArrowRight className="h-4 w-4 group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
