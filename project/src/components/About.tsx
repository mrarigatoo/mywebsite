import React from 'react';
import { CheckCircle } from 'lucide-react';

const skills = [
  'HTML5 & CSS3',
  'JavaScript (React, Vue)',
  'Responsiv design',
  'WordPress-utveckling',
  'SEO-grunderna',
  'UI/UX Design',
  'Webboptimering',
  'Innehållshantering'
];

const About: React.FC = () => {
  return (
    <section id="om-mig" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="bg-blue-100 h-80 w-80 md:h-96 md:w-96 rounded-full mx-auto overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-7xl text-white font-bold">GA</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Om Mig</h2>
            <p className="text-gray-600 mb-4">
              Hej! Jag heter Gillis Agorastos och jag är en ung, passionerad webbutvecklare med fokus på att skapa moderna och användarvänliga webbplatser för små företag.
            </p>
            <p className="text-gray-600 mb-6">
              Min resa inom webbutveckling började vid ung ålder, och när jag märkte hur många lokala företag som saknade en professionell digital närvaro, så var jag fast. Jag strävar efter att erbjuda prisvärda och högkvalitativa webblösningar som hjälper företag att växa och synas online.
            </p>
            
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Mina kunskaper:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;