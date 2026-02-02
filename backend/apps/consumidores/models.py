from django.db import models
from django.contrib.auth.models import User


class Consumidor(models.Model):

    TIPO_CONSUMIDOR_CHOICES = [
        ('PN', 'Persona Natural'),
        ('IP', 'Institución Pública'),
        ('EP', 'Empresa Privada'),
    ]

    ESTADO_CHOICES = [
        ('ACTIVO', 'Activo'),
        ('SUSPENDIDO', 'Suspendido'),
        ('BLOQUEADO', 'Bloqueado'),
    ]

    tipo_consumidor = models.CharField(
        max_length=2,
        choices=TIPO_CONSUMIDOR_CHOICES
    )

    ci_nit = models.CharField(
        max_length=20,
        unique=True
    )

    razon_social = models.CharField(
        max_length=255
    )

    representante_legal = models.CharField(
        max_length=255,
        blank=True,
        null=True
    )

    telefono = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    email = models.EmailField(
        blank=True,
        null=True
    )

    sector = models.CharField(
        max_length=100
    )

    actividad = models.CharField(
        max_length=150
    )

    municipio = models.CharField(
        max_length=100
    )

    direccion = models.TextField(
        blank=True,
        null=True
    )

    estado = models.CharField(
        max_length=15,
        choices=ESTADO_CHOICES,
        default='ACTIVO'
    )

    fecha_registro = models.DateTimeField(
        auto_now_add=True
    )

    observaciones = models.TextField(
        blank=True,
        null=True
    )

    registrado_por = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        related_name='consumidores_registrados'
    )

    def __str__(self):
        return f"{self.razon_social} ({self.ci_nit})"
