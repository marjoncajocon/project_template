type WidgetElement = HTMLElement | HTMLInputElement | HTMLSelectElement | HTMLCanvasElement;
type CEvent = [string, EventListenerOrEventListenerObject];

class Widget {
  obj: string;
  control: WidgetElement;
  body: HTMLElement
  widgets: Widget[]
  events_list: CEvent[]

  public constructor(element: string) {
    this.obj = element;
    this.control = document.createElement(element);
    this.body = document.body;
    this.widgets = [];
    this.events_list = [];
  }
  public hasClass(className): boolean {
    const clist = this.control.classList;
    for (const item of clist) {
      if (item == className) {
        return true;
      }
    }
    return false;
  }
  public getContainer(): WidgetElement {
    return this.control;
  }

  public clear(): void {
    // this only clear the next 
    for (const item of this.widgets) {
      item.delete();
    }

  }

  public dispose(): void {

  }


  public delete(): void {
    this.dispose();
    this.removeEvents();
    this.clear();
    this.control.remove();
    this.widgets.length = 0;
  }

  public style(styles: { [index: string]: string | number } = {}, value: string = ''): Widget {
    if (typeof (styles) == 'object') {
      for (const item in styles) {
        this.control.style[item] = styles[item];
      }
    } else if (typeof (styles) == 'string') {
      this.control.style[styles] = value;
    }
    return this;
  }
  public setStyle(styles: { [index: string]: string } | string, value = ''): Widget {
    if (typeof (styles) == 'object') {
      for (const item in styles) {
        this.control.style[item] = styles[item];
      }
    } else if (typeof (styles) == 'string') {
      this.control.style[styles] = value;
    }
    return this;
  }
  public class(cs: string[] | string): Widget {
    if (typeof (cs) == 'string') {
      this.control.classList.add(cs);
    } else if (cs instanceof Array) {
      for (const item of cs) {
        if (typeof (item) == 'string') {
          this.control.classList.add(item);
        }
      }
    }
    return this;
  }
  public addClass(cs: string | string[]): Widget {
    if (typeof (cs) == 'string') {
      this.control.classList.add(cs);
    } else if (cs instanceof Array) {
      for (const item of cs) {
        if (typeof (item) == 'string') {
          this.control.classList.add(item);
        }
      }
    }
    return this;
  }
  public removeClass(cs: string | string[]): Widget {
    if (typeof (cs) == 'string') {
      this.control.classList.remove(cs);
    } else if (cs instanceof Array) {
      for (const item of cs) {
        if (typeof (item) == 'string') {
          this.control.classList.remove(item);
        }
      }
    }
    return this;
  }

  public attr(attrs: string | { [index: string]: any }, value: string = ''): Widget {
    if (attrs != null) {
      if (typeof (attrs) == 'object') {
        for (const item in attrs) {
          this.control.setAttribute(item, attrs[item]);
        }
      } else if (typeof (attrs) == 'string') {
        this.control.setAttribute(attrs, value);
      }
      return this;
    } else { }

    return this;
  }

  public removeAttr(name: string | string[]) {
    if (typeof (name) == "string") {
      this.control.removeAttribute(name);
    } else if (name instanceof Array) {
      for (const item of name) {
        this.control.removeAttribute(item);
      }
    }

    return this;
  }

  public setAttr(attrs: { [index: string]: string }, value: string = ''): Widget {
    if (typeof (attrs) == 'object') {
      for (const item in attrs) {
        this.control.setAttribute(item, attrs[item]);
      }
    } else if (typeof (attrs) == 'string') {
      this.control.setAttribute(attrs, value);
    }
    return this;
  }
  public getAttr(key: string): string | null {
    return this.control.getAttribute(key);
  }
  public setValue(v: string): Widget {
    if (this.control instanceof HTMLInputElement || this.control instanceof HTMLSelectElement) {
      this.control.value = v;
    }
    return this;
  }
  public getValue(): string {
    //return this.control.value;
    if (this.control instanceof HTMLInputElement || this.control instanceof HTMLSelectElement) {
      return this.control.value;
    }
    return "";
  }
  protected __escape(text: string): string {
    if (typeof text !== 'string') {
      return text; // if not a string, return as is
    }
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return text.replace(/[&<>"']/g, function (match) {
      return htmlEntities[match];
    });
  }
  public value(value: string | null = null): string | null {
    if (this.obj === "input" || this.obj === "select" || this.obj == "textarea") {
      if (value != null) {
        if (this.control instanceof HTMLInputElement || this.control instanceof HTMLSelectElement) {
          this.control.value = value;
        }

        return null;
      }

      if (this.control instanceof HTMLInputElement || this.control instanceof HTMLSelectElement) {

        return this.control.value;
      }
    }

    return null;
  }

