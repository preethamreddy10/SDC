# CHONY Experiment 14 - Models
# Author: Haswinchony Saladi (23AG1A0555)

from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

class Student(models.Model):
    """Student model for managing student information"""
    
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    
    DEPARTMENT_CHOICES = [
        ('CSE', 'Computer Science Engineering'),
        ('ECE', 'Electronics & Communication'),
        ('ME', 'Mechanical Engineering'),
        ('CE', 'Civil Engineering'),
        ('IT', 'Information Technology'),
    ]
    
    YEAR_CHOICES = [
        (1, 'First Year'),
        (2, 'Second Year'),
        (3, 'Third Year'),
        (4, 'Fourth Year'),
    ]
    
    # Basic Information
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    roll_number = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    
    # Academic Information
    department = models.CharField(max_length=10, choices=DEPARTMENT_CHOICES)
    year = models.IntegerField(choices=YEAR_CHOICES)
    semester = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(8)]
    )
    
    # Personal Information
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    address = models.TextField()
    
    # Academic Performance
    cgpa = models.DecimalField(
        max_digits=3, 
        decimal_places=2,
        validators=[MinValueValidator(0.00), MaxValueValidator(10.00)],
        null=True,
        blank=True
    )
    
    # System Fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    
    class Meta:
        ordering = ['roll_number']
        verbose_name = 'Student'
        verbose_name_plural = 'Students'
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.roll_number}"
    
    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    @property
    def department_full_name(self):
        return dict(self.DEPARTMENT_CHOICES)[self.department]
    
    @property
    def year_name(self):
        return dict(self.YEAR_CHOICES)[self.year] 