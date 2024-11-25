import React from 'react';
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

const Header = () => {
  const location = useLocation();
  const headerTitle = navTitles[location.pathname] || 'Page';

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-[#343C6A]">{headerTitle}</h1>

      <div className="flex items-center space-x-6">
        <div className="w-64">
          <div className="flex items-center bg-[#F5F7FA] rounded-3xl px-4 py-3">
            <Icon name="icon-search" size={20} className="text-[#8BA3CB] mr-3" />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full bg-transparent focus:outline-none text-[#8BA3CB] text-base"
            />
          </div>
        </div>

        <button
          className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center hover:bg-gray-200"
          aria-label="Settings"
        >
          <Icon name="icon-settings" size={28} className="text-[#8BA3CB]" />
        </button>

        <button
          className="w-12 h-12 rounded-full bg-[#F5F7FA] flex items-center justify-center hover:bg-gray-200"
          aria-label="Notifications"
        >
          <Icon name="icon-notifications" size={28} className="text-[#8BA3CB]" />
        </button>

        <div className="w-[60px] h-[60px] rounded-full overflow-hidden border border-gray-200">
          <img
            src="/profile-images/christina-morillo.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
