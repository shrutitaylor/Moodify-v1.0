import React from 'react';
import shineIcon from '../icons/shine-icon.png';
import Login from '../components/login';

const LoginPage = () => {
  return (
    <main className="flex-grow px-10 md:px-[150px] lg:px-[150px]">
   <div className="flex justify-center">
         <div className="flex flex-row text-white">
           {/* Left Shine Icon */}
           <img
             src={shineIcon}
             alt="shines"
             className="w-[30px] h-[30px] animate-pulsate-fwd md:w-[72px] md:h-[72px]"
           />
           {/* Text Content */}
           <div className="flex flex-col justify-center text-white sm:text-xs">
             {/* Main Heading */}
             <h1 className="drop-shadow-lg text-2xl md:text-4xl font-medium font-outfit pt-1 md:pt-5 pl-2 md:pl-8 mb-1 md:mb-4">
               {Array.from("Feel the vibe, find the beat").map((letter, index) => (
                 <span
                   key={index}
                   className="inline-block animate-text-pop-up-top"
                   style={{ animationDelay: `${index * 0.05}s` }}
                 >
                   {letter === " " ? "\u00A0" : letter}
                 </span>
               ))}
             </h1>
             {/* Subheading */}
             <div className="flex md:flex-row gap-2 pl-4 pr-3 lg:pl-36 ">
               <h1 className="text-2xl md:text-4xl font-medium font-outfit drop-shadow-md">
                 {Array.from("Let your").map((letter, index) => (
                   <span
                     key={index}
                     className="inline-block animate-text-pop-up-top"
                     style={{ animationDelay: `${index * 0.05}s` }}
                   >
                     {letter === " " ? "\u00A0" : letter}
                   </span>
                 ))}
               </h1>
               <h1 className="text-2xl md:text-5xl font-praise drop-shadow-md">
                 {Array.from("mood").map((letter, index) => (
                   <span
                     key={index}
                     className="inline-block animate-text-pop-up-top"
                     style={{ animationDelay: `${index * 0.05}s` }}
                   >
                     {letter}
                   </span>
                 ))}
               </h1>
               <h1 className="text-2xl md:text-4xl font-medium font-outfit drop-shadow-md">
                 {Array.from("set the").map((letter, index) => (
                   <span
                     key={index}
                     className="inline-block animate-text-pop-up-top"
                     style={{ animationDelay: `${index * 0.05}s` }}
                   >
                     {letter === " " ? "\u00A0" : letter}
                   </span>
                 ))}
               </h1>
               <h1 className="text-2xl md:text-5xl font-praise drop-shadow-md">
                 {Array.from("music").map((letter, index) => (
                   <span
                     key={index}
                     className="inline-block animate-text-pop-up-top"
                     style={{ animationDelay: `${index * 0.05}s` }}
                   >
                     {letter}
                   </span>
                 ))}
               </h1>
             </div>
           </div>
           {/* Right Shine Icon */}
           <img
             src={shineIcon}
             alt="shines"
             className="w-[20px] h-[20px] animate-pulsate-fwd md:w-[60px] md:h-[60px] ml:5 md:ml-10 mt-5 md:mt-14"
           />
         </div>
       </div>
    <Login />
  </main>
  
  );
};

export default LoginPage;
