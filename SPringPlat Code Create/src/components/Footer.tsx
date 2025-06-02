import { motion } from 'framer-motion';
import Logo from './Logo';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <footer id="contact" className="bg-background pt-16 pb-8">
      <div className="container">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Logo />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            variants={itemVariants}
          >
            <a href="#about" className="text-text-dark hover:text-primary font-medium transition-colors">About</a>
            <a href="#services" className="text-text-dark hover:text-primary font-medium transition-colors">Our services</a>
            <a href="#work" className="text-text-dark hover:text-primary font-medium transition-colors">Our work</a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-text-dark font-semibold mb-4">Follow us on</h3>
            <div className="flex justify-center space-x-6">
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-light hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-text-light text-sm">
            &copy; {new Date().getFullYear()} Springplat. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;