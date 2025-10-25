import { EXPERIENCE_DATA } from '@/lib/Constant';
import { motion } from 'framer-motion';
import TimelineItem from './Timeline';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="section-container">
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My professional journey in the world of software development.
        </motion.p>

        <div className="relative">
          <motion.div 
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-teal"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {EXPERIENCE_DATA.map((exp, index) => (
            <TimelineItem 
              key={exp.id} 
              experience={exp} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
