import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/Constant';
import { SkillBubble } from '@/lib/Types';

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

            {SKILLS.map((skill: SkillBubble) => {
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