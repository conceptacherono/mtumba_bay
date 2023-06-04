from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AddToCartSerializer, CartCheckoutSerializer, RemoveFromCartSerializer, UpdateCartSerializer

@api_view(['POST'])
def add_to_cart(request):
    serializer = AddToCartSerializer(data=request.data)
    if serializer.is_valid():
        # Perform necessary actions to add the product to the cart
        # You can access the validated data using serializer.validated_data
        user_id = serializer.validated_data['user_id']
        product_id = serializer.validated_data['product_id']
        quantity = serializer.validated_data['quantity']
        
        # Add the product to the cart logic here
        
        return Response({"message": "Product added to cart successfully"})
    else:
        return Response(serializer.errors, status=400)

@api_view(['PUT'])
def update_cart(request):
    serializer = UpdateCartSerializer(data=request.data)
    if serializer.is_valid():
        # Perform necessary actions to update the cart
        # You can access the validated data using serializer.validated_data
        user_id = serializer.validated_data['user_id']
        product_id = serializer.validated_data['product_id']
        quantity = serializer.validated_data['quantity']
        
        # Update the cart logic here
        
        return Response({"message": "Cart updated successfully"})
    else:
        return Response(serializer.errors, status=400)


@api_view(['DELETE'])
def remove_from_cart(request):
    serializer = RemoveFromCartSerializer(data=request.data)
    if serializer.is_valid():
        # Perform necessary actions to remove the product from the cart
        # You can access the validated data using serializer.validated_data
        user_id = serializer.validated_data['user_id']
        product_id = serializer.validated_data['product_id']
        
        # Remove the product from the cart logic here
        
        return Response({"message": "Product removed from cart successfully"})
    else:
        return Response(serializer.errors, status=400)
    
@api_view(['POST'])
def cart_checkout(request):
    serializer = CartCheckoutSerializer(data=request.data)
    if serializer.is_valid():
        # Perform necessary actions for cart checkout
        # You can access the validated data using serializer.validated_data
        user_id = serializer.validated_data['user_id']
        
        # Cart checkout logic here
        
        return Response({"message": "Checkout successful", "order_id": "order789"})
    else:
        return Response(serializer.errors, status=400)    