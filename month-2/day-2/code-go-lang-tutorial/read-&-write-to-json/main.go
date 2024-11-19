package main

import (
	"encoding/json"
	"log"
)

type Person struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	HairColor string `json:"hair_color"`
	HasDog    bool   `json:"has_dog"`
}

func main() {
	myJson := `
	[
	{
		"first_name": "Clark",
		"last_name": "Kent",
		"hair_color": "black",
		"has_dog": true
	},
	{
		"first_name": "Bruce",
		"last_name": "Wayne",
		"hair_color": "black",
		"has_dog": false
		}
	]`
	var unmarshalled []Person

	// Unmarshal the JSON into the unmarshalled variable using the json.Unmarshal
	//function and the []byte() function to convert the string to a byte slice ([]byte)
	//and the & operator to pass the address of the unmarshalled variable
	err := json.Unmarshal([]byte(myJson), &unmarshalled)
	if err != nil {
		println("error:", err)
	}

	log.Printf("unmarshalled: %v", unmarshalled)

	// write json from a struct
	var mySlice []Person
	var m1 Person
	m1.FirstName = "Wally"
	m1.LastName = "West"
	m1.HairColor = "red"
	m1.HasDog = true

	mySlice = append(mySlice, m1)

	m2 := Person{
		FirstName: "Diana",
		LastName:  "Prince",
		HairColor: "black",
		HasDog:    false,
	}

	mySlice = append(mySlice, m2)

	//convert to json
	newJson, err := json.MarshalIndent(mySlice, "", "    ")
	if err != nil {
		println("error:", err)
	}

	log.Printf("newJson: %s", newJson)
}
