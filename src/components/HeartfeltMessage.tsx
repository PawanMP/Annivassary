import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Parallax } from 'react-parallax';

const HeartfeltMessage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <Parallax
      bgImage="/images/background.jpg"
      strength={300}
      className="bg-cover bg-center"
    >
      <section className="min-h-screen flex items-center justify-center py-20 px-4 relative">
        <div className="absolute inset-0 bg-primary/10"></div>
        
        <motion.div 
          ref={ref}
          className="bg-cream/90 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-3xl mx-auto shadow-medium relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex justify-center mb-8">
            <Heart className="text-primary h-12 w-12" fill="#e84a5f" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-dancing text-primary text-center mb-8">
            My Dearest Love 🍄‍🟫
          </h2>
          
          <div className="font-cormorant text-lg md:text-xl space-y-6 leading-relaxed">
            <p>
              As we celebrate another year of our beautiful journey together, I find myself lost in the memories 
              we've created and the love that has only grown stronger with each passing day.
            </p>
            
            <p>
              From the moment our paths crossed, I knew there was something special about you — a spark that 
              ignited a flame that continues to burn brightly in my heart.
            </p>
            
            <p>
              Through all of life's ups and downs, your love has been my constant, your smile my sunshine, 
              and your heart my home. Every moment spent with you feels like a precious gift, a treasure I 
              cherish deeply.
            </p>
            
            <p>
              On this special day, I want you to know that my love for you grows deeper with each passing day. 
              You are my best friend, my confidant, my partner in every adventure, and the love of my life.
            </p>
            
            <p className="text-center text-primary font-dancing text-2xl md:text-3xl pt-4">
              Happy Anniversary, my love!
            </p>
          </div>
        </motion.div>
      </section>
    </Parallax>
  );
};

export default HeartfeltMessage