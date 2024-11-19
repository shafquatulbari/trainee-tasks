package main

import (
	"errors"
	"log"
)

func main() {
	result, err := divide(10, 0)
	if err != nil {
		println(err.Error())
	} else {
		log.Printf("result of division: %v", result)
	}
	result, err = divide(10, 2)
	if err != nil {
		println(err.Error())
	} else {
		log.Printf("result of division: %v", result)
	}

}

func divide(x, y float32) (float32, error) {
	var result float32

	if y == 0 {
		return result, errors.New("cannot divide by zero")
	}
	result = x / y
	return result, nil

}
