# CHONY Experiment 14 - Forms
# Author: Haswinchony Saladi (23AG1A0555)

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Student

class UserRegistrationForm(UserCreationForm):
    """Form for user registration"""
    
    email = forms.EmailField(required=True)
    first_name = forms.CharField(max_length=30, required=True)
    last_name = forms.CharField(max_length=30, required=True)
    
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2')
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Add Bootstrap classes and placeholders
        for field in self.fields.values():
            field.widget.attrs.update({'class': 'form-control'})
            if field.help_text:
                field.widget.attrs.update({'placeholder': field.help_text})

class StudentForm(forms.ModelForm):
    """Form for adding/editing students"""
    
    class Meta:
        model = Student
        fields = [
            'first_name', 'last_name', 'roll_number', 'email', 'phone',
            'department', 'year', 'semester', 'date_of_birth', 'gender', 'address', 'cgpa'
        ]
        widgets = {
            'date_of_birth': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'address': forms.Textarea(attrs={'rows': 3, 'class': 'form-control'}),
            'cgpa': forms.NumberInput(attrs={'step': '0.01', 'min': '0', 'max': '10', 'class': 'form-control'}),
        }
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Add Bootstrap classes to all fields
        for field in self.fields.values():
            if not isinstance(field.widget, forms.DateInput):
                field.widget.attrs.update({'class': 'form-control'})
    
    def clean_roll_number(self):
        roll_number = self.cleaned_data['roll_number']
        # Check if roll number already exists (excluding current instance if editing)
        if Student.objects.filter(roll_number=roll_number).exclude(pk=self.instance.pk if self.instance.pk else None).exists():
            raise forms.ValidationError('A student with this roll number already exists.')
        return roll_number
    
    def clean_email(self):
        email = self.cleaned_data['email']
        # Check if email already exists (excluding current instance if editing)
        if Student.objects.filter(email=email).exclude(pk=self.instance.pk if self.instance.pk else None).exists():
            raise forms.ValidationError('A student with this email already exists.')
        return email 