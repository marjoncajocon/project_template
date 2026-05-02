package lib

import "strings"

type Number struct {
	Unit1         [21]string
	Unit2         [10]string
	Unit3         [6]string
	Unit3_val     [6]int
	Unit3_val_len int
}

func NewNumber() *Number {
	return &Number{
		Unit1:         [21]string{"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"},
		Unit2:         [10]string{"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"},
		Unit3:         [6]string{"Quadrillion", "Trillion", "Billion", "Million", "Thousand", "hundred"},
		Unit3_val:     [6]int{1000000000000000, 1000000000000, 1000000000, 1000000, 1000, 100},
		Unit3_val_len: 6,
	}
}
func (obj *Number) Int2Word(num int) string {
	// trim character
	return strings.Trim(strings.Trim(strings.ReplaceAll(obj.toWord(num), "  ", " "), ", "), "-")
}

func (obj *Number) toWord(num int) string {

	/*
		unit1 := [...]string{"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"}
		unit2 := [...]string{"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"}
		unit3 := [...]string{"Quadrillion", "Trillion", "Billion", "Million", "Thousand", "hundred"}
		unit3_val := [...]int{1000000000000000, 1000000000000, 1000000000, 1000000, 1000, 100}
	*/

	ret := ""
	if num < 0 {
		return ""
	} else if num < 20 {
		ret = obj.Unit1[num]
	} else if num < 100 {
		ret += obj.Unit2[num/10] + " " + obj.Unit1[num%10]
	} else {
		i := 0
		for i < obj.Unit3_val_len {
			d := num / obj.Unit3_val[i]
			r := num % obj.Unit3_val[i]
			if d > 0 {
				ret += obj.toWord(d) + " " + obj.Unit3[i] + " " + obj.toWord(r)
				break
			}
			i++
		}
	}

	return ret

}
