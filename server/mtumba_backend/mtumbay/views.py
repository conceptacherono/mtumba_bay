from rest_framework import generics, views, status, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer, OrderDetailsSerializer, OrderHistorySerializer, OrderSerializer, OrderTrackingSerializer, ProductSerializer, AddToCartSerializer, CartCheckoutSerializer, RemoveFromCartSerializer, UpdateCartSerializer, ReviewSerializer, ProductImageSerializer, UserProfilePictureSerializer, FileUploadSerializer
from rest_framework.authentication import SessionAuthentication
from .models import Product, Review, FileModel
from django.http import FileResponse
from rest_framework.views import APIView
from django.contrib.auth import authenticate, get_user_model, login, logout
from .validations import custom_validation, validate_email, validate_password


class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)
    
class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)
                
class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)
               
     
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
    
    #uploads endpoints
class ProductImageUploadView(APIView):
    def post(self, request, format=None):
        serializer = ProductImageSerializer(data=request.data)
        if serializer.is_valid():
            # Process and store the image
            # ...
            return Response("Image uploaded successfully.")
        return Response(serializer.errors, status=400)
    
class UserProfilePictureUploadView(APIView):
    def post(self, request, format=None):
        serializer = UserProfilePictureSerializer(data=request.data)
        if serializer.is_valid():
            # Process and store the profile picture
            # ...
            return Response("Profile picture uploaded successfully.")
        return Response(serializer.errors, status=400)  

class FileUploadView(APIView):
    def post(self, request, format=None):
        serializer = FileUploadSerializer(data=request.data)
        if serializer.is_valid():
            # Process and store the file
            # ...
            return Response("File uploaded successfully.")
        return Response(serializer.errors, status=400)    

def file_download_view(request, fileId):
    # Retrieve the file based on the fileId
    file = FileModel.objects.get(id=fileId)
    file_path = file.file.path
    return FileResponse(open(file_path, 'rb'), as_attachment=True)          