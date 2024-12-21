from django.urls import path
from .views import FakeOrder

urlpatterns = [
   path('fake-order/', FakeOrder.as_view(), name='fake-order'),
]
