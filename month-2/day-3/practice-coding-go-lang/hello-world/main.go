package main

import (
	"errors"
	"fmt"
	"net/http"
)

const portNumber = ":8080"

// Home is a function that returns "Hello World!"
func Home(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello World!"))
}

// About is a function that returns the sum of two integers
func About(w http.ResponseWriter, r *http.Request) {
	sum := AddValues(5, 5)
	_, _ = fmt.Fprint(w, "The sum of 5 + 5 is: ", sum)
}

// AddValues is a function that takes two integers and returns the sum of them
func AddValues(x, y int) int {
	return x + y
}

func Divide(w http.ResponseWriter, r *http.Request) {
	f, err := DivideValues(100.0, 10.0)
	if err != nil {
		fmt.Fprintf(w, "Cannot divide by zero")
		return
	}
	fmt.Fprintf(w, fmt.Sprintf("%f divided by %f is %f", 100.0, 10.0, f))
}

func DivideValues(x, y float32) (float32, error) {
	if y <= 0 {
		err := errors.New("Cannot divide by zero")
		return 0, err
	}
	return x / y, nil
}

// main is the entry point of the program
func main() {
	http.HandleFunc("/", Home)
	http.HandleFunc("/about", About)
	http.HandleFunc("/divide", Divide)

	fmt.Println(fmt.Sprintf("Starting application on port %s", portNumber))

	http.ListenAndServe(portNumber, nil)
}
