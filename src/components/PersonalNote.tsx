import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Parallax } from 'react-parallax';

const PersonalNote: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <Parallax
      bgImage="/images/note-background.jpg"
      strength={200}
      className="bg-cover bg-center"
    >
      <section ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 relative">
        <div className="absolute inset-0 bg-primary/20"></div>
        
        <motion.div 
          className="bg-cream/90 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-3xl mx-auto shadow-medium relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="flex justify-center mb-8" 
            variants={itemVariants}
          >
            <Heart className="text-primary h-12 w-12" fill="#e84a5f" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-dancing text-primary text-center mb-8"
            variants={itemVariants}
          >
            A Personal Letter
          </motion.h2>
          
          <motion.div 
            className="font-cormorant text-lg md:text-xl space-y-6 leading-relaxed"
            variants={itemVariants}
          >
            <p className="italic">
              My dearest one,
            </p>
            
            <p>
              As I sit here writing this letter, my heart overflows with the countless memories we've 
              created together. Every laugh we've shared, every tear we've wiped away, every challenge 
              we've overcome—they all form the beautiful tapestry of our relationship.
            </p>
            
            <p>
              I remember the butterflies in my stomach when we first met, not knowing then that you would 
              become my greatest adventure. I remember our first date, our first kiss, the first time we said 
              "I love you." Each moment etched into my heart forever.
            </p>
            
            <p>
              Through the years, my love for you has only deepened. You've seen me at my best and my worst, 
              and you've loved me through it all. Your unwavering support, your gentle encouragement, your 
              beautiful spirit—they are the gifts I treasure most.
            </p>
            
            <p>
              As we celebrate another year together, I want you to know that I fall in love with you more 
              each day. You are my today and all of my tomorrows. My heart is yours, completely and forever.
            </p>
            
            <p>
              I cannot wait to see what adventures still await us, what memories we have yet to create, 
              what dreams we have yet to fulfill. Whatever comes our way, we'll face it together, hand in hand, 
              heart to heart.
            </p>
            
            <p className="text-right pt-6">
              With all my love,<br />
              <span className="font-dancing text-2xl text-primary">Forever Yours</span>
            </p>
          </motion.div>
        </motion.div>
      </section>
    </Parallax>
  );
};

export default PersonalNote