import React from 'react';
import CardsSection from '../../components/Cards/CardsSection';
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
      <div className="md:col-span-6">
        <CardsSection />
      </div>

      <div className="md:col-span-4">
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
