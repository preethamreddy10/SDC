# CHONY Experiment 14 - Core App URLs
# Author: Haswinchony Saladi (23AG1A0555)

from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # Main pages
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    
    # Authentication
    path('register/', views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    
    # Student management
    path('students/', views.student_list, name='student_list'),
    path('students/add/', views.add_student, name='add_student'),
    path('students/<int:student_id>/', views.student_detail, name='student_detail'),
    path('students/<int:student_id>/edit/', views.edit_student, name='edit_student'),
    path('students/<int:student_id>/delete/', views.delete_student, name='delete_student'),
] 