from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TestListView, TestDetailView, PackageListView, PackageDetailView, SeasonalPackListView, SeasonalPackDetailView

# router = DefaultRouter()
# router.register(r'tests', TestListCreateView)
# router.register(r'packages', PackageViewSet)

urlpatterns = [
    path("api/tests/", TestListView.as_view(), name="test-list"),
    path("api/tests/<int:id>/", TestDetailView.as_view(), name="test-detail"),
    path("api/packages/", PackageListView.as_view(), name="package-list"),
    path("api/packages/<int:id>/", PackageDetailView.as_view(), name="package-detail"),
    path("api/seasonal_packs/", SeasonalPackListView.as_view(), name="seasonal-pack-list"),
    path("api/seasonal_packs/<int:id>/", SeasonalPackDetailView.as_view(), name="seasonal-pack-detail"),
]