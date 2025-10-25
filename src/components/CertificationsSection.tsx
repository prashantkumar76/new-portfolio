import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { CERTIFICATION_DATA } from '@/lib/Constant';

const CertificationsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="relative overflow-hidden">
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
          Professional certifications validating my technical expertise and skills. Click on a certificate to view it.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATION_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(cert.image)}
            >
              <div 
                className="w-20 h-20 rounded-full bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${cert.image})` }}
              />
              <h3 className="text-lg font-semibold text-center mb-2">
                {cert.name}
              </h3>
              <p className="text-primary text-sm">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm">{cert.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80">
          <Dialog.Panel className="max-w-3xl w-full">
            <img src={selectedImage || ''} alt="Certificate" className="rounded-lg shadow-lg" />
          </Dialog.Panel>
        </Dialog>
      </div>
    </section>
  );
};

export default CertificationsSection;