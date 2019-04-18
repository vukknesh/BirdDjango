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
from django_filters import rest_framework as filters
from products.models import Product

from .pagination import ProductLimitOffsetPagination, ProductPageNumberPagination
from .permissions import IsOwnerOrReadOnly

from .serializers import (
    ProductCreateUpdateSerializer,
    ProductDetailSerializer,
    ProductListSerializer
)


class ProductFilter(filters.FilterSet):
    city = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Product
        fields = ('city',)


class ProductCreateAPIView(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductCreateUpdateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProductDetailAPIView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]
    #lookup_url_kwarg = "abc"


class ProductUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductCreateUpdateSerializer
    lookup_field = 'id'
    permission_classes = [IsOwnerOrReadOnly]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)
        # email send_email


class ProductDeleteAPIView(DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
    lookup_field = 'id'
    permission_classes = [IsOwnerOrReadOnly]


class ProductListAPIView(ListAPIView):
    serializer_class = ProductListSerializer
    # filter_backends = [SearchFilter, OrderingFilter]
    filterset_class = ProductFilter
    permission_classes = [AllowAny]
    # search_fields = ['title', 'content', 'user__first_name']
    pagination_class = ProductPageNumberPagination

    def get_queryset(self, *args, **kwargs):

        queryset_list = Product.objects.all()  # filter(user=self.request.user)
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(title__icontains=query) |
                Q(content__icontains=query) |
                Q(user__first_name__icontains=query) |
                Q(user__last_name__icontains=query)
            ).distinct()
        return queryset_list
