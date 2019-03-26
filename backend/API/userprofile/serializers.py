from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile_url = serializers.HyperlinkedIdentityField(
        view_name='profile-detail')

    class Meta:
        model = User
        depth = 1
        fields = ('url', 'id', 'username', 'first_name', 'last_name', 'email',
                  'is_superuser', 'is_staff', 'profile', 'profile_url')


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    gender = serializers.CharField(source='get_gender_display', read_only=True)
    user_url = serializers.HyperlinkedIdentityField(view_name='user-detail')
    user = serializers.ReadOnlyField(source='user.id')
    id = serializers.IntegerField(source='pk', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.CharField(source='user.email', read_only=True)
    first_name = serializers.CharField(
        source='user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.last_name', read_only=True)

    class Meta:
        model = Profile
        depth = 1
        fields = ('url', 'id', 'username', 'email', 'first_name', 'last_name',
                  'youtube', 'facebook', 'wikiaves', 'instagram', 'personal_site', 'camera', 'lens', 'recorder', 'microphone', 'city', 'state', 'country', 'gender', 'about_you', 'user', 'is_guide', 'is_owner',
                  'user_url', 'created_at')

    def get_full_name(self, obj):
        request = self.context['request']
        return request.user.get_full_name()

    # def update(self, instance, validated_data):
        # retrieve the User
        # user_data = validated_data.pop('user', None)
        # for attr, value in user_data.items():
        #     setattr(instance.user, attr, value)

    def update(self, instance, validated_data):
        # First, update the User
        user_data = validated_data.pop('user', {})
        for attr, value in user_data.items():
            setattr(instance.user, attr, value)
        # Then, update UserProfile
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
            instance.save()
        return instance
