import React from "react";
import FuzzyText from "../effects/FuzzyText";
import PixelTrail from "../effects/PixelTrail";
import TypewriterIntro from "../components/Typewriter";
import { motion } from 'framer-motion';

const Home = () => {
  return (
  <div className="relative w-full h-screen bg-black">

    {/* background */}
    <div className="relative w-full h-full overflow-hidden" >
      <PixelTrail
        gridSize={20}
        trailSize={0.1}
        maxAge={600}
        interpolate={5}
        color="#ef4444"
        gooeyFilter={{ id: "custom-goo-filter", strength: 6 }}
      />
    </div>

    <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center pointer-events-none">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }} >
        <div className="flex flex-col items-center justify-center space-y-20">

          <div>
            <FuzzyText baseIntensity={1.8}>404 Not Found</FuzzyText>
          </div>

          <div>
            <FuzzyText baseIntensity={0.5}>Youssef</FuzzyText>
          </div>

          <div>
            <TypewriterIntro />
          </div>

        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default Home;
