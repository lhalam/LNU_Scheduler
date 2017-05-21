from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from .models import Schedule


class ScheduleView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request):
        if request.GET.get('id'):
            items = Schedule.get_by_id(request.GET.get('id'))
        elif request.GET.get('subject'):
            items = Schedule.get_by_subject(request.GET.get('subject'))
        elif request.GET.get('teacher'):
            items = Schedule.get_by_teacher(request.GET.get('teacher'))
        elif request.GET.get('room'):
            items = Schedule.get_by_room(request.GET.get('room'))
        elif request.GET.get('day'):
            items = Schedule.get_by_day(request.GET.get('day'))
        elif request.GET.get('subject_number'):
            items = Schedule.get_by_sub_number(request.GET.get('subject_number'))
        else:
            items = Schedule.get_all()
        data = [item.to_dict() for item in items]
        return JsonResponse(data, status=200, safe=False)

    def post(self, request):
        pass

    def put(self, request, subject_id):  # pylint: disable=no-self-use
        pass
        
    def delete(self, request):  # pylint: disable=no-self-use
        pass
