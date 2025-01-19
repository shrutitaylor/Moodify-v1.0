import React, { useState, useEffect } from "react";
import LoveImg from '../images/love.png';
import HappyImg from '../images/happy.png';
import SadImg from '../images/sad.png';
import AngryImg from '../images/anger.png';
import DisgustImg from '../images/disgust.png';

const Carousel3D = () => {
  const images = [
    LoveImg,HappyImg,SadImg,AngryImg,DisgustImg
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const getRotationStyle = (index) => {
    const angle = (index - currentIndex) * 72; // 360 / 5 = 72 degrees
    return {
      transform: `rotateY(${angle}deg) translateZ(300px)`,
    };
  };

  return (
    <div className="relative w-[1000px] h-[400px] perspective-[1000px] ga">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="relative transform-style-3d transition-transform duration-1000">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute w-[200px] bg-cover bg-center h-[250px]"
              style={{
                ...getRotationStyle(index),
                
              }}
            >
                <img src={image} className="object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Carousel3D;
