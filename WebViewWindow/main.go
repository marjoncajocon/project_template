package main

import webview "github.com/webview/webview_go"

func main() {
	w := webview.New(false)
	defer w.Destroy()
	w.SetTitle("Basic Example")
	w.SetSize(480, 320, webview.HintNone)
	w.SetHtml(`
		<b style="color:red;">Hellow this is a sample</b>
		<button>this is a sample</button>
	
	`)
	w.Run()
}
