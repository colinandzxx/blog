from django.shortcuts import render
from rest_framework.authentication import SessionAuthentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import viewsets, mixins, status, permissions, generics
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated
from apps.utils.permissions import IsOwnerOrReadOnly

from .models import User
from .serializers import UserSerializer, UserSignUpSerializer
from .forms import UserSignupForm


# class UserGetAllInfo(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
# class UserGetAllInfoView(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
class UserGetAllInfoView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated, ]
    # authentication_classes = [
    #     JSONWebTokenAuthentication, SessionAuthentication]
    # pagination_class = StandardResultsSetPagination

    # def get_permissions(self):
    #     if self.action == 'list':
    #         return []
    #     elif self.action == 'retrieve':
    #         return []
    #     else:
    #         return [IsAuthenticated(), IsOwnerOrReadOnly()]


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
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        # 注册邮箱form验证失败
        else:
            # return render(
            #     request, "register.html", {
            #         "register_form": register_form})
            return Response(sigup_form.errors, status=status.HTTP_400_BAD_REQUEST)
