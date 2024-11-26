import React from 'react';
import WeeklyActivityChart from '../../components/Charts/WeeklyActivityChart';
import ExpenseStatisticsChart from '../../components/Charts/ExpenseStatisticsChart';
import CardsSection from '../../components/Cards/CardsSection';
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions';

const Dashboard = () => {
  return (
    <div className="space-6">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-6">
          <CardsSection />
        </div>
        <div className="md:col-span-4">
          <RecentTransactions />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-6">
          <WeeklyActivityChart />
        </div>
        <div className="md:col-span-4">
          <ExpenseStatisticsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
