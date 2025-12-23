from rest_framework import generics, viewsets
from .models import Test, Seasonal_pack, Package, Body_structure
from .serializers import TestSerializer, SeasonalPackSerializer, PackageSerializer, BodyStructureSerializer

# List + Create
class TestListView(generics.ListCreateAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer

# Retrieve Single Test
class TestDetailView(generics.RetrieveAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    lookup_field = "id"

class TestsByBodyStructureView(generics.ListAPIView):
    serializer_class = TestSerializer

    def get_queryset(self):
        body_structure_id = self.kwargs['body_structure_id']
        return Test.objects.filter(body_structure=body_structure_id)

class PackageListView(generics.ListCreateAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

class PackagesByBodyStructureView(generics.ListAPIView):
    serializer_class = PackageSerializer

    def get_queryset(self):
        body_structure_id = self.kwargs['body_structure_id']
        return Package.objects.filter(body_structure=body_structure_id)

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

class BodyStructureListView(generics.ListAPIView):
    queryset = Body_structure.objects.all()
    serializer_class = BodyStructureSerializer