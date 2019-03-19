
from django.contrib import admin
from django.urls import path, include


urlpatterns = [

    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
]


# urlpatterns = [
#     path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
#     path('rest-auth/', include('rest_auth.urls')),
#     path('', include('accounts.urls')),

#     path('rest-auth/registration/', include('rest_auth.registration.urls')),
#     path('admin/', admin.site.urls),
#     path('api/', include('posts.api.urls'))
# ]
