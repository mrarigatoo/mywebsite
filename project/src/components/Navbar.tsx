import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        <Link href="#hem" className="text-xl font-bold text-blue-900">
          Gillis Agorastos
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#hem">Hem</Link>
          <Link href="#tjanster">Tjänster</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#om-mig">Om mig</Link>
          <Link 
            href="#kontakt" 
            className="bg-blue-600 text-white hover:text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all hover:font-bold hover:scale-105"
          >
            Kontakta mig
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-900 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 flex flex-col space-y-4 transition-all duration-300">
          <Link href="#hem" onClick={() => setIsOpen(false)}>Hem</Link>
          <Link href="#tjanster" onClick={() => setIsOpen(false)}>Tjänster</Link>
          <Link href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="#om-mig" onClick={() => setIsOpen(false)}>Om mig</Link>
          <Link 
            href="#kontakt" 
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white hover:text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all hover:font-bold hover:scale-105 text-center"
          >
            Kontakta mig
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;