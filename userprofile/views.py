from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from .models import Profile
from .serializers import UserSerializer, ProfileSerializer
from .permissions import (
    IsOwnerOrReadOnly, IsAdminUserOrReadOnly, IsSameUserAllowEditionOrReadOnly
)
from django.db.models.signals import post_save
from django.dispatch import receiver
from django_filters import rest_framework as filters


class ProfileFilter(filters.FilterSet):
    city = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Profile
        fields = ('city',)


class UserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsSameUserAllowEditionOrReadOnly,)


class ProfileViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    filterset_class = ProfileFilter
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)
