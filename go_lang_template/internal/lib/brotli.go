package lib

import (
	"bytes"
	"io"

	"github.com/andybalholm/brotli"
)

// brotliEncode compresses data using Brotli with the best compression level
func BrotliEncode(data []byte) ([]byte, error) {
	var buf bytes.Buffer
	// Use Brotli's NewWriterLevel with level 11 for maximum compression
	bw := brotli.NewWriterLevel(&buf, 11)
	_, err := bw.Write(data)
	if err != nil {
		return nil, err
	}
	err = bw.Close()
	if err != nil {
		return nil, err
	}
	return buf.Bytes(), nil
}

// brotliDecode decompresses Brotli data
func BrotliDecode(data []byte) ([]byte, error) {
	buf := bytes.NewReader(data)
	br := brotli.NewReader(buf)
	var out bytes.Buffer
	_, err := io.Copy(&out, br)
	if err != nil {
		return nil, err
	}
	return out.Bytes(), nil
}
