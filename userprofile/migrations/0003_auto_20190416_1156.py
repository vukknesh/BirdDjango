# Generated by Django 2.1.7 on 2019-04-16 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0002_auto_20190416_1148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='lat',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='lng',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
    ]
