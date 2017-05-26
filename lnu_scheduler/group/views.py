from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from .models import Group


class GroupView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request):
        if request.GET.get('action')=='add':
            Group.add(request.GET.get('name'), request.GET.get('students'))
            groups = Group.get_all()
        elif request.GET.get('action')=='remove':
            Group.delete_by_name(request.GET.get('name'))
            groups = Group.get_all()
        else:
            if request.GET.get('id'):
                groups = Group.get_by_id(request.GET.get('id'))
            elif request.GET.get('name'):
                groups = Group.get_by_name(request.GET.get('name'))
            elif request.GET.get('students'):
                groups = Group.get_by_places(request.GET.get('students'))
            else:
                groups = Group.get_all()
        data = [group.to_dict() for group in groups]
        return JsonResponse(data, status=200, safe=False)

    def post(self, request):
        pass

    def put(self, request, group_id):  # pylint: disable=no-self-use
        pass
        
    def delete(self, request):  # pylint: disable=no-self-use
        pass
