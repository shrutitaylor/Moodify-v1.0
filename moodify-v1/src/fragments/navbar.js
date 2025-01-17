import React from 'react';
import logo from '../images/moodify-logo.png';

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white px-10 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">
      <img src={logo} className="w-[100px]  md:h-[70px] md:w-[150px] object-cover" alt="logo" />
      </div>

      {/* Navigation Links */}
      {/* <div className="space-x-4">
        <a href="#home" className="hover:text-yellow-300">Home</a>
        <a href="#about" className="hover:text-yellow-300">About</a>
        <a href="#services" className="hover:text-yellow-300">Services</a>
        <a href="#contact" className="hover:text-yellow-300">Contact</a>
      </div> */}
    </nav>
  );
};

export default Navbar;
