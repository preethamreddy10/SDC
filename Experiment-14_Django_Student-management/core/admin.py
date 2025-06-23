# CHONY Experiment 14 - Admin Configuration
# Author: Haswinchony Saladi (23AG1A0555)

from django.contrib import admin
from .models import Student

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    """Admin configuration for Student model"""
    
    list_display = [
        'roll_number', 'full_name', 'department', 'year', 'semester', 
        'email', 'cgpa', 'created_at'
    ]
    
    list_filter = [
        'department', 'year', 'semester', 'gender', 'created_at'
    ]
    
    search_fields = [
        'first_name', 'last_name', 'roll_number', 'email'
    ]
    
    list_per_page = 20
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('first_name', 'last_name', 'roll_number', 'email', 'phone')
        }),
        ('Academic Information', {
            'fields': ('department', 'year', 'semester', 'cgpa')
        }),
        ('Personal Information', {
            'fields': ('date_of_birth', 'gender', 'address')
        }),
        ('System Information', {
            'fields': ('created_by', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    readonly_fields = ('created_at', 'updated_at')
    
    def save_model(self, request, obj, form, change):
        if not change:  # If creating new student
            obj.created_by = request.user
        super().save_model(request, obj, form, change) 