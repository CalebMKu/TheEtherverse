package main

import (
	"etherverse.com/m/controllers"
	"etherverse.com/m/database"
	"etherverse.com/m/entities"
	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/rs/cors"
	"log"
	"net/http"
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
	config := database.Config{
		ServerName: "localhost:3306",
		User:       "Caleb",
		Password:   "7JollyIsland!",
		DB:         "posty",
	}

	connectionString := database.GetConnectionString(config)
	err := database.Connect(connectionString)
	if err != nil {
		panic(err.Error())
	}

	database.Migrate(&entities.Transaction{})
}
