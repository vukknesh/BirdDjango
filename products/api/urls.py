from django.conf.urls import url
from django.contrib import admin

from .views import (
    ProductCreateAPIView,
    ProductDeleteAPIView,
    ProductDetailAPIView,
    ProductListAPIView,
    ProductUpdateAPIView,
)

urlpatterns = [
    url(r'^$', ProductListAPIView.as_view(), name='list'),
    url(r'^create/$', ProductCreateAPIView.as_view(), name='create'),
    url(r'^(?P<id>[\w-]+)/$', ProductDetailAPIView.as_view(), name='detail'),
    url(r'^(?P<id>[\w-]+)/edit/$',
        ProductUpdateAPIView.as_view(), name='update'),
    url(r'^(?P<id>[\w-]+)/delete/$',
        ProductDeleteAPIView.as_view(), name='delete'),
]
