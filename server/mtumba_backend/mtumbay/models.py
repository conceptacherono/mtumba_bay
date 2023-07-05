from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Group, Permission

class AppUserManager(BaseUserManager):
	def create_user(self, email, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		email = self.normalize_email(email)
		user = self.model(email=email)
		user.set_password(password)
		user.save()
		return user
	def create_superuser(self, email, password=None):
		if not email:
			raise ValueError('An email is required.')
		if not password:
			raise ValueError('A password is required.')
		user = self.create_user(email, password)
		user.is_superuser = True
		user.save()
		return user


class AppUser(AbstractBaseUser, PermissionsMixin):
	user_id = models.AutoField(primary_key=True)
	email = models.EmailField(max_length=50, unique=True)
	username = models.CharField(max_length=50)
	groups = models.ManyToManyField(
		Group, related_name='app_users', blank=True
    )
	user_permissions = models.ManyToManyField(
		Permission, related_name='app_users', blank=True
    )
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['username']
	objects = AppUserManager()
	def __str__(self):
		return self.username
	
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
    

