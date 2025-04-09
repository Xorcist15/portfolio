import { motion } from 'framer-motion';

const AboutCard = ({ lang }) => {
  const content = {
    en: {
      title: 'About Me 👨‍💻',
      text: `Hey! I'm Youssef Ben Hassine. I started programming in 2023 during my BTS SIO at Camille See in Colmar.

💻 I’m super into computer science—especially Linux and low-level stuff like OS dev, drivers, embedded systems, and robotics.

🧠 I love exploring languages like C, C++, Rust, JavaScript, and Python with all their unique styles (functional, procedural, OOP).

🌐 Into networks, security, fullstack & game dev too.

🐧 I daily drive Arch Linux and use Neovim as my main editor.

🤖 My ultimate goal is to specialize in AI—but I enjoy every part of the journey.`,
    },

    fr: {
      title: 'À propos de moi 👾',
      text: `Salut ! Moi c'est Youssef Ben Hassine. J'ai commencé la programmation en 2023 avec le BTS SIO à Camille See à Colmar.

🐧 Passionné par Linux et le développement bas niveau : OS, drivers, systèmes embarqués, robotique...

🧠 J’adore explorer des langages comme C, C++, Rust, JavaScript, Python, avec leurs styles différents (fonctionnel, procédural, orienté objet).

🌐 Je m'intéresse aussi aux réseaux, à la cybersécurité, au fullstack et au développement de jeux vidéo.

🛠️ J'utilise Arch Linux au quotidien et Neovim comme éditeur principal.

🎯 Mon objectif final est de me spécialiser en intelligence artificielle, tout en explorant tout ce que l'informatique a à offrir.`,
    },
  };

  return (
    <motion.div
      key={lang}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-2xl shadow-xl p-8 w-full max-w-3xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold text-center mb-6 text-red-600">
        {content[lang].title}
      </h2>
      <p className="whitespace-pre-line text-lg leading-relaxed">
        {content[lang].text}
      </p>
    </motion.div>
  );
};

export default AboutCard;
