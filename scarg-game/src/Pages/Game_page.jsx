import React, { useState } from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Carousel from '../Features/Carousel';
import Search from '../Features/Search';
import Games from '../Features/Games';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-grow mt-16 mb-16">
        <Carousel />
        <Search onSearch={setSearchTerm} />
        <Games searchTerm={searchTerm} />
      </main>

      <Navbar />
    </div>
  );
};

export default Home;
