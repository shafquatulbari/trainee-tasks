from django.shortcuts import render
from .models import Member
from .forms import MemberForm

# Create your views here.
def home(request):
    #get all the members from the database
    all_members = Member.objects.all()
    #pass the members to the template
    return render(request, "home.html", {"all": all_members})

def join(request):
    #if the form is submitted
    if request.method == "POST":
        form = MemberForm(request.POST or None)
        #if the form is valid, we need the validation to be done
        if form.is_valid(): 
            #save the form to the database
            form.save()
        #redirect to the home page
        return render(request, "join.html", {})    
    else:
        return render(request, "join.html", {})