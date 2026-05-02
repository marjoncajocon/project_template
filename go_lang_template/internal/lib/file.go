package lib

import (
	"bytes"
	"compress/zlib"
	"io"
	"os"
)

func FileExists(fpath string) bool {
	if _, err := os.Stat(fpath); os.IsNotExist(err) {
		return false
	}
	return true
}

// func CompressBytes(data *[]byte) []byte {
// 	var b bytes.Buffer
// 	w := zlib.NewWriter(&b)
// 	w.Write(*data)
// 	w.Close()

// 	return b.Bytes()
// }

// func DecompressBytes(data *[]byte) ([]byte, error) {

// 	var b bytes.Buffer
// 	r, err := zlib.NewReader(&b)
// 	if err != nil {

// 		return nil, err
// 	}

// 	io.Copy(os.Stdout, r)
// 	r.Close()

// 	return b.Bytes(), nil
// }

func CompressBytes(data []byte) ([]byte, error) {
	var b bytes.Buffer
	//w := zlib.NewWriter(&b)
	w, err1 := zlib.NewWriterLevel(&b, zlib.BestCompression)

	if err1 != nil {
		return nil, err1
	}

	_, err := w.Write(data)
	if err != nil {
		return nil, err
	}
	if err := w.Close(); err != nil {
		return nil, err
	}
	return b.Bytes(), nil
}

func DecompressBytes(data []byte) ([]byte, error, *bytes.Buffer) {
	var b bytes.Buffer
	b.Write(data) // Write the compressed data into the buffer

	r, err := zlib.NewReader(&b)

	if err != nil {
		return nil, err, nil
	}
	defer r.Close()

	var out bytes.Buffer
	_, err = io.Copy(&out, r)
	if err != nil {
		return nil, err, nil
	}

	return out.Bytes(), nil, &out
}
