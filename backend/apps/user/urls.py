from django.conf.urls import url
from django.urls import path, include
from . import views

app_name = 'user'

urlpatterns = [
    # path('all/', views.UserGetAllInfoView.as_view(), name='all_info'),
    path('signup/', views.UserSignupView.as_view(), name='sign_up'),
]
