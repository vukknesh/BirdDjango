from __future__ import unicode_literals

from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.urls import reverse
from django.db import models
from django.db.models.signals import pre_save
from django.utils import timezone
from django.utils.safestring import mark_safe
from django.utils.text import slugify

from model_utils import Choices
from markdown_deux import markdown
from comments.models import Comment

from .utils import get_read_time


class ProductManager(models.Manager):
    def active(self, *args, **kwargs):

        return super(ProductManager, self).filter(draft=False).filter(publish__lte=timezone.now())


def upload_location(instance, filename):

    ProductModel = instance.__class__
    new_id = ProductModel.objects.order_by("id").last().id + 1

    return "%s/%s" % (new_id, filename)


class Product(models.Model):

    STATUS = Choices('todas', 'roupas', 'lentes', 'acessorios', 'cameras')
    categorias = models.CharField(
        choices=STATUS, default=STATUS.todas, max_length=20)

    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)

    title = models.CharField(max_length=120, default='')
    usado = models.BooleanField(default=False)
    slug = models.SlugField(unique=True)
    image1 = models.ImageField(default='defproduct.jpg',
                               upload_to='product_pics')
    image2 = models.ImageField(default='defproduct.jpg',
                               upload_to='product_pics')
    image3 = models.ImageField(default='defproduct.jpg',
                               upload_to='product_pics')
    image4 = models.ImageField(default='defproduct.jpg',
                               upload_to='product_pics')
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    state = models.CharField(max_length=20, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    price = models.IntegerField(default=0)
    publish = models.DateField(auto_now=True, auto_now_add=False)

    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

    objects = ProductManager()

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("product:detail", kwargs={"slug": self.slug})

    def get_api_url(self):
        return reverse("product-api:detail", kwargs={"slug": self.slug})

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
    qs = Product.objects.filter(slug=slug).order_by("-id")
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


pre_save.connect(pre_save_post_receiver, sender=Product)
