# CHONY Experiment 16 - WSGI Configuration
# Author: Haswinchony Saladi (23AG1A0555)

"""
WSGI config for todo_project project.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'todo_project.settings')

application = get_wsgi_application() 