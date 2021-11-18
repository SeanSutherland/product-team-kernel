from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PersonSerializer, ProjectSerializer
from .models import Person, Project

# Create your views here.
class PersonView(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
