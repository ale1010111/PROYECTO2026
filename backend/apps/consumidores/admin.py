from django.contrib import admin

from .models import Consumidor # El punto (.) busca en la misma carpeta

@admin.register(Consumidor)
class ConsumidorAdmin(admin.ModelAdmin):
    list_display = ('ci_nit', 'razon_social', 'estado')