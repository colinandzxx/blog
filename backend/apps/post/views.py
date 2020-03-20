from rest_framework import generics

from .serializers import PostListSerializer, PostDetailSerializer
from .models import Post


class PostListView(generics.ListAPIView):
    queryset = Post.objects.filter(is_published=True)
    serializer_class = PostListSerializer
    lookup_field = 'slug'


class PostDetailView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    lookup_field = 'slug'
