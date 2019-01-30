from django.urls import  path
from .views import *

urlpatterns = [
    path('', OwnerInfoApiViews.as_view(), name='info'),
    path('about/', OwnerAboutApiViews.as_view(), name='about'),
    path('education/', OwnerEducationViews.as_view(), name='education'),
    path('project/', OwnerProjectApiViews.as_view(), name='project'),
    path('details/<int:pk>', ProjectDetailsApiViews.as_view(), name='details'),
    path('skill/', OwnerSkillApiViews.as_view(), name='skill'),
    path('team/', TeamMemberApiViews.as_view(), name='team'),
]