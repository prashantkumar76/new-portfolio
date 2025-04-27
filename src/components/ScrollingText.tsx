
import React from 'react';
import { motion } from 'framer-motion';

interface ScrollingTextProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ 
  text, 
  direction = 'left', 
  speed = 30,
  className = ''
}) => {
  // Duplicate the text to create a seamless loop
  const repeatedText = `${text} • ${text} • ${text} • ${text} • `;
  const duration = repeatedText.length / speed;
  
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? 
            [0, -repeatedText.length * 8] : 
            [-repeatedText.length * 8, 0]
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear"
        }}
        className="inline-block"
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};

export default ScrollingText;
