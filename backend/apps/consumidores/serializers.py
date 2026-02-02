from rest_framework import serializers
from .models import Consumidor

class ConsumidorSerializer(serializers.ModelSerializer):
    # Campos que solo son de lectura (no se envían desde el frontend)
    fecha_registro = serializers.DateTimeField(read_only=True)
    
    # Esto permite que en el GET veamos el texto descriptivo del estado y tipo
    # Ej: 'Persona Natural' en lugar de 'PN'
    tipo_consumidor_display = serializers.CharField(source='get_tipo_consumidor_display', read_only=True)
    estado_display = serializers.CharField(source='get_estado_display', read_only=True)
    
    # Mostramos el nombre del usuario que registró, no solo el ID
    registrado_por_nombre = serializers.ReadOnlyField(source='registrado_por.username')

    class Meta:
        model = Consumidor
        fields = [
            'id', 
            'tipo_consumidor', 'tipo_consumidor_display',
            'ci_nit', 
            'razon_social', 
            'representante_legal', 
            'telefono', 
            'email', 
            'sector', 
            'actividad', 
            'municipio', 
            'direccion', 
            'estado', 'estado_display',
            'fecha_registro', 
            'observaciones', 
            'registrado_por', 'registrado_por_nombre'
        ]

    def validate_ci_nit(self, value):
        """
        Ejemplo de validación personalizada: 
        Podrías verificar que el CI/NIT tenga un formato específico de Bolivia.
        """
        if len(value) < 7:
            raise serializers.ValidationError("El CI/NIT es demasiado corto.")
        return value