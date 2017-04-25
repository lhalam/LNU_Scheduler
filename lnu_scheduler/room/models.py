from __future__ import unicode_literals

from django.db import models


class Room(models.Model):
    name = models.CharField(default='', max_length=50)

    @staticmethod
    def get_by_id(room_id):
        try:
            room = self.objects.get(id=room_id)
        except self.DoesNotExist:
            return None
        return room

    @staticmethod
    def get_by_name(room_name):
        return self.objects.filter(name=room_name)

    @staticmethod
    def all():
        return self.objects.all()
