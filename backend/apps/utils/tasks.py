import random
from django.core.mail import send_mail
from blog.celery import app
from blog import settings


def random_str(randomlength=8):
    str = ""
    chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lenght = len(chars)-1
    for i in range(randomlength):
        str += chars[random.randint(0, lenght)]
    print(str)
    return str


@app.task()
def send_register_email(email, username=None, token=None):
    """
    登录注册等邮件发送
    :param email:
    :param username:
    :param token:
    :param send_type:
    :return:
    """
    code = random_str(4)
    email_title = ''
    email_body = ''

    email_title = '注册用户验证信息'
    email_body = "\n".join([u'{0},欢迎加入我的博客'.format(username), u'请访问该链接，完成用户验证,该链接1个小时内有效',
                            '/'.join([settings.DOMAIN, 'activate', token])])
    send_stutas = send_mail(email_title, email_body,
                            settings.EMAIL_HOST_USER, [email])
    print(send_stutas)
    if send_stutas:
        print('========发送成功')
        pass
