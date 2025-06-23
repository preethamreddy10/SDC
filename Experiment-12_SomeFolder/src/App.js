// CHONY Experiment 12 - Main App Component
// Author: Haswinchony Saladi (23AG1A0555)

import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherChart from './components/WeatherChart';
import WeatherService from './services/weatherService';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('Hyderabad');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [chartType, setChartType] = useState('line');

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError('');
    
    try {
      const [currentData, forecastData] = await Promise.all([
        WeatherService.getCurrentWeather(city),
        WeatherService.getWeatherForecast(city)
      ]);
      
      setCurrentWeather(currentData);
      setForecast(forecastData);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherData();
    }
  };

  const getWeatherIcon = (iconCode) => {
    return WeatherService.getWeatherIcon(iconCode);
  };

  const formatTemperature = (temp) => {
    return Math.round(temp);
  };

  const formatDate = (timestamp) => {
    return WeatherService.formatDate(timestamp);
  };

  return (
    <div className="app-root">
      <header className="chony-header">
        <div className="container header-flex">
          <div className="logo">
            <span className="chony-logo">CHONY</span>
            <span className="chony-sub">Weather Services</span>
          </div>
          <div className="header-info">
            <span>Real-time Weather Data</span>
          </div>
        </div>
      </header>

      <main className="container main-content fade-in">
        {/* Search Form */}
        <div className="card search-card">
          <form onSubmit={handleSearch} className="search-form">
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Loading...' : 'Get Weather'}
            </button>
          </form>
        </div>

        {error && (
          <div className="card error-card">
            <p style={{ color: '#ff4757' }}>{error}</p>
          </div>
        )}

        {/* Current Weather */}
        {currentWeather && (
          <div className="weather-card current-weather">
            <h2 className="mb-20" style={{ color: 'var(--chony-red)' }}>
              Current Weather in {currentWeather.name}
            </h2>
            <div className="weather-grid">
              <div className="weather-main">
                <div className="temperature">
                  {formatTemperature(currentWeather.main.temp)}°C
                </div>
                <div className="weather-description">
                  {currentWeather.weather[0].description}
                </div>
                <div className="weather-details">
                  <p>Feels like: {formatTemperature(currentWeather.main.feels_like)}°C</p>
                  <p>Humidity: {currentWeather.main.humidity}%</p>
                  <p>Wind: {currentWeather.wind.speed} m/s</p>
                </div>
              </div>
              <div className="weather-icon-container">
                <img
                  src={getWeatherIcon(currentWeather.weather[0].icon)}
                  alt={currentWeather.weather[0].description}
                  className="weather-icon"
                />
              </div>
            </div>
          </div>
        )}

        {/* Weather Charts */}
        {forecast && (
          <div className="weather-card">
            <div className="chart-controls mb-20">
              <h3 style={{ color: 'var(--chony-red)' }}>5-Day Weather Forecast</h3>
              <div className="chart-buttons">
                <button
                  className={`btn ${chartType === 'line' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setChartType('line')}
                >
                  Temperature
                </button>
                <button
                  className={`btn ${chartType === 'bar' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setChartType('bar')}
                >
                  Humidity
                </button>
              </div>
            </div>
            <WeatherChart forecastData={forecast} chartType={chartType} />
          </div>
        )}

        {/* Forecast Details */}
        {forecast && (
          <div className="weather-card">
            <h3 className="mb-20" style={{ color: 'var(--chony-red)' }}>Daily Forecast</h3>
            <div className="forecast-grid">
              {forecast.list.slice(0, 5).map((day, index) => (
                <div key={index} className="forecast-day">
                  <div className="forecast-date">{formatDate(day.dt)}</div>
                  <img
                    src={getWeatherIcon(day.weather[0].icon)}
                    alt={day.weather[0].description}
                    className="forecast-icon"
                  />
                  <div className="forecast-temp">
                    {formatTemperature(day.main.temp)}°C
                  </div>
                  <div className="forecast-desc">
                    {day.weather[0].description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="chony-footer text-center">
        <div className="container">
          <span>© 2024 CHONY | Weather Services | Haswinchony Saladi (23AG1A0555)</span>
        </div>
      </footer>
    </div>
  );
}

export default App; 