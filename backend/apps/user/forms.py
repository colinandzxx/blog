from django import forms
from .models import User


class UserSignupForm(forms.ModelForm):
    """Sign Up"""
    email = forms.EmailField(required=True)
    password = forms.CharField(max_length=32, required=True, min_length=8, widget=forms.PasswordInput())
    # password = forms.CharField(widget=forms.PasswordInput())
    password1 = forms.CharField(max_length=32, required=True, min_length=8, widget=forms.PasswordInput())

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password1']

    def clean(self):
        clend = super(UserSignupForm, self).clean()
        password = clend.get('password')
        password1 = clend.get('password1')
        if password != password1:
            self._errors['password'] = '两次密码不一样'
        return clend
