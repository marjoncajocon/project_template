import "./plugin/core/bootstrap3/css/bootstrap.css";

import { AlertMessage, BreadCrumb, Button, ButtonSplit, Card, Color, Column, Text, Column2, FaIcon, FaIcons, Icon, Icons, Label, ListGroup, Pager, Pagination, ProgressBar, Row, Size, Tab, Tab2, Table, TextField, TextFieldAddon, Message, TextBox, Radio } from "./plugin/core/bs.3.mts";
import {div, Theme, Window} from "./plugin/core/core.mjs";

const MyApp = new Window();

const btn = new Button({text: new Row([new FaIcon(FaIcons.AddressBook),10,  "Save"]), color: Color.Danger, size: Size.Sm});
const label = new Label({text: "sample", color: Color.Primary});
const btn2 = new Button({text: new Row([new FaIcon(FaIcons.Key), 5, "key"]), color: Color.Primary, outlined: true, size: Size.Sm});
const btn_link = new Button({text: "sample", color: Color.Info, outlined: true});
const prog = new ProgressBar({color: Color.Primary, striped: true, animation: true, height: "5px"});
prog.update(90, true);

const page = new Pagination({size: Size.Sm, change(n) {
    console.log(n);
},});

for (let i = 1; i <= 50;i++) {
    page.add(i);
}

const bread = new BreadCrumb({});
bread.add("Home");
bread.add("Profile");
bread.add("Information");

// no pager in bootstrap 5
const pager = new Pager({nextClicked() {
    
}, prevClicked() {
    
},});

const lgroup = new ListGroup({horizontal: true});
lgroup.add("sample", Color.Danger);
lgroup.add("sample2");

const card = new Card({header: "sample", body: "hellow body"});

const tab = new Tab({});
tab.add("Home", () => {

}, true);

tab.add("Setting", () => {

});

tab.add("About", () => {

});


const tab2 = new Tab2({widgetClass: class test extends div {constructor() {super();}}});
tab2.add();
tab2.add();
tab2.add();

const drop = new ButtonSplit({text: "Menu", color: Color.Primary});
drop.add("apple", () => {console.log("apple");});
drop.add("orange", () => {console.log("orange");});
drop.add("banana", () => {console.log("banana");});


const alrt = new AlertMessage({color: Color.Success});
alrt.Add(new Text({text: "sample"}));

const tf1 = new TextField({size: Size.Sm});

const tf2 = new TextFieldAddon({
    hasfeedback: true
});
tf2.check("hello", Message.Success);

const tf3 = new TextBox({placeholder: "sample"});

const radio = new Radio({label: "sample", group: "t1"});

let flag = false;
const switch_them = new Button({text: "Switch Theme", color: Color.Dark});
switch_them.AddEventListener("click", () => {
    if (!flag) {
        MyApp.setTheme(Theme.Dark);
    } else {
        MyApp.setTheme(Theme.Light);
    }
    flag = !flag;
});
MyApp.Navigate(new Column([
    switch_them,
    20,
    btn,
    5,
    label,
    btn2,
    btn_link,
    prog,
    page,
    bread,
    pager,
    lgroup,
    card,
    tab,
    tab2,
    drop,
    alrt,
    tf1,
    tf2,
    tf3,
    radio,
]));

MyApp.Run();

export default MyApp;


/// attribute in the html tag for dark mode and light mode: data-bs-theme="dark"