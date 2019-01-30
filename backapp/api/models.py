from django.db import models
from datetime import datetime


class OwnerInfo(models.Model):
    title = models.CharField(max_length=300, blank=False)
    img = models.ImageField(upload_to='media/owner', blank=False)

    def __str__(self):
        return self.title

class OwnerAbout(models.Model):
    name = models.CharField(max_length=100, blank=False)
    details = models.TextField()
    def __str__(self):
        return self.name


class OwnerEducation(models.Model):
    instituer_name = models.CharField(max_length=200, blank=False)
    subject_name = models.CharField(max_length=200, blank=False)
    digree = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.instituer_name


class OwnerProject(models.Model):
    project_name = models.CharField(max_length=200, blank=False)
    title = models.CharField(max_length=200, blank=False)
    img = models.ImageField(upload_to='media/project', blank=False)
    description = models.TextField()
    tag = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.project_name


class OwnerSkill(models.Model):
    img = models.ImageField(upload_to='media/skill', blank=False)
    project_name = models.CharField(max_length=100, blank=False)
    compleat_project = models.ForeignKey(OwnerProject, on_delete=False)

    def __str__(self):
        return self.project_name


class TeamMember(models.Model):
    img = models.ImageField(upload_to='media/team', blank=False)
    member_name = models.CharField(max_length=100, blank=False)
    designation = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.member_name