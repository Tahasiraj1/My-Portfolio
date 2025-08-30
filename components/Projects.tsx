"use client";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import ProjectCarousel from "@/components/Carousel";
import { SlantedHeading } from "./ui/RoundedSlantHeading";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects = [
  {
    id: 1,
    title: 'Employee Management System',
    description: 'A system for managing employees and their information.',
    longDescription: 'A system for managing employees and their information.',
    images: ['/Appraisal-app1.png', '/Hierarchy.png'],
    tags: ['Next.js', 'Node.js', 'NeonDB', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: "Animify Landing Page",
    description:
      "Developed a simple Animation website landing page. The website features a responsive design with a clean and modern aesthetic.",
    longDescription:
      "A clean and modern landing page focused on motion design and animated elements. Built to showcase fluid transitions, interactive visuals, and engaging user experience using lightweight animation libraries.",
    images: [
      "/Animify.PNG",
      "/Animify1.PNG",
      "/Animify2.PNG",
      "/Animify3.PNG",
      "/Animify4.PNG",
      "/Animify5.PNG",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    liveUrl: "https://omni-sol-figma.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/OmniSol-Figma",
  },
  {
    id: 3,
    title: "Martial Arts Academy Website",
    description:
      "A website for a martial arts academy with class schedules, instructor profiles, and membership information.",
    longDescription:
      "Built a website for a martial arts academy that allows users to browse classes, view instructor profiles, and sign up for membership. The website features a responsive design with a clean and modern aesthetic.",
    images: [
      "/MartialArts.PNG",
      "/MartialArts1.PNG",
      "/MartialArts2.PNG",
      "/MartialArts3.PNG",
      "/MartialArts4.PNG",
      "/MartialArts5.PNG",
    ],
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://martial-arts-red.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Martial-Arts",
  },
  {
    id: 4,
    title: "AI Powered Email Agent",
    description:
      "An AI-powered email agent that analyzes incoming emails and sends personalized responses.",
    longDescription:
      "The Email Agent is an AI-powered assistant that integrates with your Gmail inbox to intelligently read, analyze, and act on incoming emails. This agent can:\n • Categorizes emails: Urgent, Draft, Spam\n • Auto-summarizes content\n • Auto-replies or drafts based on urgency\n • Compose/draft emails via prompt + attachments\n • Runs every 30 sec, fully automated",
    images: ["/Automate Your.png"],
    tags: ["Python", "OpenAI Agents SDK", "Gmail API", "Chainlit"],
    githubUrl: "https://github.com/Tahasiraj1/Email-Agent",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription:
      "Developed a comprehensive e-commerce solution that includes product catalog management, user authentication, shopping cart functionality, and secure payment processing. Implemented responsive design principles to ensure optimal viewing across all devices.",
    images: [
      "/Avion-Thumbnail.PNG",
      "/Avion1.PNG",
      "/Avion2.PNG",
      "/Avion3.PNG",
      "/Avion4.PNG",
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Sanity"],
    liveUrl: "https://hackathon-2-flax.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Hackathon-2",
  },
  {
    id: 6,
    title: "Seller Center",
    description:
      "An interactive dashboard for visualizing financial data with charts and reports.",
    longDescription:
      "Designed and implemented a seller center dashboard for visualizing financial data, including sales reports, revenue trends, and inventory management. Integrated interactive charts and graphs to provide users with a comprehensive view of their business performance.",
    images: ["/Avion-Admin.PNG"],
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Sanity"],
    liveUrl: "https://avion-admin-dashboard.vercel.app/sign-in",
    githubUrl: "https://github.com/Tahasiraj1/Avion-Admin-Dashboard",
  }
];

export function Projects() {
  return (
    <>
      <SlantedHeading text="My Projects" />
      <div
        id="projects"
        className="flex items-start justify-center px-4 md:px-10 py-10 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

const projectGradients = [
  "from-cyan-500/30 via-emerald-500/20 via-teal-500/25 to-green-500/30", // Employee Management System
  "from-blue-600/40 via-blue-800/30 via-slate-900/35 to-black/40", // Animify Landing Page
  "from-red-600/40 via-red-800/30 via-rose-900/35 to-black/40", // Martial Arts Academy
  "from-red-500/40 via-red-600/30 via-pink-500/25 to-white/20", // AI Powered Email Agent
  "from-purple-800/40 via-purple-900/30 via-violet-800/35 to-white/20", // E-commerce Platform
  "from-red-500/40 via-red-600/30 via-orange-500/25 to-white/20", // Seller Center
];

function ProjectCard({ project }: { project: Project }) {
  const gradientIndex = project.id - 1;
  const gradient = projectGradients[gradientIndex];

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <div className="flex flex-col items-start space-y-3 group">
        <MorphingDialogTrigger>
                     <div className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl relative overflow-hidden transition-all duration-500 ease-out h-[400px] flex flex-col`}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                         <MorphingDialogImage
               src={project.images[0]}
               alt={project.title}
               className="h-[250px] w-full object-cover object-top mb-4 rounded-xl relative z-10 flex-shrink-0"
             />
             
             {/* Title and description always visible inside the card */}
             <div className="space-y-2 flex-1 flex flex-col justify-center">
               <MorphingDialogTitle className="text-xl font-medium text-white">
                 {project.title}
               </MorphingDialogTitle>
               <MorphingDialogSubtitle className="text-sm text-gray-300 leading-relaxed">
                 {project.description}
               </MorphingDialogSubtitle>
             </div>
          </div>
        </MorphingDialogTrigger>
      </div>

      <MorphingDialogContainer className="relative h-auto max-w-[95vw] lg:max-w-6xl">
        <MorphingDialogContent className="h-auto w-full overflow-hidden bg-black/90 backdrop-blur-lg border border-slate-700/40 relative mx-4 md:mx-10 rounded-xl">
          <ScrollArea className="h-full w-full" type="scroll">
            <div className="relative p-4 md:p-6">
              <div className="flex flex-col lg:flex-row gap-6 h-full w-full">
                {/* Carousel Section */}
                <div className="flex-1 w-full">
                  <ProjectCarousel
                    images={project.images.map((image) => ({
                      src: image,
                      alt: project.title,
                      width: 1000,
                      height: 600,
                      className: "object-cover",
                    }))}
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:max-w-md xl:max-w-lg items-start justify-start lg:min-w-0">
                  <MorphingDialogTitle className="text-white text-xl md:text-2xl mb-2">
                    {project.title}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="font-light text-gray-100 text-sm md:text-base mb-4">
                    {project.description}
                  </MorphingDialogSubtitle>

                  <div className="text-sm md:text-base text-gray-200 mb-4">
                    <p className="whitespace-pre-line leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Project tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs md:text-sm bg-gray-100 rounded-full text-gray-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Project links */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    {project.githubUrl && (
                      <Button
                        className="bg-emerald-900 hover:bg-emerald-800 gap-2 w-full sm:w-auto"
                        asChild
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        className="bg-emerald-900 hover:bg-emerald-800 gap-2 w-full sm:w-auto"
                        asChild
                      >
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className="text-gray-400" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
