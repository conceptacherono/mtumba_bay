from django.urls import path
from .views import ProductListAPIView, ProductRetrieveAPIView, ProductSearchAPIView, ProductCreateUpdateAPIView, ProductDeleteAPIView

urlpatterns = [
    path('api/products/', ProductListAPIView.as_view(), name='product-list'),
    path('api/products/<int:pk>/', ProductRetrieveAPIView.as_view(), name='product-detail'),
    path('api/products/search/', ProductSearchAPIView.as_view(), name='product-search'),
    path('api/products/', ProductCreateUpdateAPIView.as_view(), name='product-create'),
    path('api/products/<int:pk>/', ProductCreateUpdateAPIView.as_view(), name='product-update'),
    path('api/products/<int:pk>/', ProductDeleteAPIView.as_view(), name='product-delete'),
]