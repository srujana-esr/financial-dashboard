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
    const loadData = async () => {
      const activityData = await fetchWeeklyActivity(); 
      setData(activityData);
    };

    loadData();
  }, []);

  if (!data) {
    return null;
  }

  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: 'Withdraw',
        data: data.map((item) => item.withdraw),
        backgroundColor: '#232323',
        borderRadius: 30,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      {
        label: 'Deposit',
        data: data.map((item) => item.deposit),
        backgroundColor: '#396AFF',
        borderRadius: 30,
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 15,
        right: 30,
        bottom: 15,
        left: 30,
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
      tooltip: {
        enabled: true, 
      },
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          font: { size: 11 },
        },
      },
      datalabels: {
        display: false, 
      },
    },
  };

  return (
    <div className="mb-7">
      <h2 className="text-lg font-bold text-[#343C6A] pb-4">Weekly Activity</h2>
    <div className="p-4 bg-white rounded-2xl shadow-md h-[322px]">
      <Bar data={chartData} options={chartOptions} />
    </div>
    </div>
  );
};

export default WeeklyActivityChart;
