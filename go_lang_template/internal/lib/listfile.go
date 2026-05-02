package lib

import (
	"io/fs"
	"log"
	"path/filepath"
	"slices"
	"sort"
)

func ListFiles(dir string, ext []string) []string {
	var files []string

	err := filepath.WalkDir(dir, func(path string, d fs.DirEntry, err error) error {
		if !d.IsDir() {

			if slices.Contains(ext, filepath.Ext(path)) {
				files = append(files, path)
			}

		}
		return nil
	})

	if err != nil {
		log.Fatal(err)
	}

	sort.Strings(files)

	return files
}
