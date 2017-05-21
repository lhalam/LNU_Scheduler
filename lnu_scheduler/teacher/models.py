from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Teacher(models.Model):
    name = models.CharField(default='', max_length=20)
    surname = models.CharField(default='', max_length=20)

    @staticmethod
    def get_by_id(teacher_id):
        return Teacher.objects.filter(id=teacher_id)

    @staticmethod
    def get_by_name(teacher_name):
        return Teacher.objects.filter(name__contains=teacher_name)

    @staticmethod
    def get_by_surname(teacher_surname):
        return Teacher.objects.filter(surname__contains=teacher_surname)

    @staticmethod
    def get_all():
        return Teacher.objects.all()

    def delete_by_id(teacher_id):
        Teacher.objects.filter(id=teacher_id).delete()

    def to_dict(self):
        data = {}
        data["id"] = self.id
        data["name"] = self.name
        data["surname"] = self.surname
        return data 
