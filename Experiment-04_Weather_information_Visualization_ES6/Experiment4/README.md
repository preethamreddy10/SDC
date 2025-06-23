# Experiment 4: Weather Application with Node.js Backend

## Overview
This experiment creates a complete weather application with a Node.js backend server and MySQL database integration. Users can search for weather information by city name and view detailed weather data.

## Features
- **Frontend**: HTML, CSS, JavaScript weather interface
- **Backend**: Node.js Express server
- **Database**: MySQL (converted from MongoDB as requested)
- **API Integration**: OpenWeatherMap API
- **CRUD Operations**: Create, Read, Update, Delete weather data
- **Responsive Design**: Mobile-friendly interface

## File Structure
```
Experiment4/
├── public/
│   ├── index.html          # Weather app frontend
│   ├── style.css           # Styling
│   └── script.js           # Frontend JavaScript
├── server.js               # Node.js Express server
├── database/
│   ├── config.js           # MySQL connection configuration
│   ├── queries.js          # SQL queries
│   └── schema.sql          # Database schema
├── routes/
│   └── weather.js          # API routes
├── package.json            # Node.js dependencies
├── .env                    # Environment variables
└── README.md              # This file
```

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API**: OpenWeatherMap API
- **Package Manager**: npm

## Database Schema (MySQL)
```sql
-- Weather data table
CREATE TABLE weather_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    temperature DECIMAL(5,2),
    humidity INT,
    description VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User searches table
CREATE TABLE user_searches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    search_count INT DEFAULT 1,
    last_searched TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints
- `GET /api/weather/:city` - Get weather for a city
- `POST /api/weather` - Save weather data
- `GET /api/history` - Get search history
- `DELETE /api/weather/:id` - Delete weather record

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup
1. Install MySQL
2. Create database: `CREATE DATABASE weather_app;`
3. Run schema: `mysql -u root -p weather_app < database/schema.sql`

### 3. Environment Variables
Create `.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=weather_app
OPENWEATHER_API_KEY=your_api_key
PORT=3000
```

### 4. Start Server
```bash
npm start
```

### 5. Access Application
Open `http://localhost:3000` in your browser

## Key Learning Objectives
- Node.js server development
- MySQL database integration
- RESTful API design
- Frontend-backend communication
- API integration (OpenWeatherMap)
- Environment variable management
- Error handling and validation

## API Integration
The app integrates with OpenWeatherMap API to fetch real-time weather data:
- Temperature, humidity, wind speed
- Weather descriptions and icons
- Location-based weather information

## Database Operations
- **Create**: Save weather data to MySQL
- **Read**: Retrieve weather history and current data
- **Update**: Update search counts and timestamps
- **Delete**: Remove old weather records

## Error Handling
- Invalid city names
- API rate limiting
- Database connection errors
- Network connectivity issues 