import { Button, Card, Color, Icon, Icons, Pagination, Row, Size, Table } from "./plugin/core/bs.3.mts";
import {Window} from "./plugin/core/core.mjs";
import LTEApp, { LTEAppLogin, LTEMenuButton } from "./plugin/core/lte.3.mts";
import MarAdmin, { MarMenu } from "./plugin/core/theme/mar/mar.mts";

const MyApp = new Window();

const mar = new MarAdmin({
  logo: "fdsa",
  title: "My App",
  sideBarColor: "#2a3f54",
  menu: new Row([
    new Button({text: "message"}), 5, new Button({text: "sign out"})
  ]),
  sideMenu: [
    new MarMenu({title: "Dashboard", logo: new Icon(Icons.Dashboard)}),
    new MarMenu({title: "Profile", logo: new Icon(Icons.User)}),
    new MarMenu({title: "Setting", logo: new Icon(Icons.Cog)})
  ]
});

MyApp.Navigate(mar);

MyApp.Run();

export default MyApp;


