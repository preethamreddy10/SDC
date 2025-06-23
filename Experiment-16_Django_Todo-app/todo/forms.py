# CHONY Experiment 16 - Forms
# Author: Haswinchony Saladi (23AG1A0555)

from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    """Form for creating and editing tasks"""
    
    class Meta:
        model = Task
        fields = ['title', 'description', 'priority', 'due_date']
        widgets = {
            'title': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter task title...',
                'maxlength': '200'
            }),
            'description': forms.Textarea(attrs={
                'class': 'form-control',
                'rows': '3',
                'placeholder': 'Enter task description (optional)...'
            }),
            'priority': forms.Select(attrs={
                'class': 'form-control'
            }),
            'due_date': forms.DateTimeInput(attrs={
                'class': 'form-control',
                'type': 'datetime-local'
            })
        }
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Make due_date optional
        self.fields['due_date'].required = False
        self.fields['description'].required = False

class TaskSearchForm(forms.Form):
    """Form for searching tasks"""
    
    search = forms.CharField(
        max_length=100,
        required=False,
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Search tasks...'
        })
    )
    
    priority_filter = forms.ChoiceField(
        choices=[('', 'All Priorities')] + Task.PRIORITY_CHOICES,
        required=False,
        widget=forms.Select(attrs={
            'class': 'form-control'
        })
    )
    
    status_filter = forms.ChoiceField(
        choices=[
            ('', 'All Status'),
            ('completed', 'Completed'),
            ('pending', 'Pending'),
            ('overdue', 'Overdue')
        ],
        required=False,
        widget=forms.Select(attrs={
            'class': 'form-control'
        })
    ) 