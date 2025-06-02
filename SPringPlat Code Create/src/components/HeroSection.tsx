import { motion } from 'framer-motion';

const HeroSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="heading-xl mb-6 text-primary relative inline-block"
              variants={itemVariants}
            >
              Transform Your Ideas<br />Into Reality
              <motion.svg
                width="240"
                height="20"
                viewBox="0 0 240 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-4 left-0"
              >
                <motion.path
                  d="M0 10C40 10 40 17 80 17C120 17 120 3 160 3C200 3 200 10 240 10"
                  stroke="#FFA64D"
                  strokeWidth="4"
                  strokeLinecap="round"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </motion.svg>
            </motion.h1>
            <motion.p 
              className="paragraph mb-8 max-w-lg"
              variants={itemVariants}
            >
              Springplat is a specialized software consulting firm that nurtures ideas and transforms them into fully realized digital products.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="#services" className="btn btn-primary">Learn More</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="hidden"
            animate="visible"
            variants={shapeVariants}
          >
            <div className="relative w-full h-80 md:h-96">
              <motion.div 
                className="absolute top-0 left-0 w-40 h-40 bg-primary-light rounded-lg"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  y: [0, -10, 0, 10, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 15,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute top-1/4 right-1/4 w-56 h-56 bg-primary rounded-lg"
                animate={{ 
                  rotate: [0, -10, 0, 10, 0],
                  x: [0, 10, 0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 18,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 right-0 w-48 h-48 bg-secondary rounded-lg"
                animate={{ 
                  rotate: [0, 15, 0, -15, 0],
                  y: [0, 15, 0, -15, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 16,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary rounded-lg"
                animate={{ 
                  rotate: [0, -8, 0, 8, 0],
                  x: [0, -15, 0, 15, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 20,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;