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

import { button, Widget, Window } from "./plugin/core/core.mts";
import TestBootstrap3 from "./tests/testb3.mts";
import WebScaffold from './theme/b3-extended.mts';
import { Box, Button, Card, Color, Column, Icon, Icons, ListTile, Pagination, Panel, Row, Text, Textfield, ValueRange } from './theme/b3.mts';


class pageone extends Card {
  constructor() {
    super({
      body: new Button({text: 'page one'})
    });
  }
}


class pagetwo extends Card {
  constructor() {
    super({
      body: new Button({text: 'page two'})
    });
  }
}



class Dashboard extends Panel {
  constructor() {
    super({});




    const content = new Panel({});



    const paginate = new Pagination({
      onchange: (page) => {
        content.Clear();

        // if(page == 1) {
        //   content.Add(new pageone());
        // } else if(page == 2) {
        //   content.Add(new pagetwo());
        // } else if (page == 3) {
          
        // }


        switch(page) {
          case 1:
            content.Add(new pageone());
            break;
          case 2:
            content.Add(new pagetwo());
          case 3:
            // ikaw nay sumpay ana
            break;
          default:
            content.Add(new Text({text: 'Invalid Page'}));
        }

      }
    });

    paginate.AddItem([1, 2, 3, 4, 5, 6, 7, 8]);


    super.Add([
      content,
      paginate
    ]);


  }
}



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
      content: new Panel({padding: {all: ValueRange.One}}).Add( new Column({widgets: [
        new ListTile({
          title: new Row({widgets: [ new Icon({icon: Icons.Dashboard}), new Box({width: 5}), new Text({text: 'Dashboard'}) ]}),
          curve: true,
          click(obj) {
            app.HideSideBar();
            app.SetBody(
              new Dashboard()
            );
          },
        }),
        new Box({
          height: 5
        }),
        new ListTile({
          title: new Row({widgets: [ new Icon({icon: Icons.User}), new Box({width: 5}), new Text({text: 'My Profile'}) ]}),
          curve: true,
          click(obj) {
            app.HideSideBar();
            app.SetBody(new Button({text: 'My Profile Page', color: Color.Info}));
          }
        }),
        new Box({
          height: 5
        }),
        new ListTile({
          title: new Row({widgets: [ new Icon({icon: Icons.Cog}), new Box({width: 5}), new Text({text: 'Setting'}) ]}),
          curve: true,
          click(obj) {
            app.HideSideBar();
            app.SetBody(new Button({text: 'Setting Page', color: Color.Danger}));
          },
        })
      ]}))
    }
  }
});

app.SetBody(new Panel({}).Add([
  new Button({text: 'test Body Content'})
]));

MyApp.Navigate(app);

MyApp.Run();

export default MyApp;


