import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../Icon';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { id: 1, label: 'Dashboard', icon: 'icon-home', to: '/' },
    { id: 2, label: 'Transactions', icon: 'icon-transfer', to: '/transactions' },
    { id: 3, label: 'Accounts', icon: 'icon-user', to: '/accounts' },
    { id: 4, label: 'Investments', icon: 'icon-economic-investment', to: '/investments' },
    { id: 5, label: 'Credit Cards', icon: 'icon-credit-card', to: '/credit-cards' },
    { id: 6, label: 'Loans', icon: 'icon-loan', to: '/loans' },
    { id: 7, label: 'Services', icon: 'icon-service', to: '/services' },
    { id: 8, label: 'My Privileges', icon: 'icon-econometrics', to: '/my-privileges' },
    { id: 9, label: 'Setting', icon: 'icon-settings-solid', to: '/setting' },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-screen bg-gray-50 shadow-md transform transition-transform duration-300 ease-in-out z-50 sm:static sm:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-center h-24">
        <div className="flex items-center">
          <Icon name="icon-logo" className="mr-2" size={32} />
          <h1 className="text-lg font-bold" style={{ fontSize: '1.563rem' }}>
            Soar Task
          </h1>
        <button
          onClick={toggleSidebar}
          className="sm:hidden"
          aria-label="Close Sidebar"
        >
          <Icon name="icon-close" size={24} />
        </button>
        </div>
      </div>

      <nav className="flex-grow px-6 py-6">
        <ul className="space-y-8">
          {navItems.map((item) => (
            <li key={item.id} className="pl-8">
              <NavLink
                to={item.to}
                aria-label={item.label}
                className={({ isActive }) =>
                  `flex items-center rounded-lg ${
                    isActive ? 'text-black font-bold' : 'text-gray-400'
                  }`
                }
                style={{ fontSize: '18px' }}
                onClick={() => {
                  if (window.innerWidth < 640) toggleSidebar();
                }}
              >
                <Icon name={item.icon} className="mr-3" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
