import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { fetchExpenseStatistics } from '../../api/expenseStatisticsApi';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseStatisticsChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const stats = await fetchExpenseStatistics();
      setData(stats);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  const chartData = {
    labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: ['#343C6A', '#FF8551', '#396AFF', '#232323'],
        hoverBackgroundColor: ['#4A4E8A', '#FFA070', '#4A80FF', '#3A3A3A'],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          font: { size: 13, family: 'Inter' },
        },
      },
    },
  };

  return (
    <>
          <h2 className="text-lg font-bold text-[#343C6A] pb-4">Expense Statistics</h2>

    <div className="p-4 bg-white rounded-2xl shadow-md h-[322px]">
      <Doughnut data={chartData} options={chartOptions} />
    </div>

    </>
  );
};

export default ExpenseStatisticsChart;
