# Generated by Django 2.1.7 on 2019-04-16 14:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=120)),
                ('slug', models.SlugField(unique=True)),
                ('image1', models.ImageField(default='defhotel.jpg', upload_to='hotel_pics')),
                ('image2', models.ImageField(default='defhotel.jpg', upload_to='hotel_pics')),
                ('image3', models.ImageField(default='defhotel.jpg', upload_to='hotel_pics')),
                ('image4', models.ImageField(default='defhotel.jpg', upload_to='hotel_pics')),
                ('address', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('state', models.CharField(blank=True, max_length=20, null=True)),
                ('content', models.TextField(blank=True, null=True)),
                ('price', models.IntegerField(default=0)),
                ('publish', models.DateField(auto_now=True)),
                ('lat', models.FloatField(default=0)),
                ('lng', models.FloatField(default=0)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-timestamp', '-updated'],
            },
        ),
    ]
