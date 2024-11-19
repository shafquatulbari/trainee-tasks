package main

import "testing"

var tests = []struct {
	name     string
	dividend float32
	divisor  float32
	expected float32
	isErr    bool
}{
	{"valid-data", 100.0, 10.0, 10.0, false},
	{"invalid-data", 100.0, 0.0, 0.0, true},
	{"expect-2", 10.0, 5.0, 2.0, false},
	{"expect-fraction", 10.0, 3.0, 3.3333333, false},
}

func TestDivision(t *testing.T) {
	for _, tt := range tests {
		got, err := divide(tt.dividend, tt.divisor)
		if tt.isErr {
			if err == nil {
				t.Errorf("Test %s failed, expected an error, got nil", tt.name)
			}
		} else {
			if err != nil {
				t.Errorf("Test %s failed, expected nil, got %v", tt.name, err)
			}
		}
		if got != tt.expected {
			t.Errorf("Test %s failed, expected %v, got %v", tt.name, tt.expected, got)
		}
	}
}

func TestDivide(t *testing.T) {
	_, err := divide(10.0, 1.0)
	if err != nil {
		t.Errorf("Test failed, expected nil, got %v", err)
	}
}

func TestBadDivide(t *testing.T) {
	_, err := divide(10.0, 0.0)
	if err == nil { // we expect an error
		t.Errorf("Test failed, expected error, got nil")
	}
}
