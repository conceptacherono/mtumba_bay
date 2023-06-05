from django.shortcuts import render
from rest_framework import generics, views, status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, UserProfileSerializer, OrderDetailsSerializer, OrderHistorySerializer, OrderSerializer, OrderTrackingSerializer, ProductSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product

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