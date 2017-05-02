"""ToDo"""

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.RoomView.as_view(), name='room')#,
    #url(r'^post$', views.RoomView.as_view())
]
