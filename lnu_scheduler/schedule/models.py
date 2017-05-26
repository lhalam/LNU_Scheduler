from __future__ import unicode_literals

from django.db import models

from room.models import Room
from group.models import Group
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

SUBJECT_NUMBER = (
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
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    day = models.CharField(max_length=1, choices=DAYS_OF_WEEK)
    sub_number = models.CharField(max_length=1, choices=SUBJECT_NUMBER)

    @staticmethod
    def get_by_id(item_id):
        return Schedule.objects.filter(id=item_id)

    @staticmethod
    def get_by_subject(item_sub):
        return Schedule.objects.filter(subject__contains=item_sub)

    @staticmethod
    def get_by_room(item_room):
        return Schedule.objects.filter(room__name=item_room)

    @staticmethod
    def get_by_group(item_group):
        return Schedule.objects.filter(group__name=item_group)

    @staticmethod
    def get_by_teacher(item_teacher):
        return Schedule.objects.filter(teacher__contains=item_teacher)

    @staticmethod
    def get_by_day(item_day):
        return Schedule.objects.filter(day=item_day)

    @staticmethod
    def get_by_sub_number(item_num):
        return Schedule.objects.filter(sub_number=item_num)

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
        data["group"] = self.group.to_dict()
        data["teacher"] = self.teacher.to_dict()
        data["day"] = self.day
        data["sub_number"] = self.sub_number
        return data 
