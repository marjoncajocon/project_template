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

//import './theme/bootstrap4/css/bootstrap.css';
import './theme/bootstrap4/css/theme-lumen.css';
//import './theme/bootstrap4/css/theme-darkly.css';
//import './theme/bootstrap4/css/theme-cerulean.css';
//import './theme/bootstrap4/css/theme-pulse.css';
//import './theme/bootstrap4/css/theme-sketchy.css';
import './theme/b3.css';

import { button, Widget, Window, input } from "./plugin/core/core.mts";
import TestBootstrap3 from "./tests/testb3.mts";
import WebScaffold from './theme/b3-extended.mts';
import { Box, Button, Card, Color, Column, Icon, Icons, ListTile, Pagination, Panel, Row, Text, Textfield, ValueRange, TextBox } from './theme/b3.mts';





const MyApp = new Window();

const panel_test = new Panel();

// testing widget here 
const btn = new Button({text: 'sample button', color: Color.Primary});

btn.AddEventListener('click', () => {
  alert('this button is clicked');
});

const n = new input();

panel_test.Add(new Column([
  btn,
  n
]));
// end testing widget 

MyApp.Navigate(panel_test);

MyApp.Run();

export default MyApp;


