import React, { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Python', icon: '🐍', level: 80 },
  { name: 'Java', icon: '☕', level: 75 },
  { name: 'C#', icon: '🎯', level: 60 },
  { name: 'JavaScript', icon: '📜', level: 90 },
  { name: 'TypeScript', icon: '🔷', level: 75 },
  { name: 'Lua', icon: '🌙', level: 40 },
  { name: 'C', icon: '🔵', level: 40 },
  { name: 'C++', icon: '➕', level: 20 },
  { name: 'x86_64 Assembly', icon: '🧠', level: 10 },
  { name: 'HTML', icon: '🔤', level: 95 },
  { name: 'CSS', icon: '🎨', level: 85 },
  { name: 'React', icon: '⚛️', level: 70 },
  { name: 'Node.js', icon: '🌳', level: 80 },
  { name: 'Express.js', icon: '🚂', level: 75 },
  { name: 'SQL', icon: '📊', level: 70 },
  { name: 'NoSQL', icon: '🧩', level: 65 },
  { name: 'Linux', icon: '🐧', level: 90 },
  { name: 'Neovim', icon: '📝', level: 80 },
  { name: 'Git', icon: '🔧', level: 85 },
  { name: 'npm', icon: '📦', level: 60 },
  { name: 'Shell', icon: '💻', level: 60 },
  { name: 'PowerShell', icon: '⚡', level: 60 },
  { name: 'Docker', icon: '🐳', level: 50 },
  { name: 'MongoDB', icon: '🍃', level: 60 },
  { name: 'WebSockets', icon: '🔌', level: 50 },
  { name: 'REST APIs', icon: '🔗', level: 75 },
  { name: 'JWT Auth', icon: '🔐', level: 70 },
];

const Skills = () => {
  const scrollRef = useRef(null);
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));
  
  // Animate skill bars on scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateAnimatedLevels = () => {
      const scrollPosition = el.scrollLeft;  // Current scroll position
      const scrollWidth = el.scrollWidth;    // Full width of the scrollable container

      const percentageScrolled = (scrollPosition / scrollWidth) * 100;

      const newLevels = skills.map((s) => {
        const progress = (percentageScrolled / 100) * s.level;
        return Math.min(Math.round(progress), s.level); // Update to the current scroll position
      });

      setAnimatedLevels(newLevels);
    };

    // Initial scroll and animation
    updateAnimatedLevels();

    // Listen for scroll event
    el.addEventListener('scroll', updateAnimatedLevels);

    return () => {
      el.removeEventListener('scroll', updateAnimatedLevels);
    };
  }, []);

  // Auto-scroll horizontally
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId;
    const speed = 0.5;

    const scroll = () => {
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      <p className="text-lg mb-4 text-center max-w-2xl">
        These are the technologies and programming languages I’ve worked with during my studies and personal projects.
      </p>

      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap w-full max-w-full scroll-hide"
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-gray-800 rounded-2xl p-6 m-2 w-48 text-center hover:bg-red-600 transition duration-300 shadow-md"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-red-500 h-3 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${animatedLevels[i % skills.length]}%` }}
              ></div>
            </div>
            <span className="mt-1 text-sm text-gray-300">
              {animatedLevels[i % skills.length]}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
