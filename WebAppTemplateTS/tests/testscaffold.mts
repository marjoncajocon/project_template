import { div } from "../plugin/core/core.mts";
import { Button, Color, Icon, Icons, Row, WindowApp, Tile, Column, Grid, GridSize, BasicTab, Padding, BreadCrumb, ListView, Display, Dialog, TextField, InputType } from "../theme/w3.mts";


class TestDialog extends Dialog {
  constructor() {
    super({
      round: true,
      width: 300,
      height: 300,
      bgColor: Color.Sand,
      header: {
        icon: Icons.User,
        title: 'USER INFORMATION'
      }
    });


    const username = new TextField('Username', InputType.Text, 'Hellow').border();
    const password = new TextField('Password', InputType.Password, 'Enter Password').border();
    const login = new Button('Sign In', Color.Cyan);
    this.addItem(new Padding([
      username,
      password,
      login.style({
        marginTop: '10px'
      })
    ],20));
    
  }

  public dispose(): void {
    console.log('TOP DIPOSED!');
    super.dispose();
  }
}

class DashBoard extends div {
  constructor() {
    super();


    

    


    const btn = new Button('Open', Color.Red);

    btn.addEventListener('click', async () => {
      const dialog = new TestDialog();
      const res = await dialog.open();
      console.log(res);
    });
    
    super.add([btn]);
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

    tab.set({
      title: 'Home',
      fn: () => {

      },
      active: true
    });

    tab.set({
      title: 'Profile',
      fn: () => {
        
      }
    });
    tab.set({
      title: 'About',
      fn: () => {
        
      }
    });



    const side = new ListView({});

    side.addItem(new div().style({ 
      width: '1000px',
      height: '80px',
      backgroundColor: 'blue',
      marginRight: '50px',
      display: 'inline-block'
    }));

    side.addItem(new div().style({ 
      width: '1000px',
      height: '80px',
      backgroundColor: 'blue',
      display: 'inline-block'
    }));


    
    super.add(new Padding(new div().add([
      new BreadCrumb({ color: Color.IOSGreen, round: false}).set(['Home', 'Profile', 'about']),
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
        action: new Row([ new Button('Profile', Color.Cobalt), new Button('Sign Out', Color.Amber)]).style({ marginTop: '8px' }),
        drawer: {
          header: {
            title: 'HRMS V3-'
          },  
          item: [
            new Tile({ title: 'Dashboard', icon: Icons.Dashboard }).addEventListener('click', () => {
              app.updateBody(new DashBoard());
            }),
            new Tile({ title: 'Profile', icon: Icons.User }).addEventListener('click', () => {
              app.updateBody(new Profile());
            }),
            new Tile({ title: 'Backup', icon: Icons.Database }),
            new Tile({ title: 'Setting', icon: Icons.Cog })
          ],
          color: Color.Brown
        }
      },
      body: new DashBoard(),
    });


    super.add(app);


  }
}

export default TestScaffold;