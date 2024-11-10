import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useFavorites } from '../Features/FavoritesContext';

const Fav_List = () => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#6789FC' }}>
        Favorite Games
      </h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {favorites.map((game) => (
            <div key={game.id} className="relative flex flex-col items-center">
              <img
                src={game.img}
                alt={game.id}
                className="rounded-lg w-full h-auto object-cover"
              />
              {/* Circle overlay with star icon */}
              <div className="absolute top-2 left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                <button onClick={() => toggleFavorite(game)}>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-4 h-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-sm font-semibold">{game.id}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No favorite games added yet.</p>
      )}
    </div>
  );
};

export default Fav_List;
