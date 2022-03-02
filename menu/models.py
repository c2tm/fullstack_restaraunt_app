
from django.db import models

# Create your models here.


class MenuItem(models.Model):
    name = models.CharField(max_length=267)
    price = models.IntegerField()
    src = models.URLField(max_length=267)

    def __str__(self):
        return self.name


class OrderItem(models.Model):
    name = models.CharField(max_length=267)
    items = models.JSONField(null=True)
    subtotal = models.IntegerField()
    active = models.BooleanField(null=True)

    def __str__(self):
        return self.name
