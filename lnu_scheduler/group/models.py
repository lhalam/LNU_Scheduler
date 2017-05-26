from __future__ import unicode_literals

from django.db import models


class Group(models.Model):
    name = models.CharField(default='', max_length=20)
    students = models.PositiveSmallIntegerField(default=0)

    @staticmethod
    def get_by_id(group_id):
        return Group.objects.filter(id=group_id)

    @staticmethod
    def get_by_name(group_name):
        return Group.objects.filter(name__contains=group_name)

    @staticmethod
    def get_by_places(group_students):
        return Group.objects.filter(students__gt=group_students)

    @staticmethod
    def get_all():
        return Group.objects.all()

    @staticmethod
    def add(group_name, group_students):
        obj = Group.objects.create(name=group_name, students=group_students)
        obj.save()

    @staticmethod
    def delete_by_name(group_name):
        Group.objects.filter(name=group_name).delete()
    
    @staticmethod
    def delete_by_id(group_id):
        Group.objects.filter(id=group_id).delete()

    def to_dict(self):
        data = {}
        data["id"] = self.id
        data["name"] = self.name
        data["students"] = self.students
        return data 
