import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeartfeltMessage from './components/HeartfeltMessage';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import PersonalNote from './components/PersonalNote';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">
      <FloatingElements />
      <MusicPlayer isPlaying={musicPlaying} />
      
      <Header onToggleMusic={toggleMusic} musicPlaying={musicPlaying} scrollY={scrollY} />
      
      <main className="relative z-10">
        <HeartfeltMessage />
        <PhotoGallery />
        <Timeline />
        <PersonalNote />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;