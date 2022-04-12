package controllers

import (
	"encoding/json"
	"etherverse.com/m/database"
	"etherverse.com/m/entities"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func GetAllTransaction(w http.ResponseWriter, r *http.Request) {
	var transactions []entities.Transaction
	database.Connector.Find(&transactions)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(transactions)
}

func GetTransactionByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var transaction entities.Transaction
	database.Connector.First(&transaction, key)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(transaction)
}

func CreateTransaction(w http.ResponseWriter, r *http.Request) {
	requestBody, _ := ioutil.ReadAll(r.Body)
	var transaction entities.Transaction
	json.Unmarshal(requestBody, &transaction)

	database.Connector.Create(&transaction)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(transaction)
}

func DeleteTransactionByID(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	var transaction entities.Transaction
	id, _ := strconv.ParseInt(key, 10, 64)
	database.Connector.Where("id = ?", id).Delete(&transaction)
	w.WriteHeader(http.StatusNoContent)
}
