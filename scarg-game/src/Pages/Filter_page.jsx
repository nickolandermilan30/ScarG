import React, { useState } from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import FILTER from '../Filter_items/Filter_main';
import Game_Provider from '../Filter_items/Game_provider';

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow mt-16 mb-16">
        <FILTER />
        <Game_Provider/>

      </main>

      <Navbar />
    </div>
  );
};

export default Filter;
