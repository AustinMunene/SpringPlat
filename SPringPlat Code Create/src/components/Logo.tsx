import { motion } from 'framer-motion';

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const floatingAnimation = {
    y: [-5, 5],
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
    <motion.div 
      className="flex items-center cursor-pointer" 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={scrollToTop}
    >
      <motion.div 
        className="mr-2"
        animate={floatingAnimation}
      >
        <motion.img 
          src="https://i.imgur.com/44bkL9F.png"
          alt="Springplat Logo"
          width="40"
          height="40"
          className="w-10 h-10"
        />
      </motion.div>
      <div>
        <div className="text-primary text-xl font-bold leading-none">springplat</div>
        <div className="text-secondary text-xs leading-none">crafting solutions</div>
      </div>
    </motion.div>
  );
};

export default Logo;