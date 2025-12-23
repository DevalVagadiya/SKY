from rest_framework import serializers
from .models import Test, Seasonal_pack, Package, Body_structure

class BodyStructureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Body_structure
        fields = "__all__"

class TestSerializer(serializers.ModelSerializer):
    body_structure = BodyStructureSerializer(many=True)
    class Meta:
        model = Test
        fields = "__all__"

class SeasonalPackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seasonal_pack
        fields = '__all__'

class PackageSerializer(serializers.ModelSerializer):
    body_structure = BodyStructureSerializer(many=True)
    class Meta:
        model = Package
        fields = '__all__'