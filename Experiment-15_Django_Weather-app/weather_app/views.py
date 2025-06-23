# CHONY Experiment 15 - Weather App Views
# Author: Haswinchony Saladi (23AG1A0555)

import requests
import json
from datetime import datetime, timedelta
from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

def weather_view(request):
    """Main weather view with current and historical data"""
    
    # Default city (can be made configurable)
    city = request.GET.get('city', 'Hyderabad')
    
    # Get weather data
    current_weather = get_current_weather(city)
    historical_weather = get_historical_weather(city)
    
    context = {
        'title': f'Weather - {city} | CHONY Weather App',
        'city': city,
        'current_weather': current_weather,
        'historical_weather': historical_weather,
        'chart_data': prepare_chart_data(historical_weather),
    }
    
    return render(request, 'index.html', context)

def weather_api(request):
    """API endpoint for weather data"""
    city = request.GET.get('city', 'Hyderabad')
    
    current_weather = get_current_weather(city)
    historical_weather = get_historical_weather(city)
    
    return JsonResponse({
        'current': current_weather,
        'historical': historical_weather,
        'chart_data': prepare_chart_data(historical_weather),
    })

def get_current_weather(city):
    """Fetch current weather data from OpenWeatherMap API"""
    
    # For demo purposes, we'll use sample data
    # In production, you would use the actual API
    sample_current = {
        'city': city,
        'temperature': 28,
        'feels_like': 30,
        'humidity': 65,
        'pressure': 1013,
        'wind_speed': 5.2,
        'description': 'Partly cloudy',
        'icon': '02d',
        'timestamp': datetime.now().isoformat(),
    }
    
    return sample_current

def get_historical_weather(city):
    """Fetch historical weather data for past 5 days"""
    
    # Generate sample historical data for past 5 days
    historical_data = []
    base_temp = 28
    
    for i in range(5, 0, -1):
        date = datetime.now() - timedelta(days=i)
        
        # Generate realistic temperature variations
        temp_variation = (i % 3) * 2 - 2  # -2 to +2 degrees
        temp = base_temp + temp_variation
        
        day_data = {
            'date': date.strftime('%Y-%m-%d'),
            'day_name': date.strftime('%A'),
            'temperature': temp,
            'description': get_weather_description(temp),
            'icon': get_weather_icon(temp),
        }
        historical_data.append(day_data)
    
    return historical_data

def prepare_chart_data(historical_data):
    """Prepare data for Chart.js visualization"""
    
    labels = [day['day_name'] for day in historical_data]
    temperatures = [day['temperature'] for day in historical_data]
    
    return {
        'labels': labels,
        'temperatures': temperatures,
        'min_temp': min(temperatures),
        'max_temp': max(temperatures),
    }

def get_weather_description(temperature):
    """Get weather description based on temperature"""
    if temperature > 30:
        return 'Hot'
    elif temperature > 25:
        return 'Warm'
    elif temperature > 20:
        return 'Mild'
    elif temperature > 15:
        return 'Cool'
    else:
        return 'Cold'

def get_weather_icon(temperature):
    """Get weather icon based on temperature"""
    if temperature > 30:
        return '01d'  # Clear sky
    elif temperature > 25:
        return '02d'  # Few clouds
    elif temperature > 20:
        return '03d'  # Scattered clouds
    elif temperature > 15:
        return '04d'  # Broken clouds
    else:
        return '13d'  # Snow 