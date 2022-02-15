from django.shortcuts import render


# Create your views here.

from rest_framework import generics

from .models import MenuItem
from .serializers import MenuSerializer


class MenuListAPIView(generics.ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuSerializer
