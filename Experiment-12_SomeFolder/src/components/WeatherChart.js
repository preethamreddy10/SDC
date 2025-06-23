// CHONY Experiment 12 - Weather Chart Component
// Author: Haswinchony Saladi (23AG1A0555)

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ forecastData, chartType = 'line' }) => {
  if (!forecastData || !forecastData.list) {
    return <div className="text-center">No forecast data available</div>;
  }

  // Process forecast data for charting
  const labels = forecastData.list.map(item => {
    const date = new Date(item.dt * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  });

  const temperatures = forecastData.list.map(item => item.main.temp);
  const humidity = forecastData.list.map(item => item.main.humidity);

  const temperatureData = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: '#ff4757',
        backgroundColor: 'rgba(255, 71, 87, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#ff4757',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const humidityData = {
    labels,
    datasets: [
      {
        label: 'Humidity (%)',
        data: humidity,
        backgroundColor: 'rgba(102, 126, 234, 0.8)',
        borderColor: '#667eea',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff',
          font: {
            size: 14,
            weight: '500',
          },
        },
      },
      title: {
        display: true,
        text: chartType === 'line' ? 'Temperature Trend' : 'Humidity Levels',
        color: '#ffffff',
        font: {
          size: 18,
          weight: '600',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#ff4757',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    elements: {
      point: {
        hoverBackgroundColor: '#ff4757',
      },
    },
  };

  return (
    <div className="weather-chart-container">
      <div style={{ height: '300px', position: 'relative' }}>
        {chartType === 'line' ? (
          <Line data={temperatureData} options={options} />
        ) : (
          <Bar data={humidityData} options={options} />
        )}
      </div>
    </div>
  );
};

export default WeatherChart; 