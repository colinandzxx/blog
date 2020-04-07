"""blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_jwt.views import obtain_jwt_token
# from rest_auth.registration.views import VerifyEmailView, RegisterView

from rest_framework import routers

from apps.user.views import UserGetAllInfoView

router = routers.DefaultRouter()
router.register('users', UserGetAllInfoView)

urlpatterns = [
    # path('accounts/', include('allauth.urls')),
    path('admin/', admin.site.urls),
    path('user/', include('apps.user.urls')),

    # path('auth/', include('rest_auth.urls')),
    # path('auth/registration/', include('rest_auth.registration.urls')),

    # # path('auth/registration/', RegisterView.as_view(), name='account_signup'),
    # re_path(r'^account-confirm-email/$', VerifyEmailView.as_view(),
    #         name='account_email_verification_sent'),
    # re_path(r'^account-confirm-email/(?P<key>[-:\w]+)/$', VerifyEmailView.as_view(),
    #         name='account_confirm_email'),

    path('posts/', include('apps.post.urls')),

    path('login/', obtain_jwt_token),
    path('api/', include(router.urls)),
]
