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
    role: "Web Developer Intern",
    company: "Wooble Software Pvt. Ltd.",
    duration: "Oct 2023 - May 2024",
    description: [
      "Spearheaded the development of a full-stack website, achieving a 25% reduction in response time",
      "Conducted comprehensive testing and optimization of API functionality using Postman, reducing error rates",
      "Initiated the creation of a Community Platform, driving a 45% increase in user engagement and implementing SEO strategies for content indexing on Google Search Console",
      "Collaborated with the team on project deployment through GIT, reducing code conflicts by 35% in the Git Branching and ensuring management on AWS servers"
    ],
    tech: ["React", "Node.js", "Postman", "Git", "AWS", "SEO"]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Vis Network Pvt. Ltd.",
    duration: "Oct 2024 - Present",
    description: [
      "Spearheaded the development of a full-stack website, achieving a 25% reduction in response time",
      "Conducted comprehensive testing and optimization of API functionality using Postman, reducing error rates",
      "Initiated the creation of a Community Platform, driving a 45% increase in user engagement and implementing SEO strategies for content indexing on Google Analytics",
      "Collaborated with the team on project deployment through GIT, reducing code conflicts by 35% in the Git Version and ensuring management on AWS servers"
    ],
    tech: ["React", "Node.js", "Postman", "Git", "AWS", "SEO"]
  },
  {
    id: 3,
    role: "Open Source Contributor",
    company: "Craftfosslabs",
    duration: "2025- present",
    description: [
      "Contributed to Craftfosslabs' open-source platform by developing and maintaining open-source packages, extensions, and APIs.",
      "Collaborated with the team to create free tools and resources for developers, including a code-sharing platform, finance planner, and task manager.",
      "Supported the development of free public APIs and contributed to the community with useful resources like roadmaps, tutorials, and guides."
    ],
    tech: ["JavaScript", "Node.js", "React.js", "Tailwind CSS", "MongoDB", "Express.js"]
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
