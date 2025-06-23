# Screenshots Directory - Experiment 10

## Screenshot Guidelines

Please capture the following screenshots to demonstrate the CHONY JWT Authentication API functionality:

### Required Screenshots:

1. **api-root.png**
   - **URL:** http://localhost:5000
   - **Description:** Root endpoint showing API welcome message and all available endpoints
   - **What to capture:** Browser view of the JSON response with CHONY branding and endpoint documentation

2. **register-success.png**
   - **URL:** http://localhost:5000/api/auth/register
   - **Tool:** Postman or cURL
   - **Description:** Successful user registration with JWT token response
   - **What to capture:** POST request/response showing successful registration and token generation

3. **login-success.png**
   - **URL:** http://localhost:5000/api/auth/login
   - **Tool:** Postman or cURL
   - **Description:** Successful login with JWT token
   - **What to capture:** POST request/response showing successful login and token generation

4. **students-list.png**
   - **URL:** http://localhost:5000/api/students
   - **Tool:** Postman or cURL
   - **Description:** Protected students endpoint accessed with JWT token
   - **What to capture:** GET request with Authorization header and successful response

5. **postman-test.png**
   - **Tool:** Postman
   - **Description:** Complete API testing workflow
   - **What to capture:** Multiple requests showing registration, login, and protected route access

6. **mongodb-data.png**
   - **Tool:** MongoDB Compass or mongo shell
   - **Description:** Database data showing users and students collections
   - **What to capture:** MongoDB collections with sample data

7. **terminal-output.png**
   - **Description:** Terminal showing server startup and MongoDB connection
   - **What to capture:** Node.js server startup messages with CHONY branding and MongoDB connection

### Screenshot Requirements:

- **Resolution:** High resolution (1920x1080 or higher)
- **Format:** PNG or JPG
- **Quality:** Clear and readable text
- **Content:** Must show JWT tokens, authentication headers, and CHONY branding
- **Tools:** Use Postman, cURL, or similar API testing tools

### Testing Steps for Screenshots:

1. **Start the server:**
   ```bash
   cd Experiment10
   npm install
   npm start
   ```

2. **Test root endpoint:**
   - Open browser to http://localhost:5000
   - Capture the welcome message and endpoint documentation

3. **Register a user:**
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

4. **Login and get token:**
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "23ag1a0555@gmail.com",
       "password": "password123"
     }'
   ```

5. **Test protected routes:**
   ```bash
   # Get all students (use token from login)
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

6. **Test without token (should fail):**
   ```bash
   curl -X GET http://localhost:5000/api/students
   ```

7. **Check MongoDB data:**
   - Open MongoDB Compass or mongo shell
   - Connect to localhost:27017
   - Check chony_student_api database
   - View users and students collections

### File Naming Convention:
- Use descriptive names: `api-root.png`, `register-success.png`, etc.
- Include the operation being tested in the filename
- Use lowercase with hyphens for spaces

### Important Notes:
- **JWT Tokens:** Make sure to show the JWT token in responses
- **Authorization Headers:** Capture the Bearer token in request headers
- **Error Responses:** Include screenshots of authentication failures
- **Database:** Show the actual data stored in MongoDB
- **CHONY Branding:** Ensure all responses show CHONY branding

---

**CHONY | Experiment 10 Screenshots | JWT Authentication API** 