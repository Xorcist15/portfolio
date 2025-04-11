import React from 'react';
import { motion } from 'framer-motion';

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.2, color: "#ef4444" } // Scale up and change color on hover
};

const AnimatedWord = ({ text }) => {
  return (
    <div className="flex">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedWord;
