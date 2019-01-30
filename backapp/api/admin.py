from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(OwnerInfo)
admin.site.register(OwnerAbout)
admin.site.register(OwnerEducation)
admin.site.register(OwnerProject)
admin.site.register(OwnerSkill)
admin.site.register(TeamMember)