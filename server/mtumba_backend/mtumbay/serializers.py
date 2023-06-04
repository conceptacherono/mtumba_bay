from rest_framework import serializers

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