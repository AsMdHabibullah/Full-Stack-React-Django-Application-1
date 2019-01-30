from rest_framework import generics
from .models import *
from .serializers import *


class OwnerInfoApiViews(generics.ListAPIView):
    queryset = OwnerInfo.objects.all()
    serializer_class = OwnerInfoSerializer


class OwnerAboutApiViews(generics.ListAPIView):
    queryset = OwnerAbout.objects.all()
    serializer_class = OwnerAboutSerializer


class OwnerEducationViews(generics.ListAPIView):
    queryset = OwnerEducation.objects.all()
    serializer_class = OwnerEducationSerializer


class OwnerProjectApiViews(generics.ListAPIView):
    queryset = OwnerProject.objects.all()
    serializer_class = OwnerProjectSerializer


class ProjectDetailsApiViews(generics.RetrieveAPIView):
    queryset = OwnerProject.objects.all()
    serializer_class = OwnerProjectSerializer


class OwnerSkillApiViews(generics.ListAPIView):
    queryset = OwnerSkill.objects.all()
    serializer_class = OwnerSkillSerializer


class TeamMemberApiViews(generics.ListAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer