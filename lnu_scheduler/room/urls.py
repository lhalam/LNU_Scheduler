"""ToDo"""

from django.conf.urls import url

from room.views import RoomView

urlpatterns = [
    url(r'^$', RoomView.as_view(), name='room'),
]
