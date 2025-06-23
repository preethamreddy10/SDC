# CHONY Experiment 14 - WSGI Configuration
# Author: Haswinchony Saladi (23AG1A0555)

"""
WSGI config for student_mgmt project.
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'student_mgmt.settings')

application = get_wsgi_application() 