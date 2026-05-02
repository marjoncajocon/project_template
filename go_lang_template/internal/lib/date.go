package lib

import (
	"fmt"
	"strings"
	"time"
)

func DateTimeHuman(date_str string) string {

	t, er := time.Parse("2006-01-02 15:04:05", date_str)

	if er != nil {
		return ""
	}

	return t.Format("01-02-2006 15:04:05")
}

func DateHuman2(date_str string) string {

	t, er := time.Parse("2006-01-02", date_str)

	if er != nil {
		return ""
	}

	return t.Format("01/02/2006")
}

func DateTimeHuman2(date_str string) string {

	t, er := time.Parse("2006-01-02 15:04:05", date_str)

	if er != nil {
		return ""
	}

	return t.Format("01/02/2006 15:04:05")
}

func DateTime() string {
	now := time.Now()

	return now.Format("2006-01-02 15:04:05")
}

func Date() string {
	now := time.Now()
	return now.Format("2006-01-02")
}

func AcicDate() string {
	now := time.Now()
	return now.Format("06-01")
}

func Time() string {
	now := time.Now()
	return now.Format("15:04:05")
}

func TimeShort() string {
	now := time.Now()
	return now.Format("15:04")
}

var Month = map[string]string{
	"01": "JANUARY",
	"02": "FEBRUARY",
	"03": "MARCH",
	"04": "APRIL",
	"05": "MAY",
	"06": "JUNE",
	"07": "JULY",
	"08": "AUGUST",
	"09": "SEPTEMBER",
	"10": "OCTOBER",
	"11": "NOVEMBER",
	"12": "DECEMBER",
}

var MonthAcro = map[string]string{
	"01": "JAN",
	"02": "FEB",
	"03": "MAR",
	"04": "APR",
	"05": "MAY",
	"06": "JUN",
	"07": "JUL",
	"08": "AUG",
	"09": "SEP",
	"10": "OCT",
	"11": "NOV",
	"12": "DEC",
}

var last_day = map[string]string{
	"01": "31",
	"02": "28",
	"03": "31",
	"04": "30",
	"05": "31",
	"06": "30",
	"07": "31",
	"08": "31",
	"09": "30",
	"10": "31",
	"11": "30",
	"12": "31",
}

func StdGetLastDayMonth(year int, month string) string {
	// get the leap year
	if month == "02" {
		if (year%4 == 0 && year%100 != 0) || (year%400 == 0) {
			return "29"
		}
	}

	return last_day[month]
}

func StdGetFullMonthName(month string) string {
	return Month[month]
}

func StdGetAcroMonthName(month string) string {
	return Month[month]
}

func StdDate(dt string) string {
	if dt != "" {
		// 0 -> year, 1 -> month, 2 is the day

		arr := strings.Split(dt, "-")
		if len(arr) >= 3 {
			return fmt.Sprintf("%s %s, %s", MonthAcro[arr[1]], arr[2], arr[0])
		}
	}
	return ""
}

func StdDateFull(dt string) string {
	if dt != "" {
		// 0 -> year, 1 -> month, 2 is the day

		arr := strings.Split(dt, "-")
		if len(arr) >= 3 {
			return fmt.Sprintf("%s %s, %s", Month[arr[1]], arr[2], arr[0])
		}
	}
	return ""
}

func YearMonth(input string) string {

	t, err := time.Parse("2006-01", input)

	if err != nil {
		return ""
	}

	output := strings.ToUpper(t.Format("January 2006"))

	return output

}
