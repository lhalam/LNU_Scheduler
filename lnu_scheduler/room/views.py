from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from .models import Room


class RoomView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request):
        if request.GET.get('id'):
            rooms = Room.get_by_id(request.GET.get('id'))
        elif request.GET.get('name'):
            rooms = Room.get_by_name(request.GET.get('name'))
        elif request.GET.get('places'):
            rooms = Room.get_by_places(request.GET.get('places'))
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
