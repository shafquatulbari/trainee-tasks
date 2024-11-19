package main

import (
	"log"
	"time"
)

func main() {
	user := User{ // the := operator is used to declare and initialize a variable at the same time in Go (this is called a short variable declaration)
		FirstName:   "John",
		LastName:    "Doe",
		PhoneNumber: "555-555-5555",
		Age:         25,
		BirthDate:   time.Date(1995, time.January, 1, 0, 0, 0, 0, time.UTC),
	}
	log.Println(user)
	log.Println(user.FirstName) //accessing a field of a struct
	log.Println(user.LastName)  //accessing a field of a struct

}

type User struct {
	FirstName   string
	LastName    string
	PhoneNumber string
	Age         int
	BirthDate   time.Time
}
