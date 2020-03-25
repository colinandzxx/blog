from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
from .forms import UserSignupForm


class UserAdmin(BaseUserAdmin):
    model = User
    # form = UserChangeForm
    add_form = UserSignupForm

    list_display = ('username', 'email', 'mobile', 'is_active')
    list_filter = ('is_active', 'is_staff', 'is_superuser')

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'mobile', 'password', 'confirm_password')}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()


admin.site.register(User, UserAdmin)
