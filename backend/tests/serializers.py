from rest_framework import serializers
from .models import Test, Seasonal_pack, Package

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = "__all__"

class SeasonalPackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seasonal_pack
        fields = '__all__'

class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = '__all__'