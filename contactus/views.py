from django.db.models import Q


from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,

    RetrieveAPIView,
    RetrieveUpdateAPIView
)


from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,

)

from contactus.models import Contact


from .serializers import (
    ContactCreateUpdateSerializer,
    ContactDetailSerializer,
    ContactListSerializer
)


class ContactCreateAPIView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactCreateUpdateSerializer

    def perform_create(self, serializer):
        serializer.save()


class ContactDetailAPIView(RetrieveAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactDetailSerializer
    lookup_field = 'id'


class ContactDeleteAPIView(DestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactDetailSerializer
    lookup_field = 'id'


class ContactListAPIView(ListAPIView):
    queryset = Contact.objects.all()

    serializer_class = ContactListSerializer
