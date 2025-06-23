# Experiment 10: Student API with JWT Authentication

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Aim
To develop a secure RESTful Student API using Node.js, Express, MongoDB, and JWT for authentication.

## Description
This experiment demonstrates how to build a secure REST API using Node.js and Express with JWT-based user authentication. The API allows authenticated users to perform CRUD (Create, Read, Update, Delete) operations on student records. MongoDB is used for persistent data storage. JWT tokens ensure that only authorized users can access protected routes.

## Project Structure
```
Experiment10/
├── models/
│   ├── User.js           # User schema with password hashing
│   └── Student.js        # Student schema with validation
├── controllers/
│   ├── authController.js # Authentication logic
│   └── studentController.js # Student CRUD operations
├── middleware/
│   └── authMiddleware.js # JWT token verification
├── routes/
│   ├── authRoutes.js     # Authentication routes
│   └── studentRoutes.js  # Student routes
├── config.env            # Environment variables
├── app.js               # Main application file
├── package.json         # Project dependencies
├── README.md            # Documentation
└── Screenshots/         # Output screenshots
```

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud)
- npm (comes with Node.js)

### Steps to Run

1. **Navigate to the project directory:**
   ```bash
   cd Experiment10
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - Install MongoDB locally, or
   - Use MongoDB Atlas (cloud)
   - Update `config.env` with your MongoDB URI

4. **Start the server:**
   ```bash
   npm start
   ```
   or
   ```bash
   node app.js
   ```

5. **Access the API:**
   - Root endpoint: http://localhost:5000
   - Authentication: http://localhost:5000/api/auth
   - Students: http://localhost:5000/api/students

## API Endpoints

### Authentication Endpoints

#### 1. POST /api/auth/register
**Description:** Register a new user
- **URL:** `http://localhost:5000/api/auth/register`
- **Method:** POST
- **Body:**
```json
{
  "name": "Haswinchony Saladi",
  "email": "23ag1a0555@gmail.com",
  "password": "password123",
  "role": "admin"
}
```

#### 2. POST /api/auth/login
**Description:** Login user and get JWT token
- **URL:** `http://localhost:5000/api/auth/login`
- **Method:** POST
- **Body:**
```json
{
  "email": "23ag1a0555@gmail.com",
  "password": "password123"
}
```

#### 3. GET /api/auth/profile
**Description:** Get user profile (Protected)
- **URL:** `http://localhost:5000/api/auth/profile`
- **Method:** GET
- **Headers:** `Authorization: Bearer <token>`

#### 4. PUT /api/auth/profile
**Description:** Update user profile (Protected)
- **URL:** `http://localhost:5000/api/auth/profile`
- **Method:** PUT
- **Headers:** `Authorization: Bearer <token>`

### Student Endpoints (All Protected)

#### 1. GET /api/students
**Description:** Get all students
- **URL:** `http://localhost:5000/api/students`
- **Method:** GET
- **Headers:** `Authorization: Bearer <token>`
- **Query Parameters:**
  - `department`: Filter by department
  - `year`: Filter by year
  - `course`: Filter by course
  - `search`: Search by name or roll number

#### 2. POST /api/students
**Description:** Create new student
- **URL:** `http://localhost:5000/api/students`
- **Method:** POST
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "name": "John Doe",
  "age": 20,
  "course": "Computer Science",
  "rollNo": "23AG1A0556",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "department": "Computer Science",
  "year": 2
}
```

#### 3. GET /api/students/:id
**Description:** Get single student
- **URL:** `http://localhost:5000/api/students/:id`
- **Method:** GET
- **Headers:** `Authorization: Bearer <token>`

#### 4. PUT /api/students/:id
**Description:** Update student
- **URL:** `http://localhost:5000/api/students/:id`
- **Method:** PUT
- **Headers:** `Authorization: Bearer <token>`

#### 5. DELETE /api/students/:id
**Description:** Delete student (soft delete)
- **URL:** `http://localhost:5000/api/students/:id`
- **Method:** DELETE
- **Headers:** `Authorization: Bearer <token>`

