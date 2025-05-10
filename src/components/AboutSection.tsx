import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GitHubCalendar from "react-github-calendar";
import { Loader } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isloader, setIsLoader] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const handleDownloadResume = () => {
    setIsLoader(true);
    const link = document.createElement('a');
    link.href = '/assets/Golu_Singh.pdf';
    link.download = 'Golu_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsLoader(false);
  };
  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
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
              <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center md:text-6xl text-2xl font-bold text-primary">
                Hey Visitors
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
            <p>
              Hello everyone! Thank you for visiting my portfolio.   <br />
              I’m a passionate Software Developer focused on building scalable system integrations, full-stack AI-powered web applications, PWA solutions, Figma designs, and managing cloud VPS deployments — delivering complete, robust software solutions end-to-end.
            </p>
            <motion.button
             disabled = {isloader}
              onClick={handleDownloadResume}
              className={`mt-6 px-6 py-3 rounded-lg font-medium inline-flex items-center ${isloader ? 'cursor-wait' : 'cursor-pointer bg-primary text-primary-foreground '}`}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(112, 48, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
             {isloader ? <>Downloading Resume <Loader className='ms-2 animate-spin'/></>: "Download Resume"}
            </motion.button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='mx-auto max-w-7xl flex justify-center items-center px-2'
      >
        <GitHubCalendar
          username="1sisodiyaji"
          blockSize={18}
          blockMargin={5}
          colorScheme="dark"
          fontSize={12}
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;