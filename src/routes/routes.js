import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import CreditCardsPage from '../pages/Dashboard/CreditCards';
import SettingsPage from '../pages/Dashboard/Settings';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={''} />
      <Route path="/credit-cards" element={<CreditCardsPage />} />
      <Route path="/setting" element={<SettingsPage />}/>
    </Routes>
  );
};

export default AppRoutes;
