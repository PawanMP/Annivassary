import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-cream to-primary-light relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <Heart className="text-primary mr-2" fill="#e84a5f" size={20} />
          <h2 className="text-3xl font-dancing text-primary">Our Anniversary</h2>
        </div>
        
        <p className="font-cormorant text-lg text-dark mb-6">
          Forever and always, every day is another chapter in our love story.
        </p>
        
        <p className="text-sm text-dark/60">
          &copy; {currentYear} | Made with love
        </p>
      </div>
    </footer>
  );
};

export default Footer;