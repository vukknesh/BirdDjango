from django.db import models


class Contact(models.Model):

    name = models.CharField(max_length=55)

    email = models.EmailField()

    subject = models.CharField(max_length=255, blank=True, null=True)
    reason = models.CharField(max_length=250, blank=True, null=True)
    message = models.TextField(max_length=255)

    def __str__(self):
        return self.email
