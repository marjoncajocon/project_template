// // w3css
// import { button, Widget, Window } from "./plugin/core/core.mts";

// import "./theme/w3css/w3.css";
// import "./theme/icon/css/all.css";
// import './main.css';

// //import TestScaffold from "./tests/testscaffold.mts";
// import Login from "./lib/login.mts";
// import TestScaffold from "./tests/testscaffold.mts";


// const MyApp = new Window();
// MyApp.Navigate(new Login());
// MyApp.Run();

// export default MyApp;

import './theme/bootstrap3/css/bootstrap.css';
import './theme/bootstrap3/css/bootstrap-theme.css';
import "./theme/icon/css/all.css";

import { button, Widget, Window } from "./plugin/core/core.mts";
import TestBootstrap3 from "./tests/testb3.mts";




const MyApp = new Window();
MyApp.Navigate(new TestBootstrap3());
MyApp.Run();

export default MyApp;


