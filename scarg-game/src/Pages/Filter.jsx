import React, { useState } from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Main from '../Filter_items/Filter_main';

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow mt-16 mb-16">
        <Main />
      </main>

      <Navbar />
    </div>
  );
};

export default Filter;
