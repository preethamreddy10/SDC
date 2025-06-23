# CHONY Experiment 16 - Admin Configuration
# Author: Haswinchony Saladi (23AG1A0555)

from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    """Admin configuration for Task model"""
    
    list_display = [
        'title', 'priority', 'status_display', 'completed', 
        'created_at', 'due_date'
    ]
    
    list_filter = [
        'completed', 'priority', 'created_at', 'due_date'
    ]
    
    search_fields = [
        'title', 'description'
    ]
    
    list_per_page = 20
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'priority')
        }),
        ('Status & Dates', {
            'fields': ('completed', 'created_at', 'updated_at', 'due_date')
        }),
    )
    
    readonly_fields = ('created_at', 'updated_at')
    
    actions = ['mark_completed', 'mark_pending', 'delete_selected']
    
    def mark_completed(self, request, queryset):
        """Mark selected tasks as completed"""
        updated = queryset.update(completed=True)
        self.message_user(request, f'{updated} task(s) marked as completed.')
    mark_completed.short_description = "Mark selected tasks as completed"
    
    def mark_pending(self, request, queryset):
        """Mark selected tasks as pending"""
        updated = queryset.update(completed=False)
        self.message_user(request, f'{updated} task(s) marked as pending.')
    mark_pending.short_description = "Mark selected tasks as pending" 