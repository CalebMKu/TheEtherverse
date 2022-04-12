package entities

import "time"

type Transaction struct {
	ID              int       `json:"id"`
	CreatedAt       time.Time `json:"created_at"`
	SenderAddress   string    `json:"sender_address"`
	ReceiverAddress string    `json:"receiver_address"`
	Amount          string    `json:"amount"`
}
