import React from 'react';
import Profile from '../assets/Navbar_icon/PFP.jpg';

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white text-gray-800 shadow-lg">
      <div className="text-2xl font-bold font-trade-winds" style={{ color: '#6789FC' }}>
        ScarG
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-xl font-semibold" style={{ color: '#6789FC' }}>
          $1,190.6
        </span>
        <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full overflow-hidden" style={{ borderColor: '#6789FC' }}>
          <img
            src={Profile}
            alt="Profile"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;