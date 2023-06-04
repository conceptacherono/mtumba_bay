from django.urls import path
from .views import UserRegistrationView, UserLogoutView, UserProfileView
from rest_framework.authtoken.views import obtain_auth_token

app_name = 'mtumbay'

urlpatterns = [
    path('api/auth/register', UserRegistrationView.as_view(), name='register'),
    path('api/auth/login', obtain_auth_token, name='login'),
    path('api/auth/logout', UserLogoutView.as_view(), name='logout'),
    path('api/auth/profile', UserProfileView.as_view(), name='profile')
]
