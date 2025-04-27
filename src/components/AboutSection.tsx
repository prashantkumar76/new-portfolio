
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            style={{ opacity, y }}
            className="relative"
          >
            <motion.div 
              className="w-full h-80 rounded-2xl overflow-hidden glass-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center text-6xl font-bold text-primary">
                JD
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-neon-purple"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-neon-blue"
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              Innovative Full Stack Developer with a passion for creating seamless user experiences
            </h3>
            
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize in building modern, responsive applications using React, Node.js, and cloud services. My approach combines technical excellence with creative problem-solving.
            </p>
            
            <p className="text-muted-foreground">
              I'm dedicated to writing clean, maintainable code and staying at the forefront of emerging technologies. When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring the outdoors.
            </p>
            
            <div className="pt-4">
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL'].map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
            <motion.button
              className="mt-6 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium inline-flex items-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(112, 48, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
