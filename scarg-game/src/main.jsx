import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Game_page';
import Filter from './Pages/Filter_page';
import FavoritePage from './Pages/Favorite_page';
import Fav_List from './Features/Fav_List';
import { FavoritesProvider } from './Features/FavoritesContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/fav-list" element={<Fav_List />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  </React.StrictMode>
);
