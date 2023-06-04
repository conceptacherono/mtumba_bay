from django.urls import path
from .views import ProductImageUploadView, UserProfilePictureUploadView, FileUploadView, file_download_view

urlpatterns = [
    path('api/product/image-upload/', ProductImageUploadView.as_view(), name='product-image-upload'),
    path('api/user/profile-picture-upload/', UserProfilePictureUploadView.as_view(), name='profile-picture-upload'),
    path('api/file/upload/', FileUploadView.as_view(), name='file-upload'),
    path('api/file/download/<int:fileId>/', file_download_view, name='file-download'),
]
