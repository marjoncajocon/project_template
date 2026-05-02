package handler

import "github.com/gofiber/fiber/v2"

func UserHandler(app fiber.Router) {

	api := app.Group("/user")

	api.Get("/get/all", func(c *fiber.Ctx) error {

		return c.SendString("hellow testing")

	})

	api.Post("/auth", func(c *fiber.Ctx) error {

		return c.JSON(Msg{Data: "saome", Ok: true})

	})

}
