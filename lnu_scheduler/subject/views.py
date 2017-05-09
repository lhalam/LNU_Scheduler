from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from .models import Subject


class SubjectView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request, subject_id=None):
        if subject_id:
            subjects = Subject.get_by_id(subject_id)
        else:
            subjects = Subject.get_all()
        data = [subject.to_dict() for subject in subjects]
        return JsonResponse(data, status=200, safe=False)

    def post(self, request):
        pass

    def put(self, request, room_id):  # pylint: disable=no-self-use
        pass
        
    def delete(self, request):  # pylint: disable=no-self-use
        pass
