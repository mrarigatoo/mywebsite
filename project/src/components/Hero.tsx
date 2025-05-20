import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <section id="hem" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4 leading-tight">
            Skapa din <span className="text-blue-600">digitala närvaro</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
            Moderna, responsiva och prisvärda webbplatser för ditt företag
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-lg">
            Hej! Jag är Gillis, en ung och passionerad webbutvecklare. Jag hjälper lokala företag att synas online med skräddarsydda webbplatser som faktiskt ger resultat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#portfolio" 
              className="bg-blue-600 text-white hover:text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all hover:scale-105 hover:font-bold text-center font-medium"
            >
              Se mina projekt
            </Link>
            <Link 
              href="#kontakt" 
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-all hover:scale-105 hover:font-bold text-center font-medium"
            >
              Kontakta mig
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
              GA
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#tjanster">
          <ArrowDown size={28} className="text-blue-600" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;