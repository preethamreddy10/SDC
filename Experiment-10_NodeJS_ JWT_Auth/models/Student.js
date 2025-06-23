// CHONY Experiment 10 - Student Model for JWT Authentication API
// Author: Haswinchony Saladi (23AG1A0555)

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Student name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, 'Age must be at least 1'],
        max: [120, 'Age cannot exceed 120']
    },
    course: {
        type: String,
        required: [true, 'Course is required'],
        trim: true,
        maxlength: [100, 'Course name cannot exceed 100 characters']
    },
    rollNo: {
        type: String,
        required: [true, 'Roll number is required'],
        unique: true,
        trim: true,
        match: [/^[0-9]{2}[A-Z]{2}[0-9]{1}[A-Z]{1}[0-9]{4}$/, 'Please enter a valid roll number (e.g., 23AG1A0555)']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
    },
    department: {
        type: String,
        required: [true, 'Department is required'],
        enum: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Engineering', 'Arts', 'Commerce']
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        min: [1, 'Year must be at least 1'],
        max: [4, 'Year cannot exceed 4']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

// Index for better query performance
studentSchema.index({ rollNo: 1 });
studentSchema.index({ email: 1 });
studentSchema.index({ course: 1 });
studentSchema.index({ department: 1 });

// Method to get student info
studentSchema.methods.getStudentInfo = function() {
    return {
        id: this._id,
        name: this.name,
        age: this.age,
        course: this.course,
        rollNo: this.rollNo,
        email: this.email,
        phone: this.phone,
        department: this.department,
        year: this.year,
        isActive: this.isActive,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};

// Static method to get students by department
studentSchema.statics.getStudentsByDepartment = function(department) {
    return this.find({ department, isActive: true }).sort({ name: 1 });
};

// Static method to get students by year
studentSchema.statics.getStudentsByYear = function(year) {
    return this.find({ year, isActive: true }).sort({ name: 1 });
};

module.exports = mongoose.model('Student', studentSchema); 