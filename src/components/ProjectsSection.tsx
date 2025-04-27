import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CraftfossLabs",
    description: "CraftfossLabs is an open-source platform built on Next.js. Our main website features an automated blog section and key refinements aimed at enhancing user experience and performance. We've implemented robust SEO strategies using Meta Tags and OG tags to improve visibility. With a seamless integration of MongoDB, Feedback System, and an Admin Panel. The platform is optimized for both security and performance, with backend powered by Node.js and Express JS. Additionally, our deployment pipeline on Vercel is streamlined to minimize conflicts, ensuring smooth CI/CD workflows.",
    image: "/assets/craftfosslabs.png",
    tags: ["NEXT JS", "FRAMER MOTION", "MONGODB", "TAILWIND CSS"],
    url: "http://craftfosslabs.com/"    
  },
  {
    id: 2,
title: "Free API Tools",
description: "Free API Tools offers a suite of over 12 powerful APIs, including features like Location Finder, File Converter, QR Code Generator, and more. Designed to provide developers with quick and reliable solutions, this platform is built with React.js, Express.js, and MongoDB. The site is also Progressive Web App (PWA) enabled for seamless experiences across devices. Hosted on a VPS, the tools are optimized for real-time performance and scalability, allowing users to integrate them into their applications effortlessly.",
image: "/assets/FREE_API.png",
tags: ["REACT JS", "EXPRESS JS", "MONGODB", "VPS", "PWA"],
url: "https://freeapi.craftfosslabs.com/"
  },
  {
    id: 3,
title: "Tools For Professional Developers",
description: "Tools For Professional Developers is a platform that hosts four powerful applications designed to enhance productivity for developers. These include a Code Share tool with a VS Code-like design for seamless code sharing, a Finance Planner to manage expenses and budgets, a Task Manager featuring drag-and-drop functionality for efficient task management, and a Video Downloader supporting downloads from multiple platforms. Built with React.js, Express.js, and MongoDB, and optimized as a Progressive Web App (PWA), these tools are hosted on a VPS for fast and reliable performance.",
image: "/assets/Tools.png",
tags: ["REACT JS", "EXPRESS JS", "MONGODB", "VPS", "PWA"],
url: "https://tools.craftfosslabs.com/"

  },
  {
    id: 4,
    title: "Study Notion",
    description: "Study Notion is an EdTech platform designed to help students track their academic progress and manage their study schedules. Hosted on Vercel, the platform offers personalized insights and analytics to help students optimize their learning habits. Built with React.js, Express.js, and MongoDB, Study Notion provides a seamless and interactive user experience for effective study management.",
    image: "/assets/StudyNotion.png",
    tags: ["REACT JS", "EXPRESS JS", "MONGODB" , "VERCEL"],
    url: "https://pathshala-ruby.vercel.app/"
  }
];

const ProjectsSection = () => {
  const [focusedId, setFocusedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Drag the project cards to explore. Each project showcases different skills and technologies.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 pb-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} isFocused={focusedId === project.id} setFocusedId={setFocusedId} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  isFocused: boolean;
  setFocusedId: (id: number | null) => void;
}

const ProjectCard = ({ project, isFocused, setFocusedId }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <motion.div
      className="w-full md:w-[calc(50%-1rem)]  glass-card rounded-xl overflow-hidden"
      style={{ x, y }}
      drag="x"
      dragConstraints={{ left: -50, right: 50 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      onDragEnd={() => {
        x.set(0);
        y.set(0);
      }}
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setFocusedId(project.id)}
      onHoverEnd={() => setFocusedId(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-semibold mb-2"
          animate={{ scale: isFocused ? 1.05 : 1 }}
        >
          {project.title}
        </motion.h3>
        
        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.a
          href={project.url}
          target='blank'
          className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
