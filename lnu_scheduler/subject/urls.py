"""ToDo"""

from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.SubjectView.as_view(), name='subject')#,
    #url(r'^post$', views.RoomView.as_view())
]