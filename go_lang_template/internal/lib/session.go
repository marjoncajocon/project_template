package lib

import (
	"database/sql"
	"fmt"
	"math/rand/v2"
	"sync"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

func datetimefn() string {
	now := time.Now()

	return now.Format("2006-01-02 15:04:05")
}

var ses_db *sql.DB // this db is singleton
var ses_flag sync.Once

type SesInfo struct {
	SessionID string
}

func NewSession(old_token string) *SesInfo {
	ses_obj := SesInfo{}

	if old_token == "" {
		// create new token
		chr := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

		tchar := ""
		for i := 0; i < 16; i++ {
			index := rand.IntN(62 - 0)
			tchar += string(chr[index])
		}

		n := ""
		for i := 0; i < 16; i++ {
			index := rand.IntN(62 - 0)
			n += string(chr[index])
		}

		ses_obj.SessionID = fmt.Sprintf("%s-%s", n, tchar)

	} else {
		ses_obj.SessionID = old_token
	}

	// old_token if empty "" then create a new token and assigned it in SessionID

	// checking the token
	ses_flag.Do(func() {
		fmt.Println("initializing session storage")
		ses_path := "data/session.db"

		// func() {
		// 	if _, r := os.Stat(ses_path); r != nil {
		// 		fmt.Println("creating session file")
		// 		if file, err := os.Create(ses_path); err == nil {
		// 			defer file.Close()
		// 		}
		// 	}
		// }() // to make an immediate close of the connection

		con, err := sql.Open("sqlite3", ses_path)

		if err != nil {
			fmt.Println(err)
			return
		}

		con.SetMaxOpenConns(10)

		con.SetMaxIdleConns(10)

		// auto create table

		if _, err := con.Exec(`CREATE TABLE IF NOT EXISTS data (
			id TEXT,
			key TEXT,
			value TEXT,
			datecreated TEXT,
			PRIMARY KEY(id, key)
		);`); err != nil {
			fmt.Println(err)
			return
		}

		ses_db = con
	})

	return &ses_obj
}

func (ses *SesInfo) GetKey() string {
	return ses.SessionID
}

func (ses *SesInfo) IsExpire(expire_in_hour int) bool {

	rows, err := ses_db.Query(`
	SELECT 
		datecreated 
	FROM data 
		WHERE id = ? 
	LIMIT 1`, ses.SessionID)

	if err != nil {
		fmt.Println(err)
		return false
	}

	var dt string

	func() bool {

		defer rows.Close()

		if !rows.Next() {

			return false
		}

		rows.Scan(&dt)

		return true
	}()

	if dt == "" {
		return false
	}

	dt_obj, err := time.Parse("2006-01-02 15:04:05", dt)

	if err != nil {
		fmt.Println(err)
		return false
	}

	now, _ := time.Parse("2006-01-02 15:04:05", datetimefn())

	dt_obj = dt_obj.Add(8 * time.Hour) // expire in 8 hours

	dur := dt_obj.Sub(now)

	// if true then the session already expired
	return dur.Minutes() < 0

}

func (ses *SesInfo) HasKey(key string) bool {

	if rows, err := ses_db.Query("SELECT id FROM data WHERE id = ? AND key = ?", ses.SessionID, key); err == nil {

		defer rows.Close()

		return rows.Next()

	}

	return false
}

// func (ses *sesInfo) Get() interface{} {

// }

func (ses *SesInfo) Set(key string, value string) bool {
	if ses.HasKey(key) {
		if _, err := ses_db.Exec("UPDATE data SET value = ? WHERE id = ? AND key = ?", value, ses.SessionID, key); err != nil {
			fmt.Println(err)
			return false
		}
	} else {
		if _, err := ses_db.Exec("INSERT INTO data (id,  key, value, datecreated) VALUES(?, ?, ?, ?) ", ses.SessionID, key, value, datetimefn()); err != nil {
			fmt.Println(err)
			return false
		}
	}

	return true
}

func (ses *SesInfo) Get(key string) string {
	if rows, err := ses_db.Query("SELECT value FROM data WHERE id = ? AND key = ?", ses.SessionID, key); err == nil {
		defer rows.Close()

		if rows.Next() {
			var ret string

			if err := rows.Scan(&ret); err != nil {
				fmt.Println(err)
			}

			return ret
		}
	}

	return ""
}

func (ses *SesInfo) GetInt(key string) int {
	if rows, err := ses_db.Query("SELECT value FROM data WHERE id = ? AND key = ?", ses.SessionID, key); err == nil {
		defer rows.Close()

		if rows.Next() {
			var ret int

			if err := rows.Scan(&ret); err != nil {
				fmt.Println(err)
			}

			return ret
		}
	}

	return 0
}

func (ses *SesInfo) GetBool(key string) bool {
	if rows, err := ses_db.Query("SELECT value FROM data WHERE id = ? AND key = ?", ses.SessionID, key); err == nil {
		defer rows.Close()

		if rows.Next() {
			var ret bool

			if err := rows.Scan(&ret); err != nil {
				fmt.Println(err)
			}

			return ret
		}
	}

	return false
}

func (ses *SesInfo) UnSet(key string) bool {
	if _, err := ses_db.Exec("DELETE FROM data WHERE id = ? AND key = ?", ses.SessionID, key); err != nil {
		fmt.Println(err)
		return false
	}
	return true
}

func (ses *SesInfo) HasSession() bool {
	if rows, err := ses_db.Query("SELECT id FROM data WHERE id = ?", ses.SessionID); err == nil {
		defer rows.Close()

		return rows.Next()
	}

	return true
}

func (ses *SesInfo) Destroy() bool {
	if _, err := ses_db.Exec("DELETE FROM data WHERE id = ?", ses.SessionID); err != nil {
		fmt.Println(err)
		return false
	}

	return true
}
