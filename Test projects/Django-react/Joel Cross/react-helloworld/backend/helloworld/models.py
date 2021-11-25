from django.db import models

# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    age = models.IntegerField(default=0)

    def _str_(self):
        return self.first_name

class Project(models.Model):
    CATEGORY_CHOICES = [
        ('Computer Vision', 'Computer Vision'),
        ('Dashboard', 'Dashboard'),
        ('Other', 'Other'),
    ]

    name = models.CharField(max_length=120)
    description = models.TextField(max_length=1000)
    category = models.CharField(
        max_length=120,
        choices=CATEGORY_CHOICES,
        default='Other',
    )
    team_members = models.CharField(max_length=120)

    def _str_(self):
        return self.name
