from django.db import models

class Body_structure(models.Model):
    part_name = models.CharField(max_length=100)

    def __str__(self):
        return self.part_name

class Test(models.Model):
    name = models.CharField(max_length=255)
    parameters_no = models.CharField(max_length=100)
    price = models.CharField(max_length=50)
    fasting = models.CharField(max_length=100, blank=True, null=True)
    recommend = models.CharField(max_length=100, blank=True, null=True)
    reportTime = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    parameters = models.TextField(blank=True, null=True)
    body_structure = models.ManyToManyField(Body_structure, blank=True)

    def __str__(self):
        return self.name

class Package(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    parameters_no = models.CharField(max_length=50, blank=True, null=True)
    tests = models.JSONField(default=list)  # store list like ["CBC", "RBC", "WBC"]
    fasting = models.CharField(max_length=100, blank=True, null=True)
    sample = models.CharField(max_length=100, blank=True, null=True)
    reportTime = models.CharField(max_length=100, blank=True, null=True)
    img = models.URLField(blank=True, null=True)
    is_popular = models.BooleanField(default=False)  # ✅ checkbox for popular packages
    body_structure = models.ManyToManyField(Body_structure, blank=True)
    
    def __str__(self):
        return self.title
    
class Seasonal_pack(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    parameters_no = models.CharField(max_length=50, blank=True, null=True)
    tests = models.JSONField()  # store ["CBC", "ESR 1 Hour", "FBS"]
    reportTime = models.CharField(max_length=100, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.CharField(max_length=50)
    img = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title
