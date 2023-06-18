from rest_framework import serializers
from .models import Product, Review
from django.contrib.auth.models import User    

      #user endpoints

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username","email","password",]
        
    def create(self, validated_data):
           user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
           return user
    
# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['username', 'email']    

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
