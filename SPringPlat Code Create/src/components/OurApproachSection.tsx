import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const OurApproachSection = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="work" className="section" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="heading-md text-primary mb-6"
              variants={itemVariants}
            >
              our approach
            </motion.h2>
            <motion.p 
              className="paragraph mb-4"
              variants={itemVariants}
            >
              At Springplat, we believe in the power of personalized collaboration. We work closely with each client, taking the time to understand unique requirements and challenges.
            </motion.p>
            <motion.p 
              className="paragraph mb-8"
              variants={itemVariants}
            >
              This attention to detail allows us to create solutions that truly fit your business needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <a href="#work" className="btn btn-primary">VIEW OUR WORK</a>
              <a href="#contact" className="btn btn-outline">CONTACT US</a>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <img 
              src="https://i.imgur.com/ntq0m8a.png" 
              alt="Development process" 
              className="rounded-lg shadow-custom w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;