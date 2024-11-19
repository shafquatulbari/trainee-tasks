package main

import "log"

type User struct {
	FirstName string
	LastName  string
}

func main() {
	myMap := make(map[string]string) // map[keyType]valueType -> map[string]string -> map of strings
	myMap["dog"] = "Samson"
	log.Println(myMap["dog"])

	myMap2 := make(map[string]User) // map[keyType]valueType -> map[string]User -> map of Users

	myMap["other-dog"] = "Cassie"
	log.Println(myMap["other-dog"])

	me := User{
		FirstName: "John",
		LastName:  "Doe",
	}

	myMap2["me"] = me
	log.Println(myMap2["me"].FirstName)

	// Arrays are called slices in Go
	var mySlice []string // slice of strings
	mySlice = append(mySlice, "dog")

	log.Println(mySlice)

	mySlice2 := []string{"dog", "cat", "bird"} // slice of strings
	log.Println(mySlice2)

}
