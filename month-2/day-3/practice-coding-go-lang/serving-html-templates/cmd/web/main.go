package main

import (
	"fmt"
	"go-course/pkg/config"
	"go-course/pkg/handlers"
	"go-course/render"
	"net/http"
)

const portNumber = ":8080"

func main() {
	// Initialize AppConfig
	appConfig := &config.AppConfig{}

	// Create the template cache and store it in AppConfig
	templateCache, err := render.CreateTemplateCache()
	if err != nil {
		fmt.Println("Error creating template cache:", err)
		return
	}
	appConfig.TemplateCache = templateCache

	// Set up the renderer with the AppConfig
	render.NewRenderer(appConfig)

	// Define HTTP routes
	http.HandleFunc("/", handlers.Home)
	http.HandleFunc("/about", handlers.About)

	// Start the HTTP server
	fmt.Printf("Starting application on port %s\n", portNumber)
	_ = http.ListenAndServe(portNumber, nil)
}
