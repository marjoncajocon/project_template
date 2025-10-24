import "./plugin/core/bootstrap3/css/bootstrap.css";

import { BreadCrumb, Button, Card, Color, Column, Column2, FaIcon, FaIcons, Icon, Icons, Label, ListGroup, Pager, Pagination, ProgressBar, Row, Size, Tab, Table } from "./plugin/core/bs.3.mts";
import {Theme, Window} from "./plugin/core/core.mjs";

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

MyApp.Navigate(new Column([
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
    tab
]));

MyApp.Run();

//MyApp.setTheme(Theme.Dark)
export default MyApp;


/// attribute in the html tag for dark mode and light mode: data-bs-theme="dark"