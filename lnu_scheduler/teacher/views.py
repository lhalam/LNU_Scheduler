from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from .models import Teacher


class TeacherView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request):
        if request.GET.get('action')=='add':
            Teacher.add(request.GET.get('first_name'), request.GET.get('middle_name'), request.GET.get('last_name'))
            teachers = Teacher.get_all()
        elif request.GET.get('action')=='remove':
            Teacher.delete_by_name(request.GET.get('first_name'))
            teachers = Teacher.get_all()
        else:
            if request.GET.get('id'):
                teachers = Teacher.get_by_id(request.GET.get('id'))
            elif request.GET.get('first_name'):
                teachers = Teacher.get_by_first_name(request.GET.get('first_name'))
            elif request.GET.get('middle_name'):
                teachers = Teacher.get_by_middle_name(request.GET.get('middle_name'))
            elif request.GET.get('last_name'):
                teachers = Teacher.get_by_middle_name(request.GET.get('middle_name'))
            else:
                teachers = Teacher.get_all()
        data = [teacher.to_dict() for teacher in teachers]
        return JsonResponse(data, status=200, safe=False)

    def post(self, request):
        pass

    def put(self, request, teacher_id):  # pylint: disable=no-self-use
        pass
        
    def delete(self, request):  # pylint: disable=no-self-use
        pass
