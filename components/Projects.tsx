"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SlantedHeading } from "./ui/RoundedSlantHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProjetCarousel from "./Carousel";

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
    title: "AI Powered Email Agent",
    description:
      "An AI-powered email agent that analyzes incoming emails and sends personalized responses.",
    longDescription:
      "The Email Agent is an AI-powered assistant that integrates with your Gmail inbox to intelligently read, analyze, and act on incoming emails. Built using the OpenAI Agents SDK, FastAPI, and Google APIs, this agent can: • Categorizes emails: Urgent, Draft, Spam • Auto-summarizes content • Auto-replies or drafts based on urgency • Compose/draft emails via prompt + attachments • Runs every 30 sec, fully automated",
    images: ["/Automate Your.png"],
    tags: ["Python", "OpenAI Agents SDK", "Gmail API", "Chainlit"],
    githubUrl: "https://github.com/Tahasiraj1/Email-Agent",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription:
      "Developed a comprehensive e-commerce solution that includes product catalog management, user authentication, shopping cart functionality, and secure payment processing. Implemented responsive design principles to ensure optimal viewing across all devices.",
    images: ["/Avion-Thumbnail.PNG", "/Avion1.PNG", "/Avion2.PNG", "/Avion3.PNG", "/Avion4.PNG"],
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Sanity"],
    liveUrl: "https://hackathon-2-flax.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Hackathon-2",
  },
  {
    id: 3,
    title: "Martial Arts Academy Website",
    description:
      "A website for a martial arts academy with class schedules, instructor profiles, and membership information.",
    longDescription:
      "Built a website for a martial arts academy that allows users to browse classes, view instructor profiles, and sign up for membership. The website features a responsive design with a clean and modern aesthetic.",
    images: ["/MartialArts.PNG", "/MartialArts1.PNG", "/MartialArts2.PNG", "/MartialArts3.PNG", "/MartialArts4.PNG", "/MartialArts5.PNG"],
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://martial-arts-red.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Martial-Arts",
  },
  {
    id: 4,
    title: "Animify Landing Page",
    description: "Developed a simple Animation website landing page. The website features a responsive design with a clean and modern aesthetic.",
    longDescription:
      "A clean and modern landing page focused on motion design and animated elements. Built to showcase fluid transitions, interactive visuals, and engaging user experience using lightweight animation libraries.",
    images: ["/Animify.PNG", "/Animify1.PNG", "/Animify2.PNG", "/Animify3.PNG", "/Animify4.PNG", "/Animify5.PNG",],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    liveUrl: "https://omni-sol-figma.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/OmniSol-Figma",
  },
  {
    id: 5,
    title: "Seller Center",
    description:
      "An interactive dashboard for visualizing financial data with charts and reports.",
    longDescription:
      "Designed and implemented a seller center dashboard for visualizing financial data, including sales reports, revenue trends, and inventory management. Integrated interactive charts and graphs to provide users with a comprehensive view of their business performance.",
    images: ["/Avion-Admin.PNG"],
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Sanity"],
    liveUrl: "https://avion-admin-dashboard.vercel.app/sign-in",
    githubUrl: "https://github.com/Tahasiraj1/Avion-Admin-Dashboard",
  },
  {
    id: 6,
    title: "Dynamic Blog Website",
    description:
      "A dynamic blog website with responsive design, commenting system.",
    longDescription:
      "Created a dynamic blog website that allows users to read and comment on articles. Implemented a responsive design to ensure optimal viewing on all devices and integrated a commenting system to encourage user engagement.",
    images: ["/Blog.PNG", "/Blog1.PNG"],
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://dynamic-blog-website-lovat.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Dynamic-Blog-Website",
  }
];

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-2">
      <SlantedHeading text="My Projects" />
      <div className="container p-4 md:p-6">
        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-neutral-900 border-none">
                <Carousel>
                  <motion.div
                    layoutId={`project-${project.id}`}
                    className="relative aspect-video overflow-hidden"
                  >
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <Image
                            src={image}
                            alt={project.title}
                            width={1000}
                            height={600}
                            className="object-contain"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </motion.div>
                  <CardContent className="flex-grow px-6">

                    <div className="flex items-center justify-between my-2">
                      <motion.h3
                        layoutId={`project-${project.title}`}
                        className="text-xl font-bold text-white"
                      >
                        {project.title}
                      </motion.h3>
                      <div className="flex items-center justify-center gap-2">
                        <CarouselPrevious className="bg-emerald-900 hover:bg-emerald-800 hover:text-white text-white border border-emerald-600" />
                        <CarouselNext className="bg-emerald-900 hover:bg-emerald-800 hover:text-white text-white border border-emerald-600" />
                      </div>
                    </div>

                    <motion.p className="text-muted-foreground mb-4 text-white">
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs text-white">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                    <Button
                      className="bg-emerald-900 hover:bg-emerald-800"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button
                          className="bg-emerald-900 hover:bg-emerald-800"
                          size="icon"
                          asChild
                        >
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          className="bg-emerald-900 hover:bg-emerald-800"
                          size="icon"
                          asChild
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Live Demo</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Carousel>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project details dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-3xl bg-neutral-900 border-neutral-700">
              <DialogHeader>
                <motion.div layoutId={`project-${selectedProject.title}`}>
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                </motion.div>
                <DialogDescription>
                  <motion.div
                    layoutId={`project-${selectedProject.id}`}
                    className="relative aspect-video mt-4 mb-6 overflow-hidden rounded-lg"
                  >
                    <ProjetCarousel
                      images={selectedProject.images.map(image => ({
                        src: image,
                        alt: selectedProject.title // or any appropriate alt text
                      }))}
                    />
                  </motion.div>
                  <div className="space-y-4">
                    <p>{selectedProject.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.tags?.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    {selectedProject.liveUrl && (
                      <Button
                        asChild
                        className="bg-emerald-900 hover:bg-emerald-800"
                      >
                        <Link
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button
                        asChild
                        className="bg-emerald-900 hover:bg-emerald-800"
                      >
                        <Link
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
