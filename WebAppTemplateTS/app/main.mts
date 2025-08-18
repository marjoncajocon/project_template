import { Button, Size, Color, Badge, ProgressBar, Pagination, BreadCrumb, Pager, ListGroup, Panel, Tab, Card, Icon, Icons, ButtonSplit, Divider } from "./plugin/core/bs.3.mts";
import {col, div, Window} from "./plugin/core/core.mjs";
import "./theme/bootstrap3/css/bootstrap.min.css";

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


const b_split = new ButtonSplit();
b_split.add("sample");
b_split.add("menu2");
b_split.add(new Divider());
b_split.add("sample 23");


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
  b_split
]));

MyApp.Run();

export default MyApp;


