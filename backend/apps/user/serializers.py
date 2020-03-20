import uuid
from django import db
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        res = super().to_representation(instance=instance)
        access = []
        if res['is_staff'] == True:
            access.append('is_staff')
        if res['is_superuser'] == True:
            access.append('is_superuser')
        res.setdefault('access', access)
        res.pop('is_active')
        res.pop('is_staff')
        res.pop('is_superuser')
        return res

    class Meta:
        model = User
        fields = ['id', 'username', 'email',
                  'is_active', 'is_staff', 'is_superuser']


class UserSignUpSerializer(serializers.ModelSerializer):
    password1 = serializers.SerializerMethodField()

    class Meta:
        model = User

        password1 = db.models.CharField(
            max_length=32)

        fields = ['username', 'email', 'password', 'password1', 'mobile']

    def create(self, validated_data):
        if not id:
            print('id is null')
        password = validated_data.pop('password')
        user_instance = User.objects.create(**validated_data)
        user_instance.set_password(password)
        user_instance.save()
        return user_instance
