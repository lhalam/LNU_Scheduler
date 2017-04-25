"""lnu_scheduler URL Configuration"""

from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/01/room/', include('room.urls')),
]
