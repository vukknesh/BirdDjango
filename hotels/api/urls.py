from django.conf.urls import url
from django.contrib import admin

from .views import (
    HotelCreateAPIView,
    HotelDeleteAPIView,
    HotelDetailAPIView,
    HotelListAPIView,
    HotelUpdateAPIView,
)

urlpatterns = [
    url(r'^$', HotelListAPIView.as_view(), name='list'),
    url(r'^create/$', HotelCreateAPIView.as_view(), name='create'),
    url(r'^(?P<id>[\w-]+)/$', HotelDetailAPIView.as_view(), name='detail'),
    url(r'^(?P<id>[\w-]+)/edit/$',
        HotelUpdateAPIView.as_view(), name='update'),
    url(r'^(?P<id>[\w-]+)/delete/$',
        HotelDeleteAPIView.as_view(), name='delete'),
]
