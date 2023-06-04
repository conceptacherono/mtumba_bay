from django.urls import path
from .views import create_order, order_details, order_history, cancel_order, order_tracking

urlpatterns = [
    path('api/orders/', create_order, name='create_order'),
    path('api/orders/<str:order_id>/', order_details, name='order_details'),
    path('api/users/<str:user_id>/orders/', order_history, name='order_history'),
    path('api/orders/<str:order_id>/cancel/', cancel_order, name='cancel_order'),
    path('api/orders/<str:order_id>/tracking/', order_tracking, name='order_tracking'),
]