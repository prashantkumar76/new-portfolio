
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="glass-card rounded-xl p-8"
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
                <span className="text-xl md:text-2xl font-bold text-gradient">Dev.Portfolio</span>
              </motion.div>
              
              <p className="text-muted-foreground mb-4">
                A showcase of my skills, projects, and professional journey as a full stack developer.
              </p>
              
              <div className="flex space-x-4">
                {['github', 'linkedin', 'twitter', 'dribbble'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-xs">{social[0].toUpperCase()}</span>
                  </motion.a>
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
                <li>john.developer@example.com</li>
                <li>San Francisco, CA</li>
                <li>+1 (123) 456-7890</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} John Developer. All Rights Reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
