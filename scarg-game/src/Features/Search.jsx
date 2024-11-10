import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term); 
  };

  const handleFilterClick = () => {
    navigate('/filter'); 
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch(''); // Clear the search term in the parent component as well
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

        {searchTerm && (
          <span className="absolute inset-y-0 right-16 flex items-center">
            <button
              type="button"
              onClick={clearSearch}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FaTimes />
            </button>
          </span>
        )}

        <span className="absolute inset-y-0 right-4 flex items-center">
          <button
            type="button"
            onClick={handleFilterClick}
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
