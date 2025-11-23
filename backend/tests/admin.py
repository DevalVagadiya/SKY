from django.contrib import admin
from .models import Test, Seasonal_pack, Package

# Register your models here.
admin.site.register(Test)
admin.site.register(Package)
admin.site.register(Seasonal_pack)