"""ToDo"""

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.TeacherView.as_view(), name='teacher')#,
    #url(r'^post$', views.RoomView.as_view())
]