  public html(html: string | null = null): string | Widget {
    if (html != null) {

      this.control.innerHTML = html;

      return this;
    }
    return this.control.innerHTML;;
  }
  public text(text: string | null = null): string | Widget {
    if (text != null) {
      this.control.innerHTML = this.__escape(text);
      return this;
    }
    return this.control.innerText;
  }
  public show(): Widget {
    this.control.style.display = 'inline-block';
    return this;
  }
  public hide(): Widget {
    this.control.style.display = 'none';
    return this;
  }
  public setHTML(html: string): Widget {
    this.control.innerHTML = html;
    return this;
  }
  public add(widget: Widget | Widget[]): Widget {
    if (widget instanceof Widget) {
      this.widgets.push(widget);
      this.control.appendChild(widget.control);
    } else if (widget instanceof Array) {
      for (const item of widget) {
        if (item instanceof Widget) {
          this.widgets.push(item);
          this.control.appendChild(item.control);
        }
      }
    }
    return this;
  }

  public prepend(widget: Widget | Widget[]): Widget {
    if (widget instanceof Widget) {
      this.widgets.push(widget);
      this.control.prepend(widget.control);
    } else if (widget instanceof Array) {
      for (const item of widget) {
        if (item instanceof Widget) {
          this.widgets.push(item);
          this.control.prepend(item.control);
        }
      }
    }
    return this;
  }

  public addEventListener(evt: string, fn: EventListenerOrEventListenerObject): Widget {
    this.control.addEventListener(evt, fn);

    //this.events_list.push(Ceven [evt, fn]);
    this.events_list.push([evt, fn])
    return this;
  }

  private removeEvents(): Widget {
    for (const item of this.events_list) {
      console.log(`Clean up: ${item[0]} - ${item[1]}`);
      this.control.removeEventListener(item[0], item[1]);
    }
    //this.events_list = [];
    this.events_list.length = 0;
    return this;
  }

