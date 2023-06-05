from django.shortcuts import render
from rest_framework import generics, views, status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, UserProfileSerializer, OrderDetailsSerializer, OrderHistorySerializer, OrderSerializer, OrderTrackingSerializer, ProductSerializer, AddToCartSerializer, CartCheckoutSerializer, RemoveFromCartSerializer, UpdateCartSerializer, ReviewSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product, Review


    #user endpoints
class UserRegistrationView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.create(user=user)
            return Response({'token': token.key})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Perform any additional logout logic if needed
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)   
    
class UserProfileView(APIView):
     authentication_classes = [TokenAuthentication]
     permission_classes = [IsAuthenticated]

     def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)  
     
     #order-endpoints
@api_view(['POST'])
def create_order(request):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        # Perform order creation logic here
        order_id = "67890"  # Generated order ID
        response_data = {
            "order_id": order_id,
            "status": "created",
            "message": "Order created successfully."
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def order_details(request, order_id):
    # Retrieve order details for the given order ID
    # Perform logic to fetch order details
    order = {
        "order_id": order_id,
        # Other order details
    }
    serializer = OrderDetailsSerializer(order)
    return Response(serializer.data)

@api_view(['GET'])
def order_history(request, user_id):
    # Retrieve order history for the given user ID
    # Perform logic to fetch order history
    orders = [
        {
            "order_id": "123",
            # Other order details
        },
        {
            "order_id": "456",
            # Other order details
        },
    ]
    serializer = OrderHistorySerializer(orders, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def cancel_order(request, order_id):
    # Logic to cancel the order with the given order ID
    # Perform cancellation logic
    return Response({"message": "Order canceled successfully."})

@api_view(['GET'])
def order_tracking(request, order_id):
    # Retrieve tracking information for the given order ID
    # Perform logic to fetch tracking information
    tracking_info = {
        "order_id": order_id,
        # Other tracking information
    }
    serializer = OrderTrackingSerializer(tracking_info)
    return Response(serializer.data)     

#product endpoints
class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer    

class ProductSearchAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        search_query = self.request.query_params.get('query')
        if search_query:
            return self.queryset.filter(name__icontains=search_query)
        return self.queryset.none()
    
class ProductCreateUpdateAPIView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer    

class ProductDeleteAPIView(generics.DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    #shopping-cart enpoints
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
    
    #review endpoints
class AddReview(APIView):
    def post(self, request, product_id):
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            # Save the review/rating for the product
            serializer.save(product_id=product_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RetrieveReviews(APIView):
    def get(self, request, product_id):
        reviews = Review.objects.filter(product_id=product_id)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UpdateReview(APIView):
    def put(self, request, product_id, review_id):
        try:
            review = Review.objects.get(id=review_id, product_id=product_id)
        except Review.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = ReviewSerializer(review, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DeleteReview(APIView):
    def delete(self, request, product_id, review_id):
        try:
            review = Review.objects.get(id=review_id, product_id=product_id)
        except Review.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)        