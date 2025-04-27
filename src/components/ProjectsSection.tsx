
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
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    url: "#",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media accounts with data visualization.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "Firebase", "D3.js"],
    url: "#",
  },
  {
    id: 3,
    title: "AI Code Assistant",
    description: "An AI-powered coding assistant that helps developers write better code.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "React", "TensorFlow", "OpenAI"],
    url: "#",
  },
  {
    id: 4,
    title: "Health Tracking App",
    description: "Mobile app for tracking health metrics with personalized insights.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "GraphQL", "AWS", "HealthKit"],
    url: "#",
  },
  {
    id: 5,
    title: "Smart Home IoT Hub",
    description: "Central hub for managing various smart home devices with voice commands.",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=800&q=80",
    tags: ["IoT", "Node.js", "MQTT", "React"],
    url: "#",
  },
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
      className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] glass-card rounded-xl overflow-hidden"
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
