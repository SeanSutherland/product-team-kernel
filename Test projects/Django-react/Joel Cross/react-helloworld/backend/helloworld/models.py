from django.db import models

# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    age = models.IntegerField(default=0)

    def _str_(self):
        return self.first_name
