# Generated by Django 2.1.7 on 2019-03-25 22:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0003_auto_20190325_1853'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='about_you',
            field=models.TextField(blank=True, default='', max_length=255),
        ),
    ]