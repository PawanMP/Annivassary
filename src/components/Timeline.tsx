import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { timelineData } from '../data/timelineData';

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-primary-light to-cream relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-dancing text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Journey Together
        </motion.h2>
        
        <div className="relative">
          <div className="timeline-line" />
          
          <motion.div
            className="space-y-16 md:space-y-24 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {timelineData.map((item, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
                variants={itemVariants}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-cream p-6 rounded-lg shadow-soft">
                    <h3 className="text-2xl md:text-3xl font-dancing text-primary mb-2">{item.title}</h3>
                    <p className="font-cormorant text-dark text-lg">{item.date}</p>
                    <p className="mt-4 font-cormorant text-lg">{item.description}</p>
                  </div>
                </div>
                
                <div className="timeline-dot flex items-center justify-center">
                  <span className="text-cream">{item.icon}</span>
                </div>
                
                <div className="w-full md:w-1/2">
                  {item.imageUrl && (
                    <div className="overflow-hidden rounded-lg shadow-medium">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-48 md:h-64 object-cover transform transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;