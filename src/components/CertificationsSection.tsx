
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Jan 2023",
    description: "Designing distributed systems on AWS, implementing security controls, and deploying applications with high availability.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=300&q=80",
    credentialId: "AWS-123456"
  },
  {
    id: 2,
    name: "Full Stack Web Developer",
    issuer: "Udacity",
    date: "Oct 2022",
    description: "Modern full stack development with React, Node.js, and PostgreSQL including authentication and deployment.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80",
    credentialId: "FSND-789012"
  },
  {
    id: 3,
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "Mar 2022",
    description: "Demonstrating knowledge of Scrum practices, including facilitation, coaching, and servant leadership.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80",
    credentialId: "PSM-345678"
  },
  {
    id: 4,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "Sep 2021",
    description: "Building and training neural networks for computer vision, NLP, and time series data with TensorFlow.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=300&q=80",
    credentialId: "TF-901234"
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Professional certifications that validate my expertise and knowledge.
          Hover over the cards to see more details.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <FlipCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FlipCardProps {
  certification: Certification;
  index: number;
}

const FlipCard = ({ certification, index }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="h-80 w-full perspective-1000 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden glass-card rounded-xl p-6 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div 
            className="w-16 h-16 rounded-full bg-cover bg-center mb-4"
            style={{ backgroundImage: `url(${certification.image})` }}
          />
          <h3 className="text-lg font-semibold text-center mb-2">
            {certification.name}
          </h3>
          <p className="text-primary text-sm mb-1">{certification.issuer}</p>
          <p className="text-muted-foreground text-sm">{certification.date}</p>
          
          <motion.p
            className="text-xs text-muted-foreground mt-4 text-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            (Click to flip)
          </motion.p>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden glass-card rounded-xl p-6 flex flex-col"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)"
          }}
        >
          <h3 className="text-lg font-semibold mb-4">
            {certification.name}
          </h3>
          <p className="text-sm flex-grow">
            {certification.description}
          </p>
          <div className="mt-4">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">Issued by:</span> {certification.issuer}
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">Date:</span> {certification.date}
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">Credential ID:</span> {certification.credentialId}
            </p>
          </div>
          
          <motion.p
            className="text-xs text-muted-foreground mt-4 text-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            (Click to flip back)
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CertificationsSection;
