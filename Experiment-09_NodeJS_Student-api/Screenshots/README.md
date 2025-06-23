# Screenshots Directory - Experiment 9

## Screenshot Guidelines

Please capture the following screenshots to demonstrate the CHONY Student API functionality:

### Required Screenshots:

1. **api-root.png**
   - **URL:** http://localhost:3000
   - **Description:** Root endpoint showing API welcome message and available endpoints
   - **What to capture:** Browser view of the JSON response with CHONY branding

2. **api-students.png**
   - **URL:** http://localhost:3000/api/students
   - **Description:** All students endpoint showing the list of students
   - **What to capture:** JSON response with student data including Haswinchony Saladi's information

3. **postman-test.png**
   - **Tool:** Postman or similar API testing tool
   - **Description:** Testing POST, PUT, or DELETE operations
   - **What to capture:** Request/response showing successful API operations

4. **terminal-output.png**
   - **Description:** Terminal showing server startup and running logs
   - **What to capture:** Node.js server startup messages with CHONY branding

### Screenshot Requirements:

- **Resolution:** High resolution (1920x1080 or higher)
- **Format:** PNG or JPG
- **Quality:** Clear and readable text
- **Content:** Must show CHONY branding and API responses clearly
- **Browser:** Use a modern browser (Chrome, Firefox, Edge)

### Testing Steps for Screenshots:

1. **Start the server:**
   ```bash
   cd Experiment9
   npm install
   npm start
   ```

2. **Test root endpoint:**
   - Open browser to http://localhost:3000
   - Capture the welcome message

3. **Test students endpoint:**
   - Open browser to http://localhost:3000/api/students
   - Capture the student list

4. **Test with Postman:**
   - Send POST request to add a new student
   - Send PUT request to update a student
   - Send DELETE request to remove a student
   - Capture successful responses

5. **Capture terminal:**
   - Show server startup logs
   - Show any console output during testing

### File Naming Convention:
- Use descriptive names: `api-root.png`, `api-students.png`, etc.
- Include the operation being tested in the filename
- Use lowercase with hyphens for spaces

---

**CHONY | Experiment 9 Screenshots | RESTful Student API** 