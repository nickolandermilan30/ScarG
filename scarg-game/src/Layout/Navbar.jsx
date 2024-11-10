import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlayImage from '../assets/Navbar_icon/Play.png';
import FavoriteImage from '../assets/Navbar_icon/Favorite.png';
import VS from '../assets/Navbar_icon/VS.png';
import History from '../assets/Navbar_icon/History.png';
import '../CSS/filter-blue.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleGamesClick = () => {
    navigate('/'); // Navigate to the Home page
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md">
      <div className="flex justify-around items-center py-2">
        <button
          onClick={handleGamesClick} // Attach the click handler
          className="flex flex-col items-center text-blue-500 hover:text-blue-800"
        >
          <img
            src={PlayImage}
            alt="Games"
            className="w-6 h-6 filter-blue object-contain"
          />
          <span className="text-xs">Games</span>
        </button>

        <button className="flex flex-col items-center text-blue-500 hover:text-blue-800">
          <img
            src={FavoriteImage}
            alt="Favorite"
            className="w-8 h-8 filter-blue object-contain"
          />
          <span className="text-xs">Favorite</span>
        </button>

        <button className="flex flex-col items-center text-blue-500 hover:text-blue-800">
          <img
            src={History}
            alt="History"
            className="w-8 h-8 filter-blue object-contain"
          />
          <span className="text-xs">History</span>
        </button>

        <button className="flex flex-col items-center text-blue-500 hover:text-blue-800">
          <img
            src={VS}
            alt="VS"
            className="w-8 h-8 filter-blue object-contain"
          />
          <span className="text-xs">V.S Mode</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
