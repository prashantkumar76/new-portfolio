
import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
}

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    duration: "2022 - Present",
    description: [
      "Led development of a microservices architecture that improved system scalability by 300%",
      "Implemented CI/CD pipelines that reduced deployment time by 70%",
      "Mentored junior developers and conducted code reviews"
    ],
    tech: ["React", "Node.js", "AWS", "Kubernetes", "GraphQL"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    duration: "2020 - 2022",
    description: [
      "Developed responsive web applications with React and TypeScript",
      "Improved page load times by 40% through code optimizations",
      "Built reusable component library used across multiple projects"
    ],
    tech: ["React", "TypeScript", "SCSS", "Redux", "Jest"]
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Creative Agency",
    duration: "2018 - 2020",
    description: [
      "Developed client websites with modern JavaScript frameworks",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Created dynamic animations and interactive elements"
    ],
    tech: ["JavaScript", "HTML/CSS", "jQuery", "PHP", "WordPress"]
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Startup Innovations",
    duration: "2017 - 2018",
    description: [
      "Assisted in developing MVPs for early-stage startups",
      "Built frontend components and integrations with backend APIs",
      "Participated in agile development processes"
    ],
    tech: ["JavaScript", "CSS", "React", "Express"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My professional journey in the world of software development.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-teal"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {/* Experience items */}
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem 
              key={exp.id} 
              experience={exp} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row items-center mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Content */}
      <motion.div 
        className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} md:text-${isEven ? 'left' : 'right'} mb-6 md:mb-0`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="glass-card p-6 rounded-xl"
          whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
        >
          <h3 className="text-xl font-semibold">{experience.role}</h3>
          <p className="text-primary font-medium">{experience.company}</p>
          <p className="text-sm text-muted-foreground mb-4">{experience.duration}</p>
          
          <ul className="space-y-2 mb-4">
            {experience.description.map((item, i) => (
              <li key={i} className="text-sm">• {item}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {experience.tech.map((tech, i) => (
              <motion.span
                key={i}
                className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Timeline dot */}
      <motion.div 
        className="flex items-center justify-center z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold"
          whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(112, 48, 255, 0.5)" }}
        >
          {experience.id}
        </motion.div>
      </motion.div>
      
      {/* Empty space for the other side */}
      <div className="md:w-1/2" />
    </div>
  );
};

export default ExperienceSection;