  public action(evt: string, fn: EventListenerObject) {
    this.control.addEventListener(evt, fn);
    this.events_list.push([evt, fn]);
    return this;
  }
}
class html extends Widget { constructor() { super("html"); } }
class head extends Widget { constructor() { super("head"); } }
class body extends Widget { constructor() { super("body"); } }
class title extends Widget { constructor() { super("title"); } }
class base extends Widget { constructor() { super("base"); } }
class link extends Widget { constructor() { super("link"); } }
class meta extends Widget { constructor() { super("meta"); } }
class style extends Widget { constructor() { super("style"); } }
class script extends Widget { constructor() { super("script"); } }
class noscript extends Widget { constructor() { super("noscript"); } }
class template extends Widget { constructor() { super("template"); } }
class section extends Widget { constructor() { super("section"); } }
class nav extends Widget { constructor() { super("nav"); } }
class article extends Widget { constructor() { super("article"); } }
class aside extends Widget { constructor() { super("aside"); } }
class h1 extends Widget { constructor() { super("h1"); } }
class h2 extends Widget { constructor() { super("h2"); } }
class h3 extends Widget { constructor() { super("h3"); } }
class h4 extends Widget { constructor() { super("h4"); } }
class h5 extends Widget { constructor() { super("h5"); } }
class h6 extends Widget { constructor() { super("h6"); } }
class header extends Widget { constructor() { super("header"); } }
class footer extends Widget { constructor() { super("footer"); } }
class address extends Widget { constructor() { super("address"); } }
class p extends Widget { constructor() { super("p"); } }
class hr extends Widget { constructor() { super("hr"); } }
class pre extends Widget { constructor() { super("pre"); } }
class blockquote extends Widget { constructor() { super("blockquote"); } }
class ol extends Widget { constructor() { super("ol"); } }
class ul extends Widget { constructor() { super("ul"); } }
class li extends Widget { constructor() { super("li"); } }
class dl extends Widget { constructor() { super("dl"); } }
class dt extends Widget { constructor() { super("dt"); } }
class dd extends Widget { constructor() { super("dd"); } }
class figure extends Widget { constructor() { super("figure"); } }
class figcaption extends Widget { constructor() { super("figcaption"); } }
class main extends Widget { constructor() { super("main"); } }
class div extends Widget { constructor() { super("div"); } }
class a extends Widget { constructor() { super("a"); } }
class em extends Widget { constructor() { super("em"); } }
class strong extends Widget { constructor() { super("strong"); } }
class small extends Widget { constructor() { super("small"); } }
class s extends Widget { constructor() { super("s"); } }
class cite extends Widget { constructor() { super("cite"); } }
class q extends Widget { constructor() { super("q"); } }
class dfn extends Widget { constructor() { super("dfn"); } }
class abbr extends Widget { constructor() { super("abbr"); } }
class ruby extends Widget { constructor() { super("ruby"); } }
class rt extends Widget { constructor() { super("rt"); } }
class rp extends Widget { constructor() { super("rp"); } }
class b extends Widget { constructor() { super("b"); } }
class i extends Widget { constructor() { super("i"); } }
class u extends Widget { constructor() { super("u"); } }
class mark extends Widget { constructor() { super("mark"); } }
class bdi extends Widget { constructor() { super("bdi"); } }
class bdo extends Widget { constructor() { super("bdo"); } }
class span extends Widget { constructor() { super("span"); } }
class br extends Widget { constructor() { super("br"); } }
class wbr extends Widget { constructor() { super("wbr"); } }
class ins extends Widget { constructor() { super("ins"); } }
class del extends Widget { constructor() { super("del"); } }
class img extends Widget { constructor() { super("img"); } }
class iframe extends Widget { constructor() { super("iframe"); } }
class embed extends Widget { constructor() { super("embed"); } }
class param extends Widget { constructor() { super("param"); } }
class video extends Widget { constructor() { super("video"); } }
class audio extends Widget { constructor() { super("audio"); } }
class source extends Widget { constructor() { super("source"); } }
class track extends Widget { constructor() { super("track"); } }
class canvas extends Widget { constructor() { super("canvas"); } }
class map extends Widget { constructor() { super("map"); } }
class area extends Widget { constructor() { super("area"); } }
class svg extends Widget { constructor() { super("svg"); } }
class math extends Widget { constructor() { super("math"); } }
class table extends Widget { constructor() { super("table"); } }
class caption extends Widget { constructor() { super("caption"); } }
class colgroup extends Widget { constructor() { super("colgroup"); } }
class col extends Widget { constructor() { super("col"); } }
class tbody extends Widget { constructor() { super("tbody"); } }
class thead extends Widget { constructor() { super("thead"); } }
class tfoot extends Widget { constructor() { super("tfoot"); } }
class tr extends Widget { constructor() { super("tr"); } }
class td extends Widget { constructor() { super("td"); } }
class th extends Widget { constructor() { super("th"); } }
class form extends Widget { constructor() { super("form"); } }
class label extends Widget { constructor() { super("label"); } }
class input extends Widget { constructor() { super("input"); } }
class button extends Widget { constructor() { super("button"); } }
class select extends Widget { constructor() { super("select"); } }
class datalist extends Widget { constructor() { super("datalist"); } }
class optgroup extends Widget { constructor() { super("optgroup"); } }
class option extends Widget { constructor() { super("option"); } }
class textarea extends Widget { constructor() { super("textarea"); } }
class fieldset extends Widget { constructor() { super("fieldset"); } }
class legend extends Widget { constructor() { super("legend"); } }
class progress extends Widget { constructor() { super("progress"); } }
class meter extends Widget { constructor() { super("meter"); } }
class output extends Widget { constructor() { super("output"); } }
class details extends Widget { constructor() { super("details"); } }
class summary extends Widget { constructor() { super("summary"); } }
class dialog extends Widget { constructor() { super("dialog"); } }
class center extends Widget { constructor() { super("center"); } }



class Window extends Widget {
  constructor(param: {
    app: string | null,
    title: string | null,
    width: string | null,
    height: string | null
  } | null = null) {
    super('div');
    this.setStyle({
      width: '100%',
      height: '100%',
      position: 'relative'
    });
    if (typeof (param) == 'object') {
      //const { app = null, title = '', width = null, height = null } = param;
    }
    this.hide();
    this.body.appendChild(this.control);
  }
  public navigate(obj: Widget | Widget[]): void {
    this.clear();
    this.add(obj);
  }
  public run(): void {
    this.show();
  }
}





class FileManager {

