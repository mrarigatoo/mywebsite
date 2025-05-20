import React from 'react';
import { Code, Layout, Smartphone, Search, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'Webbdesign',
    description: 'Skräddarsydda webbplatser med modern design som framhäver ditt varumärke och ger ett professionellt intryck.'
  },
  {
    icon: <Code className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'Webbutveckling',
    description: 'Tekniskt robust utveckling med fokus på prestanda, säkerhet och användarvänlighet.'
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'Responsiv Design',
    description: 'Din webbplats kommer att se perfekt ut och fungera felfritt på alla enheter, från mobiltelefoner till stora skärmar.'
  },
  {
    icon: <Search className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'SEO-optimering',
    description: 'Grundläggande sökmotoroptimering för att hjälpa ditt företag att synas i sökresultaten.'
  },
  {
    icon: <Zap className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'Snabb Leverans',
    description: 'Effektiv arbetsprocess som ger dig en färdig webbplats på kortare tid utan att kompromissa med kvaliteten.'
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600 mb-4" />,
    title: 'Webbhotell & Domän',
    description: 'Hjälp med att sätta upp webbhotell och domännamn så att du kan fokusera på din verksamhet.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="tjanster" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Mina Tjänster</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jag erbjuder kompletta webblösningar som hjälper ditt företag att växa. Alla mina tjänster är skräddarsydda efter just dina behov.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-100"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;