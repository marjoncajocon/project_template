package lib

import "math/rand/v2"

func GenerateKey(num int) string {
	chr := "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" // 87
	tchar := ""
	size := len(chr)

	w := 16
	if num != 0 {
		w = num
	}

	for i := 0; i < w; i++ {
		index := rand.IntN(size - 0)
		tchar += string(chr[index])
	}
	return tchar
}
