
from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination,
)


class HotelLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 10


class HotelPageNumberPagination(PageNumberPagination):
    page_size = 20
