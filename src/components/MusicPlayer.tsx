import React, { useEffect, useRef } from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }
    
    // Play or pause based on isPlaying prop
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      
      // Handle the play promise to avoid errors
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Audio playback prevented by browser:', error);
        });
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying]);
  
  return null; // This component doesn't render anything visible
};

export default MusicPlayer;