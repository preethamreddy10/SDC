# CHONY Experiment 16 - Todo App URLs
# Author: Haswinchony Saladi (23AG1A0555)

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('task/<int:task_id>/toggle/', views.toggle_task, name='toggle_task'),
    path('task/<int:task_id>/delete/', views.delete_task, name='delete_task'),
    path('task/<int:task_id>/edit/', views.edit_task, name='edit_task'),
    path('task/<int:task_id>/detail/', views.task_detail, name='task_detail'),
    path('clear-completed/', views.clear_completed, name='clear_completed'),
    path('clear-all/', views.clear_all, name='clear_all'),
] 