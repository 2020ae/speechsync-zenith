
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // For debugging
    console.log(`Attempting to scroll to section: ${id}`);
    
    const element = document.getElementById(id);
    if (element) {
      console.log(`Found element with id: ${id}`);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    } else {
      console.error(`Element with id "${id}" not found`);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-medium tracking-tight">
              SpeechSync
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden py-4 px-6 bg-white/95 backdrop-blur-md border-t border-border/50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('features')}
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <Link 
              to="/about" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
