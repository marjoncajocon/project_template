import { Button, Size, Color, Badge, ProgressBar, Pagination, BreadCrumb, Pager, ListGroup, Panel, Tab, Card, Icon, Icons, ButtonSplit, Divider, Label, Well, Text, AlertMessage, TextField, InputType, TextBox, TextFieldAddon, TextFieldFeedBack, Message, Radio, CheckBox, SelectBox, Row, Column, Flex, Modal } from "./plugin/core/bs.3.mts";
import {col, div, Window} from "./plugin/core/core.mjs";
import "./theme/bootstrap3/css/bootstrap.min.css";
//import "./theme/bootstrap3/css/theme-lumen.css";

const MyApp = new Window();

const btn = new Button({text: "",  color: Color.Danger});
const prog = new ProgressBar({color: Color.Success, striped: true, animation: true});
let p = 0;
let i = setInterval(() => {
  if (p == 100) {
    clearInterval(i);
  }
  prog.update(p, true);
  p++;
}, 100);
btn.Add(new Badge({text: "sample"}));

const pagination = new Pagination({
  size: Size.Xs
});
for (let i = 0; i < 20; i++)
  pagination.add(i, (a) => {
    console.log(a);
  });

const bread = new BreadCrumb({});
bread.add("Home");
bread.add("Private");
bread.add("Picture");

const pager = new Pager({
  prevLabel: "Back",
  nextLabel: "Forward",
  prevClicked: () => {
    console.log("back");
  },
  nextClicked: () => {
    console.log("next");
  }
});

const list = new ListGroup({});

list.add("this is a content list", Color.Danger);
list.add(new Button({text: "Sample inside the list", color: Color.Primary}));

const test_panel = new Card({
  header: "Hallow stirng",
  body: new Button({text: "button", color: Color.Success}),
  color: Color.Primary
});

const tab = new Tab({});

tab.add("Menu", () => {

});
tab.add("About", () => {});
tab.add("Setting");


const b_split = new ButtonSplit({color: Color.Warning, clicked:  () => {
  console.log("main clicked!");
}, enable: false});
b_split.add("sample", () => {});
b_split.add("menu2", () => {});
b_split.add(new Divider());
b_split.add("sample 23", () => {

});

const tf = new TextField({
    type: InputType.Password,
    placeholder: "Enter password",
    size: Size.Xs
  });

tf.value("marjon cajocon");

const tb = new TextBox({});

tb.value("marjon textbox");

const tf2 = new TextFieldAddon({
  prefix: "hellwo",
  suffix: new Icon(Icons.Search)
});

tf2.value("hellow world");

const tf3 = new TextFieldFeedBack({

});

tf3.enable(true);

tf3.AddEventListener("keyup", () => {
  switch (tf3.value()) {
    case "ok":
      tf3.check("Success", Message.Success);
      break;
    case "warn":
      tf3.check("Warning you", Message.Warning);
      break;
    case "error":
      tf3.check("Something went wrong!", Message.Danger);
      break;
  }
});
const radio = new Radio({label: "Male", group: "gender", change: (v) => {
  console.log(v);
}});
radio.enable(false);
const radio2 = new Radio({label: "Female", group: "gender", change: (v) => {
  console.log(v);
}});

const check1 = new CheckBox({label: "Sample1"});
check1.value(true);
const check2 = new CheckBox({label: "sample2", change: (v) => {
  console.log(check2.value());
}});

const s1 = new SelectBox({
  multiple: true
});
s1.add("v", "sample");
s1.add("k", "Hallow");


const b = new Button({text: "Getvalue of the selectbox", color: Color.Secondary});
b.AddEventListener("click", () => {
  console.log(s1.value());
});

const card = new Card({
  header: "Login",
  body: new Column([
    new Text({text: "username"}),
    10,
    new TextFieldAddon({prefix: new Icon(Icons.User)}),
    10,
    new TextField({type: InputType.Password}),
    10,
    new Button({text: new Row([
      new Icon(Icons.Search), 20, new Text({text: "Sample"})
    ], Flex.Stretch), color: Color.Danger})
  ])
});

const openmodal = new Button({text: "Open Modal", color: Color.Default});
openmodal.AddEventListener("click", async () => {
  const modal = new Modal({
    size: Size.Xs,
    label: new Row([new Icon(Icons.User), 5, "Sign In Form"]),
    footer: [
      new Button({text: new Row([new Icon(Icons.Save), 5, "Save"]), color: Color.Primary})
    ]
  });  
  modal.add(new Column([
    new TextField({type: InputType.Text}),
    10
  ]));

  const res = await modal.show();
  console.log(res);
});

MyApp.Navigate(new div().Add([
  btn,
  prog,
  pagination,
  bread,
  pager,
  list,
  test_panel,
  tab,
  new Icon(Icons.Star),
  b_split,
  new Label({text: "Sample", color: Color.Info}),
  new Well({size: Size.Lg}).Add(new Text("hellow well")),
  new AlertMessage({color: Color.Danger, dismissible: true}).Add(new Text({text: "SAmple red alert"})),
  tf,
  tb,
  tf2,
  tf3,
  radio,
  radio2,
  check1,
  check2,
  s1,
  b,
  card,
  openmodal,
  new Panel().AddStyle({
    margin: "500px",
    width: "100px",
    height: "100px"
  })
]));

MyApp.Run();

export default MyApp;


