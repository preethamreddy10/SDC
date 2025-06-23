const mysql = require('mysql2/promise');
require('dotenv').config();

// Database configuration
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'weather_app',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ MySQL Database connected successfully!');
        connection.release();
        return true;
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        return false;
    }
}

// Initialize database tables
async function initializeDatabase() {
    try {
        const connection = await pool.getConnection();
        
        // Create weather_data table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS weather_data (
                id INT AUTO_INCREMENT PRIMARY KEY,
                city_name VARCHAR(100) NOT NULL,
                temperature DECIMAL(5,2),
                humidity INT,
                description VARCHAR(200),
                wind_speed DECIMAL(5,2),
                pressure INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        
        // Create user_searches table
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS user_searches (
                id INT AUTO_INCREMENT PRIMARY KEY,
                city_name VARCHAR(100) NOT NULL,
                search_count INT DEFAULT 1,
                last_searched TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE KEY unique_city (city_name)
            )
        `);
        
        console.log('✅ Database tables initialized successfully!');
        connection.release();
        return true;
    } catch (error) {
        console.error('❌ Database initialization failed:', error.message);
        return false;
    }
}

module.exports = {
    pool,
    testConnection,
    initializeDatabase
}; 