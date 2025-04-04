import { div } from "../plugin/core/core.mts";
import { Button, Color, Icon, Icons, Row, WindowApp, Tile, Column, Grid, GridSize, BasicTab, Padding, BreadCrumb, ListView, Display, Dialog, TextField, InputType, Table, List, Size } from "../theme/w3.mts";


class TestDialog extends Dialog {
  constructor() {
    super({
      round: true,
      width: 300,
      height: 1000,
      bgColor: Color.Sand,
      header: {
        icon: Icons.User,
        title: 'USER INFORMATION'
      }
    });


    const username = new TextField('Username', InputType.Text, 'Hellow').Border();
    const password = new TextField('Password', InputType.Password, 'Enter Password').Border();
    const login = new Button('Sign In', Color.Cyan);


    const tbl = new Table(['name', 'age', 'genger']);
    tbl.AddItem([ 'marjon ', '20', 'male']);
    tbl.AddItem([ 'noelsa', '19', 'female' ]);

    const testlist = new List(Size.Small);


    this.AddItem(new Padding([
      username,
      password,
      login.AddStyle({
        marginTop: '10px'
      }),
      tbl
    ],20));
    
  }

  public dispose(): void {
    console.log('TOP DIPOSED!');
    super.Dispose();
  }
}

class DashBoard extends div {
  constructor() {
    super();


    

    


    const btn = new Button('Open', Color.Red);

    btn.AddEventListener('click', async () => {
      const dialog = new TestDialog();
      const res = await dialog.Open();
      console.log(res);
    });
    
    super.Add([btn]);
  }

  public dispose(): void {
    console.log('close dashboard');
  }
}

class Profile extends div {
  constructor() {
    super();

    const tab = new BasicTab({
      bgColor: Color.Yellow
    });

    tab.AddItem({
      title: 'Home',
      fn: () => {

      },
      active: true
    });

    tab.AddItem({
      title: 'Profile',
      fn: () => {
        
      }
    });
    tab.AddItem({
      title: 'About',
      fn: () => {
        
      }
    });



    const side = new ListView({});

    side.AddItem(new div().AddStyle({ 
      width: '1000px',
      height: '80px',
      backgroundColor: 'blue',
      marginRight: '50px',
      display: 'inline-block'
    }));

    side.AddItem(new div().AddStyle({ 
      width: '1000px',
      height: '80px',
      backgroundColor: 'blue',
      display: 'inline-block'
    }));


    
    super.Add(new Padding(new div().Add([
      new BreadCrumb({ color: Color.IOSGreen, round: false}).AddItem(['Home', 'Profile', 'about']),
      side
    ]), 2));


  }

  public dispose(): void {
    console.log('close profile');
  }
}


class TestScaffold extends div{
  constructor() {
    super();

    const app = new WindowApp({
      appBar: {
        title: "HRMS V3",
        color: Color.Blue,
        action: new Row([ new Button('Profile', Color.Cobalt), new Button('Sign Out', Color.Amber)]).AddStyle({ marginTop: '8px' }),
        drawer: {
          header: {
            title: 'HRMS V3-'
          },  
          item: [
            new Tile({ title: 'Dashboard', icon: Icons.Dashboard }).AddEventListener('click', () => {
              app.UpdateBody(new DashBoard());
            }),
            new Tile({ title: 'Profile', icon: Icons.User }).AddEventListener('click', () => {
              app.UpdateBody(new Profile());
            }),
            new Tile({ title: 'Backup', icon: Icons.Database }),
            new Tile({ title: 'Setting', icon: Icons.Cog })
          ],
          color: Color.Brown
        }
      },
      body: new DashBoard(),
    });


    super.Add(app);


  }
}

export default TestScaffold;