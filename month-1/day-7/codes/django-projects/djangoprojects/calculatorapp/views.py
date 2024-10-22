from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, 'calculatorapp/index.html')

def submitquery(request):
    q = request.GET['query']
    try:
        answer = eval(q) # eval() function evaluates the “String” like a python expression and returns the result as an integer.
        mydictionary = {
            "query": q,
            "answer": answer,
            "error": False
        }
        return render(request, 'calculatorapp/index.html', context=mydictionary)
    except: 
        mydictionary = {
            "error": True,
            "query": q,
            "answer": "Invalid Query"
        }
        return render(request, 'calculatorapp/index.html', context=mydictionary)


