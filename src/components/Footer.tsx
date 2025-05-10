
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="glass-card rounded-xl md:p-8 p-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl md:text-2xl font-bold text-gradient">Golu Singh</span>
              </motion.div>
              
              <p className="text-muted-foreground mb-4">
                A showcase of my skills, projects, and professional journey as a full stack developer.
              </p>
              
              <div className="flex space-x-4">
                {['g', 'o', 'l', 'u'].map((social) => (
                  <motion.div
                    key={social}
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-xs">{social[0].toUpperCase()}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-muted-foreground hover:text-foreground"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              
              <ul className="space-y-2 text-muted-foreground">
                <li>637golusingh@gmai.com</li>
                <li>Bhubaneshwar, Odisha</li>
                <li>+91 6371790702</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Golu Singh. All Rights Reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
