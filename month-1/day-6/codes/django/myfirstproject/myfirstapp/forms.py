from django import forms 

class FeedBackForm(forms.Form):
    title = forms.CharField(label='Title', max_length=50, widget=forms.TextInput(attrs={'class': 'form-control'})) #attrs={'class': 'form-control'} is used to add bootstrap class to the form
    subject = forms.CharField(label='Subject Description', max_length=200 , widget=forms.Textarea(attrs={'class': 'form-control'})) #attrs={'class': 'form-control'} is used to add bootstrap class to the form
    email = forms.CharField(label='Email', max_length=50, widget=forms.TextInput(attrs={'class': 'form-control'})) #attrs={'class': 'form-control'} is used to add bootstrap class to the form
    
