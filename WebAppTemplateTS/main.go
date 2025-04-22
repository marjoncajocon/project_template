package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

/* sample middleware */
func PrintLog(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Request Method: %s, Request URL: %s\n", r.Method, r.URL)
		next.ServeHTTP(w, r)
	})
}

func main() {

	fs := http.FileServer(http.Dir("./app/build"))

	mux := http.NewServeMux()

	mux.Handle("/", fs)

	mux.HandleFunc("/hellow", func(rw http.ResponseWriter, r *http.Request) {

		fmt.Println(r.Method)
		fmt.Println(r.Body)

		rw.Write([]byte("Hello World"))
	})

	mux.HandleFunc("/api/test", func(rw http.ResponseWriter, r *http.Request) {
		rw.Header().Add("Content-Type", "application/json")
		rw.Header().Add("Access-Control-Allow-Origin", "*")

		if r.Method == "POST" {

			payload := struct {
				Username string `json:"username"`
				Password string `json:"password"`
			}{}

			json.NewDecoder(r.Body).Decode(&payload)

			auth := r.Header.Get("X-Auth")
			fmt.Println(auth)
			fmt.Println(payload)
		}

	})

	log.Fatal(http.ListenAndServe(":8000", PrintLog(mux)))
}
