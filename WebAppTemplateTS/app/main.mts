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
//import './theme/bootstrap4/css/theme-materia.css';
import './theme/b3.css';

import { button, Widget, Window } from "./plugin/core/core.mts";
import TestBootstrap3 from "./tests/testb3.mts";
import WebScaffold from './theme/b3-extended.mts';
import { Box, Button, Color, Column, Icon, Icons, Panel, Row, Textfield } from './theme/b3.mts';



const MyApp = new Window();

//MyApp.Navigate(new TestBootstrap3()); 
const app = new WebScaffold({
  appBar: {
    title: 'M.M.C',
    action: [
      new Textfield({placeholder: 'Search'}).AddStyle({width: '200px'}),
      new Box({width: 5}),
      new Button({text: new Icon({icon: Icons.LogOut}), color: Color.Danger}),
      new Box({width: 10})
    ],
    drawer: {
      copyTitle: true,
      content: new Column({widgets: [
        new Button({text: 'Title header', color: Color.Danger}),
        new Button({text: 'title header 2', color: Color.Primary})
      ]})
    }
  }
});

app.SetBody(new Panel({}).Add([
  new Button({text: 'test Body Content'})
]));

MyApp.Navigate(app);

MyApp.Run();

export default MyApp;


