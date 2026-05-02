package lib

import (
	"fmt"
	"net/smtp"
)

// mc_devmh_01@outlook.com
// *CeFC.n!55AG%?2
func SendEmail() {
	// is not yet working it output an EOF, error!

	from := "mc_devmh_01@outlook.com"
	password := "*CeFC.n!55AG%?2" // Consider using environment variables for security

	to := []string{"marjoncajocon08@gmail.com"}
	smtpHost := "outlook.office365.com"
	smtpPort := "995" // or 465 for SMTPS

	msg := []byte("From: " + from + "\r\n" +
		"To: " + to[0] + "\r\n" +
		"Subject: " + "Testing from the go lang" + "\r\n\r\n" +
		"thisi is a sample of the body<b style=\"color: red;\">24342</b>" + "\r\n")

	auth := smtp.PlainAuth("", from, password, smtpHost)

	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, msg)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Email sent successfully!")

}
