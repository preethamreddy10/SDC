# CHONY Experiment 15 - Weather App URLs
# Author: Haswinchony Saladi (23AG1A0555)

from django.urls import path
from . import views

urlpatterns = [
    path('', views.weather_view, name='weather'),
    path('api/weather/', views.weather_api, name='weather_api'),
]