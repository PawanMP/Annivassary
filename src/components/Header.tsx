import React, { useState, useEffect } from 'react';
import { Music, Music as MusicOff, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onToggleMusic: () => void;
  musicPlaying: boolean;
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ onToggleMusic, musicPlaying, scrollY }) => {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    setIsTransparent(scrollY < 100);
  }, [scrollY]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 flex justify-between items-center ${
        isTransparent ? 'bg-transparent' : 'bg-cream/80 backdrop-blur-sm shadow-soft'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <Heart className="text-primary" size={28} fill="#e84a5f" />
        <h1 className="text-3xl font-dancing text-primary">Our Anniversary 🐢</h1>
      </div>
      
      <button 
        onClick={onToggleMusic}
        aria-label={musicPlaying ? "Mute music" : "Play music"}
        className={`music-button rounded-full p-3 transition-all duration-300 ${
          musicPlaying ? 'bg-primary text-cream' : 'bg-cream/50 text-primary border border-primary'
        }`}
      >
        {musicPlaying ? (
          <Music size={20} />
        ) : (
          <MusicOff size={20} />
        )}
      </button>
      
      <motion.div 
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center text-primary/70 font-cormorant hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransparent ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-lg mb-2">Scroll to explore our journey</p>
        <div className="scroll-indicator text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;