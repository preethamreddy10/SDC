// CHONY Experiment 10 - Main Application File for JWT Authentication API
// Author: Haswinchony Saladi (23AG1A0555)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

// Import routes
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`CHONY - MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Connect to database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to CHONY Student API with JWT Authentication',
        version: '1.0.0',
        author: 'Haswinchony Saladi (23AG1A0555)',
        endpoints: {
            'Authentication': {
                'POST /api/auth/register': 'Register a new user',
                'POST /api/auth/login': 'Login user',
                'GET /api/auth/profile': 'Get user profile (Protected)',
                'PUT /api/auth/profile': 'Update user profile (Protected)',
                'GET /api/auth/users': 'Get all users (Admin only)'
            },
            'Students': {
                'GET /api/students': 'Get all students (Protected)',
                'POST /api/students': 'Create new student (Protected)',
                'GET /api/students/:id': 'Get single student (Protected)',
                'PUT /api/students/:id': 'Update student (Protected)',
                'DELETE /api/students/:id': 'Delete student (Protected)',
                'GET /api/students/department/:department': 'Get students by department (Protected)',
                'GET /api/students/year/:year': 'Get students by year (Protected)'
            }
        },
        note: 'All student routes require JWT authentication. Include Authorization header with Bearer token.'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`CHONY JWT Authentication API server running on port ${PORT}`);
    console.log(`Server URL: http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  Authentication: /api/auth/*');
    console.log('  Students: /api/students/*');
    console.log('  Root: /');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    process.exit(1);
}); 