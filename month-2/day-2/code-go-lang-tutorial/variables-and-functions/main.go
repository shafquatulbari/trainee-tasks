package main

import "log"

func main() {
	var whatToSay string
	var saySomethingElse string
	var i int

	whatToSay, _ = saySomething("Hello, World!")
	log.Println(whatToSay)
	saySomethingElse, _ = saySomething("Goodbye, World!")
	log.Println(saySomethingElse)

	i = 7
	i = 8
	log.Println(i)

}

func saySomething(s string) (string, string) {
	return s, "World!"
}
