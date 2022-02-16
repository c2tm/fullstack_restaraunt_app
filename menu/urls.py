from django.urls import path

from .views import MenuListAPIView, OrderListCreateAPIView, OrderListDetail

app_name = 'menu'

urlpatterns = [
    path('', MenuListAPIView.as_view()),
    path('orders/', OrderListCreateAPIView.as_view(),
         name="order_list_create"),
    path('orders/<int:pk>', OrderListDetail.as_view(), name="order_list_detail")
]
