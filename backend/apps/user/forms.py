from django import forms
from django.utils.translation import ugettext, ugettext_lazy as _
from .models import User


class UserSignupForm(forms.ModelForm):
    """Sign Up"""
    email = forms.EmailField(required=True, help_text=_('Required. A valid email address, please.'))
    password = forms.CharField(max_length=32, required=True,
                               min_length=8, widget=forms.PasswordInput, label=_('password'), help_text=_('Required'))
    # password = forms.CharField(widget=forms.PasswordInput())
    confirm_password = forms.CharField(max_length=32, required=True,
                                       min_length=8, widget=forms.PasswordInput, label=_('password confirmation'), help_text=_('Required'))

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def clean_confirm_password(self):
        # clend = super(UserSignupForm, self).clean()
        # password1 = clend.get('password1')
        # password2 = clend.get('password2')
        password = self.cleaned_data.get("password")
        confirm_password = self.cleaned_data.get("confirm_password")
        if password and confirm_password and password != confirm_password:
            raise forms.ValidationError("Passwords do not match")
        return password

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_active = False
        user.set_password(self.cleaned_data["password"])
        if commit:
            user.save()
        return user
