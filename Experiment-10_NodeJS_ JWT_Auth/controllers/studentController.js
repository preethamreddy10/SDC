// CHONY Experiment 10 - Student Controller for JWT Authentication API
// Author: Haswinchony Saladi (23AG1A0555)

const Student = require('../models/Student');

// @desc    Get all students
// @route   GET /api/students
// @access  Private
const getStudents = async (req, res) => {
    try {
        const { department, year, course, search } = req.query;
        let query = { isActive: true };

        // Filter by department
        if (department) {
            query.department = department;
        }

        // Filter by year
        if (year) {
            query.year = parseInt(year);
        }

        // Filter by course
        if (course) {
            query.course = { $regex: course, $options: 'i' };
        }

        // Search by name or roll number
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { rollNo: { $regex: search, $options: 'i' } }
            ];
        }

        const students = await Student.find(query)
            .populate('createdBy', 'name email')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            message: 'CHONY - Students retrieved successfully',
            count: students.length,
            data: students.map(student => student.getStudentInfo())
        });
    } catch (error) {
        console.error('Get students error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while getting students',
            error: error.message
        });
    }
};

// @desc    Get single student
// @route   GET /api/students/:id
// @access  Private
const getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id)
            .populate('createdBy', 'name email');

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        res.json({
            success: true,
            message: 'CHONY - Student retrieved successfully',
            data: student.getStudentInfo()
        });
    } catch (error) {
        console.error('Get student error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while getting student',
            error: error.message
        });
    }
};

// @desc    Create new student
// @route   POST /api/students
// @access  Private
const createStudent = async (req, res) => {
    try {
        const {
            name,
            age,
            course,
            rollNo,
            email,
            phone,
            department,
            year
        } = req.body;

        // Check if student with same roll number exists
        const existingStudent = await Student.findOne({ rollNo });
        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: 'Student with this roll number already exists'
            });
        }

        // Check if student with same email exists
        const existingEmail = await Student.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: 'Student with this email already exists'
            });
        }

        const student = await Student.create({
            name,
            age,
            course,
            rollNo,
            email,
            phone,
            department,
            year,
            createdBy: req.user.id
        });

        res.status(201).json({
            success: true,
            message: 'CHONY - Student created successfully',
            data: student.getStudentInfo()
        });
    } catch (error) {
        console.error('Create student error:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: messages
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server error while creating student',
            error: error.message
        });
    }
};

// @desc    Update student
// @route   PUT /api/students/:id
// @access  Private
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        // Check if roll number is being updated and if it already exists
        if (req.body.rollNo && req.body.rollNo !== student.rollNo) {
            const existingStudent = await Student.findOne({ rollNo: req.body.rollNo });
            if (existingStudent) {
                return res.status(400).json({
                    success: false,
                    message: 'Student with this roll number already exists'
                });
            }
        }

        // Check if email is being updated and if it already exists
        if (req.body.email && req.body.email !== student.email) {
            const existingEmail = await Student.findOne({ email: req.body.email });
            if (existingEmail) {
                return res.status(400).json({
                    success: false,
                    message: 'Student with this email already exists'
                });
            }
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        ).populate('createdBy', 'name email');

        res.json({
            success: true,
            message: 'CHONY - Student updated successfully',
            data: updatedStudent.getStudentInfo()
        });
    } catch (error) {
        console.error('Update student error:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: messages
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server error while updating student',
            error: error.message
        });
    }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Private
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            });
        }

        // Soft delete - set isActive to false
        student.isActive = false;
        await student.save();

        res.json({
            success: true,
            message: 'CHONY - Student deleted successfully',
            data: student.getStudentInfo()
        });
    } catch (error) {
        console.error('Delete student error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while deleting student',
            error: error.message
        });
    }
};

// @desc    Get students by department
// @route   GET /api/students/department/:department
// @access  Private
const getStudentsByDepartment = async (req, res) => {
    try {
        const students = await Student.getStudentsByDepartment(req.params.department);

        res.json({
            success: true,
            message: `CHONY - Students in ${req.params.department} department`,
            count: students.length,
            data: students.map(student => student.getStudentInfo())
        });
    } catch (error) {
        console.error('Get students by department error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while getting students by department',
            error: error.message
        });
    }
};

// @desc    Get students by year
// @route   GET /api/students/year/:year
// @access  Private
const getStudentsByYear = async (req, res) => {
    try {
        const students = await Student.getStudentsByYear(parseInt(req.params.year));

        res.json({
            success: true,
            message: `CHONY - Students in year ${req.params.year}`,
            count: students.length,
            data: students.map(student => student.getStudentInfo())
        });
    } catch (error) {
        console.error('Get students by year error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while getting students by year',
            error: error.message
        });
    }
};

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudentsByDepartment,
    getStudentsByYear
}; 