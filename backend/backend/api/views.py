from django.shortcuts import render

# Create your views here.

from rest_framework import generics

from .models import api
from .serializers import ApiSerializer


class ListTodo(generics.ListCreateAPIView):
    queryset = api.objects.all()
    serializer_class = ApiSerializer


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = api.objects.all()
    serializer_class = ApiSerializer