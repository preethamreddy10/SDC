# Experiment 9: RESTful Student API with Node.js and Express

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Aim
To implement a RESTful API for managing student data using Node.js and Express.

## Description
This experiment demonstrates how to build a simple REST API using Node.js and Express. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on student records. It simulates a backend service that could be extended with a database in a real-world scenario. Data is stored in-memory for simplicity.

## Project Structure
```
Experiment9/
├── server.js      # Main API server
├── package.json   # Project dependencies
├── README.md      # Documentation
└── Screenshots/   # Output screenshots
```

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Steps to Run
1. **Navigate to the project directory:**
   ```bash
   cd Experiment9
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```

4. **Access the API:**
   - Root endpoint: http://localhost:3000
   - Students endpoint: http://localhost:3000/api/students

## API Endpoints

### 1. GET /api/students
**Description:** Get all students
- **URL:** `http://localhost:3000/api/students`
- **Method:** GET
- **Response:** List of all students

**Example Response:**
```json
{
  "message": "CHONY Student API - All Students",
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Haswinchony Saladi",
      "age": 20,
      "course": "Computer Science",
      "rollNo": "23AG1A0555"
    }
  ]
}
```

### 2. POST /api/students
**Description:** Add a new student
- **URL:** `http://localhost:3000/api/students`
- **Method:** POST
- **Body:** JSON with student details

**Request Body:**
```json
{
  "name": "John Doe",
  "age": 22,
  "course": "Physics",
  "rollNo": "23AG1A0557"
}
```

**Response:**
```json
{
  "message": "Student added successfully",
  "data": {
    "id": 3,
    "name": "John Doe",
    "age": 22,
    "course": "Physics",
    "rollNo": "23AG1A0557"
  }
}
```

### 3. PUT /api/students/:id
**Description:** Update a student
- **URL:** `http://localhost:3000/api/students/1`
- **Method:** PUT
- **Body:** JSON with updated fields

**Request Body:**
```json
{
  "name": "Updated Name",
  "age": 23
}
```

### 4. DELETE /api/students/:id
**Description:** Delete a student
- **URL:** `http://localhost:3000/api/students/1`
- **Method:** DELETE

### 5. GET /api/students/:id
**Description:** Get a specific student
- **URL:** `http://localhost:3000/api/students/1`
- **Method:** GET

## Testing the API

### Using cURL

1. **Get all students:**
   ```bash
   curl http://localhost:3000/api/students
   ```

2. **Add a new student:**
   ```bash
   curl -X POST http://localhost:3000/api/students \
     -H "Content-Type: application/json" \
     -d '{"name":"Jane Smith","age":21,"course":"Chemistry"}'
   ```

3. **Update a student:**
   ```bash
   curl -X PUT http://localhost:3000/api/students/1 \
     -H "Content-Type: application/json" \
     -d '{"age":22}'
   ```

4. **Delete a student:**
   ```bash
   curl -X DELETE http://localhost:3000/api/students/1
   ```

### Using Postman or Browser
- Visit http://localhost:3000/api/students in your browser to see all students
- Use Postman or similar tools to test POST, PUT, and DELETE operations

## Features Implemented

### ✅ CRUD Operations
- **Create:** Add new students via POST
- **Read:** Get all students or specific student via GET
- **Update:** Modify student details via PUT
- **Delete:** Remove students via DELETE

### ✅ Data Validation
- Required field validation (name, age, course)
- Automatic roll number generation
- Age conversion to integer

### ✅ Error Handling
- 404 errors for non-existent students
- 400 errors for invalid requests
- Proper HTTP status codes

### ✅ CHONY Branding
- Custom welcome messages
- Branded API responses
- Author information in responses

## Screenshots

Please add the following screenshots to the `Screenshots/` directory:

1. **api-root.png** - Browser view of the root endpoint (http://localhost:3000)
2. **api-students.png** - Browser view of all students endpoint
3. **postman-test.png** - Postman or similar tool testing the API
4. **terminal-output.png** - Terminal showing server startup and logs

### Screenshot Guidelines
- Use high-resolution screenshots
- Show API responses clearly
- Include CHONY branding in the screenshots
- Demonstrate different API operations

## Sample Data

The API comes pre-loaded with sample student data:
- Haswinchony Saladi (Computer Science)
- Alice Johnson (Mathematics)

## Error Responses

### 400 Bad Request
```json
{
  "error": "Name, age, and course are required fields"
}
```

### 404 Not Found
```json
{
  "error": "Student not found"
}
```

## Development

### Running in Development Mode
```bash
npm run dev
```
This uses nodemon for automatic server restart on file changes.

### Project Dependencies
- **express:** Web framework for Node.js
- **nodemon:** Development dependency for auto-restart

## Conclusion

This experiment successfully demonstrates:
- RESTful API design principles
- Express.js framework usage
- CRUD operations implementation
- JSON data handling
- HTTP status codes and error handling
- API documentation and testing

The API serves as a foundation for building more complex backend services and can be extended with database integration, authentication, and additional features.

---

**CHONY | Experiment 9 | RESTful Student API with Node.js and Express** 