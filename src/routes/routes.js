import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import CreditCardsPage from '../pages/Dashboard/CreditCards';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={''} />
      <Route path="/credit-cards" element={<CreditCardsPage />} />
    </Routes>
  );
};

export default AppRoutes;
