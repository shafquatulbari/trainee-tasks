package main

import (
	"fmt"
	"myniceprogram/helpers"
	"log"
)

func main() {
	fmt.Println("Hello, World!")

	var myVar helpers.SomeType
	myVar.TypeName = "Some Name"
	log.Println(myVar.TypeName)
}