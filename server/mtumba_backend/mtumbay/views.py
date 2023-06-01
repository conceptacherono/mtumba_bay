from django.shortcuts import render
from rest_framework import generics, views, status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, UserProfileSerializer

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserSerializer

class UserLogoutView(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Perform any additional logout logic if needed
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)   
    
class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user    