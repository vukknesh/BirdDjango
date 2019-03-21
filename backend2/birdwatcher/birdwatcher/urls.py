
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter


urlpatterns = [

    path('', include('accounts.urls')),


    path('admin/', admin.site.urls),


]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