  public s2ab(s: string): ArrayBuffer {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  public getBlob(app: { base64: string | null, type: string | null }) {

    const mtype: string = app.type || "application/json";
    if (app.base64 != null) {
      const blob = new Blob([this.s2ab(atob(app.base64))], {
        type: mtype
      });

      return blob;
    }
  }
}

class Http {
  xml: XMLHttpRequest;
  body: string | FormData | null;

  constructor(param: { method: string, url: string, body: string | null | FormData | { [index: string]: string }, header: { [index: string]: string } }) {
    let { method = 'GET', url = '', body = null, header = {} } = param;
    this.xml = new XMLHttpRequest();
    this.xml.open(method, url, true);
    if (typeof (header) == 'object') {
      if (body instanceof FormData) {
        // this is a file
        //header["Content-Type"] = "multipart/form-data";
        delete header["Content-Type"];
      }
      else if (typeof (body) === "object") {
        header["Content-Type"] = "application/json";
        body = JSON.stringify(body);
      }
      for (const key in header) {
        this.xml.setRequestHeader(key, header[key]);
      }
    }
    if (typeof (body) == 'string') {
      this.body = body;
    }
  }
  public async load<T>(): Promise<T> {
    this.xml.send(this.body);
    const promise = new Promise<T>((resolve, reject) => {
      this.xml.addEventListener('load', function () {
        resolve(this.response);
      });
      this.xml.addEventListener('error', function () {
        resolve((null as T));
      });
    });
    return await promise;
  }

  public then(fn: (response: any) => void): void {
    this.xml.addEventListener('load', (e) => {
      fn(this.xml.response);
    });
  }

  public progress(fn: Function): void {
    if (typeof (fn) == 'function') {
      this.xml.addEventListener('progress', (e) => {
        fn(e);
      });
    }
  }
  public upload_progress(fn: Function): void {
    if (typeof (fn) == 'function') {
      this.xml.upload.addEventListener('progress', (e) => {
        fn(e);
      });
    }
  }
}


class DateCore {
  names: { [index: number]: string }

  constructor() {

    this.names = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    };

  }

  public date_check(frm: string, t: string): [boolean, number, string[]] {
    var from_d = frm;
    var to_d = t;

    const b: [boolean, number, string[]] = [false, 0, []];

    if (from_d == '' || to_d == '') {
      return b;
    }

    b[0] = true;

    var f = new Date(from_d);
    var e = new Date(to_d);
    var i = 0;
    while (f <= e) {
      var m = (f.getMonth() + 1) < 10 ? '0' + (f.getMonth() + 1) : (f.getMonth() + 1);
      var day = f.getDate() < 10 ? '0' + f.getDate() : f.getDate();

      var d = f.getFullYear().toString() + "-" + m + "-" + day;
      b[2].push(d);
      var ndate = f.setDate(f.getDate() + 1);
      f = new Date(ndate);
      i++;
    }
    b[1] = i;

    return b;
  }

  getDay(date_str) {
    return this.names[new Date(date_str).getDay()];
  }
}




//   class IDB {
//     constructor(db = null, tbl = null, version = 1) {

//       const dbName = db == null ? "db" : db;
//       const table = tbl == null ? "table": tbl;
//       const dbVersion = version; // Versioning is required for schema updates.

//       const request = indexedDB.open(dbName, dbVersion);

//       request.onupgradeneeded = function (event) {
//         const db = event.target.result;
//         // Create an object store named 'users' with 'id' as the keyPath
//         if (!db.objectStoreNames.contains(table)) {
//           db.createObjectStore(table, { keyPath: "id" });
//         }
//       };

//       request.onsuccess = function (event) {
//         const db = event.target.result;
//       };

//       request.onerror = function (event) {
//         console.error("Error opening database:", event.target.errorCode);
//       };

//       this.dbname = dbName;
//       this.version = dbVersion;
//       this.table = table;
//     }

//     async add(data_obj) {
//       const request = indexedDB.open(this.dbname, this.version);

//       const promise = new Promise((resolve, reject) => {
//         request.onsuccess = (event) => { // Use an arrow function here
//           const db = event.target.result;
//           const transaction = db.transaction(this.table, "readwrite");
//           const objectStore = transaction.objectStore(this.table);

//           const request = objectStore.add(data_obj);

//           request.onsuccess = () => { // Use an arrow function here
//             // Fixed to use data_obj instead of user
//             resolve(true);
//           };

//           request.onerror = (event) => { // Use an arrow function here
//             resolve(null);
//           };
//         };
//       });
//       return promise;
//     }

