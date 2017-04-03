from django.http import HttpResponse, JsonResponse
from django.views.generic.base import View

from room.models import Room


class RoomView(View):
    """Service view handles GET, POST, PUT, DELETE requests."""

    def get(self, request, room_id=None):
        data = [{'id': 1, 'name': "119a"},
                {'id': 2, 'name': "118a"}]
        # if room_id:
        #     data = Room.get_by_id(room_id)
        # else:
        #     data = Room.all()
        return JsonResponse(data, status=200)

    def post(self, request):
        pass

    def put(self, request, room_id):  # pylint: disable=no-self-use
        pass

    def delete(self, request, room_id):  # pylint: disable=no-self-use
        pass
