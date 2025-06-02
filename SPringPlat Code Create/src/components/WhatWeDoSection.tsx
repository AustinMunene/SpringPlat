import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WhatWeDoSection = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="services" className="section bg-background-light" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="order-2 md:order-1"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src="https://i.imgur.com/nfo9bXT.png" 
              alt="Analytics and data visualization" 
              className="rounded-lg shadow-custom w-full h-auto"
              animate={floatingAnimation}
            />
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="heading-md text-primary mb-6"
              variants={itemVariants}
            >
              what we do
            </motion.h2>
            <motion.p 
              className="paragraph mb-8"
              variants={itemVariants}
            >
              We combine technical expertise with personalized attention to create custom software solutions that solve real business challenges.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">OUR SERVICES</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;