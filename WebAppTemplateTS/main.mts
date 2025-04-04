import { button, Widget, Window } from "./plugin/core/core.mts";

import "./theme/w3css/w3.css";
import "./theme/icon/css/all.css";
import './main.css';

import TestScaffold from "./tests/testscaffold.mts";


const MyApp = new Window();
MyApp.Navigate(new TestScaffold());
MyApp.Run();

export default MyApp;