"""
urls.py

URL configuration for leadmanager project.

"""

from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("leads.urls")),
]