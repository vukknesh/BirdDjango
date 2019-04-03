from __future__ import unicode_literals

from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.urls import reverse
from django.db import models
from django.db.models.signals import pre_save
from django.utils import timezone
from django.utils.safestring import mark_safe
from django.utils.text import slugify


from markdown_deux import markdown
from comments.models import Comment

from .utils import get_read_time


class HotelManager(models.Manager):
    def active(self, *args, **kwargs):

        return super(HotelManager, self).filter(draft=False).filter(publish__lte=timezone.now())


def upload_location(instance, filename):

    HotelModel = instance.__class__
    new_id = HotelModel.objects.order_by("id").last().id + 1

    return "%s/%s" % (new_id, filename)


class Hotel(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    title = models.CharField(max_length=120, default='')
    slug = models.SlugField(unique=True)
    image1 = models.ImageField(default='defhotel.jpg',
                               upload_to='hotel_pics')
    image2 = models.ImageField(default='defhotel.jpg',
                               upload_to='hotel_pics')
    image3 = models.ImageField(default='defhotel.jpg',
                               upload_to='hotel_pics')
    image4 = models.ImageField(default='defhotel.jpg',
                               upload_to='hotel_pics')
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=20)
    content = models.TextField()
    price = models.IntegerField(default=0)
    publish = models.DateField(auto_now=True, auto_now_add=False)

    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

    objects = HotelManager()

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("hotel:detail", kwargs={"slug": self.slug})

    def get_api_url(self):
        return reverse("hotel-api:detail", kwargs={"slug": self.slug})

    class Meta:
        ordering = ["-timestamp", "-updated"]

    def get_markdown(self):
        content = self.content
        markdown_text = markdown(content)
        return mark_safe(markdown_text)

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
    slug = slugify(instance.title)
    if new_slug is not None:
        slug = new_slug
    qs = Hotel.objects.filter(slug=slug).order_by("-id")
    exists = qs.exists()
    if exists:
        new_slug = "%s-%s" % (slug, qs.first().id)
        return create_slug(instance, new_slug=new_slug)
    return slug


def pre_save_post_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = create_slug(instance)

    if instance.content:
        html_string = instance.get_markdown()
        read_time_var = get_read_time(html_string)
        instance.read_time = read_time_var


pre_save.connect(pre_save_post_receiver, sender=Hotel)
