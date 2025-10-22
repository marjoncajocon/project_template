import { Button, Card, Color, FaIcon, FaIcons, Icon, Icons, Pagination, Row, Size, Table } from "./plugin/core/bs.3.mts";
import {Window} from "./plugin/core/core.mjs";
import LTEApp, { LTEAppLogin, LTEMenuButton } from "./plugin/core/lte.3.mts";
import MarAdmin, { MarMenu } from "./plugin/core/theme/mar/mar.mts";

const MyApp = new Window();


//MyApp.Navigate(new MarAdmin({}));

MyApp.Navigate(new Button({text: new Row([new FaIcon(FaIcons.Cogs), 10, "Login"]), color: Color.Danger}));

MyApp.Run();

export default MyApp;


