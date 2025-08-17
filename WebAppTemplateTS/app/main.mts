import { Button, Size, Color, Badge, ProgressBar, Pagination } from "./plugin/core/bs.3.mts";
import {div, Window} from "./plugin/core/core.mjs";
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
pagination.addItem(1, (i) => {
  console.log(i);
});
pagination.addItem(2);
pagination.addItem(3);
pagination.addItem(4);

MyApp.Navigate(new div().Add([
  btn,
  prog,
  pagination
]));

MyApp.Run();

export default MyApp;


