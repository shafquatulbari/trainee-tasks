package main

func main() {

	// for loop
	for i := 0; i < 5; i++ {
		println(i)
	}

	// while loop
	j := 0
	for j < 5 {
		println(j)
		j++
	}

	// Only for loop in Go

	mySlice := []string{"dog", "cat", "fish", "bird", "hamster"}

	// _ is the index, value is the value, _ is used to ignore the index
	for _, value := range mySlice {
		println(value)
	}

	myMap := map[string]string{
		"dog":     "woof",
		"cat":     "meow",
		"fish":    "blub",
		"bird":    "tweet",
		"hamster": "squeak",
	}

	for key, value := range myMap {
		println(key, value)
	}

}
