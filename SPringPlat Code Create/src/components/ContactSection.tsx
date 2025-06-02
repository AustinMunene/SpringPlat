import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="section bg-background-light" ref={sectionRef}>
      <div className="container max-w-4xl">
        <motion.div 
          className="bg-white rounded-lg shadow-custom p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-10" variants={itemVariants}>
            <h2 className="heading-lg text-primary mb-4">Get in Touch</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Contact us today to discuss your project.
            </p>
          </motion.div>
          
          <motion.form className="space-y-6" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-text-dark font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-dark font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-text-dark font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-text-dark font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <div className="text-center">
              <motion.button
                type="submit"
                className="btn btn-primary px-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;