#### 6. GET /api/students/department/:department
**Description:** Get students by department
- **URL:** `http://localhost:5000/api/students/department/Computer Science`
- **Method:** GET
- **Headers:** `Authorization: Bearer <token>`

#### 7. GET /api/students/year/:year
**Description:** Get students by year
- **URL:** `http://localhost:5000/api/students/year/2`
- **Method:** GET
- **Headers:** `Authorization: Bearer <token>`

## Testing the API

### Step 1: Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Haswinchony Saladi",
    "email": "23ag1a0555@gmail.com",
    "password": "password123",
    "role": "admin"
  }'
```

### Step 2: Login and Get Token
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "23ag1a0555@gmail.com",
    "password": "password123"
  }'
```

### Step 3: Use Token for Protected Routes
```bash
# Get all students
curl -X GET http://localhost:5000/api/students \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Create a student
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Alice Johnson",
    "age": 21,
    "course": "Mathematics",
    "rollNo": "23AG1A0557",
    "email": "alice@example.com",
    "phone": "9876543211",
    "department": "Mathematics",
    "year": 3
  }'
```

## Features Implemented

### ✅ JWT Authentication
- User registration with password hashing
- User login with JWT token generation
- Protected routes with middleware
- Token verification and user extraction

### ✅ MongoDB Integration
- Mongoose schemas with validation
- User and Student models
- Database indexing for performance
- Error handling for database operations

### ✅ Student Management
- Full CRUD operations
- Advanced filtering and search
- Department and year-based queries
- Soft delete functionality

### ✅ Security Features
- Password hashing with bcryptjs
- JWT token expiration (30 days)
- Input validation and sanitization
- Role-based access control

### ✅ Error Handling
- Comprehensive error responses
- Validation error handling
- Database error handling
- Authentication error handling

### ✅ CHONY Branding
- Custom API responses
- Branded error messages
- Author information in responses

## Environment Variables

Create a `config.env` file with:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/chony_student_api
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## Database Schema

### User Schema
- name (required)
- email (required, unique)
- password (required, hashed)
- role (user/admin)
- isActive (boolean)
- timestamps

### Student Schema
- name (required)
- age (required, 1-120)
- course (required)
- rollNo (required, unique, format: 23AG1A0555)
- email (required, unique)
- phone (required, 10 digits)
- department (required, enum)
- year (required, 1-4)
- isActive (boolean)
- createdBy (User reference)
- timestamps

## Screenshots

Please add the following screenshots to the `Screenshots/` directory:

1. **api-root.png** - Browser view of the root endpoint
2. **register-success.png** - Successful user registration
3. **login-success.png** - Successful login with JWT token
4. **students-list.png** - Protected students endpoint
5. **postman-test.png** - Postman testing the API
6. **mongodb-data.png** - MongoDB data in database
7. **terminal-output.png** - Server startup and logs

### Screenshot Guidelines
- Use high-resolution screenshots
- Show JWT tokens and authentication
- Demonstrate protected route access
- Include CHONY branding in responses
- Show MongoDB data structure

## Sample Data

### Default Admin User
- **Name:** Haswinchony Saladi
- **Email:** 23ag1a0555@gmail.com
- **Role:** admin
- **Roll No:** 23AG1A0555

### Sample Student
- **Name:** Alice Johnson
- **Age:** 21
- **Course:** Mathematics
- **Roll No:** 23AG1A0557
- **Department:** Mathematics
- **Year:** 3

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error",
  "errors": ["Name is required", "Email must be valid"]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Not authorized, no token"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Student not found"
}
```

## Development

### Running in Development Mode
```bash
npm run dev
```

### Project Dependencies
- **express:** Web framework
- **mongoose:** MongoDB ODM
- **jsonwebtoken:** JWT authentication
- **bcryptjs:** Password hashing
- **dotenv:** Environment variables
- **cors:** Cross-origin resource sharing

## Conclusion

This experiment successfully demonstrates:
- JWT-based authentication system
- MongoDB database integration
- Secure API development practices
- Middleware implementation
- Role-based access control
- Comprehensive error handling
- RESTful API design principles

The API provides a solid foundation for building secure web applications with user authentication and data management capabilities.

---

**CHONY | Experiment 10 | Student API with JWT Authentication** 