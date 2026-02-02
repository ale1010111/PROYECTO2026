from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ConsumidorViewSet

# El router genera automáticamente rutas como /api/consumidores/
router = DefaultRouter()
router.register(r'lista', ConsumidorViewSet, basename='consumidor')

urlpatterns = [
    path('', include(router.urls)),
]