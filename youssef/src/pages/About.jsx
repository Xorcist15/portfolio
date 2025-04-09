import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AboutCard from '../components/AboutCard';
import PixelTrail from '../effects/PixelTrail';

export default function About() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="relative w-full h-screen bg-red-600">
      {/* background */}
      <div className="relative w-full h-full overflow-hidden" >
        <PixelTrail
          gridSize={20}
          trailSize={0.1}
          maxAge={600}
          interpolate={5}
          color="black"
          gooeyFilter={{ id: "custom-goo-filter", strength: 6 }}
        />
      </div>


      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none flex flex-col justify-center">

        {/* Fixed button at the top center */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-auto z-10">
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-full shadow-lg flex items-center gap-2 transition-colors"
          >
            {lang === 'en' ? '🇫🇷 Français' : '🇬🇧 English'}
          </button>
        </div>

        {/* Centered about content */}
        <div className="h-full flex flex-col items-center justify-center">
          <div className="pointer-events-auto">
            <AnimatePresence mode="wait">
              <AboutCard key={lang} lang={lang} />
            </AnimatePresence>
          </div>
        </div>
      </div>


    </div>
    );
  }
