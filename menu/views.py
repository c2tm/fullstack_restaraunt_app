from django.shortcuts import render


# Create your views here.

from rest_framework import generics

from .models import MenuItem, OrderItem
from .serializers import MenuSerializer, OrderSerializer


class MenuListAPIView(generics.ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuSerializer


class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset: OrderItem.objects.all()
    serializer_class = OrderSerializer
