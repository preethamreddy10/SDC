# Experiment 15: Django Weather App

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Aim
To develop a weather application frontend using Django templating that displays current weather information along with a line chart showing past 5 days' temperature trends using Chart.js.

## Description
This experiment demonstrates how to build a weather app using Django templates and Chart.js for visualization. The app fetches weather data, including current temperature, description, and icon, and renders it dynamically on a webpage. It also displays historical temperature data for the past 5 days as a line chart. The project showcases Django templating, integration of JavaScript libraries like Chart.js, and dynamic data visualization on the frontend.

## Project Structure
```
Experiment15/
├── weather_project/        # Django project settings
│   ├── __init__.py
│   ├── settings.py         # Project settings
│   ├── urls.py            # Main URL routing
│   ├── wsgi.py            # WSGI configuration
│   └── asgi.py            # ASGI configuration
├── weather_app/            # Main application
│   ├── __init__.py
│   ├── admin.py           # Admin interface
│   ├── apps.py            # App configuration
│   ├── models.py          # Data models
│   ├── views.py           # View functions
│   └── urls.py            # App URL routing
├── templates/             # HTML templates
│   └── index.html         # Main weather display template
├── static/                # Static files
│   └── css/
│       └── style.css      # Additional styles
├── manage.py              # Django management script
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
└── Screenshots/          # Output screenshots
```

## Installation & Setup

### Prerequisites
- Python 3.x
- Django 5.2
- Basic knowledge of Django templating and Python
- Chart.js (included via CDN)

### Steps to Run
1. **Navigate to the project directory:**
   ```bash
   cd Experiment15
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Run the development server:**
   ```bash
   python manage.py runserver
   ```

6. **Visit the application:**
   - http://127.0.0.1:8000/

## Features

### Current Weather Display
- **Temperature:** Current temperature in Celsius
- **Feels Like:** Apparent temperature
- **Humidity:** Air humidity percentage
- **Pressure:** Atmospheric pressure
- **Wind Speed:** Wind velocity
- **Weather Description:** Current weather condition
- **Weather Icon:** Visual weather representation

### Historical Weather Data
- **5-Day History:** Past 5 days temperature data
- **Daily Breakdown:** Day-wise temperature records
- **Weather Conditions:** Historical weather descriptions

### Interactive Chart
- **Chart.js Integration:** Line chart visualization
- **Temperature Trends:** Visual temperature progression
- **Responsive Design:** Adapts to screen size
- **Real-time Updates:** Auto-refresh functionality

### User Interface
- **City Search:** Search weather by city name
- **Responsive Design:** Mobile-friendly interface
- **CHONY Branding:** Consistent branding throughout
- **Modern UI:** Bootstrap 5 with custom styling
- **Animations:** Smooth transitions and effects

### Technical Features
- **Django Templating:** Dynamic content rendering
- **API Integration:** Weather data fetching
- **JavaScript Integration:** Chart.js for visualization
- **CSS Animations:** Smooth user experience
- **Auto-refresh:** Periodic data updates

## Weather Data

### Sample Data Structure
```python
current_weather = {
    'city': 'Hyderabad',
    'temperature': 28,
    'feels_like': 30,
    'humidity': 65,
    'pressure': 1013,
    'wind_speed': 5.2,
    'description': 'Partly cloudy',
    'icon': '02d',
    'timestamp': '2024-01-15T10:30:00'
}
```

### Historical Data
- 5 days of temperature records
- Daily weather conditions
- Chart visualization data

## Screenshots

Please add the following screenshots to the `Screenshots/` directory:

1. **home.png** - Main weather dashboard
2. **current-weather.png** - Current weather display
3. **temperature-chart.png** - Chart.js temperature visualization
4. **historical-data.png** - Past 5 days weather data
5. **city-search.png** - City search functionality
6. **mobile-view.png** - Responsive mobile design
7. **weather-details.png** - Detailed weather information
8. **chart-interaction.png** - Interactive chart features

### Screenshot Guidelines
- Use high-resolution screenshots (1920x1080 or higher)
- Show different weather conditions and cities
- Demonstrate chart interactions
- Include CHONY branding in all screenshots
- Show responsive design on different screen sizes
- Capture search functionality and results

## Testing

### Test Scenarios
1. **City Search:** Search for different cities
2. **Weather Display:** View current weather information
3. **Chart Interaction:** Interact with temperature chart
4. **Historical Data:** Review past 5 days data
5. **Responsive Design:** Test on different screen sizes
6. **Auto-refresh:** Verify periodic data updates

### Sample Cities to Test
- Hyderabad
- Mumbai
- Delhi
- Bangalore
- Chennai
- Kolkata

## Dependencies
- **Django 5.2:** Web framework
- **requests:** HTTP library for API calls
- **python-decouple:** Environment configuration
- **Chart.js:** JavaScript charting library (CDN)
- **Bootstrap 5:** CSS framework (CDN)

## API Integration

### Weather API (Demo Mode)
- Currently uses sample data for demonstration
- Can be integrated with OpenWeatherMap API
- Supports real-time weather data fetching
- Includes error handling and fallbacks

### Future Enhancements
- Real API integration with OpenWeatherMap
- Extended forecast (7-14 days)
- Multiple weather parameters
- Location-based weather
- Weather alerts and notifications

## License
This project is licensed under the MIT License.

---

**CHONY | Experiment 15 | Django Weather App** 