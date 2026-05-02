package lib

// package lib

// import (
// 	"database/sql"
// 	"fmt"
// 	"log"

// 	_ "github.com/mattn/go-sqlite3"
// )

// type Sql struct {
// 	Db   *sql.DB
// 	Name string
// 	Tx   *sql.Tx
// }

// func NewSql(name *string) *Sql {
// 	con := Sql{}

// 	db_path := "db/"

// 	if name != nil {
// 		db_path += *name
// 	} else {
// 		db_path += "general.db"
// 	}

// 	return con.New(&db_path)
// }

// func (con *Sql) New(name *string) *Sql {

// 	con.Name = "db/general.db" // default

// 	if name != nil {
// 		con.Name = *name
// 	}

// 	db, err := sql.Open("sqlite3", con.Name)
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	con.Db = db

// 	tx, err := con.Db.Begin()
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	con.Tx = tx
// 	return con
// }

// func (con *Sql) Commit(query string, args ...any) error {
// 	stmt, err := con.Tx.Prepare(query)
// 	if err != nil {
// 		fmt.Println(err)
// 		return err
// 	}
// 	defer stmt.Close()

// 	if _, err := stmt.Exec(args...); err != nil {
// 		// If an error occurs, rollback the transaction
// 		con.Tx.Rollback()
// 		fmt.Println(err)
// 		return err
// 	}
// 	return nil
// }

// func (con *Sql) CommitMultiple(query string, args [][]any) error {
// 	stmt, err := con.Tx.Prepare(query)
// 	if err != nil {
// 		fmt.Println(err)
// 		return err
// 	}

// 	defer stmt.Close() // Ensure the statement is closed after use

// 	for _, argSet := range args {
// 		if _, err := stmt.Exec(argSet...); err != nil {
// 			// If an error occurs, rollback the transaction
// 			if errRollback := con.Tx.Rollback(); errRollback != nil {
// 				fmt.Println("Failed to rollback transaction:", errRollback)
// 			}
// 			fmt.Println("Error executing statement:", err)
// 			return err // Early return on error
// 		}
// 	}
// 	return nil
// }

// func (con *Sql) Get(query string, args ...any) (*sql.Rows, error) {
// 	// Prepare and execute the query
// 	stmt, err := con.Db.Prepare(query)
// 	if err != nil {
// 		return nil, fmt.Errorf("failed to prepare query: %w", err)
// 	}
// 	defer stmt.Close() // Ensure the statement is closed after use

// 	// Execute the query
// 	rows, err := stmt.Query(args...)
// 	if err != nil {
// 		return nil, fmt.Errorf("failed to execute query: %w", err)
// 	}

// 	return rows, nil
// }

// func (con *Sql) Close() {
// 	con.Db.Close()
// }

// func (con *Sql) Go() {
// 	if err := con.Tx.Commit(); err != nil {
// 		fmt.Println(err)
// 	}
// }
