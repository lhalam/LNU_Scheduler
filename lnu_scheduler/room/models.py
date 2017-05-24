from __future__ import unicode_literals

from django.db import models


class Room(models.Model):
    name = models.CharField(default='', max_length=50)
    places = models.PositiveSmallIntegerField(default=0)

    @staticmethod
    def get_by_id(room_id):
        return Room.objects.filter(id=room_id)

    @staticmethod
    def get_by_name(room_name):
        return Room.objects.filter(name__contains=room_name)

    @staticmethod
    def get_by_places(room_places):
        return Room.objects.filter(places__gt=room_places)

    @staticmethod
    def get_all():
        return Room.objects.all()

    @staticmethod
    def add(room_name, room_places):
        obj = Room.objects.create(name=room_name, places=room_places)
        obj.save()

    @staticmethod
    def delete_by_name(room_name):
        Room.objects.filter(name=room_name).delete()
    
    @staticmethod
    def delete_by_id(room_id):
        Room.objects.filter(id=room_id).delete()

    def to_dict(self):
        data = {}
        data["id"] = self.id
        data["name"] = self.name
        data["places"] = self.places
        return data 
