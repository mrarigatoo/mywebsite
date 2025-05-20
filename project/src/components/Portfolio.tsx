import React from 'react';
import { Rocket } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Som nyutexaminerad webbutvecklare är jag i början av min resa. Även om jag ännu inte har några kundprojekt att visa, har jag en solid grund i modern webbutveckling och är redo att ta mig an nya utmaningar.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Redo för mitt första projekt</h3>
            <p className="text-gray-600 mb-6">
              Som din webbutvecklare kommer jag att lägga extra tid och engagemang på ditt projekt. Du får inte bara en professionell webbplats, utan också min fulla uppmärksamhet och dedikation till varje detalj.
            </p>
            <div className="space-y-3 text-left w-full max-w-lg">
              <h4 className="font-semibold text-blue-900">Vad du kan förvänta dig:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Personlig kontakt och snabb kommunikation</li>
                <li>Modern och responsiv design</li>
                <li>Fokus på användarvänlighet och prestanda</li>
                <li>Kontinuerliga uppdateringar under projektets gång</li>
                <li>Support och vägledning efter lansering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;