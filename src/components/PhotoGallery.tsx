import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { photoData } from '../data/photoData';

const PhotoGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (inView && isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photoData.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [inView, isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photoData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photoData.length);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-cream to-primary-light relative">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-dancing text-primary text-center mb-12"
          variants={itemVariants}
        >
          Our Special Memories
        </motion.h2>
        
        <motion.div 
          className="relative w-full h-[calc(100vw*9/16)] max-h-[600px] min-h-[300px] overflow-hidden rounded-lg shadow-medium bg-cream"
          variants={itemVariants}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {photoData.map((photo, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm text-white p-4 md:p-6">
                <p className="text-lg md:text-xl font-cormorant">{photo.description}</p>
                <p className="text-sm md:text-base opacity-75 mt-1">{photo.date}</p>
              </div>
            </div>
          ))}
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-cream/70 text-primary hover:bg-primary hover:text-cream rounded-full p-2 transition-colors duration-300"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-cream/70 text-primary hover:bg-primary hover:text-cream rounded-full p-2 transition-colors duration-300"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-[4.5rem] left-0 right-0 flex justify-center gap-2 z-20">
            {photoData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-150' : 'bg-cream/70'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          variants={itemVariants}
        >
          {photoData.map((photo, index) => (
            <div
              key={index}
              className={`relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-soft cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
            >
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;