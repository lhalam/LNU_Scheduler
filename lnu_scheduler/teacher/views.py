from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from .models import Teacher


class TeacherView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request):
        if request.GET.get('id'):
            teachers = Teacher.get_by_id(request.GET.get('id'))
        elif request.GET.get('name'):
            teachers = Teacher.get_by_name(request.GET.get('name'))
        elif request.GET.get('surname'):
            teachers = Teacher.get_by_surname(request.GET.get('surname'))
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
