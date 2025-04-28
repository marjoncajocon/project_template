package db

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

/* for mysql connector */
func initDB(dbhost string) *sql.DB {

	/* DB_CASHIER, db_err2 := InitDB2("myusername:mypassword@tcp(127.0.0.1:3380)/finance_cashier") */
	db, err := sql.Open("mysql", dbhost)
	if err != nil {
		fmt.Println("invalid connection!")

	}
	err = db.Ping()
	if err != nil {
		fmt.Println("mysql connection failed!")

		return nil
	}
	// See "Important settings" section.
	//db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(1)
	db.SetMaxIdleConns(1)

	return db
}

// creating a singleton connection
var (
	db1 *sql.DB
)

func GetConnection() *sql.DB {

	if db1 == nil {
		db1 = initDB("root:@tcp(127.0.0.1:3380)/finance_cashier")
		if db1 != nil {
			fmt.Println("MySql Connected!")
		}
	}

	return db1
}
