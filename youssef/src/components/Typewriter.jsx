import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterIntro = () => {
  return (
    <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
      I'm a{' '}
      <span className="text-red-500">
        <Typewriter
          words={[
            'Fullstack Developer',
            'Linux Nerd',
            'Vim User',
            'Game Dev Enjoyer',
            'Low-Level Explorer',
            'Assembly Learner',
            'Socket Tester',
            'Cybersecurity Curious',
            'React Addict',
            'Rust Beginner',
            'Python Automator',
            'Neovim Config Hoarder',
            'Terminal Enthusiast',
            ]}
          loop={true}
          cursor
          cursorStyle="█"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={150}
        />
      </span>
    </h1>
  );
};

export default TypewriterIntro;
