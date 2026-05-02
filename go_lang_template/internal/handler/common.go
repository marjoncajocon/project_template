package handler

type Msg struct {
	Ok   bool        `json:"ok"`
	Data interface{} `json:"data"`
}
