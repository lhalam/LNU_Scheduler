"""lnu_scheduler URL Configuration"""

from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/01/room/', include('room.urls')),
    url(r'^api/01/subject/', include('subject.urls')),
    url(r'^api/01/teacher/', include('teacher.urls')),
]
