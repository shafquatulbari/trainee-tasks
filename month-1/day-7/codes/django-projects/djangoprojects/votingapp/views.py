from django.shortcuts import render
from django.http import HttpResponse

arr = ["Python", "Java", "C++", "JavaScript", "Ruby", "C#", "PHP", "HTML", "CSS", "SQL", "R", "Swift", "Kotlin", "Go", "Perl", "Scala", "Rust", "TypeScript", "Shell", "PowerShell", "Objective-C", "VBA", "Matlab", "Groovy", "Dart", "Lua", "Julia", "Haskell", "Delphi", "Assembly", "Visual Basic", "COBOL", "Ada", "Fortran", "Elixir", "Erlang", "Clojure", "F#", "Racket", "Scheme", "Prolog", "Lisp", "Smalltalk", "D", "Apex", "ABAP", "PL/SQL", "Transact-SQL", "Ada", "Forth", "Verilog", "VHDL", "LabVIEW", "Scratch", "Alice", "Kodu", "Blockly", "Snap!", "Pharo", "Pure Data", "Max/MSP", "ChucK", "SuperCollider", "OpenMusic", "Nyquist", "Csound", "FoxDot", "Sonic Pi", "TidalCycles", "Gibber", "Overtone", "Sonic Pi", "TidalCycles", "Gibber", "Overtone", "ChucK", "SuperCollider", "OpenMusic", "Nyquist", "Csound", "FoxDot", "Sonic Pi", "TidalCycles", "Gibber", "Overtone", "ChucK", "SuperCollider", "OpenMusic", "Nyquist", "Csound", "FoxDot", "Sonic Pi", "TidalCycles", "Gibber", "Overtone", "ChucK", "SuperCollider", "OpenMusic", "Nyquist", "Csound", "FoxDot", "Sonic Pi", "TidalCycles", "Gibber", "Overtone", "ChucK", "SuperCollider", "OpenMusic", "Nyquist", "Csound", "FoxDot", "Sonic Pi", "TidalCycles", "Gibber", "Overtone", "ChucK", "SuperCollider", "OpenMusic", "Nyquist", "Csound", "FoxDot", "Sonic Pi", "TidalCycles", "Gibber", "Overtone", "ChucK", "SuperCollider"]
globalcnt = dict()

# Create your views here.
def index(request):
    mydictionary = {
        "arr" : arr
    }
    return render(request,'votingapp/index.html',context=mydictionary)

def getquery(request):
    q = request.GET['languages']
    if q in globalcnt:
        # if already exist then increment the value
        globalcnt[q]=globalcnt[q]+1
    else:
        # first occurrence
        globalcnt[q]=1
    mydictionary = {
        "arr" : arr,
        "globalcnt" : globalcnt
    }
    return render(request,'votingapp/index.html',context=mydictionary)

def sortdata(request):
    global globalcnt
    globalcnt = dict(sorted(globalcnt.items(),key=lambda x:x[1],reverse=True))
    mydictionary = {
        "arr" : arr,
        "globalcnt" : globalcnt
    }
    return render(request,'votingapp/index.html',context=mydictionary)

     