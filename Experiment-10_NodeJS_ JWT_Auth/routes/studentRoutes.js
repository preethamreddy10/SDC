// CHONY Experiment 10 - Student Routes
// Author: Haswinchony Saladi (23AG1A0555)

const express = require('express');
const router = express.Router();
const {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentsByDepartment,
    getStudentsByYear
} = require('../controllers/studentController');
const { protect } = require('../middleware/authMiddleware');

// All routes are protected with JWT authentication
router.use(protect);

// CRUD operations
router.route('/')
    .get(getStudents)
    .post(createStudent);

router.route('/:id')
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent);

// Additional routes
router.get('/department/:department', getStudentsByDepartment);
router.get('/year/:year', getStudentsByYear);

module.exports = router; 