import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search for something"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none w-1/2"
      />
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <i className="fas fa-bell text-gray-500"></i>
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Header;
