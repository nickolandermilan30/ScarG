import React, { useState, useEffect } from 'react';

// Import carousel images
import amatic from '../assets/Banner/Amatic_Industries.png';
import bgaming from '../assets/Banner/BGaming.png';
import evolution from '../assets/Banner/Evolution.png';
import ezugi from '../assets/Banner/Ezugi.png';
import hacksaw from '../assets/Banner/Hacksaw_Gaming.png';
import mascot from '../assets/Banner/Mascot_Gaming.png';
import playtech from '../assets/Banner/Playtech.png';
import pragmaticPlay from '../assets/Banner/Pragmatic_Play.png';
import softGamings from '../assets/Banner/SoftGamings.png';
import yggdrasil from '../assets/Banner/Yggdrasil_Gaming.png';

const images = [amatic, bgaming, evolution, ezugi, hacksaw, mascot, playtech, pragmaticPlay, softGamings, yggdrasil];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-[180px] rounded-lg relative bg-white shadow-lg"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Filter_Main = () => {
  return (
    <div className="pt-4 pr-4 pl-4">
      <Carousel />
    </div>
  );
};

export default Filter_Main;
