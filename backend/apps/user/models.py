import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    # 自定义的性别选择规则
    GENDER_CHOICES = (
        ("male", u"男"),
        ("female", u"女")
    )

    id = models.UUIDField(primary_key=True, unique=True, default=uuid.uuid4)
    # name = models.CharField(
    #     max_length=60, unique=True, verbose_name='account name', default='')    
    email = models.EmailField(unique=True, default='')
    gender = models.CharField(
        max_length=6,
        verbose_name=u"性别",
        choices=GENDER_CHOICES,
        default="male")
    mobile = models.CharField(
        max_length=11, null=True, blank=True, verbose_name='phone number')
    # 昵称
    nick_name = models.CharField(
        max_length=50, null=True, blank=True, verbose_name="nick")
    info = models.CharField(
        max_length=300, null=True, blank=True, verbose_name='self introduction')
    user_imag = models.ImageField(
        upload_to='user/%Y%m%d', blank=True, null=True, default='', verbose_name=u'用户头像')
    user_image = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name

    # meta信息，即后台栏目名
    class Meta:
        verbose_name = "user info"
        verbose_name_plural = "users info"
        # 获取用户未读消息的数量
