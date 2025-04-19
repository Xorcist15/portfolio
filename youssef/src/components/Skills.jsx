import { useRef, useEffect } from 'react';
import PixelTrail from '../effects/PixelTrail';

const skills = [
  { name: 'Python', icon: '🐍', level: 80 },
  { name: 'Java', icon: '🍵' , level: 75 },
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
  { name: 'Wordpress', icon: '🅦', level: 90},
  { name: 'dolibarr', icon: '📊', level: 40},
  { name: 'MongoDB', icon: '🍃', level: 60 },
  { name: 'WebSockets', icon: '🔌', level: 50 },
  { name: 'REST APIs', icon: '🔗', level: 75 },
  { name: 'JWT Auth', icon: '🔐', level: 70 },
];

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;
    let targetScroll = 0;

    const handleMouseMove = (e) => {
      const { left, width } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const percent = x / width;
      const maxScroll = container.scrollWidth - container.clientWidth;
      targetScroll = maxScroll * percent;
    };

    const animateScroll = () => {
      container.scrollLeft += (targetScroll - container.scrollLeft) * 0.1;
      animationFrame = requestAnimationFrame(animateScroll);
    };

    container.addEventListener('mousemove', handleMouseMove);
    animateScroll();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">

      {/* background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <PixelTrail
          gridSize={20}
          trailSize={0.1}
          maxAge={600}
          interpolate={5}
          color="#ef4444"
          gooeyFilter={{ id: "custom-goo-filter", strength: 6 }}
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <h2 className="text-white text-3xl font-bold mb-8">My Skillset</h2>

        <div
          ref={containerRef}
          className="w-11/12 max-w-6xl h-[400px] flex items-center space-x-6 overflow-x-auto p-6 border border-red-700 rounded-xl bg-[#0d0d0d]/80 scroll-hide shadow-lg pointer-events-auto"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-[200px] flex-shrink-0 flex flex-col items-center justify-between p-4 border border-red-600 rounded-lg shadow-md bg-[#111] transition transform hover:scale-105 hover:shadow-red-600"
            >
              <div className="icon mb-4 text-3xl text-red-500">{skill.icon}</div>
              <div className="name text-base font-semibold mb-3 text-center text-white">{skill.name}</div>

              <div className="w-full h-2 bg-red-900 rounded-full mb-3">
                <div
                  className="h-full rounded-full bg-red-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="level text-xs text-gray-300">Level: {skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;