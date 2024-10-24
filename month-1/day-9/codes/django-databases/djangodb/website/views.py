from django.shortcuts import render, redirect
from .models import Member
from .forms import MemberForm
from django.contrib import messages

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
        else:
            fname = request.POST.get("fname")
            lname = request.POST.get("lname")
            email = request.POST.get("email")
            passwd = request.POST.get("passwd")
            age = request.POST.get("age")
            #if the form is invalid, redirect to the join
            messages.error(request, "Invalid form submission, try again!")
            return render(request, "join.html", {"fname": fname, "lname": lname, "email": email, "passwd": passwd, "age": age})
        #redirect to the home page
        messages.success(request, "You have successfully joined the club!")
        return redirect("home")
    else:
        return render(request, "join.html", {})
    
