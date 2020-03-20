from django.urls import path

from . import views

app_name = 'post'

urlpatterns = [
    path('', views.PostListView.as_view()),
    path('view/<slug>/', views.PostDetailView.as_view(), name='post-detail')
]
