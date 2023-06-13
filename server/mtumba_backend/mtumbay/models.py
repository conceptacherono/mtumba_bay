from django.db import models

  #product enpoints
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
     
  #review endpoints
class Review(models.Model):
    userId = models.CharField(max_length=100)
    rating = models.FloatField()
    reviewText = models.TextField()
    product_id = models.PositiveIntegerField()

    # Add any additional fields or methods as needed

    def __str__(self):
        return f"Review by {self.userId} for product {self.product_id}"

   #uploads enpoints
class FileModel(models.Model):
    file = models.FileField(upload_to='files/')

    def filename(self):
        return self.file.name.split('/')[-1]   