import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGamepad } from '@fortawesome/free-solid-svg-icons';
import game1 from '../assets/Games_Img/game1.png';
import game2 from '../assets/Games_Img/game2.png';
import game3 from '../assets/Games_Img/game3.png';
import game4 from '../assets/Games_Img/game4.png';
import game5 from '../assets/Games_Img/game5.png';
import game6 from '../assets/Games_Img/game6.png';
import game7 from '../assets/Games_Img/game7.png';
import game8 from '../assets/Games_Img/game8.png';

const gamesData = [
  { id: 'Roblox', img: game1 },
  { id: 'ZZZ', img: game2 },
  { id: 'Star Rail', img: game3 },
  { id: 'Genshin Impact', img: game4 },
  { id: 'Call of Duty', img: game5 },
  { id: 'Honkai Impact', img: game6 },
  { id: 'Mobile Legends', img: game7 },
  { id: 'Garena Undawn', img: game8 },
];

const Games = ({ searchTerm }) => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (gameId) => {
    setFavorites((prev) => ({
      ...prev,
      [gameId]: !prev[gameId],
    }));
  };

  const filteredGames = gamesData.filter((game) =>
    game.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {filteredGames.map((game) => (
        <div key={game.id} className="relative flex flex-col items-center group">
          <img
            src={game.img}
            alt={game.id}
            className="rounded-lg w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-2">
              <button className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faGamepad} />
              </button>
              <button
                onClick={() => toggleFavorite(game.id)}
                className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full"
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className={favorites[game.id] ? 'text-yellow-500' : 'text-black'}
                />
              </button>
            </div>
          </div>
          <p className="mt-2 text-center text-sm font-semibold">{game.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Games;
