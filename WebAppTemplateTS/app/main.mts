import {col, div, Window} from "./plugin/core/core.mjs";
import LTEApp from "./plugin/core/lte.3.mts";
import "./theme/bootstrap3/css/bootstrap.min.css";
//import "./theme/bootstrap3/css/theme-lumen.css";

const MyApp = new Window();

const lte = new LTEApp();


MyApp.Navigate(lte);

MyApp.Run();

export default MyApp;


