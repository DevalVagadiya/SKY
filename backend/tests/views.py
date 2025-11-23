from rest_framework import generics, viewsets
from .models import Test, Seasonal_pack, Package
from .serializers import TestSerializer, SeasonalPackSerializer, PackageSerializer

# List + Create
class TestListView(generics.ListCreateAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer

# Retrieve Single Test
class TestDetailView(generics.RetrieveAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    lookup_field = "id"

class PackageListView(generics.ListCreateAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

class PackageDetailView(generics.RetrieveAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer
    lookup_field = "id"

class SeasonalPackListView(generics.ListCreateAPIView):
    queryset = Seasonal_pack.objects.all()
    serializer_class = SeasonalPackSerializer

class SeasonalPackDetailView(generics.RetrieveAPIView):
    queryset = Seasonal_pack.objects.all()
    serializer_class = SeasonalPackSerializer
    lookup_field = "id"