import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter } from 'react-icons/fa';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleFilterClick = () => {
    navigate('/filter'); // Navigate to the Filter page
  };

  return (
    <div className="p-4 flex justify-center">
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-4 flex items-center">
          <FaSearch className="text-gray-400" />
        </span>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full h-12 pl-12 pr-16 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
        />

        <span className="absolute inset-y-0 right-4 flex items-center">
          <button
            type="button"
            onClick={handleFilterClick} // Trigger navigation
            className="w-8 h-8 rounded-full bg-[#9588FC] flex items-center justify-center focus:outline-none"
          >
            <FaFilter className="text-white text-sm" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Search;
