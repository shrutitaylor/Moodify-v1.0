import React, { useState } from 'react';
import logo from '../images/moodify-logo.png';
import logoutImg from '../images/logout.png';
import volumeIcon from '../icons/volume-on.png';
import volumeOffIcon from '../icons/volume-off.png';

const Navbar = () => {
  const [isMuted, setIsMuted] = useState(false); // State to track volume status

  const volumeChange = () => {
    const audio = document.querySelector("audio");
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsMuted(false); // Audio is playing
      } else {
        audio.pause();
        setIsMuted(true); // Audio is paused
      }
    }
  };

  return (
    <nav className="bg-transparent text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/Moodify-v1.0" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className="w-[100px] md:h-[70px] md:w-[150px] object-cover"
            alt="logo"
          />
        </a>

        {/* Volume Button */}
        <div className="p-1 h-10 w-10 rounded-full shadow-hardbutton bg-button border-black border-2 transform hover:scale-105 transition duration-300 ease-in-out">
          <button onClick={volumeChange}>
            <img
              className="w-5 h-5 mt-1 ml-1"
              src={isMuted ? volumeOffIcon : volumeIcon} // Toggle icon based on state
              alt="Volume Icon"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
