from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from .models import Teacher


class TeacherView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request, teacher_id=None):
        if teacher_id:
            teachers = Teacher.get_by_id(teacher_id)
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
