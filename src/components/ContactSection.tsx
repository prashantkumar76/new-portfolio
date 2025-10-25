import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useForm, ValidationError } from '@formspree/react';
import { Loader } from 'lucide-react';
import { socialIcons } from '@/lib/Constant';
import { buttonVariants, inputVariants } from '@/lib/Animations';

const ContactSection = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mpwdwnzn");
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmitWrapper = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    await handleSubmit(e);
    
    if (state.succeeded) {
      setFormStatus('success');
      toast({ title: 'Success!', description: 'Your message has been sent.', variant: 'default' });
      setFormState({ name: '', email: '', message: '' });
    } else if (Object.keys(state.errors).length > 0) {
      setFormStatus('error');
      toast({ title: 'Error!', description: 'Please check your form and try again.', variant: 'destructive' });
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="section-container">
        <motion.h2
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Form Section */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmitWrapper} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <motion.input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none"
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none"
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none"
                  variants={inputVariants}
                  whileFocus="focus"
                  initial="blur"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg disabled:opacity-70 flex items-center justify-center gap-2"
                disabled={state.submitting}
                variants={buttonVariants}
                animate={formStatus}
                whileHover="hover"
                whileTap="tap"
              >
                {formStatus === 'submitting' ? (
                  <>
                   Sending... <Loader className='animate-spin'/> 
                  </>
                ) : formStatus === 'success' ? 'Sent Successfully!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="order-1 md:order-2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8 rounded-xl">
              <motion.div
                className="inline-block mb-6 text-4xl"
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
              >
                👋
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4">
                Let's Collaborate
              </h3>

              <p className="text-muted-foreground mb-6">
                Have a project idea or opportunity? I'm available for freelance work and full-time roles.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-primary">637golusingh@gmail.com</p>
                </div>

                <div>
                  <p className="font-medium">Based in</p>
                  <p className="text-muted-foreground">Bhubaneswar, Odisha</p>
                </div>

                <div className="flex justify-center md:justify-start space-x-4 pt-4">
                  {socialIcons.map(({ icon, link }, idx) => (
                    <motion.a
                      key={idx}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
