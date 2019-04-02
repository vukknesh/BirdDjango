from django.db.models import Q


from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
    RetrieveUpdateAPIView
)


from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,

)

from hotels.models import Hotel

from .pagination import HotelLimitOffsetPagination, HotelPageNumberPagination
from .permissions import IsOwnerOrReadOnly

from .serializers import (
    HotelCreateUpdateSerializer,
    HotelDetailSerializer,
    HotelListSerializer
)


class HotelCreateAPIView(CreateAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelCreateUpdateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class HotelDetailAPIView(RetrieveAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelDetailSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]
    #lookup_url_kwarg = "abc"


class HotelUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelCreateUpdateSerializer
    lookup_field = 'id'
    permission_classes = [IsOwnerOrReadOnly]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
        # email send_email


class HotelDeleteAPIView(DestroyAPIView):
    queryset = Hotel.objects.all()
    serializer_class = HotelDetailSerializer
    lookup_field = 'id'
    permission_classes = [IsOwnerOrReadOnly]


class HotelListAPIView(ListAPIView):
    serializer_class = HotelListSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    permission_classes = [AllowAny]
    search_fields = ['title', 'content', 'user__first_name']
    pagination_class = HotelPageNumberPagination

    def get_queryset(self, *args, **kwargs):

        queryset_list = Hotel.objects.all()  # filter(user=self.request.user)
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(title__icontains=query) |
                Q(content__icontains=query) |
                Q(user__first_name__icontains=query) |
                Q(user__last_name__icontains=query)
            ).distinct()
        return queryset_list
