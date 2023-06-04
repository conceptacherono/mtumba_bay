from django.urls import path
from .views import AddReview, RetrieveReviews, UpdateReview, DeleteReview

urlpatterns = [
    path('api/products/<int:product_id>/reviews', AddReview.as_view(), name='add_review'),
    path('api/products/<int:product_id>/reviews', RetrieveReviews.as_view(), name='retrieve_reviews'),
    path('api/products/<int:product_id>/reviews/<int:review_id>', UpdateReview.as_view(), name='update_review'),
    path('api/products/<int:product_id>/reviews/<int:review_id>', DeleteReview.as_view(), name='delete_review'),
]
