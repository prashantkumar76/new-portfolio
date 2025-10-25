import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/Constant';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [focusedId, setFocusedId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden">
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

export default ProjectsSection;