package main

func main() {
	// if statement
	if 1 > 0 {
		println("1 is greater than 0")
	}

	// if else statement
	if 1 < 0 {
		println("1 is less than 0")
	} else {
		println("1 is not less than 0")
	}

	// if else if statement
	if 1 < 0 {
		println("1 is less than 0")
	} else if 1 == 0 {
		println("1 is equal to 0")
	} else {
		println("1 is greater than 0")
	}

	// switch statement
	switch 1 {
	case 0:
		println("1 is 0")
	case 1:
		println("1 is 1")
	default:
		println("1 is not 0 or 1")
	}

	// && operator (AND)
	if 1 > 0 && 1 < 2 {
		println("1 is greater than 0 and less than 2")
	}

	// || operator (OR)
	if 1 > 0 || 1 < 0 {
		println("1 is greater than 0 or less than 0")
	}
}
