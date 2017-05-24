from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Teacher(models.Model):
    first_name = models.CharField(default='', max_length=20)
    middle_name = models.CharField(default='', max_length=20)
    last_name = models.CharField(default='', max_length=20)

    @staticmethod
    def get_by_id(teacher_id):
        return Teacher.objects.filter(id=teacher_id)

    @staticmethod
    def get_by_first_name(teacher_fname):
        return Teacher.objects.filter(first_name__contains=teacher_fname)

    @staticmethod
    def get_by_middle_name(teacher_mname):
        return Teacher.objects.filter(middle_name__contains=teacher_mname)

    @staticmethod
    def get_by_last_name(teacher_lname):
        return Teacher.objects.filter(last_name__contains=teacher_lname)

    @staticmethod
    def get_all():
        return Teacher.objects.all()

    @staticmethod
    def add(t_f_n, t_m_n, t_l_n):
        obj = Teacher.objects.create(first_name=t_f_n, middle_name=t_m_n, last_name=t_l_n)
        obj.save()

    @staticmethod
    def delete_by_name(t_f_n):
        Teacher.objects.filter(first_name=t_f_n).delete()

    @staticmethod
    def delete_by_id(teacher_id):
        Teacher.objects.filter(id=teacher_id).delete()

    def to_dict(self):
        data = {}
        data["id"] = self.id
        data["first_name"] = self.first_name
        data["middle_name"] = self.middle_name
        data["last_name"] = self.last_name
        return data 
