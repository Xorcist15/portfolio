import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { X } from 'lucide-react';
import PixelTrail from '../effects/PixelTrail';

Modal.setAppElement('#root');

const personalProjects = [
  {
    title: "Terminal Games",
    image: "/projects/tetris.png",
    description: "Snake, Tetris and more in Python using Blessed. WIP: Chess with Stockfish, ASCII Invaders, Asteroids.",
  },
  {
    title: "MERN Chat App",
    image: "/projects/chat-app.png",
    description: "Real-time messaging app built with MongoDB, Express, React, Node, and Socket.io.",
  },
  {
    title: "Dev Env Scripts",
    image: "/projects/dotfiles.png",
    description: "Shell scripts to auto-setup dev env with Git, GitHub, Neovim, and plugins.",
  },
  {
    title: "freeCodeCamp Progress",
    image: "/projects/freecodecamp-banner.png",
    description: "Finished design/JS/React certs. Planning to complete Backend, Python, and C# tracks.",
  },
  {
    title: "Portfolio Website",
    image: "/projects/youssef-404.png",
    description: "This portfolio site with TailwindCSS, dark mode, animations, and pixel effects.",
  },
  {
    title: "CCNA Certification",
    image: "/projects/ccna.jpg",
    description: "Cisco networking certification: routing, switching, security, and protocols.",
  },
];

const academicProjects = [
  {
    title: "PingPong Game",
    image: "/projects/pong.png",
    description: "C# pingpong game with WinForms for BTS coursework.",
  },
  {
    title: "Java Terminal App",
    image: "/projects/java-app.jpg",
    description: "Command-line application written in Java for managing tasks.",
  },
  {
    title: "JS Task Planner",
    image: "/projects/calendar.png",
    description: "Custom JS web component to plan and manage to-dos.",
  },
  {
    title: "Pink Floyd Fan Site",
    image: "/projects/grp-musical.png",
    description: "Tribute site for my favorite band, Pink Floyd. Pure HTML/CSS/JS.",
  },
  {
    title: "Stock Manager",
    image: "/projects/stock-app.jpg",
    description: "C# stock management app with DB integration.",
  },
  {
    title: "Internship @ MB Informatique",
    image: "/projects/dolibarr.jpg",
    description: "Fixed voicemail module in Dolibarr using PHP + speech-to-text API.",
  },
  {
    title: "Internship @ Kayz-Digital",
    image: "/projects/kayz.jpg",
    description: "Built company website with Oxygen. Bugfixing + responsive improvements on starfen-ms.com.",
  },
  {
    title: "Maxi-Travaux Frontend",
    image: "/projects/maxi-travaux.jpg",
    description: "Built initial frontend structure for upcoming marketplace project.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="relative w-full h-full min-h-screen bg-red-600">

      <div className="absolute inset-0 overflow-hidden z-0">
        <PixelTrail
          gridSize={20}
          trailSize={0.1}
          maxAge={600}
          interpolate={5}
          color="black"
          gooeyFilter={{ id: "goo-filter", strength: 6 }}
        />
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="text-white px-4 py-20 max-w-6xl mx-auto space-y-16 pointer-events-auto">

          <section>
            <h2 className="text-3xl font-bold text-black mb-6 text-center">🧠 Personal Projects</h2>
            <Slider {...settings}>
              {personalProjects.map((project, i) => (
                <div key={i} className="px-4" onClick={() => setSelectedProject(project)}>
                  <div className="bg-[#111] border border-red-600 rounded-xl p-4 cursor-pointer hover:shadow-lg hover:shadow-red-500 transition">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-3" />
                    <h3 className="text-xl font-semibold text-red-400">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.description.slice(0, 60)}...</p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-black mb-6 text-center">🏫 Academic Projects</h2>
            <Slider {...settings}>
              {academicProjects.map((project, i) => (
                <div key={i} className="px-4" onClick={() => setSelectedProject(project)}>
                  <div className="bg-[#111] border border-red-600 rounded-xl p-4 cursor-pointer hover:shadow-lg hover:shadow-red-500 transition">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-3" />
                    <h3 className="text-xl font-semibold text-red-400">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.description.slice(0, 60)}...</p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>

          {selectedProject && (
            <Modal
              isOpen={true}
              onRequestClose={closeModal}
              className="bg-[#111] border border-red-600 max-w-2xl mx-auto my-20 rounded-xl p-6 relative outline-none"
              overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            >
              <button onClick={closeModal} className="absolute top-3 right-3 text-red-500 hover:text-red-400">
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-red-400 mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full rounded-md mb-4" />
              <p className="text-gray-300">{selectedProject.description}</p>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
