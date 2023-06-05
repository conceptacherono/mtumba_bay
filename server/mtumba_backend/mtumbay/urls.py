from django.urls import path
from .views import UserRegistrationView, UserLogoutView, UserProfileView, create_order, order_details, order_history, cancel_order, order_tracking, ProductListAPIView, ProductRetrieveAPIView, ProductSearchAPIView, ProductCreateUpdateAPIView, ProductDeleteAPIView, add_to_cart, update_cart, remove_from_cart, cart_checkout
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

    #product endpoints
    path('api/products/', ProductListAPIView.as_view(), name='product-list'),
    path('api/products/<int:pk>/', ProductRetrieveAPIView.as_view(), name='product-detail'),
    path('api/products/search/', ProductSearchAPIView.as_view(), name='product-search'),
    path('api/products/', ProductCreateUpdateAPIView.as_view(), name='product-create'),
    path('api/products/<int:pk>/', ProductCreateUpdateAPIView.as_view(), name='product-update'),
    path('api/products/<int:pk>/', ProductDeleteAPIView.as_view(), name='product-delete'),

    #shopping-cart endpoints
    path('api/cart/add/', add_to_cart, name='add-to-cart'),
    path('api/cart/update/', update_cart, name='update-cart'),
    path('api/cart/remove/', remove_from_cart, name='remove-from-cart'),
    path('api/cart/checkout/', cart_checkout, name='cart-checkout'),
]

