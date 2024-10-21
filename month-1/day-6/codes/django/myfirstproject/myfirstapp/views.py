from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
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
