from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProductImageSerializer, UserProfilePictureSerializer, FileUploadSerializer
from django.http import FileResponse
from .models import FileModel

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