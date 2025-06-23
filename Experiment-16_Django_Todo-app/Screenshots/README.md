# Screenshots Directory - Experiment 16

## Screenshot Guidelines

Please capture the following screenshots to demonstrate the CHONY Django TODO App functionality:

### Required Screenshots:

1. **home.png**
   - **Description:** Main TODO dashboard with task list and statistics
   - **What to capture:** Complete TODO interface with CHONY branding, task list, and statistics cards

2. **add-task.png**
   - **Description:** Adding a new task form
   - **What to capture:** Task creation form with title, description, priority, and due date fields

3. **task-list.png**
   - **Description:** List of tasks with different priorities and statuses
   - **What to capture:** Multiple tasks showing different priority levels and completion states

4. **edit-task.png**
   - **Description:** Editing task information
   - **What to capture:** Edit form with pre-filled task data and update functionality

5. **task-detail.png**
   - **Description:** Individual task details view
   - **What to capture:** Comprehensive task information with quick action buttons

6. **search-filter.png**
   - **Description:** Search and filtering functionality
   - **What to capture:** Search form and filtered results

7. **admin-interface.png**
   - **Description:** Django admin panel
   - **What to capture:** Admin interface showing task management

8. **mobile-view.png**
   - **Description:** Responsive mobile design
   - **What to capture:** App running on mobile device or browser mobile view

9. **statistics.png**
   - **Description:** Task statistics dashboard
   - **What to capture:** Statistics cards showing total, completed, pending, and overdue tasks

10. **completed-tasks.png**
    - **Description:** Completed tasks view
    - **What to capture:** Tasks marked as complete with different styling

### Screenshot Requirements:

- **Resolution:** High resolution (1920x1080 or higher)
- **Format:** PNG or JPG
- **Quality:** Clear and readable text
- **Content:** Must show Django functionality and CHONY branding
- **Browser:** Use a modern browser (Chrome, Firefox, Edge)

### Testing Steps for Screenshots:

1. **Setup the project:**
   ```bash
   cd Experiment16
   pip install -r requirements.txt
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```

2. **Capture main dashboard:**
   - Open browser to http://127.0.0.1:8000/
   - Capture the main TODO interface with statistics

3. **Test task creation:**
   - Add new tasks with different priorities
   - Capture the add task form
   - Show form validation

4. **Test task management:**
   - Edit existing tasks
   - Toggle task completion status
   - Delete tasks
   - Capture each operation

5. **Test search and filtering:**
   - Use search functionality
   - Apply priority filters
   - Apply status filters
   - Capture filtered results

6. **Test admin interface:**
   - Access Django admin at /admin/
   - Capture admin panel with task management

7. **Test responsive design:**
   - Resize browser window
   - Use browser dev tools for mobile view
   - Capture responsive behavior

8. **Test bulk operations:**
   - Clear completed tasks
   - Clear all tasks
   - Capture confirmation dialogs

### File Naming Convention:
- Use descriptive names: `home.png`, `add-task.png`, etc.
- Include the feature being tested in the filename
- Use lowercase with hyphens for spaces

### Important Notes:
- **Task States:** Show tasks in different states (pending, completed, overdue)
- **Priority Levels:** Demonstrate different priority colors and labels
- **Search/Filter:** Show search functionality and filtering options
- **CHONY Branding:** Include CHONY logo and branding in all screenshots
- **Responsive Design:** Show how the app adapts to different screen sizes
- **Form Validation:** Capture form validation and error messages
- **Admin Interface:** Show Django admin capabilities

### Testing Checklist:
- [ ] Main TODO dashboard
- [ ] Task creation and editing
- [ ] Task status management
- [ ] Search and filtering
- [ ] Responsive design
- [ ] Admin interface
- [ ] Form validation
- [ ] Bulk operations
- [ ] Task details view
- [ ] Statistics display

### Sample Test Data:
- **High Priority:** Complete SDC Lab Experiments (Due: Today)
- **Medium Priority:** Study Django Framework (Due: Tomorrow)
- **Low Priority:** Update Portfolio (Due: Next Week)
- **Completed:** Setup Development Environment

---

**CHONY | Experiment 16 Screenshots | Django TODO App** 