from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Subject(models.Model):
    title = models.CharField(default='', max_length=80)

    @staticmethod
    def get_by_id(sub_id):
        return Subject.objects.filter(id=sub_id)

    @staticmethod
    def get_by_title(sub_title):
        return Subject.objects.filter(title__contains=sub_title)

    @staticmethod
    def get_all():
        return Subject.objects.all()

    @staticmethod
    def add_by_title(sub_title):
        obj = Subject.objects.create(title=sub_title)
        obj.save()

    @staticmethod
    def delete_by_title(sub_title):
        Subject.objects.filter(title=sub_title).delete()

    def to_dict(self):
        data = {}
        data["id"] = self.id
        data["title"] = self.title
        return data 
