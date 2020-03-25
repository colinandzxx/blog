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
    confirm_password = serializers.CharField(
        allow_blank=False, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'confirm_password']
        # read_only_fields = ['is_staff', 'is_superuser']
        # write_only_fields = ['password' 'confirm_password']

    def validate(self, data):
        """
        Checks to be sure that the received password and confirm_password
        fields are exactly the same
        """
        if not id:
            raise serializers.ValidationError("Id is null")
        if data['password'] != data.pop('confirm_password'):
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        password = validated_data.pop('password')
        user_instance = User.objects.create(**validated_data)
        user_instance.set_password(password)
        user_instance.save()
        return user_instance
