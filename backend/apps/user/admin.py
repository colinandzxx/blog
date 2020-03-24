from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
from .forms import UserSignupForm


class UserAdmin(BaseUserAdmin):
    add_form = UserSignupForm

    list_display = ('username', 'email', 'phone', 'is_admin')
    list_filter = ('is_admin',)

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'phone', 'password1', 'password2')}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ()


admin.site.register(User, BaseUserAdmin)
