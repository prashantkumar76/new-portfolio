import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, X } from 'lucide-react';
import BatteryStatus from './BatteryStatus';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (menuRef.current && !(menuRef.current as any).contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-2 glass-card' : 'py-4 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl md:text-2xl font-bold text-gradient text-nowrap">Golu Singh</span>
          </motion.div>

          <div className="hidden md:flex space-x-8 z-100">
            {navItems.map((item) => (
              <NavItem key={item} text={item} onClick={() => {}} />
            ))}
          </div>

          <div className="flex items-center space-x-1">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          
            <motion.button
              className="hidden md:block p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
             <BatteryStatus/>
            </motion.button>

            <motion.button
              className="md:hidden p-2 z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            ref={menuRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-background shadow-lg z-[1000] p-6 flex flex-col space-y-6"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            {navItems.map((item) => (
              <NavItem
                key={item}
                text={item}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

const NavItem = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <motion.a
      href={`#${text.toLowerCase()}`}
      className="relative font-medium group"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
      <motion.span
        className="absolute z-[1000] -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue group-hover:w-full transition-all duration-300"
        whileHover={{ width: '100%' }}
      />
    </motion.a>
  );
};

export default Navbar;
