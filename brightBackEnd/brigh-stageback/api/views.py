from rest_framework import viewsets
from .models import Contestant
from .serializers import ContestantSerializer


class ContestantViewSet(viewsets.ModelViewSet):
    queryset = Contestant.objects.all()
    serializer_class = ContestantSerializer
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken
from google.auth.transport import requests as grequests
from google.oauth2 import id_token
from django.conf import settings

def google_login(request):
    token = request.GET.get("token")  # token from frontend
    if not token:
        return JsonResponse({"error": "Token missing"}, status=400)

    try:
        # Verify token with Google
        idinfo = id_token.verify_oauth2_token(token, grequests.Request(), settings.GOOGLE_CLIENT_ID)

        email = idinfo.get("email")
        name = idinfo.get("name")

        # Create or get user
        user, created = User.objects.get_or_create(username=email, defaults={"first_name": name})

        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        return JsonResponse({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "email": email,
            "name": name,
        })
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)




import uuid
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from google.oauth2 import id_token
from google.auth.transport import requests
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings



class GoogleLoginView(APIView):
    def post(self, request):
        token = request.data.get("token")

        if not token:
            return Response({"error": "Token is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            #  Verify token with Google
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), settings.GOOGLE_CLIENT_ID)

            email = idinfo.get("email")
            name = idinfo.get("name", "")
            picture = idinfo.get("picture", "")

            #  Fallback username if email not found
            username = email or f"user_{uuid.uuid4().hex[:10]}"

            #  Create or get user safely
            user, created = User.objects.get_or_create(
                username=username,
                defaults={
                    "email": email or "",
                    "first_name": name
                }
            )

            #  Generate JWT tokens
            refresh = RefreshToken.for_user(user)

            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": {
                    "email": user.email,
                    "name": user.first_name,
                    "picture": picture,
                }
            })

        except ValueError as e:
            return Response({"error": "Invalid token", "details": str(e)}, status=status.HTTP_400_BAD_REQUEST)