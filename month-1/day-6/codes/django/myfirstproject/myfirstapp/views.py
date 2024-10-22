from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .forms import * # import FeedBackForm from forms module
import re

# Create your views here.
def error_404_view(request, exception):
    return render(request, '404.html')

def myfunctioncall(request):
    return HttpResponse("Hello, World!")

def myfunctionabout(request):
    return HttpResponse("About Response")

def add(request, a, b):
    return HttpResponse(f"Sum of {a} and {b} is {a+b}")

def intro(request, name, age):
    mydictionary = {
        "name": name,
        "age": age
    }
    return JsonResponse(mydictionary)

def myfirstpage(request):
    return render(request, 'index.html')

def mysecondpage(request):
    return render(request, 'second.html')

def mythirdpage(request):
    var = "Hello, World!"
    greeting = "Welcome to the world of Django!"
    fruits = ['apple', 'mango', 'banana']
    num1, num2 = 3,5
    ans = num1 > num2
    print(ans)
    mydictionary = {
        "var": var,
        "msg": greeting,
        "myfruits": fruits,
        "num1": num1,
        "num2": num2,
        "ans": ans
    }
    return render(request, 'third.html', context = mydictionary)

def myimagepage(request):
    return render(request, 'imagepage.html')

def myformpage(request):
    return render(request, 'myformpage.html')

def myform2(request):
    if request.method == 'POST':
        form = FeedBackForm(request.POST)
        if form.is_valid():
            title = request.POST['title']
            subject = request.POST['subject']
            email = request.POST['email']
            mydictionary = {
                "form": FeedBackForm()
            }
            errorflag = False
            Errors = []
            if title != title.upper(): 
                errorflag = True
                errormsg = "Title should be in uppercase"
                Errors.append(errormsg)
            regex = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" # regular expression for email
            if not re.search(regex,email):
                errorflag = True
                errormsg = "Email is not valid"
                Errors.append(errormsg)
            if errorflag != True:
                mydictionary["success"] = True
                mydictionary["successmsg"] = "Form submitted"
            mydictionary["error"] = errorflag
            mydictionary["errors"] = Errors
            return render(request, 'myform2.html', context=mydictionary)
    elif request.method == 'GET':
        form = FeedBackForm() #FeedBackForm(None)
        mydictionary = {
            "form": form
        }
        return render(request, 'myform2.html', context=mydictionary)
    