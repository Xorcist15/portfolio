import React from 'react';
import PixelTrail from '../effects/PixelTrail';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Github,
  MessageSquareQuote,
  Send,
  PhoneCall
} from 'lucide-react';

const Contact = () => {
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

    <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none">
        <div className="max-w-md w-full border border-red-600 p-8 rounded-2xl shadow-lg bg-[#111] space-y-6 text-center pointer-events-auto">
          <h2 className="text-3xl font-bold text-red-500">Let's Connect</h2>
          <p className="text-gray-400">Feel free to reach out through any of these platforms:</p>
          <div className="space-y-4 text-left text-white">

            <a href="mailto:benhassine.qlio@gmail.com" className="flex items-center gap-3 hover:text-red-400">
              <Mail className="text-red-500" size={20} /> benhassine.qlio@gmail.com
            </a>
            <a href="tel:+33698425927" className="flex items-center gap-3 hover:text-red-400">
              <Phone className="text-red-500" size={20} /> +33 6 98 42 59 27
            </a>
            <a href="https://www.linkedin.com/in/ben-hassine-youssef-b58516220" target="_blank" className="flex items-center gap-3 hover:text-red-400">
              <Linkedin className="text-red-500" size={20} /> LinkedIn
            </a>
            <a href="https://github.com/youssef-benhassine" target="_blank" className="flex items-center gap-3 hover:text-red-400">
              <Github className="text-red-500" size={20} /> GitHub
            </a>
            <a href="https://t.me/Yousssssssssssssssssssf" target="_blank" className="flex items-center gap-3 hover:text-red-400">
              <Send className="text-red-500" size={20} /> Telegram
            </a>
            <a href="https://wa.me/33698425927" target="_blank" className="flex items-center gap-3 hover:text-red-400">
              <PhoneCall className="text-red-500" size={20} /> WhatsApp
            </a>
            <a href="https://discord.com/users/xorcist_10111011100" target="_blank" className="flex items-center gap-3 hover:text-red-400">
              <MessageSquareQuote className="text-red-500" size={20} /> Discord
            </a>
            <a href="https://discord.com/users/xorcist_10111011100" target="_blank" className="flex items-center gap-3 hover:text-red-400">
              <MapPin className="text-red-500" size={20} /> Strasbourg, France
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
