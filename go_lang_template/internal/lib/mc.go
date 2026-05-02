package lib

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strings"
)

type SystemInformation struct {
	SerialKey   string `json:"SerialKey"`
	SystemCode  string `json:"system_code"`
	Version     string `json:"version"`
	CompanyName string `json:"company_name"`
	OfficeName  string `json:"office_name"`
}

func GenerateKeyV2(info *SystemInformation) string {

	byte_data, err := json.Marshal(info)

	if err != nil {
		fmt.Println(err)
	}

	data := string(byte_data)
	data_len := len(data)
	data_rev := bytes.Buffer{}

	for i := data_len - 1; i >= 0; i-- {
		data_rev.WriteByte(data[i])
	}

	s512 := Sha512(data)
	s256 := Sha256(data)
	s256_rev := Sha256(data_rev.String())
	//s256_rev := lib.Sha256()

	fkey := strings.ToUpper(s512 + s256 + s256_rev)

	return fkey
}

func GenerateFormat(data string) string {
	data_len := len(data)

	b := bytes.Buffer{}

	for i := 0; i < data_len; i++ {
		b.WriteByte(data[i])
		if (i+1)%8 == 0 {
			b.WriteByte(32)
		}
		if (i+1)%32 == 0 {
			b.WriteByte(10)
		}
	}

	return b.String()
}

func CheckKey() (*SystemInformation, bool) {
	fp, err := os.Open("key.txt")
	if err != nil {
		fmt.Println(err)
		return nil, false
	}
	defer fp.Close()

	_data, err1 := io.ReadAll(fp)

	if err1 != nil {
		return nil, false
	}

	data := strings.Split(string(_data), "\n")

	var registered_key string
	for idx, item := range data {
		if idx >= 6 && idx <= 13 {
			registered_key += strings.ReplaceAll(item, " ", "")
		}
	}

	info := SystemInformation{}
	info.SerialKey = data[1]
	info.SystemCode = data[2]
	info.Version = data[3]
	info.CompanyName = data[4]
	info.OfficeName = data[5]

	original_key := GenerateKeyV2(&info)

	if original_key != registered_key {
		return nil, false
	}

	return &info, true
}
