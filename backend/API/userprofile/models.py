from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

from django.db.models.signals import pre_save

from django.db.models.signals import post_save

from django.dispatch import receiver
from django.utils.text import slugify


class Profile(models.Model):
    slug = models.SlugField(unique=True)
    # guide / owner / watcher
    is_guide = models.BooleanField(default=False)
    is_owner = models.BooleanField(default=False)
    address = models.CharField(max_length=255, blank=True, null=True)
    lat = models.FloatField(default=0, blank=True, null=True)
    lng = models.FloatField(default=0, blank=True, null=True)
    # social media
    youtube = models.CharField(max_length=100, blank=True, default='')
    facebook = models.CharField(max_length=100, blank=True, default='')
    wikiaves = models.CharField(max_length=100, blank=True, default='')
    instagram = models.CharField(max_length=100, blank=True, default='')
    personal_site = models.CharField(max_length=100, blank=True, default='')

    # equipment
    camera = models.CharField(max_length=100, blank=True, default='')
    lens = models.CharField(max_length=100, blank=True, default='')
    recorder = models.CharField(max_length=100, blank=True, default='')
    microphone = models.CharField(max_length=100, blank=True, default='')

    # address
    city = models.CharField(max_length=100, blank=True, default='')
    state = models.CharField(max_length=100, blank=True, default='')
    country = models.CharField(max_length=100, blank=True, default='')
    # personal
    image = models.ImageField(default='defprofile.jpg',
                              upload_to='profile_pics')
    about_you = models.TextField(max_length=255, blank=True, default='')
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

    def get_absolute_url(self):
        return reverse("profile:detail", kwargs={"slug": self.slug})

    def get_api_url(self):
        return reverse("profile-api:detail", kwargs={"slug": self.slug})

    @property
    def comments(self):
        instance = self
        qs = Comment.objects.filter_by_instance(instance)
        return qs

    @property
    def get_content_type(self):
        instance = self
        content_type = ContentType.objects.get_for_model(instance.__class__)
        return content_type


def create_slug(instance, new_slug=None):
    slug = slugify(instance.user.username)
    if new_slug is not None:
        slug = new_slug
    qs = Profile.objects.filter(slug=slug).order_by("-id")
    exists = qs.exists()
    if exists:
        new_slug = "%s-%s" % (slug, qs.first().id)
        return create_slug(instance, new_slug=new_slug)
    return slug


def pre_save_profile_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = create_slug(instance)


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()


pre_save.connect(pre_save_profile_receiver, sender=Profile)
