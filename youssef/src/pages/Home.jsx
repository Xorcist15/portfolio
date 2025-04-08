import React from "react";
import FuzzyText from "../effects/FuzzyText";
import PixelTrail from "../effects/PixelTrail";
import TypewriterIntro from "../components/Typewriter";
import { motion } from 'framer-motion';

const Home = () => {
  return (
  <div className="relative h-screen bg-black">

    {/* background */}
    <div className="relative h-full overflow-hidden" >
      <PixelTrail
        gridSize={20}
        trailSize={0.1}
        maxAge={600}
        interpolate={5}
        color="#ef4444"
        gooeyFilter={{ id: "custom-goo-filter", strength: 6 }}
      />
    </div>

    <div className="absolute w-full h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  pointer-events-none flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }} >
        <div className="h-2/4 flex flex-col items-center justify-center space-y-20">
          <div className="w-auto text-center">
            <FuzzyText baseIntensity={1}>404 Not Found</FuzzyText>
          </div>

          <div className="w-auto text-center">
            <TypewriterIntro />
          </div>
        </div>
      </motion.div>
    </div>


  </div>
  );
};

export default Home;
