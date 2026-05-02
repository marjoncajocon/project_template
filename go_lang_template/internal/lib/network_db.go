package lib

import (
	"database/sql"
	"fmt"
	"sync"

	_ "github.com/mattn/go-sqlite3"
)

type NetworkDB struct {
}

var (
	ncon *sql.DB
	once sync.Once
)

func NewNetworkDB() *NetworkDB {

	once.Do(func() {
		con, err := sql.Open("sqlite3", "data/network.db")

		if err != nil {
			fmt.Println(err)
			return
		}

		con.SetMaxOpenConns(10)
		con.SetMaxIdleConns(10)

		// create the table
		con.Exec(`CREATE TABLE IF NOT EXISTS netid(id TEXT, PRIMARY KEY(id))`)
		ncon = con
		fmt.Println("Network storage created!")
	})

	return &NetworkDB{}
}

func (n *NetworkDB) IsPayloadIdExists(id string) bool {
	row, err := ncon.Query(`SELECT id FROM netid WHERE id = ?`, id)

	if err != nil {
		fmt.Println(err)
		return false
	}

	defer row.Close()

	return row.Next()
}

func (n *NetworkDB) AddPayloadId(id string) bool {
	_, err := ncon.Exec(`INSERT INTO netid(id) VALUES(?)`, id)

	return err == nil
}

func (n *NetworkDB) DeletePayloadId(id string) {

}
