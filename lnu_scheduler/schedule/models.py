from __future__ import unicode_literals

from django.db import models

from room.models import Room
from subject.models import Subject
from teacher.models import Teacher

DAYS_OF_WEEK = (
('1', 'Monday'),
('2', 'Tuesday'),
('3', 'Wednesday'),
('4', 'Thursday'),
('5', 'Friday'),
('6', 'Saturday'),
('7', 'Sunday'),
)

LESSON_NUMBER = (
('1', '8:30-9:50'),
('2', '10:10-11:30'),
('3', '11:50-13:10'),
('4', '13:30-14:50'),
('5', '15:05-16:25'),
('6', '16:40-18:00'),
('7', '18:10-19:30'),
('8', '19:40-21:00'),
)

class Schedule(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    day = models.CharField(max_length=1, choices=DAYS_OF_WEEK)
    lesson = models.CharField(max_length=1, choices=LESSON_NUMBER)

    @staticmethod
    def get_by_id(item_id):
        return Schedule.objects.filter(id=item_id)

    @staticmethod
    def get_all():
        return Schedule.objects.all()

    def delete_by_id(item_id):
        Schedule.objects.filter(id=item_id).delete()

    def to_dict(self):
        data = {}
        data["id"] = self.id
        data["subject"] = self.subject.to_dict()
        data["room"] = self.room.to_dict()
        data["teacher"] = self.teacher.to_dict()
        data["day"] = self.day
        data["lesson"] = self.lesson
        return data 
