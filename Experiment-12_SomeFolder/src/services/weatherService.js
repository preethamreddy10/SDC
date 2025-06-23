// CHONY Experiment 12 - Weather Service
// Author: Haswinchony Saladi (23AG1A0555)

import axios from 'axios';

// OpenWeatherMap API configuration
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// For demo purposes, using a sample API key - replace with your own
const DEMO_API_KEY = '1234567890abcdef';

class WeatherService {
  constructor() {
    this.apiKey = API_KEY !== 'YOUR_OPENWEATHERMAP_API_KEY' ? API_KEY : DEMO_API_KEY;
  }

  // Get current weather for a city
  async getCurrentWeather(city) {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching current weather:', error);
      // Return mock data for demo purposes
      return this.getMockCurrentWeather(city);
    }
  }

  // Get 5-day weather forecast
  async getWeatherForecast(city) {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
      // Return mock data for demo purposes
      return this.getMockForecast(city);
    }
  }

  // Mock current weather data for demo
  getMockCurrentWeather(city) {
    return {
      name: city,
      main: {
        temp: 25,
        feels_like: 27,
        humidity: 65,
        pressure: 1013
      },
      weather: [
        {
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      wind: {
        speed: 5.2
      },
      sys: {
        country: 'IN'
      }
    };
  }

  // Mock forecast data for demo
  getMockForecast(city) {
    const forecast = [];
    const baseTemp = 25;
    
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      
      forecast.push({
        dt: Math.floor(date.getTime() / 1000),
        main: {
          temp: baseTemp + (Math.random() * 10 - 5),
          humidity: 60 + Math.random() * 20
        },
        weather: [
          {
            main: ['Clear', 'Clouds', 'Rain'][Math.floor(Math.random() * 3)],
            description: 'weather description',
            icon: ['01d', '02d', '03d', '10d'][Math.floor(Math.random() * 4)]
          }
        ],
        dt_txt: date.toISOString()
      });
    }
    
    return {
      list: forecast,
      city: {
        name: city,
        country: 'IN'
      }
    };
  }

  // Get weather icon URL
  getWeatherIcon(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  // Convert temperature to different units
  convertTemperature(temp, unit = 'C') {
    if (unit === 'F') {
      return (temp * 9/5) + 32;
    }
    return temp;
  }

  // Format date
  formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  }

  // Format time
  formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

export default new WeatherService(); 