from django.conf.urls import url
from django.contrib import admin

from .views import (
    ContactCreateAPIView,
    ContactDeleteAPIView,
    ContactDetailAPIView,
    ContactListAPIView,

)

urlpatterns = [
    url(r'^$', ContactListAPIView.as_view(), name='list'),
    url(r'^create/$', ContactCreateAPIView.as_view(), name='create'),
    url(r'^(?P<id>[\w-]+)/$', ContactDetailAPIView.as_view(), name='detail'),

    url(r'^(?P<id>[\w-]+)/delete/$',
        ContactDeleteAPIView.as_view(), name='delete'),
]
