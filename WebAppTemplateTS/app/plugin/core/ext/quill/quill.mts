import "./quill.css";
import Quill from './quill.js';

import { div } from "../../core.mts";

class EditorQuill extends div {
  id: string
  param: {placeholder?: string, fulltoolbar?: boolean}
  //@ts-ignore
  quill: Quill
  constructor(o: {
    placeholder?: string,
    fulltoolbar?: boolean
  }) {
    super();

    this.id = `quill-${new Date().getTime()}`;
    super.AddAttr({
        id: this.id
    });

    this.param = o;

  }

  setValue(v: string) {
   // super.Html(v);
   // call the run first before using set value
   this.quill.clipboard.dangerouslyPasteHTML(v);
  }

  setValueDelta(delta: any) {
    this.quill.setContents(delta);
  }

  getValueHtml() {
    return this.quill.root.innerHTML
  }
  
  getValueDelta() {
    return this.quill.getContents();
  }

  getValue() {
    return this.quill.getText();
  }

  run() {
    
    const opt: {[key: string]: any} = {
      theme: 'snow'
    };

    if (this.param.fulltoolbar != undefined && this.param.fulltoolbar) {
      // module
      opt["modules"] = {
          toolbar: [
              [{ 'font': [] }, { 'size': [] }],
              ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
              [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
              [{ 'script': 'sub'}, { 'script': 'super' }],       // superscript/subscript
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              [{ '-indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
              [{ 'direction': 'rtl' }],                         // text direction
              [{ 'align': [] }],
              ['link', 'image', 'video'],                       // media
              ['clean']
          ]
      };
    }

    if (this.param.placeholder != undefined) {
        opt["placeholder"] = this.param.placeholder;
    }

    //@ts-ignore
    const quill = new Quill("#"+this.id, opt);
    this.quill = quill;
    
  }
}


export default EditorQuill;