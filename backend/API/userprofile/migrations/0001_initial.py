# Generated by Django 2.1.7 on 2019-03-25 18:18

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
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('youtube', models.CharField(blank=True, default='', max_length=100)),
                ('facebook', models.CharField(blank=True, default='', max_length=100)),
                ('wikiaves', models.CharField(blank=True, default='', max_length=100)),
                ('instagram', models.CharField(blank=True, default='', max_length=100)),
                ('personal_site', models.CharField(blank=True, default='', max_length=100)),
                ('camera', models.CharField(blank=True, default='', max_length=100)),
                ('lens', models.CharField(blank=True, default='', max_length=100)),
                ('recorder', models.CharField(blank=True, default='', max_length=100)),
                ('microphone', models.CharField(blank=True, default='', max_length=100)),
                ('city', models.CharField(blank=True, default='', max_length=100)),
                ('state', models.CharField(blank=True, default='', max_length=100)),
                ('country', models.CharField(blank=True, default='', max_length=100)),
                ('about_you', models.CharField(blank=True, default='', max_length=255)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]