from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View
from django.http import QueryDict

from .models import Room


class RoomView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request, room_id=None):
        if room_id:
            rooms = Room.get_by_id(3)
        else:
            rooms = Room.get_all()
        data = [room.to_dict() for room in rooms]
        return JsonResponse(data, status=200, safe=False)

    def post(self, request):
        pass

    def put(self, request, room_id):  # pylint: disable=no-self-use
        pass
        
    def delete(self, request):  # pylint: disable=no-self-use
        pass
