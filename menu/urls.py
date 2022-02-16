from django.urls import path

from .views import MenuListAPIView, OrderListCreateAPIView

app_name = 'menu'

urlpatterns = [
    path('', MenuListAPIView.as_view()),
    path('orders/', OrderListCreateAPIView.as_view(),
         name="order_list_create"),
]
