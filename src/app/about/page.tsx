"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Book, ExternalLink, Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutSections = [
  {
    title: "Hello World!",
    icon: <Heart className="h-5 w-5 text-primary" />,
    content: "I'm Athul, an aspiring researcher and academic with a foundation in Computer Science and Philosophy. I'm seeking opportunities for higher education and research abroad. I'm particularly interested in exploring the intersection of artificial intelligence and philosophy.",
  },
  {
    title: "What I Do",
    icon: <Book className="h-5 w-5 text-primary" />,
    content: "I focus on philosophical analysis in areas like Metaphysics and Epistemology, while also applying my programming skills in Python and JavaScript to develop web applications and research projects.",
  },
];

const portfolioProjects = [
  {
    title: "Tourism Website",
    description: "A modern tourism website showcasing destinations and travel experiences.",
    image: "https://picsum.photos/800/600",
    liveUrl: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Combining computer science and philosophy to explore new frontiers
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {aboutSections.map((section) => (
          <motion.div key={section.title} variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Portfolio
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <Link 
                  href={project.liveUrl || project.githubUrl || ""} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video group cursor-pointer overflow-hidden"
                >
                  <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                      <LinkIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </Link>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-muted font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 