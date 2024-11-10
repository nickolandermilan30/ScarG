import React, { useState } from "react";
import spin4win from "../assets/Game_provider/1spin4win.png";
import amatic from "../assets/Game_provider/Amatic.png";
import amusnet from "../assets/Game_provider/Amusnet.png";
import bgaming from "../assets/Game_provider/BGaming.png";
import evolution from "../assets/Game_provider/Evolution.png";
import nolimitCity from "../assets/Game_provider/Nolimit_City.png";
import playngo from "../assets/Game_provider/Play’n_GO.png";
import playtech from "../assets/Game_provider/Playtech.png";
import pragmaticPlay from "../assets/Game_provider/Pragmatic_Play.png";
import pushGaming from "../assets/Game_provider/Push_Gaming.png";

const GameProvider = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);


  const providers = [
    { name: 'Every Matrix', img: spin4win },
    { name: 'Evolution', img: evolution },
    { name: 'Expanse', img: bgaming },
    { name: 'Ezugi', img: playngo },
    { name: 'Game Art', img: amatic },
    { name: 'Habanero', img: nolimitCity },
    { name: 'Hacksaw Gaming', img: pushGaming },
    { name: 'Inbet', img: amusnet },
    { name: 'NetEnt', img: playtech },
    { name: 'Play n GO', img: pragmaticPlay }
  ];

  const toggleButton = (index) => {
    if (selectedButtons.includes(index)) {
      setSelectedButtons(selectedButtons.filter((i) => i !== index));
    } else {
      setSelectedButtons([...selectedButtons, index]);
    }
  };

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {providers.map((provider, index) => (
        <button
          key={index}
          onClick={() => toggleButton(index)}
          className={`w-full h-20 rounded-lg flex items-center justify-start text-lg font-semibold px-4
            ${selectedButtons.includes(index) ? 'border-2 border-blue-500 bg-white' : 'bg-gray-100'}`}
        >
          <img src={provider.img} 
          alt={provider.name} 
          className="w-20 h-20 mr-4 mt-4 object-contain" />
          <span>{provider.name}</span>
        </button>
      ))}
    </div>
  );
};

export default GameProvider;
