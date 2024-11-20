package handlers

import (
	"fmt"
	"go-course/render"
	"net/http"
)

// Home is the home page handler
func Home(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Home page requested")
	render.RenderTemplate(w, "home.page.tmpl")
}

// About is the about page handler
func About(w http.ResponseWriter, r *http.Request) {
	fmt.Println("About page requested")
	render.RenderTemplate(w, "about.page.tmpl")
}
