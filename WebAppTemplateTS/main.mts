import { button, Widget, Window } from "./plugin/core/core.mts";

import "./theme/w3css/w3.css";
import "./theme/icon/css/all.css";
import './main.css';

import TestScaffold from "./tests/testscaffold.mts";
import TestPage from "./tests/testpage.mts";

const MyApp = new Window();
MyApp.navigate(new TestScaffold());
MyApp.run();

export default MyApp;