package config

import (
	"database/sql"
	"fmt"
	"sync" // Fixed import path from "mutex/sync"

	_ "github.com/mattn/go-sqlite3"
)

var (
	db   *sql.DB
	once sync.Once // Declare the Once variable
)

func DBGeneral() *sql.DB {
	once.Do(func() {
		fmt.Println("General Database Initialized!")
		var err error
		db, err = sql.Open("sqlite3", "data/general.db")
		if err != nil {
			fmt.Printf("Error opening database: %v\n", err)
			return
		}

		if err = db.Ping(); err != nil {
			fmt.Printf("Error connecting to database: %v\n", err)
		}
	})

	return db
}
