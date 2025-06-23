# CHONY Experiment 15 - ASGI Configuration
# Author: Haswinchony Saladi (23AG1A0555)

"""
ASGI config for weather_project project.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'weather_project.settings')

application = get_asgi_application() 