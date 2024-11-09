import React, { useState, useEffect } from "react";
import bgImage1 from '../assets/Carousel_Img/bg1.png';
import bgImage2 from '../assets/Carousel_Img/bg2.png';
import bgImage3 from '../assets/Carousel_Img/bg3.png';
import bgImage4 from '../assets/Carousel_Img/bg4.png';
import bgImage5 from '../assets/Carousel_Img/bg5.png';

const images = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <div
        className="w-full h-[180px] rounded-lg relative" 
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
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
    </div>
  );
};

export default Carousel;
