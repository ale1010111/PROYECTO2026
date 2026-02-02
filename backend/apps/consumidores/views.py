from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Consumidor
from .serializers import ConsumidorSerializer

class ConsumidorViewSet(viewsets.ModelViewSet):
    queryset = Consumidor.objects.all()
    serializer_class = ConsumidorSerializer
    
    # Esto asegura que solo usuarios logueados (como tú) puedan usar la API
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Asigna automáticamente el usuario actual al campo 'registrado_por'
        serializer.save(registrado_por=self.request.user)