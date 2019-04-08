
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url, include as inc

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('', include('userprofile.urls')),
    # path('api/posts/', include('posts.api.urls')),
    # path('api/comments/', include("comments.api.urls")),
    url(r'^api/comments/', inc(("comments.api.urls",
                                'comments'), namespace='comments-api')),
    url(r'^api/posts/', inc(("posts.api.urls", 'posts'), namespace='posts-api')),
    url(r'^api/hotels/', inc(("hotels.api.urls", 'hotels'), namespace='hotels-api')),
    url(r'^api/products/', inc(("products.api.urls",
                                'products'), namespace='products-api')),
]
