from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField,
    CharField
)


from accounts.serializers import UserSerializer
from comments.api.serializers import CommentSerializer
from comments.models import Comment

from hotels.models import Hotel


class HotelCreateUpdateSerializer(ModelSerializer):
    username = CharField(source='user.username', read_only=True)

    class Meta:
        model = Hotel
        fields = [
            'username',
            'title',
            'price',
            'address',
            'city',
            'state',
            'content',

            'image'
        ]


hotel_detail_url = HyperlinkedIdentityField(
    view_name='hotels-api:detail',
    lookup_field='id'
)


class HotelDetailSerializer(ModelSerializer):
    url = hotel_detail_url
    user = UserSerializer(read_only=True)
    image = SerializerMethodField()

    comments = SerializerMethodField()

    class Meta:
        model = Hotel
        fields = [
            'url',
            'id',
            'user',
            'title',

            'content',
            'price',
            'address',
            'city',
            'state',
            'publish',
            'image',
            'comments',
        ]

    def get_html(self, obj):
        return obj.get_markdown()

    def get_image(self, obj):
        try:
            image = obj.image.url
        except:
            image = None
        return image

    def get_comments(self, obj):
        c_qs = Comment.objects.filter_by_instance(obj)
        comments = CommentSerializer(c_qs, many=True).data
        return comments


class HotelListSerializer(ModelSerializer):
    # url = post_detail_url
    user_id = CharField(source='user.id', read_only=True)
    first_name = CharField(source='user.first_name', read_only=True)
    last_name = CharField(source='user.last_name', read_only=True)

    class Meta:
        model = Hotel
        fields = [
            'id',
            'user_id',
            'first_name',
            'last_name',
            'title',
            'content',
            'publish',
            'image',
            'address',
            'city',
            'state',
            'price'
        ]
