# Generated by Django 2.1.7 on 2019-04-14 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotels', '0002_auto_20190414_1816'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotel',
            name='lat',
            field=models.DecimalField(decimal_places=20, default=0, max_digits=30),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='lng',
            field=models.DecimalField(decimal_places=20, default=0, max_digits=30),
        ),
    ]
