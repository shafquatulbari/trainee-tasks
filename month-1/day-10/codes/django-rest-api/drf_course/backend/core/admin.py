from django.contrib import admin
from .models import Contact

#register contacts to admin and lets it be visible in the admin panel
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'email')