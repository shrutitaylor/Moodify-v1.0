import React from 'react';
import footerBg from '../images/footer-bg.png';

const Footer = () => {
  return (
    <footer className="relative text-center">
      {/* Background Image */}
      <img 
        src={footerBg} 
        alt="grass-footer" 
        className="w-[100vw] h-[200px] object-cover object-bottom" 
      />

      {/* Text Content */}
      <div className="w-full absolute bottom-2 md:bottom-10 left-0 z-10 text-center text-white">
        <p className="text-sm md:text-base font-outfit">
          &copy; 2025 Developed by Shruti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
