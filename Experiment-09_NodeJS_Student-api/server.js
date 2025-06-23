// CHONY Experiment 9 - RESTful Student API with Node.js and Express
// Author: Haswinchony Saladi (23AG1A0555)
// Aim: Implement a RESTful API for managing student data

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory storage for students (simulating a database)
let students = [
    {
        id: 1,
        name: "Haswinchony Saladi",
        age: 20,
        course: "Computer Science",
        rollNo: "23AG1A0555"
    },
    {
        id: 2,
        name: "Alice Johnson",
        age: 21,
        course: "Mathematics",
        rollNo: "23AG1A0556"
    }
];

let nextId = 3;

// GET /api/students - Get all students
app.get('/api/students', (req, res) => {
    res.json({
        message: "CHONY Student API - All Students",
        count: students.length,
        data: students
    });
});

// POST /api/students - Add a new student
app.post('/api/students', (req, res) => {
    const { name, age, course, rollNo } = req.body;
    
    if (!name || !age || !course) {
        return res.status(400).json({
            error: "Name, age, and course are required fields"
        });
    }
    
    const newStudent = {
        id: nextId++,
        name,
        age: parseInt(age),
        course,
        rollNo: rollNo || `23AG1A${String(nextId-1).padStart(4, '0')}`
    };
    
    students.push(newStudent);
    
    res.status(201).json({
        message: "Student added successfully",
        data: newStudent
    });
});

// PUT /api/students/:id - Update a student
app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age, course, rollNo } = req.body;
    
    const studentIndex = students.findIndex(student => student.id === id);
    
    if (studentIndex === -1) {
        return res.status(404).json({
            error: "Student not found"
        });
    }
    
    students[studentIndex] = {
        ...students[studentIndex],
        name: name || students[studentIndex].name,
        age: age ? parseInt(age) : students[studentIndex].age,
        course: course || students[studentIndex].course,
        rollNo: rollNo || students[studentIndex].rollNo
    };
    
    res.json({
        message: "Student updated successfully",
        data: students[studentIndex]
    });
});

// DELETE /api/students/:id - Delete a student
app.delete('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    const studentIndex = students.findIndex(student => student.id === id);
    
    if (studentIndex === -1) {
        return res.status(404).json({
            error: "Student not found"
        });
    }
    
    const deletedStudent = students.splice(studentIndex, 1)[0];
    
    res.json({
        message: "Student deleted successfully",
        data: deletedStudent
    });
});

// GET /api/students/:id - Get a specific student
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    const student = students.find(student => student.id === id);
    
    if (!student) {
        return res.status(404).json({
            error: "Student not found"
        });
    }
    
    res.json({
        message: "Student found",
        data: student
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to CHONY Student API",
        version: "1.0.0",
        author: "Haswinchony Saladi (23AG1A0555)",
        endpoints: {
            "GET /api/students": "Get all students",
            "POST /api/students": "Add a new student",
            "PUT /api/students/:id": "Update a student",
            "DELETE /api/students/:id": "Delete a student",
            "GET /api/students/:id": "Get a specific student"
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`CHONY Student API server running at http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log('  GET  /api/students     - Get all students');
    console.log('  POST /api/students     - Add a new student');
    console.log('  PUT  /api/students/:id - Update a student');
    console.log('  DELETE /api/students/:id - Delete a student');
    console.log('  GET  /api/students/:id - Get a specific student');
}); 