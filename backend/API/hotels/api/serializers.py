from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField,
    CharField
)

from userprofile.serializers import ProfileSerializer
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

            'image1',
            'image2',
            'image3',
            'image4'
        ]


hotel_detail_url = HyperlinkedIdentityField(
    view_name='hotels-api:detail',
    lookup_field='id'
)


class HotelDetailSerializer(ModelSerializer):
    url = hotel_detail_url
    user = UserSerializer(read_only=True)

    image1 = SerializerMethodField()
    image2 = SerializerMethodField()
    image3 = SerializerMethodField()
    image4 = SerializerMethodField()

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
            'image1',
            'image2',
            'image3',
            'image4',
            'comments',
        ]

    def get_html(self, obj):
        return obj.get_markdown()

    def get_image1(self, obj):
        try:
            image1 = obj.image1.url
        except:
            image1 = None
        return image1

    def get_image2(self, obj):
        try:
            image2 = obj.image2.url
        except:
            image2 = None
        return image2

    def get_image3(self, obj):
        try:
            image3 = obj.image3.url
        except:
            image3 = None
        return image3

    def get_image4(self, obj):
        try:
            image4 = obj.image4.url
        except:
            image4 = None
        return image4

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
            'image1',
            'image2',
            'image3',
            'image4',
            'address',
            'city',
            'state',
            'price'
        ]
