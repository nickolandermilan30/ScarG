import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (game) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === game.id)) {
        return prevFavorites.filter((fav) => fav.id !== game.id); // Remove from favorites
      } else {
        return [...prevFavorites, game]; // Add to favorites
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
