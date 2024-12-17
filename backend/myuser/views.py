from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
   return HttpResponse("Hello, new restaunrant")

# views.py
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def login_user(request):
    print(request.body)
    if request.method == 'POST':
        data = json.loads(request.body)
        username_or_email = data.get("username")
        password = data.get("password")

        # Check if username_or_email is email or username
        if '@' in username_or_email:
            user = authenticate(request, email=username_or_email, password=password)
        else:
            user = authenticate(request, username=username_or_email, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse({"message": "Login successful"})
        else:
            return JsonResponse({"message": "Invalid credentials"}, status=400)

    return JsonResponse({"message": "Invalid request"}, status=400)

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")
        
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()

        return JsonResponse({"message": "User created successfully"})
    
    return JsonResponse({"message": "Invalid request"}, status=400)
