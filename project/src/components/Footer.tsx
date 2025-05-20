import React from 'react';
import { Link } from './Link';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Gillis Agorastos</h3>
            <p className="text-blue-200 max-w-xs">
              Skapa din digitala närvaro med moderna, responsiva och prisvärda webbplatser för ditt företag.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link href="#hem" className="text-white hover:text-blue-200">Hem</Link>
              <Link href="#tjanster" className="text-white hover:text-blue-200">Tjänster</Link>
              <Link href="#portfolio" className="text-white hover:text-blue-200">Portfolio</Link>
              <Link href="#om-mig" className="text-white hover:text-blue-200">Om mig</Link>
              <Link href="#kontakt" className="text-white hover:text-blue-200">Kontakt</Link>
            </div>
            
            <div className="flex items-center text-blue-200">
              <span>© {currentYear} Gillis Agorastos.</span>
              <span className="mx-1">Skapad med</span>
              <Heart size={14} className="text-red-400 mx-1" />
              <span>i Stenungsund</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;