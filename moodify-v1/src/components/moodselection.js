import React from 'react';
import { Link } from "react-router-dom";
import LoveImg from '../images/love.png';
import HappyImg from '../images/happy.png';
import SadImg from '../images/sad.png';
import AngryImg from '../images/anger.png';

const MoodSelector = () => {
  return (
    <>
    <div className='flex justify-center mb-20 '>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6 font-praise h-[150px] md:h-[300px]">
        {/* Love Card */}
        <div className="relative bg-lovebg p-4 rounded-lg shadow-md w-[200px] md:w-[250px] hover:animate-card-pop-up hover:bg-lovedark">
            {/* Image */}
            <img
            src={LoveImg}
            alt="loveImage"
            className="object-cover rounded-lg"
            />

            {/* Text Overlay */}
            <div className="absolute text-lovefont inset-0 top-[155px] md:top-[220px] left-5 text-[50px]">
            love
            </div>
        </div>
         {/* Happy Card */}
         <div className="relative bg-happybg pl-6 rounded-lg shadow-md w-[200px] md:w-[250px] hover:animate-card-pop-up hover:bg-happydark">
            {/* Image */}
            <img
            src={HappyImg}
            alt="happyimage"
            className="h-[220px] md:h-[290px]  object-cover rounded-lg"
            />

            {/* Text Overlay */}
            <div className="absolute text-happyfont inset-0 top-[155px] md:top-[220px] left-5  text-[50px]">
            happy
            </div>
        </div>
         {/* Sad Card */}
         <div className="relative bg-sadbg p-4 rounded-lg shadow-md w-[200px] md:w-[250px] hover:animate-card-pop-up hover:bg-saddark">
            {/* Image */}
            <img
            src={SadImg}
            alt="sadImage"
            className="object-cover rounded-lg"
            />

            {/* Text Overlay */}
            <div className="absolute text-sadfont inset-0 top-[155px] md:top-[220px] left-5 text-[50px] hover:text-sadbg">
            sad
            </div>
        </div>
         {/* Angry Card */}
         <div className="relative bg-angrybg p-4 rounded-lg shadow-md w-[200px] md:w-[250px] hover:animate-card-pop-up hover:bg-angrydark">
            {/* Image */}
            <img
            src={AngryImg}
            alt="angryImage"
            className=" object-cover rounded-lg "
            />

            {/* Text Overlay */}
            <div className="absolute text-angryfont inset-0 top-[155px] md:top-[220px] left-5 text-[50px]">
            angry
            </div>
        </div>
        </div>
       

        </div>
        <div className='flex font-outfit justify-center'>
        <button type="submit" className="w-150px border-black border-2 shadow-hardbutton text-black bg-button transform hover:scale-105 transition duration-300 ease-in-out font-medium rounded-md text-md px-5 py-2.5 text-center"
                     >Surprise me</button>
        </div>
        </>


    );
};

export default MoodSelector;
