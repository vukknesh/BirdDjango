from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField,
    CharField
)


from contactus.models import Contact


class ContactCreateUpdateSerializer(ModelSerializer):

    class Meta:
        model = Contact
        fields = [

            'name',
            'email',
            'subject',
            'reason',
            'message'
        ]


contact_detail_url = HyperlinkedIdentityField(
    view_name='contact-api:detail',
    lookup_field='id'
)


class ContactDetailSerializer(ModelSerializer):

    class Meta:
        model = Contact
        fields = [
            'name',
            'email',
            'subject',
            'reason',
            'message',
        ]


class ContactListSerializer(ModelSerializer):

    class Meta:
        model = Contact
        fields = [
            'name',
            'email',
            'subject',
            'reason',
            'message'
        ]
