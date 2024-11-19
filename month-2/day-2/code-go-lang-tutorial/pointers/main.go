package main

import "log"

func main() {
	var myString string
	myString = "Green"

	log.Println("myString is set to", myString)

	changeUsingPointer(&myString) // The ampersand is used to pass the memory address of the variable
	log.Println("After changeUsingPointer, myString is set to", myString)

}

func changeUsingPointer(s *string) {
	newValue := "Red"
	*s = newValue
}
