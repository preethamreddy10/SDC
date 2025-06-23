# CHONY Experiment 16 - Models
# Author: Haswinchony Saladi (23AG1A0555)

from django.db import models
from django.utils import timezone

class Task(models.Model):
    """Task model for TODO application"""
    
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]
    
    title = models.CharField(max_length=200, verbose_name="Task Title")
    description = models.TextField(blank=True, null=True, verbose_name="Description")
    completed = models.BooleanField(default=False, verbose_name="Completed")
    priority = models.CharField(
        max_length=10, 
        choices=PRIORITY_CHOICES, 
        default='medium',
        verbose_name="Priority"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Created At")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Updated At")
    due_date = models.DateTimeField(blank=True, null=True, verbose_name="Due Date")
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'
    
    def __str__(self):
        return self.title
    
    @property
    def is_overdue(self):
        """Check if task is overdue"""
        if self.due_date and not self.completed:
            return timezone.now() > self.due_date
        return False
    
    @property
    def status_display(self):
        """Get human-readable status"""
        if self.completed:
            return "Completed"
        elif self.is_overdue:
            return "Overdue"
        else:
            return "Pending"
    
    @property
    def priority_color(self):
        """Get Bootstrap color class for priority"""
        if self.priority == 'high':
            return 'danger'
        elif self.priority == 'medium':
            return 'warning'
        else:
            return 'success' 