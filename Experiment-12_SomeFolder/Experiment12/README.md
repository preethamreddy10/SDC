# Experiment 12: React Weather Services

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Aim
To develop a weather information web application using React that fetches current and historical weather data from OpenWeatherMap API and visualizes it using Chart.js.

## Description
This experiment demonstrates how to create a real-time weather service using React.js. The application displays the current weather and temperature trends from the past 5 days in a graphical format. It utilizes OpenWeatherMap API for weather data and Chart.js for plotting charts. The project includes a modern, responsive UI with CHONY branding.

## Project Structure
```
Experiment12/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   └── WeatherChart.js  # Chart.js graph component
│   ├── services/
│   │   └── weatherService.js # API service to fetch weather data
│   ├── App.js               # Main component with logic and UI
│   ├── App.css              # Canvas-style CSS styling
│   ├── index.js             # Entry point of the React app
│   ├── index.css            # Global styles
│   └── Screenshots/         # Output screenshots
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Installation & Setup

### Prerequisites
- Node.js & npm
- VS Code or any code editor
- Basic knowledge of React and APIs

### Steps to Run
1. **Navigate to the project directory:**
   ```bash
   cd Experiment12
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Get OpenWeatherMap API Key (Optional):**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free API key
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` in `src/services/weatherService.js`

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Visit in Browser:**
   - http://localhost:3000

## Features
- **Current Weather Display:** Real-time weather information for any city
- **5-Day Forecast:** Historical weather data with temperature trends
- **Interactive Charts:** Chart.js visualization for temperature and humidity
- **Search Functionality:** Search weather by city name
- **Responsive Design:** Mobile-friendly interface
- **CHONY Branding:** Consistent branding throughout
- **Error Handling:** Graceful error handling with fallback data

## API Integration
- **OpenWeatherMap API:** Current weather and 5-day forecast
- **Chart.js:** Data visualization with line and bar charts
- **Axios:** HTTP client for API requests

## Screenshots

Please add the following screenshots to the `Screenshots/` directory:

1. **home.png** - Main weather app interface
2. **current-weather.png** - Current weather display
3. **forecast-chart.png** - 5-day forecast with charts
4. **temperature-chart.png** - Temperature trend chart
5. **humidity-chart.png** - Humidity bar chart
6. **search-city.png** - City search functionality
7. **mobile-view.png** - Responsive mobile design
8. **error-handling.png** - Error state display

### Screenshot Guidelines
- Use high-resolution screenshots
- Show different chart types (line/bar)
- Demonstrate search functionality
- Include CHONY branding in all screenshots
- Show responsive/mobile view
- Capture error states

## Sample Data
- **Default City:** Hyderabad
- **Weather Data:** Temperature, humidity, wind speed, weather description
- **Chart Types:** Line chart (temperature), Bar chart (humidity)

## API Configuration
The app uses mock data by default. To use real API data:
1. Get an API key from OpenWeatherMap
2. Update `src/services/weatherService.js`
3. Replace `YOUR_OPENWEATHERMAP_API_KEY` with your actual key

## Dependencies
- **React:** Frontend framework
- **Chart.js:** Data visualization
- **react-chartjs-2:** React wrapper for Chart.js
- **Axios:** HTTP client
- **React Scripts:** Development tools

## License
This project is licensed under the MIT License.

---

**CHONY | Experiment 12 | React Weather Services** 