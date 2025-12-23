from django.contrib import admin
from .models import Body_structure, Test, Seasonal_pack, Package

class TestAdmin(admin.ModelAdmin):
    filter_horizontal = ('body_structure',)

class PackageAdmin(admin.ModelAdmin):
    filter_horizontal = ('body_structure',)

# Register your models here.
admin.site.register(Body_structure)
admin.site.register(Test, TestAdmin)
admin.site.register(Package, PackageAdmin)
admin.site.register(Seasonal_pack)