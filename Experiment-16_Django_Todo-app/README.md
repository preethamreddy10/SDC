# Experiment 16: Django TODO App

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Aim
To develop a TODO list application backend using Django, allowing users to add, view, and manage tasks with a clean and functional web interface.

## Description
This experiment demonstrates how to build a server-rendered TODO application using Django. The app allows users to manage tasks—such as adding new tasks and viewing task lists—using Django's powerful Model-View-Template (MVT) architecture. It showcases key Django concepts like models, views, templates, forms, and URL routing. The project includes comprehensive task management features with CRUD operations, search, filtering, and modern UI design.

## Project Structure
```
Experiment16/
├── todo_project/        # Django project settings
│   ├── __init__.py
│   ├── settings.py      # Project settings
│   ├── urls.py          # Main URL routing
│   ├── wsgi.py          # WSGI configuration
│   └── asgi.py          # ASGI configuration
├── todo/                # Main application
│   ├── __init__.py
│   ├── admin.py         # Admin interface
│   ├── apps.py          # App configuration
│   ├── models.py        # Task model
│   ├── forms.py         # Forms for data input
│   ├── views.py         # View functions
│   └── urls.py          # App URL routing
├── templates/           # HTML templates
│   └── todo/
│       ├── base.html    # Base template
│       ├── index.html   # Main TODO list
│       ├── edit_task.html # Edit task form
│       └── task_detail.html # Task details
├── static/              # Static files (CSS, JS)
├── manage.py            # Django management script
├── requirements.txt     # Python dependencies
├── db.sqlite3          # SQLite database
├── README.md           # Project documentation
└── Screenshots/        # Output screenshots
```

## Installation & Setup

### Prerequisites
- Python 3.8+
- Django 5.2
- Basic knowledge of Django framework

### Steps to Run
1. **Navigate to the project directory:**
   ```bash
   cd Experiment16
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

7. **Visit the application:**
   - http://127.0.0.1:8000/

## Features

### Task Management
- **Add Tasks:** Create new tasks with title, description, priority, and due date
- **View Tasks:** Display all tasks with status and priority indicators
- **Edit Tasks:** Update task information and details
- **Delete Tasks:** Remove individual tasks with confirmation
- **Toggle Status:** Mark tasks as complete/incomplete

### Search & Filtering
- **Search Tasks:** Search by title and description
- **Priority Filter:** Filter by Low, Medium, High priority
- **Status Filter:** Filter by Completed, Pending, Overdue status
- **Real-time Results:** Dynamic search and filtering

### Task Organization
- **Priority Levels:** Low, Medium, High with color coding
- **Due Dates:** Set and track task deadlines
- **Status Tracking:** Complete, Pending, Overdue status
- **Creation Timestamps:** Track when tasks were created

### User Interface
- **Responsive Design:** Works on desktop, tablet, and mobile
- **CHONY Branding:** Consistent branding throughout
- **Modern UI:** Bootstrap 5 with custom styling
- **Statistics Dashboard:** Task counts and progress overview

### Advanced Features
- **Bulk Operations:** Clear completed tasks or all tasks
- **Task Details:** Comprehensive task information view
- **Admin Interface:** Django admin for data management
- **Form Validation:** Input validation and error handling

## Models

### Task Model
```python
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    priority = models.CharField(choices=PRIORITY_CHOICES, default='medium')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    due_date = models.DateTimeField(blank=True, null=True)
```

### Model Features
- **Title:** Task name (required)
- **Description:** Optional task details
- **Completed:** Boolean completion status
- **Priority:** Low, Medium, High priority levels
- **Timestamps:** Creation and update tracking
- **Due Date:** Optional deadline setting

## Screenshots

Please add the following screenshots to the `Screenshots/` directory:

1. **home.png** - Main TODO dashboard with task list
2. **add-task.png** - Adding a new task form
3. **task-list.png** - List of tasks with different priorities
4. **edit-task.png** - Editing task information
5. **task-detail.png** - Individual task details view
6. **search-filter.png** - Search and filtering functionality
7. **admin-interface.png** - Django admin panel
8. **mobile-view.png** - Responsive mobile design
9. **statistics.png** - Task statistics dashboard
10. **completed-tasks.png** - Completed tasks view

### Screenshot Guidelines
- Use high-resolution screenshots (1920x1080 or higher)
- Show different task states (pending, completed, overdue)
- Demonstrate search and filtering functionality
- Include CHONY branding in all screenshots
- Show responsive design on different screen sizes
- Capture form validation and error messages

## Testing

### Test Scenarios
1. **Add Tasks:** Create tasks with different priorities and due dates
2. **Edit Tasks:** Modify task information and details
3. **Toggle Status:** Mark tasks as complete/incomplete
4. **Delete Tasks:** Remove tasks with confirmation
5. **Search Tasks:** Use search functionality
6. **Filter Tasks:** Apply priority and status filters
7. **Bulk Operations:** Clear completed or all tasks
8. **Responsive Design:** Test on different screen sizes

### Sample Tasks to Create
- **High Priority:** Complete SDC Lab Experiments (Due: Today)
- **Medium Priority:** Study Django Framework (Due: Tomorrow)
- **Low Priority:** Update Portfolio (Due: Next Week)
- **Completed:** Setup Development Environment

## Dependencies
- **Django 5.2:** Web framework
- **django-crispy-forms:** Form styling
- **crispy-bootstrap5:** Bootstrap 5 integration
- **Pillow:** Image processing
- **python-decouple:** Environment configuration

## Admin Interface

### Django Admin Features
- **Task Management:** View, edit, and delete tasks
- **Bulk Actions:** Mark multiple tasks as complete/pending
- **Filtering:** Filter by priority, status, and dates
- **Search:** Search tasks by title and description
- **Statistics:** View task counts and trends

## License
This project is licensed under the MIT License.

---

**CHONY | Experiment 16 | Django TODO App** 