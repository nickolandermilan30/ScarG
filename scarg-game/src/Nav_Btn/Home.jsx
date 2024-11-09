import React from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Carousel from '../Features/Carousel'; 
import Search from '../Features/Search'; 
import Games from '../Features/Games'; 

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header /> 

      <main className="flex-grow">

      <Carousel />

      <Search />

      <Games />
      
      </main>

      <Navbar /> 
    </div>
  );
};

export default Home;
