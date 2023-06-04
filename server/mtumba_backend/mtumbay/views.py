from django.shortcuts import render
from rest_framework import generics, views, status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, UserProfileSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

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