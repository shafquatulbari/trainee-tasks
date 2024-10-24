from django.urls import path, include
from .views import authView, home

urlpatterns = [
    path("", home, name="home"), # Add this line to include the home view
    path("signup/", authView, name="authView"), # Add this line to include the signup view
    path("accounts/", include("django.contrib.auth.urls")), # Add this line to include the auth urls 
]
