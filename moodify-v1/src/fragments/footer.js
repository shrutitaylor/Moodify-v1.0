import React from 'react';
import footerBg from '../images/footer-bg.png';

const Footer = () => {
  return (
    <footer className="relative text-center left-0 bottom-0 w-full h-[200px] md:h-[200px] lg:h-[200px]">
      {/* Background Image */}
      <img 
        src={footerBg} 
        alt="grass-footer" 
        className="w-full h-[200px] object-cover object-bottom" 
      />

      {/* Text Content */}
      <div className="absolute bottom-2 md:bottom-10 left-0 w-full text-center text-white">
        <p className="text-sm md:text-base font-outfit">
          &copy; 2025 Developed by Shruti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
