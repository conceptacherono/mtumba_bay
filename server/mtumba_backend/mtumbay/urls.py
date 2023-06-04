from django.urls import path
from .views import add_to_cart, update_cart, remove_from_cart, cart_checkout

urlpatterns = [
    path('api/cart/add/', add_to_cart, name='add-to-cart'),
    path('api/cart/update/', update_cart, name='update-cart'),
    path('api/cart/remove/', remove_from_cart, name='remove-from-cart'),
    path('api/cart/checkout/', cart_checkout, name='cart-checkout'),
]
