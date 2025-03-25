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

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription:
      "Developed a comprehensive e-commerce solution that includes product catalog management, user authentication, shopping cart functionality, and secure payment processing. Implemented responsive design principles to ensure optimal viewing across all devices.",
    image: "/Avion-Thumbnail.PNG",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team workspaces.",
    longDescription:
      "Built a productivity tool that allows teams to organize tasks, set deadlines, and track progress in real-time. Features include drag-and-drop task organization, team collaboration spaces, and customizable notification settings.",
    image: "/MartialArts.PNG",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description:
      "An interactive dashboard for visualizing financial data with customizable charts and reports.",
    longDescription:
      "Created a comprehensive financial analytics dashboard that transforms complex data into intuitive visualizations. Users can customize views, generate reports, and set up automated alerts based on specific financial thresholds.",
    image: "/Blog.PNG",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    description:
      "A cross-platform mobile application for tracking workouts, nutrition, and fitness goals.",
    longDescription:
      "Designed and developed a comprehensive fitness companion app that helps users track their exercise routines, monitor nutritional intake, and visualize progress toward fitness goals. Includes features like workout timers, progress photos, and social sharing capabilities.",
    image: "/Agentia.PNG",
    tags: ["React Native", "Redux", "Firebase", "HealthKit"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 5,
    title: "AI Content Generator",
    description:
      "A tool that leverages machine learning to generate marketing copy and social media content.",
    longDescription:
      "Engineered an AI-powered content creation tool that helps marketers generate compelling copy for various channels. The system analyzes brand voice, target audience, and campaign objectives to produce relevant, engaging content suggestions.",
    image: "/Avion-Admin.PNG",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    id: 6,
    title: "Smart Home Control System",
    description:
      "An IoT solution for managing and automating connected devices in a smart home environment.",
    longDescription:
      "Developed a centralized system for controlling and automating various smart home devices. The platform includes customizable routines, voice control integration, energy usage monitoring, and remote access capabilities.",
    image: "/E-commerce.PNG",
    tags: ["IoT", "React", "Node.js", "MQTT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
];

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-2">
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
                      <Badge variant="outline" className="text-xs">
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