//     async update(id, data_obj) {
//       const request = indexedDB.open(this.dbname, this.version);
//       const promise = new Promise((resolve, reject) => {
//         request.onsuccess = (event) => {
//           const db = event.target.result;
//           const transaction = db.transaction(this.table, "readwrite");
//           const objectStore = transaction.objectStore(this.table);

//           const getrequest = objectStore.get(id);

//           getrequest.onsuccess = (event) => {
//             const old_data = event.target.result;
//             const updateRequest = objectStore.put({ ...old_data, ...data_obj });

//             updateRequest.onsuccess = () => {
//               resolve(true);
//             };

//             updateRequest.onerror = (event) => {
//               resolve(null);
//             };
//           };

//           getrequest.onerror = (event) => {
//             resolve(null);
//           };
//         };

//         request.onerror = (event) => {
//           resolve(null);
//         };
//       });
//       return promise;
//     }

//     async get(id) {
//       const request = indexedDB.open(this.dbname, this.version);

//       const promise = new Promise((resolve, reject) => {

//         request.onsuccess = (event) => {
//           const db = event.target.result;
//           const transaction = db.transaction(this.table, "readonly");
//           const objectStore = transaction.objectStore(this.table);

//           const getrequest = objectStore.get(id);

//           getrequest.onsuccess = (event) => {
//             const data = event.target.result;
//             resolve(data);
//           };

//           getrequest.onerror = (event) => {
//             resolve(null);
//           };
//         };

//         request.onerror = (event) => {
//           resolve(null);
//         };
//       });

//       return promise;
//     }

//     async getAll() {
//       const request = indexedDB.open(this.dbname, this.version);

//       const promise = new Promise((resolve, reject) => {

//         request.onsuccess = (event) => {
//           const db = event.target.result;
//           const transaction = db.transaction(this.table, "readonly");
//           const objectStore = transaction.objectStore(this.table);

//           const getAllRequest = objectStore.getAll();

//           getAllRequest.onsuccess = (event) => {
//             const data = event.target.result;
//             resolve(data);
//           };

//           getAllRequest.onerror = (event) => {
//             resolve(null);
//           };
//         };

//         request.onerror = (event) => {
//           resolve(null);
//         };

//       });

//       return promise;

//     }

//     async delete(id) {
//       const request = indexedDB.open(this.dbname, this.version);
//       const promise = new Promise((resolve, reject) => {
//         request.onsuccess = (event) => {
//             const db = event.target.result;
//             const transaction = db.transaction(this.table, "readwrite");
//             const objectStore = transaction.objectStore(this.table);

//             const deleteRequest = objectStore.delete(id);

//             deleteRequest.onsuccess = () => {
//                 resolve(true);
//             };

//             deleteRequest.onerror = (event) => {
//                 resolve(null);
//             };
//         };

//         request.onerror = (event) => {
//             resolve(null);
//         };
//       });
//     return promise;
//   }

//   async deleteAll() {
//     const request = indexedDB.open(this.dbname, this.version);

//     const promise = new Promise((resolve, reject) => {

//       request.onsuccess = (event) => {
//           const db = event.target.result;
//           const transaction = db.transaction(this.table, "readwrite");
//           const objectStore = transaction.objectStore(this.table);

//           const clearRequest = objectStore.clear();

//           clearRequest.onsuccess = () => {
//               resolve(true);
//           };

//           clearRequest.onerror = (event) => {
//             resolve(null);
//           };
//       };

//       request.onerror = (event) => {
//           resolve(null);
//       };
//     });
//     return promise;
//   }


// }


export { DateCore }
export { Widget };
export {
  html, head, body, title, base, link, meta, style, script, noscript, template,
  section, nav, article, aside, h1, h2, h3, h4, h5, h6, header, footer, address,
  p, hr, pre, blockquote, ol, ul, li, dl, dt, dd, figure, figcaption, main, div,
  a, em, strong, small, s, cite, q, dfn, abbr, ruby, rt, rp, b, i, u, mark, bdi,
  bdo, span, br, wbr, ins, del, img, iframe, embed, param, video, audio,
  source, track, canvas, map, area, svg, math, table, caption, colgroup, col,
  tbody, thead, tfoot, tr, td, th, form, label, input, button, select, datalist,
  optgroup, option, textarea, fieldset, legend, progress, meter, output, details,
  summary, dialog, center
};
export {
  Window,
  Http,
  FileManager
};