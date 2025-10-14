import { Button, Card, Color, Icon, Icons, Pagination, Row, Size, Table } from "./plugin/core/bs.3.mts";
import {Window} from "./plugin/core/core.mjs";
import LTEApp, { LTEAppLogin, LTEMenuButton } from "./plugin/core/lte.3.mts";
import MarAdmin from "./plugin/core/theme/mar/mar.mts";

const MyApp = new Window();

const mar = new MarAdmin({
  title: "My App",
  menu: new Row([
    new Button({text: "message"}), 5, new Button({text: "sign out"})
  ])
});

MyApp.Navigate(mar);

MyApp.Run();

export default MyApp;


