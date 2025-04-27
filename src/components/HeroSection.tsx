import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background particles */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-purple/30 dark:bg-neon-purple/10"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={typingVariants}
            >
              <motion.p 
                className="text-lg md:text-xl mb-4 text-primary"
                variants={letterVariants}
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4"
                variants={typingVariants}
              >
                {"Golu Singh".split('').map((char, index) => (
                  <motion.span key={index} className="inline-block" variants={letterVariants}>
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div 
                className="text-xl md:text-3xl font-mono font-semibold mb-8 text-gradient"
                variants={letterVariants}
              >
                <span className="typing-demo">Software Engineer</span>
              </motion.div>
              <motion.p 
                className="text-muted-foreground mb-8 max-w-lg"
                variants={letterVariants}
              >
                Software enginner at <a href='https://visnet.in/' className='hover:border-b border-blue-400' target='blank' >Vis Network  </a>& Freelance Innovator | UI/UX Designer & JS Framework Developer| Ex-Intern <a href='https://wooble.org/' className='hover:border-b border-blue-400' target='blank'> @Wooble 🚀  </a> <br/>
               <span className="flex items-center gap-2">
                <a href="tel:+916371790702" className='hover:border-b border-blue-400' >+91-6371790702</a> | 
                <a href="mailto:637golusingh@gmail.com" className='hover:border-b border-blue-400' >637golusingh@gmail.com</a> | 
                <a href='https://www.linkedin.com/in/golu-singh/' target='blank' className='hover:border-b border-blue-400' >LinkedIn</a> | 
                <a href='https://github.com/1sisodiyaji' target='blank' className='hover:border-b border-blue-400' >GitHub</a>
              </span>
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={letterVariants}
              >
                <motion.a
                  className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(112, 48, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  href='#projects'
                >
                  View Projects
                </motion.a>
                <motion.a
                href='#contact'
                  className="px-6 py-3 rounded-lg border border-primary text-primary font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue p-1"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <div className="w-full h-full bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center text-4xl font-bold text-primary">
                  <img src="https://media.licdn.com/dms/image/v2/D5603AQERSJM-YRt9VA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704539684519?e=1751500800&v=beta&t=4PQ96uOEs9EZAzy-Z_lpkPRogOnbG4_lbHoz-yBIUmw" alt="Golu Singh" title='Golu Singh' loading='lazy' className='w-full h-full rounded-full' />
                </div>
              </div>
              {/* Animated particles around the avatar */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary"
                  style={{
                    width: 10 * i,
                    height: 10 * i,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.3, 0.7],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={scrollDown}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
