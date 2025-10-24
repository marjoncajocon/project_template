import "./plugin/core/bootstrap3/css/bootstrap.css";

import { AlertMessage, BreadCrumb, Button, ButtonSplit, Card, Color, Column, Text, Column2, FaIcon, FaIcons, Icon, Icons, Label, ListGroup, Pager, Pagination, ProgressBar, Row, Size, Tab, Tab2, Table, TextField, TextFieldAddon, Message, TextBox, Radio, CheckBox, SelectBox, ModalModern, Alert, Confirm, Modal, ContainerFluid, Container, Grid, GridSize, CardV2, SelectBoxAddon } from "./plugin/core/bs.3.mts";
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

const check = new CheckBox({label: "Sample", switch: true});

const select = new SelectBox({
    prefix: new Button({text: new FaIcon(FaIcons.Adn), color: Color.Primary}),
    suffix: new Button({text: "$", color: Color.Info})
});
select.add("m", "Male");
select.add("f", "Female");

select.tf.AddEventListener("change", () => {
    console.log(select.value());
});

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

const open = new Button({text: "open modal", color: Color.Secondary});
open.AddEventListener("click", async () => {

    const modal = new Modal({label: "sample label", footer: [new Button({text: "sample", color: Color.Info})]});
    await modal.show();
    // if (await Confirm("Are you sure to open the modal?")) {
    //     //const modal = new ModalModern({label: "sample"});
    //     //await modal.show();
    //     //await Alert("Succesfully Viewed")
    // }

});

// sample table

const table = new Table({
    header: ["id", "name", "status", "action"],
    striped: true,
    border: true,
    hover: true,
    condensed: true,
    size: Size.Sm
});

table.add({item: ["1", "john doe", "active", new Button({text: "edit", color: Color.Primary})]});
table.add({item: ["1", "john doe", "active", new Button({text: "edit", color: Color.Primary})]});
table.add({item: ["1", "john doe", "active", new Button({text: "edit", color: Color.Primary})]});
table.add({item: ["1", "john doe", "active", new Button({text: "edit", color: Color.Primary})]});
table.add({item: ["1", "john doe", "active", new Button({text: "edit", color: Color.Primary})]});
table.add({item: ["1", "john doe", "active", new Button({text: "edit", color: Color.Primary})]});


const grid = new Grid({});

grid.add(new Button({text: "sample1"}), [GridSize.Lg6]);
grid.add(new Button({text: "sample2"}), [GridSize.Lg6]);


const selectaddon = new SelectBoxAddon({
    filter: {},
    prefix: new Button({text: new FaIcon(FaIcons.Search), color: Color.Success, size: Size.Sm}),
    hasfeedback: true
});

selectaddon.add("a", "marjon cajocon");
selectaddon.add("ar", "smarjon cajocon");
selectaddon.add("aer", "sfmarjon cajocon");
selectaddon.add("ha", "fdmarjon cajocon");
selectaddon.add("afd", "smarjon cajocon");
selectaddon.add("aa", "fdsmarjon cajocon");

selectaddon.check("VAlidated", Message.Success);

selectaddon.tf.tf.AddEventListener("change", () => {
    console.log(selectaddon.value());
});

MyApp.Navigate(new Container({
    body: new Column([
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
        check,
        select,
        open,
        20,
        new CardV2({body: table, bodyPadding: true, header: "sample header"}),
        20,
        grid,
        10,
        selectaddon,
        20
    ])
}));

MyApp.Run();

export default MyApp;


/// attribute in the html tag for dark mode and light mode: data-bs-theme="dark"