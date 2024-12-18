import React, { useState, useEffect }  from 'react';
import WeeklyActivityChart from '../../components/Charts/WeeklyActivityChart';
import ExpenseStatisticsChart from '../../components/Charts/ExpenseStatisticsChart';
import CardsSection from '../../components/Cards/CardsSection';
import RecentTransactions from '../../components/RecentTransactions/RecentTransactions';
import Loader from '../../components/Loader/loader';
import QuickTransfer from '../../components/QuickTransfer/QuickTransfer';
import BalanceHistoryChart from '../../components/Charts/BalanceHistoryChart';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAllData = async () => {
      await Promise.all([new Promise((res) => setTimeout(res, 1000))]);
      setIsLoading(false);
    };

    loadAllData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-4">
          <QuickTransfer />
        </div>
        <div className="md:col-span-6">
          <BalanceHistoryChart />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
