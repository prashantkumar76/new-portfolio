import { cardVariants } from '@/lib/Animations';
import { ProjectCardProps } from '@/lib/Types';
import { motion, useMotionValue } from 'framer-motion';

const ProjectCard = ({ project, isFocused, setFocusedId }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      className="w-full md:w-[calc(50%-1rem)]  glass-card rounded-xl overflow-hidden"
      style={{ x, y }}
      drag="x"
      dragConstraints={{ left: -50, right: 50 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      onDragEnd={() => {
        x.set(0);
        y.set(0);
      }}
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setFocusedId(project.id)}
      onHoverEnd={() => setFocusedId(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center aspect-video rounded-xl"
          style={{ backgroundImage: `url(${project.image})` }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <motion.h3
          className="text-xl font-semibold mb-2"
          animate={{ scale: isFocused ? 1.01 : 1 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.a
          href={project.url}
          target='blank'
          className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard