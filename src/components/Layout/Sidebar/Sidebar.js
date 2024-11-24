import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../../Icon';
import styles from './Sidebar.module.css';

const Sidebar = () => {
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

  return  (
  <aside className="w-64 h-screen bg-gray-50 shadow-md flex flex-col">
  <div className="flex items-center justify-center h-16 border-b border-gray-200">
    <Icon name="icon-logo" size={25} className="mr-3" />
    <h1 className="text-lg font-bold">Soar Task</h1>
  </div>
  <nav className="flex-grow px-4 py-6">
    <ul className="space-y-4">
      {navItems.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `flex items-center p-2 rounded-lg ${
                isActive ? 'text-black font-bold' : 'text-gray-400'
              }`
            }
          >
            <Icon
              name={item.icon}
              className={`${styles.icon} mr-3`}
              size={25}
            />
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
