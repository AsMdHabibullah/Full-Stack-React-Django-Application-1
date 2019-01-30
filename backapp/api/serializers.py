from rest_framework import serializers
from .models import *

class OwnerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerInfo
        fields = ('__all__')

class OwnerAboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerAbout
        fields = ('__all__')

class OwnerEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerEducation
        fields = ('__all__')

class OwnerProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerSkill
        fields = ('__all__')

class OwnerSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = OwnerSkill
        fields = ('__all__')

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ('__all__')
