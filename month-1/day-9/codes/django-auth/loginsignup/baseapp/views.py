from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required

@login_required #decorator to check if user is logged in
def home(request):
    return render(request, "home.html") #after successful login, user will be redirected to home page

# Create your views here.
def authView(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST or None)
        if form.is_valid():
            form.save()
    else:   
        form = UserCreationForm()
    return render(request, "registration/signup.html", {"form":form})