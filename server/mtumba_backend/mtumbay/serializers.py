from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.models import User
      
      #user endpoints
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']    

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

