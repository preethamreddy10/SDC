# CHONY Experiment 16 - Views
# Author: Haswinchony Saladi (23AG1A0555)

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.utils import timezone
from django.db.models import Q
from .models import Task
from .forms import TaskForm, TaskSearchForm

def index(request):
    """Main TODO list view with search and filtering"""
    
    # Get search and filter parameters
    search_form = TaskSearchForm(request.GET)
    tasks = Task.objects.all()
    
    # Apply search filter
    if search_form.is_valid():
        search_query = search_form.cleaned_data.get('search')
        priority_filter = search_form.cleaned_data.get('priority_filter')
        status_filter = search_form.cleaned_data.get('status_filter')
        
        if search_query:
            tasks = tasks.filter(
                Q(title__icontains=search_query) |
                Q(description__icontains=search_query)
            )
        
        if priority_filter:
            tasks = tasks.filter(priority=priority_filter)
        
        if status_filter:
            if status_filter == 'completed':
                tasks = tasks.filter(completed=True)
            elif status_filter == 'pending':
                tasks = tasks.filter(completed=False, due_date__gt=timezone.now())
            elif status_filter == 'overdue':
                tasks = tasks.filter(completed=False, due_date__lt=timezone.now())
    
    # Handle form submission for new task
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            task = form.save()
            messages.success(request, f'Task "{task.title}" created successfully!')
            return redirect('index')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = TaskForm()
    
    # Calculate statistics
    total_tasks = Task.objects.count()
    completed_tasks = Task.objects.filter(completed=True).count()
    pending_tasks = Task.objects.filter(completed=False).count()
    overdue_tasks = Task.objects.filter(
        completed=False, 
        due_date__lt=timezone.now()
    ).count()
    
    context = {
        'title': 'CHONY TODO App',
        'tasks': tasks,
        'form': form,
        'search_form': search_form,
        'total_tasks': total_tasks,
        'completed_tasks': completed_tasks,
        'pending_tasks': pending_tasks,
        'overdue_tasks': overdue_tasks,
    }
    
    return render(request, 'todo/index.html', context)

def toggle_task(request, task_id):
    """Toggle task completion status"""
    task = get_object_or_404(Task, id=task_id)
    task.completed = not task.completed
    task.save()
    
    status = "completed" if task.completed else "marked as pending"
    messages.success(request, f'Task "{task.title}" {status}!')
    
    return redirect('index')

def delete_task(request, task_id):
    """Delete a task"""
    task = get_object_or_404(Task, id=task_id)
    task_title = task.title
    task.delete()
    
    messages.success(request, f'Task "{task_title}" deleted successfully!')
    return redirect('index')

def edit_task(request, task_id):
    """Edit a task"""
    task = get_object_or_404(Task, id=task_id)
    
    if request.method == 'POST':
        form = TaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            messages.success(request, f'Task "{task.title}" updated successfully!')
            return redirect('index')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = TaskForm(instance=task)
    
    context = {
        'title': f'Edit Task - {task.title}',
        'form': form,
        'task': task,
    }
    
    return render(request, 'todo/edit_task.html', context)

def task_detail(request, task_id):
    """View task details"""
    task = get_object_or_404(Task, id=task_id)
    
    context = {
        'title': f'Task Details - {task.title}',
        'task': task,
    }
    
    return render(request, 'todo/task_detail.html', context)

def clear_completed(request):
    """Clear all completed tasks"""
    if request.method == 'POST':
        completed_tasks = Task.objects.filter(completed=True)
        count = completed_tasks.count()
        completed_tasks.delete()
        
        messages.success(request, f'{count} completed task(s) cleared!')
    
    return redirect('index')

def clear_all(request):
    """Clear all tasks"""
    if request.method == 'POST':
        all_tasks = Task.objects.all()
        count = all_tasks.count()
        all_tasks.delete()
        
        messages.success(request, f'All {count} task(s) cleared!')
    
    return redirect('index') 