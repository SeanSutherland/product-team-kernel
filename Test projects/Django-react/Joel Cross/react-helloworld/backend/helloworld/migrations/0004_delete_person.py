# Generated by Django 3.2.9 on 2021-11-27 19:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('helloworld', '0003_alter_project_category'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Person',
        ),
    ]