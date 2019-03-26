from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

from django.db.models.signals import post_save


from django.dispatch import receiver


class Profile(models.Model):
    # guide / owner / watcher
    is_guide = models.BooleanField(default=False)
    is_owner = models.BooleanField(default=False)
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
    about_you = models.TextField(max_length=255, blank=True, default='')
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    user = models.OneToOneField(
        User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()
