import React from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Fav from '../Features/Fav_List';

const Favorite_page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow mt-16 mb-16 p-4">
      <Fav />
      </main>

      <Navbar />
    </div>
  );
};

export default Favorite_page;
