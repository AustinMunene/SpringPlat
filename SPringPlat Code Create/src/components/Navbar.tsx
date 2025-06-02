import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-text-dark hover:text-primary font-medium transition-colors">About</a>
          <a href="#services" className="text-text-dark hover:text-primary font-medium transition-colors">Our services</a>
          <a href="#work" className="text-text-dark hover:text-primary font-medium transition-colors">Our work</a>
          <a href="#contact" className="btn btn-primary">CONTACT US</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-text-dark hover:text-primary font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-text-dark hover:text-primary font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our services
            </a>
            <a 
              href="#work" 
              className="text-text-dark hover:text-primary font-medium transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our work
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;