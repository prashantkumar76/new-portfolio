import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface SkillBubble {
  id: number;
  name: string;
  level: number;
  color: string;
};

const SKILLS: SkillBubble[] = [
  { id: 1, name: "C", level: 80, color: "#A8B9CC" },
  { id: 2, name: "Java", level: 85, color: "#007396" },
  { id: 3, name: "PHP", level: 75, color: "#777BB4" },
  { id: 4, name: "Node.js", level: 80, color: "#339933" },
  { id: 5, name: "SQL", level: 85, color: "#4479A1" },
  { id: 6, name: "MongoDB", level: 80, color: "#47A248" },
  { id: 7, name: "Figma", level: 75, color: "#F24E1E" },
  { id: 8, name: "Photopea", level: 70, color: "#000000" },
  { id: 9, name: "HTML", level: 90, color: "#E34F26" },
  { id: 10, name: "CSS", level: 90, color: "#1572B6" },
  { id: 11, name: "JavaScript", level: 85, color: "#F7DF1E" },
  { id: 12, name: "Tailwind CSS", level: 85, color: "#06B6D4" },
  { id: 13, name: "Bootstrap", level: 80, color: "#7952B3" },
  { id: 14, name: "Next.js", level: 85, color: "#000000" },
  { id: 15, name: "Express.js", level: 80, color: "#000000" },
  { id: 16, name: "React.js", level: 85, color: "#61DAFB" },
  { id: 17, name: "Git", level: 80, color: "#F05032" },
  { id: 18, name: "Docker", level: 75, color: "#2496ED" },
  { id: 19, name: "Postman", level: 85, color: "#FF6C37" },
  { id: 20, name: "Google Cloud", level: 70, color: "#4285F4" },
  { id: 21, name: "Cursor", level: 80, color: "#000000" },
  { id: 22, name: "Miro", level: 75, color: "#050038" }
];

const SkillsSection = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section id="skills">
      <div className='section-container'>
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
        <div className="relative overflow-hidden">
          <motion.div
            ref={constraintsRef}
            className="relative h-[500px] md:h-[600px] glass-card rounded-xl p-4 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {SKILLS.map((skill) => {
              const bubbleSize = 40 + skill.level * 0.6;
              const isHovered = hoveredSkill === skill.id;

              const cardWidth = 600;
              const cardHeight = 500;

              return (
                <motion.div
                  key={skill.id}
                  className="absolute cursor-grab flex justify-center items-center shadow-sm"
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.2}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                  whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 50 }}
                  initial={{
                    x: Math.random() * (cardWidth - bubbleSize) - (cardWidth - bubbleSize) / 3,
                    y: Math.random() * (cardHeight - bubbleSize) - (cardHeight - bubbleSize) / 4,
                  }}
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                  }}
                  onHoverStart={() => setHoveredSkill(skill.id)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  style={{
                    width: bubbleSize,
                    height: bubbleSize,
                    backgroundColor: `${skill.color}30`,
                    border: `1px solid ${skill.color}`,
                    zIndex: isHovered ? 10 : 1,
                    borderRadius: '50%'
                  }}
                >
                  <motion.div
                    className="text-xs text-wrap text-center"
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
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
