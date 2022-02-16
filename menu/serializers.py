from rest_framework import serializers
from .models import MenuItem, OrderItem


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('id', 'name', 'price', 'src')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('name', 'items', 'subtotal')
