from rest_framework import serializers

from .models import Post


class PostListSerializer(serializers.ModelSerializer):
    # total_comments = serializers.IntegerField()
    # author_full_name = serializers.CharField()

    class Meta:
        model = Post
        fields = ['slug', 'title', 'short_description',
                  'published_on']


class PostDetailSerializer(serializers.ModelSerializer):
    # comments_list =
    # total_comments = serializers.IntegerField()
    # author_full_name = serializers.CharField()

    class Meta:
        model = Post
        fields = ['slug', 'title', 'body',
                  'published_on', 'short_description']
