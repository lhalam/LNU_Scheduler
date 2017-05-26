"""ToDo"""

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.GroupView.as_view(), name='group')#,
    #url(r'^post$', views.RoomView.as_view())
]
