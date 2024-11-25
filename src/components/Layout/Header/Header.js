import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../../Icon';

const navTitles = {
  '/': 'Overview',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments': 'Investments',
  '/credit-cards': 'Credit Cards',
  '/loans': 'Loans',
  '/services': 'Services',
  '/my-privileges': 'My Privileges',
  '/setting': 'Setting',
};

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const headerTitle = navTitles[location.pathname] || 'Page';
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={toggleSidebar}
            className="md:hidden text-black hover:text-gray-700 focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            <Icon name="icon-menu" size={24} />
          </button>

          <h1 className="text-2xl font-bold text-[#343C6A] ml-4 md:ml-0">{headerTitle}</h1>

          <div
            className="w-[48px] h-[48px] rounded-full overflow-hidden border border-gray-200 cursor-pointer ml-auto md:hidden"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <img
              src="/profile-images/christina-morillo.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex items-center w-full md:w-64 bg-[#F5F7FA] rounded-3xl px-4 py-3">
            <Icon name="icon-search" size={20} className="text-[#8BA3CB] mr-3" />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full bg-transparent focus:outline-none text-[#8BA3CB] text-base"
            />
          </div>

          <button
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#F5F7FA] hover:bg-gray-200"
            aria-label="Settings"
          >
            <Icon name="icon-settings" size={28} className="text-[#8BA3CB]" />
          </button>

          <button
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#F5F7FA] hover:bg-gray-200"
            aria-label="Notifications"
          >
            <Icon name="icon-notifications" size={28} className="text-[#8BA3CB]" />
          </button>

          <div
            className="hidden md:block w-[60px] h-[60px] rounded-full overflow-hidden border border-gray-200 cursor-pointer"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <img
              src="/profile-images/christina-morillo.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {isProfileMenuOpen && (
            <div className="absolute right-6 top-20 bg-white shadow-md rounded-lg w-48 py-2 z-50">
              <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                <Icon name="icon-settings" className="mr-2 text-gray-500" /> Settings
              </button>
              <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left">
                <Icon name="icon-notifications" className="mr-2 text-gray-500" /> Notifications
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
