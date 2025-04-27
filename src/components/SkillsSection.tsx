
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface SkillBubble {
  id: number;
  name: string;
  level: number;
  color: string;
}

const SKILLS: SkillBubble[] = [
  { id: 1, name: "React", level: 90, color: "#61DAFB" },
  { id: 2, name: "TypeScript", level: 85, color: "#3178C6" },
  { id: 3, name: "Node.js", level: 80, color: "#339933" },
  { id: 4, name: "GraphQL", level: 75, color: "#E535AB" },
  { id: 5, name: "AWS", level: 70, color: "#FF9900" },
  { id: 6, name: "Docker", level: 75, color: "#2496ED" },
  { id: 7, name: "MongoDB", level: 80, color: "#47A248" },
  { id: 8, name: "Next.js", level: 85, color: "#000000" },
  { id: 9, name: "CSS/SCSS", level: 90, color: "#1572B6" },
  { id: 10, name: "Express", level: 85, color: "#000000" },
  { id: 11, name: "Redux", level: 80, color: "#764ABC" },
  { id: 12, name: "Jest", level: 75, color: "#C21325" },
];

const SkillsSection = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Drag the skill bubbles around to interact with them. The size of each bubble represents my proficiency level.
        </motion.p>

        <motion.div 
          ref={constraintsRef} 
          className="relative h-[500px] md:h-[600px] glass-card rounded-xl p-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Floating skill bubbles */}
          {SKILLS.map((skill) => {
            const bubbleSize = 40 + skill.level * 0.6;
            const isHovered = hoveredSkill === skill.id;
            
            return (
              <motion.div
                key={skill.id}
                className="absolute cursor-grab"
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 50 }}
                initial={{
                  x: Math.random() * 600 - 300,
                  y: Math.random() * 400 - 200,
                }}
                animate={{
                  scale: isHovered ? 1.2 : 1,
                }}
                onHoverStart={() => setHoveredSkill(skill.id)}
                onHoverEnd={() => setHoveredSkill(null)}
                style={{ 
                  width: bubbleSize, 
                  height: bubbleSize,
                  backgroundColor: `${skill.color}20`,
                  border: `2px solid ${skill.color}`,
                  zIndex: isHovered ? 10 : 1,
                }}
                className="rounded-full flex items-center justify-center font-semibold"
              >
                <motion.div
                  className="text-sm md:text-base text-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {skill.name}
                  {isHovered && (
                    <motion.div 
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded-md text-xs"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {skill.level}%
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Frontend Development",
              skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
              icon: "🎨"
            },
            {
              title: "Backend Development",
              skills: ["Node.js", "Express", "GraphQL", "REST API", "MongoDB"],
              icon: "⚙️"
            },
            {
              title: "DevOps & Tools",
              skills: ["Docker", "AWS", "CI/CD", "Git", "Jest"],
              icon: "🚀"
            }
          ].map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-muted-foreground">• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
