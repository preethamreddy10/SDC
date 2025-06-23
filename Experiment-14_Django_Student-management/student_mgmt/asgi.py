# CHONY Experiment 14 - ASGI Configuration
# Author: Haswinchony Saladi (23AG1A0555)

"""
ASGI config for student_mgmt project.
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'student_mgmt.settings')

application = get_asgi_application() 