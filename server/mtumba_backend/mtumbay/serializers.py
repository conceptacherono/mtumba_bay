from django.core.exceptions import ValidationError
from rest_framework import serializers
from .models import Product, Review
from django.contrib.auth import get_user_model, authenticate


      #user endpoints

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = '__all__'
	def create(self, clean_data):
		user_obj = UserModel.objects.create_user(email=clean_data['email'], password=clean_data['password'])
		user_obj.username = clean_data['username']
		user_obj.save()
		return user_obj

class UserLoginSerializer(serializers.Serializer):
	email = serializers.EmailField()
	password = serializers.CharField()
	##
	def check_user(self, clean_data):
		user = authenticate(username=clean_data['email'], password=clean_data['password'])
		if not user:
			raise ValidationError('user not found')
		return user

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserModel
		fields = ('email', 'username')
                
        #order endpoints
class OrderSerializer(serializers.Serializer):
    user_id = serializers.IntegerField()
    products = serializers.ListField(child=serializers.DictField(child=serializers.CharField()))

class OrderDetailsSerializer(serializers.Serializer):
    order_id = serializers.CharField()
    # Include other fields for order details

class OrderHistorySerializer(serializers.Serializer):
    order_id = serializers.CharField()
    # Include other fields for order history

class OrderTrackingSerializer(serializers.Serializer):
    order_id = serializers.CharField()
    # Include other fields for order tracking     

    #product endpoints
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'    
    
    #shopping-cart endpoints
class AddToCartSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    product_id = serializers.CharField()
    quantity = serializers.IntegerField()

class UpdateCartSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    product_id = serializers.CharField()
    quantity = serializers.IntegerField()

class RemoveFromCartSerializer(serializers.Serializer):
    user_id = serializers.CharField()
    product_id = serializers.CharField()

class CartCheckoutSerializer(serializers.Serializer):
    user_id = serializers.CharField()    

    #review endpoints
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'userId', 'rating', 'reviewText', 'product_id')   

     #upload endpoints
class ProductImageSerializer(serializers.Serializer):
    image = serializers.ImageField()

class UserProfilePictureSerializer(serializers.Serializer):
    picture = serializers.ImageField()

class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()                 
