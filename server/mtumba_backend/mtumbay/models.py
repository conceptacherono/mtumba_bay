from django.db import models

class Review(models.Model):
    userId = models.CharField(max_length=100)
    rating = models.FloatField()
    reviewText = models.TextField()
    product_id = models.PositiveIntegerField()

    # Add any additional fields or methods as needed

    def __str__(self):
        return f"Review by {self.userId} for product {self.product_id}"
