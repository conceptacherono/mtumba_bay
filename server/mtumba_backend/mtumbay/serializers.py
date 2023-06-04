from rest_framework import serializers

class ProductImageSerializer(serializers.Serializer):
    image = serializers.ImageField()

class UserProfilePictureSerializer(serializers.Serializer):
    picture = serializers.ImageField()

class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField()