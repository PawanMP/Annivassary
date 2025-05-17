import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setShowCursor(true);
      
      // Hide cursor heart after 2 seconds of no movement
      const timeout = setTimeout(() => {
        setShowCursor(false);
      }, 2000);
      
      return () => clearTimeout(timeout);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const heartColors = ['#e84a5f', '#f8c8dc', '#ffb6c1', '#ff8ba7'];
  const petalColors = ['#ffb6c1', '#f8c8dc', '#ffd1dc'];
  
  // Generate random hearts
  const hearts = Array.from({ length: 10 }, (_, i) => {
    const size = Math.floor(Math.random() * 30) + 10;
    const left = `${Math.floor(Math.random() * 100)}%`;
    const top = `${Math.floor(Math.random() * 100)}%`;
    const animationDuration = `${Math.floor(Math.random() * 15) + 5}s`;
    const animationDelay = `${Math.floor(Math.random() * 5)}s`;
    const color = heartColors[Math.floor(Math.random() * heartColors.length)];
    const opacity = (Math.random() * 0.5) + 0.2;
    
    return { size, left, top, animationDuration, animationDelay, color, opacity };
  });
  
  // Generate random petals
  const petals = Array.from({ length: 8 }, (_, i) => {
    const size = Math.floor(Math.random() * 20) + 20;
    const left = `${Math.floor(Math.random() * 100)}%`;
    const top = `${Math.floor(Math.random() * 100)}%`;
    const animationDuration = `${Math.floor(Math.random() * 15) + 10}s`;
    const animationDelay = `${Math.floor(Math.random() * 5)}s`;
    const color = petalColors[Math.floor(Math.random() * petalColors.length)];
    const opacity = (Math.random() * 0.4) + 0.1;
    const rotate = `${Math.floor(Math.random() * 360)}deg`;
    
    return { size, left, top, animationDuration, animationDelay, color, opacity, rotate };
  });
  
  return (
    <>
      {/* Floating hearts */}
      {hearts.map((heart, index) => (
        <div
          key={`heart-${index}`}
          className="heart absolute pointer-events-none"
          style={{
            left: heart.left,
            top: heart.top,
            animation: `floating ${heart.animationDuration} infinite ease-in-out`,
            animationDelay: heart.animationDelay,
            opacity: heart.opacity,
            zIndex: 5,
          }}
        >
          <Heart 
            size={heart.size} 
            color={heart.color} 
            fill={heart.color} 
          />
        </div>
      ))}
      
      {/* Floating petals (simplified as circles with gradient for performance) */}
      {petals.map((petal, index) => (
        <div
          key={`petal-${index}`}
          className="petal absolute pointer-events-none rounded-full"
          style={{
            left: petal.left,
            top: petal.top,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            background: `radial-gradient(circle at 30% 30%, ${petal.color}, transparent)`,
            animation: `floating ${petal.animationDuration} infinite ease-in-out`,
            animationDelay: petal.animationDelay,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotate})`,
            zIndex: 2,
          }}
        />
      ))}
      
      {/* Cursor heart */}
      <div
        className="cursor-heart absolute pointer-events-none z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: showCursor ? 0.7 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <Heart 
          size={24} 
          color="#e84a5f" 
          fill="#e84a5f" 
        />
      </div>
    </>
  );
};

export default FloatingElements;