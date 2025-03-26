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

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:"A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription:
      "Developed a comprehensive e-commerce solution that includes product catalog management, user authentication, shopping cart functionality, and secure payment processing. Implemented responsive design principles to ensure optimal viewing across all devices.",
    image: "/Avion-Thumbnail.PNG",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://hackathon-2-flax.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Hackathon-2",
  },
  {
    id: 2,
    title: "Martial Arts Academy Website",
    description:"A website for a martial arts academy with class schedules, instructor profiles, and membership information.",
    longDescription:
      "Built a website for a martial arts academy that allows users to browse classes, view instructor profiles, and sign up for membership. The website features a responsive design with a clean and modern aesthetic.",
    image: "/MartialArts.PNG",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://martial-arts-red.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Martial-Arts",
  },
  {
    id: 3,
    title: "Dynamic Blog Website",
    description:"A dynamic blog website with responsive design, commenting system.",
    longDescription:
      "Created a dynamic blog website that allows users to read and comment on articles. Implemented a responsive design to ensure optimal viewing on all devices and integrated a commenting system to encourage user engagement.",
    image: "/Blog.PNG",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://dynamic-blog-website-lovat.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Dynamic-Blog-Website",
  },
  {
    id: 4,
    title: "Agentia World Landing Page",
    description:"Developed a landing page for the Agentia World website, showcasing its features and benefits to users.",
    longDescription:"Developed a landing page for the Agentia World website, showcasing its features and benefits to users.",
    image: "/Agentia.PNG",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://agentia-world-pi.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/Agentia-World",
  },
  {
    id: 5,
    title: "Seller Center",
    description:"An interactive dashboard for visualizing financial data with charts and reports.",
    longDescription:
      "Designed and implemented a seller center dashboard for visualizing financial data, including sales reports, revenue trends, and inventory management. Integrated interactive charts and graphs to provide users with a comprehensive view of their business performance.",
    image: "/Avion-Admin.PNG",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://avion-admin-dashboard.vercel.app/sign-in",
    githubUrl: "https://github.com/Tahasiraj1/Avion-Admin-Dashboard",
  },
  {
    id: 6,
    title: "E-commerce Website",
    description:"A simple e-commerce website with product listings and shopping cart functionality.",
    longDescription:
      "Developed a simple e-commerce website that allows users to browse products, add them to their cart, and checkout securely. The website features a responsive design with a clean and modern aesthetic.",
    image: "/E-commerce.PNG",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://e-commerce-website-mauve-mu.vercel.app/",
    githubUrl: "https://github.com/Tahasiraj1/E-Commerce-website",
  },
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
                <motion.div
                  layoutId={`project-${project.id}`}
                  className="relative aspect-video overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1000}
                    height={600}
                    className="object-contain"
                  />
                </motion.div>
                <CardContent className="flex-grow px-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-white">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
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
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <motion.div
                    layoutId={`project-${selectedProject.id}`}
                    className="relative aspect-video mt-4 mb-6 overflow-hidden rounded-lg"
                  >
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
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
                      <Button asChild>
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
                      <Button variant="outline" asChild>
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
