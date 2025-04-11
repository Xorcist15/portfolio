import { motion } from 'framer-motion';

const AboutCard = ({ lang }) => {
  const content = {
    en: {
      title: 'About Me 👨‍💻',
      text: `👋 Hey! I'm Youssef Ben Hassine. I started programming in 2023 during my BTS SIO at Camille See in Colmar.

💻 I'm passionate about computer science—especially Linux 🐧 and low-level magic 🧙‍♂️ like OS development 🧵, device drivers ⚙️, embedded systems 🔩, and robotics 🤖.

🧠 I enjoy diving into languages like C 💡, C++ 🚀, Rust 🦀, JavaScript ⚡, and Python 🐍—each with their own flavor (functional 🧬, procedural 🔧, OOP 🧱).

🌐 I’m also exploring computer networks 🌍, cybersecurity 🔐 (especially offensive 🥷), fullstack web dev 🧑‍💻, and game development 🎮.

🖥️ I daily drive Arch Linux and use Neovim as my main code editor ✍️.

🎯 My long-term goal is to specialize in Artificial Intelligence 🧠🤖—but I truly enjoy learning every part of the CS world.

📁 This site is my portfolio, and I’ll be updating it regularly with new projects 🚧, challenges 💪, and achievements 🏆. Stay tuned!`,

    },

    fr: {
      title: 'À propos de moi 👾',
      text: `👋 Salut ! Je m'appelle Youssef Ben Hassine. J'ai commencé la programmation en 2023 pendant mon BTS SIO au lycée Camille See à Colmar.

💻 Je suis passionné par l'informatique—surtout Linux 🐧 et tout ce qui touche au bas niveau 🧙‍♂️ comme le développement d’OS 🧵, les drivers ⚙️, les systèmes embarqués 🔩 et la robotique 🤖.

🧠 J’aime explorer des langages comme C 💡, C++ 🚀, Rust 🦀, JavaScript ⚡ et Python 🐍—chacun avec son style (fonctionnel 🧬, procédural 🔧, orienté objet 🧱).

🌐 Je m’intéresse aussi aux réseaux 🌍, à la cybersécurité 🔐 (surtout offensive 🥷), au développement fullstack 🧑‍💻 et au développement de jeux 🎮.

🖥️ J’utilise Arch Linux au quotidien et Neovim comme éditeur principal ✍️.

🎯 Mon objectif à long terme est de me spécialiser en intelligence artificielle 🧠🤖—mais j’adore découvrir tous les aspects de l’informatique.

📁 Ce site est mon portfolio, et je le mettrai à jour régulièrement avec de nouveaux projets 🚧, défis 💪 et réussites 🏆. Restez connectés !`,

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
      <h2 className="text-4xl font-extrabold text-center mb-6 text-white">
        {content[lang].title}
      </h2>
      <p className="whitespace-pre-line text-lg leading-relaxed">
        {content[lang].text}
      </p>
    </motion.div>
  );
};

export default AboutCard;
