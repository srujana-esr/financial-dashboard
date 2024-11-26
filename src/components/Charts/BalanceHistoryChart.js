import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { fetchBalanceHistory } from "../../api/balanceHistoryApi";

// Register only necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const BalanceHistory = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const balanceData = await fetchBalanceHistory();
      setData(balanceData);
    };

    loadData();
  }, []);

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

  // Chart Data Configuration
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Balance",
        data: data.map((item) => item.amount),
        borderColor: "#1814F3", // Solid line color
        borderWidth: 3, // Thickness of the line
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
          gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
          gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
          return gradient;
        },
        fill: true, // Fill the area under the line
        tension: 0.4, // Smooth curve
        pointRadius: 0, // Remove visible points
        pointHoverRadius: 0, // Remove hover effect on points
      },
    ],
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      datalabels: {
        display: false, // Explicitly disable data labels
      },
    },
    scales: {
      x: {
        grid: { display: false }, // Hide grid lines for the X-axis
        ticks: {
          font: { size: 13 },
          color: "#718EBF",
        },
      },
      y: {
        grid: { color: "#F3F3F5" }, // Subtle grid lines
        ticks: {
          beginAtZero: true,
          font: { size: 13 },
          color: "#718EBF",
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Completely disable points on the line
      },
    },
  };

  return (
    <>
          <h2 className="text-lg font-bold text-[#343C6A] mb-4">Balance History</h2>


    <div className="p-6 bg-white rounded-2xl shadow-md h-[322px]">
      <div className="h-[250px]">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
    </>
  );
};

export default BalanceHistory;
