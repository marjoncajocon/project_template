package lib

import "regexp"

// all function must have prefix of re
func ReUsername(data *string) bool {
	reg, err := regexp.Compile("^[a-zA-Z][a-zA-Z0-9]+$")

	if err != nil {
		return false
	}
	return reg.MatchString(*data)
}

func ReName(data *string) bool {
	reg, err := regexp.Compile(`^[a-zA-ZñÑ][a-zA-ZñÑ .]+$`)

	if err != nil {
		return false
	}
	return reg.MatchString(*data)
}
