from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'category', 'team_members')

# Register your models here.
admin.site.register(Project, ProjectAdmin)

