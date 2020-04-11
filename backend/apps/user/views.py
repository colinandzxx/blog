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
            return JsonResponse({'valid': True, 'status': 200, 'message': u"请登录到注册邮箱中验证用户，有效期为1个小时"})
        # 注册邮箱form验证失败
        return JsonResponse({'valid': False, 'status': 400, 'data': sigup_form.errors})


# 激活验证
def active_user(request, token):
    try:
        username = token_confirm.confirm_validate_token(token)
    except:
        username = token_confirm.remove_validate_token(token)
        users = User.objects.filter(username=username)
        for user in users:
            if user.is_active == False:
                user.delete()
                # return render(request, 'pc/message.html', {'message': u'对不起，验证链接已经过期，请重新<a href=\"' + unicode(settings.DOMAIN) + u'/register\">注册</a>'})
                return JsonResponse({'valid': False, 'status': 2300, 'message': u'对不起，验证链接已经过期，请重新注册'})
            else:
                # return render(request, 'pc/message.html', {'message': u'此账号已经验证过，请重新<a href=\"' + unicode(settings.DOMAIN) + u'/register\">注册</a>'})
                return JsonResponse({'valid': False, 'status': 2301, 'message': u'此账号已经验证过，请重新注册'})
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        # return render(request, 'pc/message.html', {'message': u'对不起，您所验证的用户不存在，请重新<a href=\"/register\">注册</a>'})
        return JsonResponse({'valid': False, 'status': 2004, 'message': u'对不起，您所验证的用户不存在，请重新注册'})
    user.is_active = True
    user.save()
    # msg = UserMessage()
    # msg.user = user
    # msg.to_user = User.objects.get(is_superuser=True)
    # msg.message = '欢迎加入本站,在使用过程中有什么疑问,请联系管理员'
    # msg.has_read = False
    # msg.is_supper = True
    # msg.save()
    # message = u'验证成功，请进行<a href=\"' + \
    #     unicode(settings.DOMAIN) + u'/login\">登录</a>操作'

    # return render(request, 'pc/message.html', {'message': message})
    return JsonResponse({'valid': True, 'status': 200, 'message': u'验证成功，请登录'})
