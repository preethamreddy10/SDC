# Experiment 14: Django Student Management System

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Aim
To develop a student management system backend using Django, allowing users to register, login, and access information through a clean and basic Canvas-style UI.

## Description
This experiment demonstrates how to build a basic web application using Django. The project implements user authentication (register and login), and basic navigation through pages like Home, About, and Contact. It showcases Django concepts like URL routing, views, templates, and static file management. The project includes comprehensive student management features with CRUD operations.

## Project Structure
```
Experiment14/
├── student_mgmt/           # Django project settings
│   ├── __init__.py
│   ├── settings.py         # Project settings
│   ├── urls.py            # Main URL routing
│   ├── wsgi.py            # WSGI configuration
│   └── asgi.py            # ASGI configuration
├── core/                   # Main application
│   ├── __init__.py
│   ├── admin.py           # Admin interface
│   ├── apps.py            # App configuration
│   ├── models.py          # Student model
│   ├── forms.py           # Forms for data input
│   ├── views.py           # View functions
│   └── urls.py            # App URL routing
├── templates/             # HTML templates
│   ├── base.html          # Base template
│   ├── home.html          # Home page
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   ├── student_list.html  # Student list
│   ├── student_form.html  # Add/Edit student
│   ├── student_detail.html # Student details
│   └── student_confirm_delete.html # Delete confirmation
├── static/                # Static files (CSS, JS)
├── media/                 # User uploaded files
├── manage.py              # Django management script
├── requirements.txt       # Python dependencies
├── db.sqlite3            # SQLite database
├── README.md             # Project documentation
└── Screenshots/          # Output screenshots
```

## Installation & Setup

### Prerequisites
- Python 3.x
- Django 5.2
- VS Code or any preferred code editor
- Basic knowledge of Python and Django framework

### Steps to Run
1. **Navigate to the project directory:**
   ```bash
   cd Experiment14
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

### Authentication System
- **User Registration:** Create new accounts with validation
- **User Login:** Secure authentication with Django's built-in system
- **User Logout:** Secure session termination
- **Password Security:** Django's password validation and hashing

### Student Management
- **Add Students:** Complete student registration with all details
- **View Students:** List all students with search and filtering
- **Edit Students:** Update student information
- **Delete Students:** Remove students with confirmation
- **Student Details:** Comprehensive student profile view

### Search & Filtering
- **Search by:** Name, Roll Number, Email, Department
- **Filter by:** Department, Year, Semester
- **Real-time results:** Dynamic search functionality

### User Interface
- **Responsive Design:** Works on desktop, tablet, and mobile
- **CHONY Branding:** Consistent branding throughout
- **Modern UI:** Bootstrap 5 with custom styling
- **Navigation:** Intuitive menu system

### Data Management
- **SQLite Database:** Lightweight and efficient
- **Admin Interface:** Django admin for data management
- **Data Validation:** Form validation and error handling
- **Data Persistence:** Secure data storage

## Models

### Student Model
- **Basic Info:** First Name, Last Name, Roll Number, Email, Phone
- **Academic Info:** Department, Year, Semester, CGPA
- **Personal Info:** Date of Birth, Gender, Address
- **System Info:** Created/Updated timestamps, Created by user

## Screenshots

Please add the following screenshots to the `Screenshots/` directory:

1. **home.png** - Main dashboard with statistics
2. **login.png** - User login page
3. **register.png** - User registration form
4. **student-list.png** - List of all students with search
5. **add-student.png** - Add new student form
6. **student-detail.png** - Individual student profile
7. **edit-student.png** - Edit student information
8. **delete-confirm.png** - Student deletion confirmation
9. **admin-interface.png** - Django admin panel
10. **about-page.png** - About page with project info
11. **contact-page.png** - Contact page with form
12. **mobile-view.png** - Responsive mobile design

### Screenshot Guidelines
- Use high-resolution screenshots (1920x1080 or higher)
- Show different user roles and permissions
- Demonstrate search and filtering functionality
- Include CHONY branding in all screenshots
- Show responsive design on different screen sizes
- Capture form validation and error messages

## Testing

### Demo Credentials
- **Username:** admin
- **Password:** admin123

### Test Scenarios
1. **User Registration:** Create new user account
2. **User Login:** Authenticate with credentials
3. **Add Student:** Create new student record
4. **Search Students:** Use search functionality
5. **Filter Students:** Apply department/year filters
6. **Edit Student:** Modify student information
7. **Delete Student:** Remove student with confirmation
8. **Admin Access:** Use Django admin interface

## Dependencies
- **Django 5.2:** Web framework
- **django-crispy-forms:** Form styling
- **crispy-bootstrap5:** Bootstrap 5 integration
- **Pillow:** Image processing
- **python-decouple:** Environment configuration

## License
This project is licensed under the MIT License.

---

**CHONY | Experiment 14 | Django Student Management System** 