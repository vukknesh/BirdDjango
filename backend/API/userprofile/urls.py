from django.conf.urls import url, include
from .views import UserViewSet, ProfileViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'profiles', ProfileViewSet)


urlpatterns = [

    url(r'^api/', include(router.urls)),

]
