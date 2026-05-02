package main

import (
	"fmt"

	handler "project1/internal/handler"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	config "project1/internal/config"
)

func main() {

	// initialized the database
	config.DBGeneral()

	app := fiber.New(fiber.Config{
		// Prefork:       true,
		// CaseSensitive: true,
		// StrictRouting: true,
		StreamRequestBody: true,
		AppName:           "Arhiving System",
		BodyLimit:         500 * 1024 * 1024, // 100MB
	})

	app.Use(cors.New())

	api := app.Group("/api")
	handler.UserHandler(api)

	app.Listen(fmt.Sprintf(":%d", 5000))

}
