import React, { useState } from 'react';

const Button = ({ setSelectedButton }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
    <div className="flex flex-row items-center justify-center gap-4">
      <button
        onClick={() => setSelectedButton("START")}
        className="w-full md:w-auto px-10 py-3 bg-[#9588FC] text-white font-semibold rounded-full shadow-lg hover:bg-[#7c6ee8] transition-all"
      >
        START
      </button>

      <button
        onClick={() => setSelectedButton("NEW")}
        className="w-full md:w-auto px-10 py-3 bg-[#9588FC] text-white font-semibold rounded-full shadow-lg hover:bg-[#7c6ee8] transition-all"
      >
        NEW
      </button>

      <button
        onClick={() => setSelectedButton("SLOTS")}
        className="w-full md:w-auto px-10 py-3 bg-[#9588FC] text-white font-semibold rounded-full shadow-lg hover:bg-[#7c6ee8] transition-all"
      >
        SLOTS
      </button>
    </div></div>
  );
};

export default Button;
