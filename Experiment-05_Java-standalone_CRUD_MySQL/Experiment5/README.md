# Experiment 5: CHONY - CRUD Operations with JavaScript Local Storage

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Overview
This experiment creates a complete CRUD (Create, Read, Update, Delete) application using HTML, CSS, Bootstrap 5, and JavaScript Local Storage. Users can manage user data with a modern, responsive interface featuring CHONY branding.

## Features
- **Create**: Add new users with form validation
- **Read**: View user details in a table format
- **Update**: Edit existing user information
- **Delete**: Remove users from the system
- **Local Storage**: Persistent data storage in browser
- **Responsive Design**: Works on all device sizes
- **Image Upload**: Profile picture upload functionality
- **Form Validation**: Client-side validation
- **CHONY Branding**: Consistent branding throughout

## File Structure
```
Experiment5/
├── index.html          # Main application page
├── app.js              # JavaScript functionality
├── style.css           # Custom styling
└── README.md           # This file
```

## Technologies Used
- **HTML5**: Semantic markup and forms
- **CSS3**: Custom styling and animations
- **Bootstrap 5**: UI components and responsive grid
- **JavaScript**: CRUD operations and Local Storage
- **Local Storage API**: Browser-based data persistence

## CRUD Operations

### Create (C)
- Add new users with complete information
- Form validation for required fields
- Image upload for profile pictures
- Data stored in Local Storage

### Read (R)
- Display all users in a responsive table
- View detailed user information in modal
- Search and filter functionality
- Sort by different criteria

### Update (U)
- Edit existing user information
- Pre-populated forms with current data
- Real-time updates to Local Storage
- Validation during updates

### Delete (D)
- Remove users with confirmation
- Immediate UI updates
- Local Storage cleanup
- Undo functionality

## User Interface Features
- **Bootstrap Modals**: For create, read, and update operations
- **Responsive Table**: Displays user data with action buttons
- **Form Validation**: Real-time validation feedback
- **Image Preview**: Profile picture display
- **Search & Filter**: Find users quickly
- **Sorting**: Organize data by different fields

## Local Storage Structure
```javascript
{
  "users": [
    {
      "id": "unique_id",
      "name": "User Name",
      "email": "user@example.com",
      "phone": "1234567890",
      "dob": "1990-01-01",
      "image": "data:image/jpeg;base64,...",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

## How to Run
1. Open `index.html` in a web browser
2. Click "Add New User" to add users
3. Use action buttons (Eye, Pencil, Trash) for CRUD operations
4. Data persists in browser Local Storage

## Output Screenshots

### Main Dashboard
![Main Dashboard](screenshots/main-dashboard.png)
*CHONY User Management System main interface with user table*

### Add User Modal
![Add User Modal](screenshots/add-user-modal.png)
*Form for adding new users with image upload*

### User Details View
![User Details View](screenshots/user-details.png)
*Detailed view of user information in modal*

### Edit User Modal
![Edit User Modal](screenshots/edit-user-modal.png)
*Form for editing existing user information*

### Delete Confirmation
![Delete Confirmation](screenshots/delete-confirmation.png)
*Confirmation dialog for deleting users*

### Search and Filter
![Search and Filter](screenshots/search-filter.png)
*Search functionality and sorting options*

## Key Learning Objectives
- JavaScript Local Storage API
- DOM manipulation and event handling
- Form validation and data processing
- Bootstrap 5 integration
- CRUD application architecture
- Responsive web design
- File handling with JavaScript
- Modern UI/UX design principles

## Features Demonstrated
- ✅ Complete CRUD operations
- ✅ Local Storage data persistence
- ✅ Responsive Bootstrap design
- ✅ Form validation and error handling
- ✅ Image upload and preview
- ✅ Search and filter functionality
- ✅ Modal-based user interface
- ✅ Professional CHONY branding
- ✅ Modern animations and transitions
- ✅ Cross-browser compatibility

## Browser Compatibility
- Chrome, Firefox, Safari, Edge
- Requires JavaScript enabled
- Local Storage support required 