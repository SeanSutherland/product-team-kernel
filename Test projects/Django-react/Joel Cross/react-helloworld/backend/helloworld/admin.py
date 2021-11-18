from django.contrib import admin
from .models import Person, Project

class PersonAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'age')

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'category', 'team_members')

# Register your models here.
admin.site.register(Person, PersonAdmin)
admin.site.register(Project, ProjectAdmin)

