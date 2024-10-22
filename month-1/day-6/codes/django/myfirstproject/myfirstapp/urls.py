from django.urls import path, include
from . import views # import views module from current directory

urlpatterns = [
    path('', views.myfunctioncall, name='index'), # call myfunctioncall from views module
    path('about', views.myfunctionabout, name='about'), # call about from views module
    path('add/<int:a>/<int:b>', views.add, name='add'), # call add from views module
    path('intro/<str:name>/<int:age>', views.intro, name='intro'), # call intro from views module
    path('myfirstpage/', views.myfirstpage, name='myfirstpage'), # call myfirstpage from views module
    path('mysecondpage/', views.mysecondpage, name='mysecondpage'), # call mysecondpage from views module
    path('mythirdpage/', views.mythirdpage, name='mythirdpage'), # call mythirdpage from views module
    path('myimagepage/', views.myimagepage, name='myimagepage'), # call myimagepage from views module
    path('myformpage/', views.myformpage, name='myformpage'), # call myform from views module
    path('myform2', views.myform2, name='myform2'), # call myform2 from views module
]   