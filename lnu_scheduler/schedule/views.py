from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from .models import Schedule


class ScheduleView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request, item_id=None):
        if item_id:
            item = Schedule.get_by_id(item_id)
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
