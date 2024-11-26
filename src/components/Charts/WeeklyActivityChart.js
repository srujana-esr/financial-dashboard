import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { fetchWeeklyActivity } from '../../api/weeklyActivityApi';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklyActivityChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const activityData = await fetchWeeklyActivity(); 
      setData(activityData);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: 'Withdraw',
        data: data.map((item) => item.withdraw),
        backgroundColor: '#232323',
        borderRadius: 30,
        barPercentage: 0.8,
        categoryPercentage: 0.4,
      },
      {
        label: 'Deposit',
        data: data.map((item) => item.deposit),
        backgroundColor: '#396AFF',
        borderRadius: 30,
        barPercentage: 0.8,
        categoryPercentage: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 25,
        right: 0,
        bottom: 25,
        left: 0,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 13 },
        },
      },
      y: {
        grid: {
          color: '#F3F3F5',
        },
        border: {
          display: false, 
        },
        ticks: {
          beginAtZero: true,
          font: { size: 13 },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end', 
        labels: {
          usePointStyle: true,
          font: { size: 13 },
          padding: 15, 
        },
      },
    },
  };

  return (
    <>
      <h2 className="text-lg font-bold text-[#343C6A] pb-4">Weekly Activity</h2>
      <div className="p-4 bg-white rounded-2xl shadow-md h-[322px]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default WeeklyActivityChart;
