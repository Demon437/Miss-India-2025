from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ContestantViewSet
from .views import *

router = DefaultRouter()
router.register(r'contestants', ContestantViewSet, basename='contestant')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/google/', google_login, name='google_login'),
path('user/google/', GoogleLoginView.as_view(), name='google-login'),
path("api/admin/login/", LoginAPIView.as_view(), name="fixed-login"),
]


