import React from 'react';
import LoveImg from '../images/love.png';
import HappyImg from '../images/happy.png';
import SadImg from '../images/sad.png';
import AngryImg from '../images/anger.png';
import DisgustImg from '../images/disgust.png';

const cards = [
  { id: 1, bgColor: 'bg-lovebg', img: LoveImg, alt: 'loveImage' },
  { id: 2, bgColor: 'bg-happybg', img: HappyImg, alt: 'happyImage' },
  { id: 3, bgColor: 'bg-sadbg', img: SadImg, alt: 'sadImage' },
  { id: 4, bgColor: 'bg-angrybg', img: AngryImg, alt: 'angryImage' },
  { id: 5, bgColor: 'bg-[#AFE444]', img: DisgustImg, alt: 'disgustImage' },
];

const CardCarousel = ({ type = "slide" }) => {
  // Create an infinitely repeating array of cards
  const infiniteCards = Array(200) // Adjust the length as needed for smooth scrolling
    .fill(cards)
    .flat()
    .map((card, index) => ({
      ...card,
      keyId: (index % cards.length) + 1, // Cyclic key IDs (1, 2, 3, 4, 5, 1, ...)
    }));

  return (
    <div
      className={`overflow-hidden w-full relative ${
        type === "slide" ? "animate-carousel" : ""
      }`}
      data-carousel={type}
    >
      <div className="flex space-x-4">
        {infiniteCards.map((card) => (
          <div
            key={`${card.keyId}-${Math.random()}`} // Unique key using cyclic ID and random number
            className={`relative ${card.bgColor} p-4 rounded-lg shadow-md w-[150px] md:w-[200px]`}
          >
            <img
              src={card.img}
              alt={card.alt}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
