from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import viewsets, mixins, status, permissions, generics
from rest_framework.response import Response
from django.http import Http404, HttpResponse, JsonResponse, HttpResponseRedirect
from rest_framework.permissions import IsAuthenticated

from apps.utils.permissions import IsOwnerOrReadOnly
from apps.utils.EmailToken import token_confirm
from apps.utils.tasks import send_register_email

from .models import User
from .serializers import UserSerializer, UserSignUpSerializer
from .forms import UserSignupForm


# class UserGetAllInfo(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
# class UserGetAllInfoView(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
class UserGetAllInfoView(generics.ListAPIView):
    queryset = User.objects.all()
    # queryset = User.objects.get_queryset().order_by('id')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [
        JSONWebTokenAuthentication, SessionAuthentication]
    # ordering = 'username'
    # pagination_class = StandardResultsSetPagination


class UserSignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignUpSerializer

    def post(self, request):
        # 实例化form
        sigup_form = UserSignupForm(request.POST)
        if sigup_form.is_valid():
            # 这里注册时前端的name为email
            # user_name = request.POST.get("email", "")
            # if UserProfile.objects.filter(email=user_name):
            #     return render(
            #         request, "register.html", {
            #             "register_form": register_form, "msg": "用户已经存在"})
            # pass_word = request.POST.get("password", "")

            # 实例化一个user_profile对象，将前台值存入
            # user_profile = UserProfile()
            # user_profile.username = user_name
            # user_profile.email = user_name

            # # 默认激活状态为false
            # user_profile.is_active = False

            # # 加密password进行保存
            # user_profile.password = make_password(pass_word)
            # user_profile.save()

            # 写入欢迎注册消息
            # user_message = UserMessage()
            # user_message.user = user_profile.id
            # user_message.message = "欢迎注册mtianyan慕课小站!!"
            # user_message.save()

            # 发送注册激活邮件
            # send_register_eamil(user_name, "register")

            # 跳转到登录页面
            # return render(request, "login.html", )

            serializer = UserSignUpSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()

            username = request.POST.get("username", "")
            email = request.POST.get("email", "")
            token = token_confirm.generate_validate_token(username)
            send_register_email.delay(
            # send_register_email(
                email=email, username=username, token=token)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # 注册邮箱form验证失败
        return JsonResponse({'status': 400, 'data': sigup_form.errors, 'valid': False})
