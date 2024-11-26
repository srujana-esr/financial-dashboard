import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { fetchExpenseStatistics } from '../../api/expenseStatisticsApi';

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const ExpenseStatisticsChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const stats = await fetchExpenseStatistics();
      setData(stats);
    };

    loadData();
  }, []);

  if (!data) {
    return null; 
  }

  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: ['#343C6A', '#FF8551', '#396AFF', '#232323'],
        hoverBackgroundColor: ['#4A4E8A', '#FFA070', '#4A80FF', '#3A3A3A'],
        borderWidth: 10, 
        borderColor: '#ffffff',
        hoverOffset: 50, 
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false, 
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
      legend: {
        display: false, 
      },
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}%\n${label}`; 
        },
        anchor: 'center',
        align: 'center',
        font: {
          size: 12,
          weight: 'bold',
        },
        padding: 10,
      },
    },
    cutout: '0', 
    animation: {
      animateScale: true, 
      animateRotate: true, 
    },
  };

  return (
    <>
      <h2 className="text-lg font-bold text-[#343C6A] pb-4">Expense Statistics</h2>
      <div className="p-4 bg-white rounded-2xl shadow-md h-[322px] flex justify-center items-center relative">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default ExpenseStatisticsChart;
