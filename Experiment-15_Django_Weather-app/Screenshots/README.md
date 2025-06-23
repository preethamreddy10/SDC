# Screenshots Directory - Experiment 15

## Screenshot Guidelines

Please capture the following screenshots to demonstrate the CHONY Django Weather App functionality:

### Required Screenshots:

1. **home.png**
   - **Description:** Main weather dashboard with current weather
   - **What to capture:** Complete weather interface with CHONY branding, current temperature, and weather details

2. **current-weather.png**
   - **Description:** Current weather information display
   - **What to capture:** Temperature, humidity, pressure, wind speed, and weather description

3. **temperature-chart.png**
   - **Description:** Chart.js temperature visualization
   - **What to capture:** Line chart showing past 5 days temperature trends

4. **historical-data.png**
   - **Description:** Past 5 days weather data sidebar
   - **What to capture:** Historical temperature records with day names and descriptions

5. **city-search.png**
   - **Description:** City search functionality
   - **What to capture:** Search form and results for different cities

6. **mobile-view.png**
   - **Description:** Responsive mobile design
   - **What to capture:** App running on mobile device or browser mobile view

7. **weather-details.png**
   - **Description:** Detailed weather information cards
   - **What to capture:** All weather parameters (feels like, humidity, pressure, wind)

8. **chart-interaction.png**
   - **Description:** Interactive chart features
   - **What to capture:** Chart hover effects and data points

### Screenshot Requirements:

- **Resolution:** High resolution (1920x1080 or higher)
- **Format:** PNG or JPG
- **Quality:** Clear and readable text
- **Content:** Must show weather data and CHONY branding
- **Browser:** Use a modern browser (Chrome, Firefox, Edge)

### Testing Steps for Screenshots:

1. **Setup the project:**
   ```bash
   cd Experiment15
   pip install -r requirements.txt
   python manage.py makemigrations
   python manage.py migrate
   python manage.py runserver
   ```

2. **Capture main dashboard:**
   - Open browser to http://127.0.0.1:8000/
   - Capture the complete weather interface

3. **Test city search:**
   - Enter different city names in the search box
   - Capture search functionality and results

4. **Test weather display:**
   - Show current weather information
   - Capture temperature, humidity, pressure, wind speed

5. **Test chart functionality:**
   - Interact with the temperature chart
   - Capture chart hover effects and data visualization

6. **Test responsive design:**
   - Resize browser window
   - Use browser dev tools for mobile view
   - Capture responsive behavior

7. **Test historical data:**
   - View past 5 days weather data
   - Capture historical information sidebar

8. **Test animations:**
   - Capture weather icon animations
   - Show temperature display effects

### File Naming Convention:
- Use descriptive names: `home.png`, `current-weather.png`, etc.
- Include the feature being tested in the filename
- Use lowercase with hyphens for spaces

### Important Notes:
- **Weather Data:** Show different weather conditions and temperatures
- **City Search:** Demonstrate search functionality with multiple cities
- **Chart Visualization:** Capture Chart.js line chart with temperature trends
- **CHONY Branding:** Include CHONY logo and branding in all screenshots
- **Responsive Design:** Show how the app adapts to different screen sizes
- **Animations:** Capture smooth transitions and hover effects
- **Weather Details:** Display all weather parameters clearly

### Testing Checklist:
- [ ] Main weather dashboard
- [ ] Current weather information
- [ ] Temperature chart visualization
- [ ] Historical weather data
- [ ] City search functionality
- [ ] Responsive design
- [ ] Chart interactions
- [ ] Weather animations
- [ ] Error handling (if any)

### Sample Test Cities:
- Hyderabad (default)
- Mumbai
- Delhi
- Bangalore
- Chennai
- Kolkata

---

**CHONY | Experiment 15 Screenshots | Django Weather App** 