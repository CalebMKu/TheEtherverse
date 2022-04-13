package main

import (
	"etherverse.com/m/controllers"
	"etherverse.com/m/database"
	"etherverse.com/m/entities"
	"etherverse.com/m/environment"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/rs/cors"
	"log"
	"net/http"
	"os"
)

func main() {
	initDB()
	router := mux.NewRouter()
	log.Println("Starting the server on port 8080")

	router.HandleFunc("/create", controllers.CreateTransaction)
	router.HandleFunc("/get", controllers.GetAllTransaction)
	router.HandleFunc("/get/{id}", controllers.GetTransactionByID)
	router.HandleFunc("/delete/{id}", controllers.DeleteTransactionByID)

	http.Handle("/create", router)
	http.Handle("/get", router)
	http.Handle("/get/{id}", router)
	http.Handle("/delete/{id}", router)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowedMethods:   []string{"GET", "DELETE", "POST"},
		AllowCredentials: true,
		Debug:            true,
	})

	handler := c.Handler(router)

	log.Fatal(http.ListenAndServe(":8080", handler))
}

func initDB() {
	environment.SetEnviornmentVariables()

	config := database.Config{
		ServerName: os.Getenv("SERVER_NAME"),
		User:       os.Getenv("USER"),
		Password:   os.Getenv("PASSWORD"),
		DB:         os.Getenv("DATABASE_NAME"),
	}

	connectionString := database.GetConnectionString(config)
	err := database.Connect(connectionString)
	if err != nil {
		panic(err.Error())
	}

	database.Migrate(&entities.Transaction{})
}
