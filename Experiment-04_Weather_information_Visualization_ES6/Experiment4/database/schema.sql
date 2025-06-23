-- Weather Application Database Schema
-- MySQL Database Schema (Converted from MongoDB as requested)

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS weather_app;
USE weather_app;

-- Weather data table to store weather information
CREATE TABLE IF NOT EXISTS weather_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    temperature DECIMAL(5,2),
    humidity INT,
    description VARCHAR(200),
    wind_speed DECIMAL(5,2),
    pressure INT,
    icon VARCHAR(50),
    country VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_city_name (city_name),
    INDEX idx_created_at (created_at)
);

-- User searches table to track search history
CREATE TABLE IF NOT EXISTS user_searches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    search_count INT DEFAULT 1,
    last_searched TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_city (city_name),
    INDEX idx_last_searched (last_searched)
);

-- Weather history table for historical data
CREATE TABLE IF NOT EXISTS weather_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    temperature DECIMAL(5,2),
    humidity INT,
    description VARCHAR(200),
    recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_city_date (city_name, recorded_at)
);

-- Sample data for testing
INSERT INTO weather_data (city_name, temperature, humidity, description, wind_speed, pressure, country) VALUES
('Mumbai', 28.5, 75, 'Partly cloudy', 12.5, 1013, 'India'),
('Delhi', 32.0, 65, 'Sunny', 8.2, 1010, 'India'),
('Bangalore', 25.8, 80, 'Light rain', 15.3, 1015, 'India'),
('Chennai', 30.2, 70, 'Clear sky', 10.1, 1012, 'India'),
('Kolkata', 29.5, 78, 'Humid', 9.8, 1011, 'India');

INSERT INTO user_searches (city_name, search_count, last_searched) VALUES
('Mumbai', 15, NOW()),
('Delhi', 12, NOW()),
('Bangalore', 8, NOW()),
('Chennai', 6, NOW()),
('Kolkata', 4, NOW());

-- Create a view for popular cities
CREATE VIEW popular_cities AS
SELECT city_name, search_count, last_searched
FROM user_searches
ORDER BY search_count DESC, last_searched DESC
LIMIT 10;

-- Create a view for recent weather data
CREATE VIEW recent_weather AS
SELECT city_name, temperature, humidity, description, created_at
FROM weather_data
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
ORDER BY created_at DESC; 