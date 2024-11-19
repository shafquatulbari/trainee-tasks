package main

// Interfaces are a way to define a set of methods that a type must have in order to implement that interface.
type Animal interface {
	Says() string
	NumberOfLegs() int
}

type Dog struct {
	Name  string
	Breed string
}

type Gorilla struct {
	Name          string
	Color         string
	NumberOfTeeth int
}

func main() {
	dog := Dog{
		Name:  "Fido",
		Breed: "Golden Retriever",
	}
	PrintInfo(dog)

	gorilla := Gorilla{
		Name:          "Harambe",
		Color:         "Black",
		NumberOfTeeth: 32,
	}
	PrintInfo(gorilla)
}

// The Dog struct implements the Animal interface because it has the Says() and NumberOfLegs() methods.
func (d Dog) Says() string {
	return "Woof"
}

func (d Dog) NumberOfLegs() int {
	return 4
}

func PrintInfo(a Animal) {
	println("This animal says", a.Says(), "and has", a.NumberOfLegs(), "legs")
}

// The Gorilla struct implements the Animal interface because it has the Says() and NumberOfLegs() methods.
func (g Gorilla) Says() string {
	return "Ugh"
}

func (g Gorilla) NumberOfLegs() int {
	return 2
}
