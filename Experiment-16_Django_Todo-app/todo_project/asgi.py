# CHONY Experiment 16 - ASGI Configuration
# Author: Haswinchony Saladi (23AG1A0555)

"""
ASGI config for todo_project project.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'todo_project.settings')

application = get_asgi_application() 