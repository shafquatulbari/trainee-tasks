package main

import (
	"log"
	"niceprogram/helpers"
)

const numPool = 10

// channels are used to communicate between goroutines, they are means of sending information from one part of the program to another part of the program
func CalculateValue(intChan chan int) {
	RandomNumber := helpers.RandomNumber(numPool)
	intChan <- RandomNumber // send RandomNumber to intChan channel using the <- operator to send the value
}

func main() {
	intChan := make(chan int) // create a channel of type int

	defer close(intChan) // close the channel when the main function ends to prevent memory leaks

	go CalculateValue(intChan) // run CalculateValue in a goroutine

	num := <-intChan // receive the value from the intChan channel using the <- operator to receive the value

	log.Println(num)
}
