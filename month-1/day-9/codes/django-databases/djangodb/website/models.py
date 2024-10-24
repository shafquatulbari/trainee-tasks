from django.db import models

# Create your models here.
class Member(models.Model):
    #columns or fields in the table
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField()
    passwd = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self): #to display the name of the member in the admin panel
        return self.fname + " " + self.lname