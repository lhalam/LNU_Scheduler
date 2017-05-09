"""ToDo"""

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.ScheduleView.as_view(), name='schedule')#,
    #url(r'^post$', views.RoomView.as_view())
]