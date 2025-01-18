import React from 'react';
import logo from '../images/moodify-logo.png';
import logoutImg from '../images/logout.png';

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="w-[100px] md:h-[70px] md:w-[150px] object-cover"
            alt="logo"
          />
        </a>

        {/* Logout Button */}
        <div className="hidden md:block">
          <button
            type="button"
            className="space-x-2  px-4 py-2 rounded-lg border-black border-2 shadow-hardbutton text-black bg-button transform hover:scale-105 transition duration-300 ease-in-out font-medium rounded-sm text-sm px-5 py-2.5 text-center"
          >
           
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>

        {/* Mobile Logout Button */}
        <div className="block md:hidden">
          <button
            type="button"
            className="flex items-center justify-center bg-white text-white p-1 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={logoutImg}
              alt="Logout Icon"
              className="h-6 w-6 rounded bg-white "
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
