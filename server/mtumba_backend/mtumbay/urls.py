from django.urls import path
from .views import UserRegistrationView, UserLogoutView, UserProfileView, create_order, order_details, order_history, cancel_order, order_tracking
from rest_framework.authtoken.views import obtain_auth_token

app_name = 'mtumbay'

urlpatterns = [
    #user endpoints
    path('api/auth/register', UserRegistrationView.as_view(), name='register'),
    path('api/auth/login', obtain_auth_token, name='login'),
    path('api/auth/logout', UserLogoutView.as_view(), name='logout'),
    path('api/auth/profile', UserProfileView.as_view(), name='profile'),
    
    #order enpoints
    path('api/orders/', create_order, name='create_order'),
    path('api/orders/<str:order_id>/', order_details, name='order_details'),
    path('api/users/<str:user_id>/orders/', order_history, name='order_history'),
    path('api/orders/<str:order_id>/cancel/', cancel_order, name='cancel_order'),
    path('api/orders/<str:order_id>/tracking/', order_tracking, name='order_tracking'),
]

