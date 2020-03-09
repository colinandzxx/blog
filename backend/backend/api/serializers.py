from rest_framework import serializers
from .models import api


class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = api