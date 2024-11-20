package render

import (
	"fmt"
	"html/template"
	"net/http"
	"path/filepath"

	"go-course/pkg/config"
)

// AppConfig holds the configuration for the renderer
var app *config.AppConfig

// NewRenderer sets up the AppConfig for the renderer
func NewRenderer(a *config.AppConfig) {
	app = a
}

// CreateTemplateCache creates a cache of templates
func CreateTemplateCache() (map[string]*template.Template, error) {
	// Create a new map to hold the parsed templates
	cache := map[string]*template.Template{}

	// Path to the templates directory
	templatesPath := "/Users/shafquat/Documents/GitHub/trainee-tasks-first-month/month-2/day-3/practice-coding-go-lang/serving-html-templates/templates"

	// Get all page templates with the `.page.tmpl` extension
	pages, err := filepath.Glob(filepath.Join(templatesPath, "*.page.tmpl"))
	if err != nil {
		return nil, err
	}

	// Parse each page template along with the base layout
	for _, page := range pages {
		// Get the base name of the template file
		name := filepath.Base(page)

		// Parse the base layout and the current page template
		ts, err := template.ParseFiles(
			filepath.Join(templatesPath, "base.layout.tmpl"),
			page,
		)
		if err != nil {
			return nil, err
		}

		// Store the parsed template in the cache
		cache[name] = ts
	}

	return cache, nil
}

// RenderTemplate renders a template from the cache
func RenderTemplate(w http.ResponseWriter, tmpl string) {
	fmt.Println("Rendering template:", tmpl)
	parsedTemplate, ok := app.TemplateCache[tmpl]
	if !ok {
		fmt.Println("Template not found in cache:", tmpl)
		http.Error(w, "Template not found", http.StatusInternalServerError)
		return
	}

	err := parsedTemplate.Execute(w, nil)
	if err != nil {
		fmt.Println("Error executing template:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
}
