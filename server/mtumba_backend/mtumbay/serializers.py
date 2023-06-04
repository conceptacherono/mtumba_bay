from rest_framework import serializers

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