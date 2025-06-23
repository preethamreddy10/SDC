# CHONY Experiment 14 - Views
# Author: Haswinchony Saladi (23AG1A0555)

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth import login
from django.db.models import Q
from .models import Student
from .forms import UserRegistrationForm, StudentForm

def home(request):
    """Home page view"""
    context = {
        'title': 'Home - CHONY Student Management',
        'total_students': Student.objects.count(),
        'departments': Student.DEPARTMENT_CHOICES,
    }
    return render(request, 'home.html', context)

def about(request):
    """About page view"""
    context = {
        'title': 'About - CHONY Student Management',
    }
    return render(request, 'about.html', context)

def contact(request):
    """Contact page view"""
    context = {
        'title': 'Contact - CHONY Student Management',
    }
    return render(request, 'contact.html', context)

def register(request):
    """User registration view"""
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Account created successfully! Welcome to CHONY Student Management.')
            return redirect('home')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = UserRegistrationForm()
    
    context = {
        'title': 'Register - CHONY Student Management',
        'form': form,
    }
    return render(request, 'register.html', context)

@login_required
def student_list(request):
    """Student list view with search and filtering"""
    students = Student.objects.all()
    
    # Search functionality
    search_query = request.GET.get('search', '')
    if search_query:
        students = students.filter(
            Q(first_name__icontains=search_query) |
            Q(last_name__icontains=search_query) |
            Q(roll_number__icontains=search_query) |
            Q(email__icontains=search_query) |
            Q(department__icontains=search_query)
        )
    
    # Department filter
    department_filter = request.GET.get('department', '')
    if department_filter:
        students = students.filter(department=department_filter)
    
    # Year filter
    year_filter = request.GET.get('year', '')
    if year_filter:
        students = students.filter(year=year_filter)
    
    context = {
        'title': 'Students - CHONY Student Management',
        'students': students,
        'search_query': search_query,
        'department_filter': department_filter,
        'year_filter': year_filter,
        'departments': Student.DEPARTMENT_CHOICES,
        'years': Student.YEAR_CHOICES,
    }
    return render(request, 'student_list.html', context)

@login_required
def add_student(request):
    """Add new student view"""
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            student = form.save(commit=False)
            student.created_by = request.user
            student.save()
            messages.success(request, f'Student {student.full_name} added successfully!')
            return redirect('student_list')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = StudentForm()
    
    context = {
        'title': 'Add Student - CHONY Student Management',
        'form': form,
    }
    return render(request, 'student_form.html', context)

@login_required
def student_detail(request, student_id):
    """Student detail view"""
    student = get_object_or_404(Student, pk=student_id)
    
    context = {
        'title': f'{student.full_name} - CHONY Student Management',
        'student': student,
    }
    return render(request, 'student_detail.html', context)

@login_required
def edit_student(request, student_id):
    """Edit student view"""
    student = get_object_or_404(Student, pk=student_id)
    
    if request.method == 'POST':
        form = StudentForm(request.POST, instance=student)
        if form.is_valid():
            form.save()
            messages.success(request, f'Student {student.full_name} updated successfully!')
            return redirect('student_detail', student_id=student.id)
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = StudentForm(instance=student)
    
    context = {
        'title': f'Edit {student.full_name} - CHONY Student Management',
        'form': form,
        'student': student,
    }
    return render(request, 'student_form.html', context)

@login_required
def delete_student(request, student_id):
    """Delete student view"""
    student = get_object_or_404(Student, pk=student_id)
    
    if request.method == 'POST':
        student_name = student.full_name
        student.delete()
        messages.success(request, f'Student {student_name} deleted successfully!')
        return redirect('student_list')
    
    context = {
        'title': f'Delete {student.full_name} - CHONY Student Management',
        'student': student,
    }
    return render(request, 'student_confirm_delete.html', context) 