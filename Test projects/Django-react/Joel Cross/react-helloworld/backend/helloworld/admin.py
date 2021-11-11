from django.contrib import admin
from .models import Person

class HelloworldAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'age')

# Register your models here.
admin.site.register(Person, HelloworldAdmin)
