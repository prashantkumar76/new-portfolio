import { TimelineItemProps } from '@/lib/Types';
import {motion} from 'framer-motion';

  
  const TimelineItem = ({ experience, index }: TimelineItemProps) => {
    const isEven = index % 2 === 0;
    
    return (
      <div className={`flex flex-col md:flex-row items-center mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
        <motion.div 
          className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} md:text-${isEven ? 'left' : 'right'} mb-6 md:mb-0`}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass-card p-6 rounded-xl"
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
          >
            <h3 className="text-xl font-semibold">{experience.role}</h3>
            <p className="text-primary font-medium">{experience.company}</p>
            <p className="text-sm text-muted-foreground mb-4">{experience.duration}</p>
            
            <ul className="space-y-2 mb-4">
              {experience.description.map((item, i) => (
                <li key={i} className="text-sm">• {item}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold"
            whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(112, 48, 255, 0.5)" }}
          >
            {experience.id}
          </motion.div>
        </motion.div>
        
        <div className="md:w-1/2" />
      </div>
    );
  };

export default TimelineItem