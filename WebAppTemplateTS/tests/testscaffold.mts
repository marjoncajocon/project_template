import { div } from "../plugin/core/core.mts";
import { Button, Color, Icon, Icons, Row, WindowApp, Tile, Column } from "../theme/w3.mts";

class DashBoard extends div {
  constructor() {
    super();

    super.add(new Button('dashboard').addEventListener('click', () => {
      console.log('hellow dashboard');
    }));
  }

  public dispose(): void {
    console.log('close dashboard');
  }
}

class Profile extends div {
  constructor() {
    super();

    super.add(new Button('Profile'));
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
      body: new div().add(new Column([ 
        new Button('hellow', Color.White),
        new Button('hellow', Color.White),
        new Button('hellow', Color.White),
        new Button('hellow', Color.White),
        new Button('hellow', Color.White),
        new Button('hellow', Color.White),
        new Button('hellow', Color.White),
        new Button('hellow', Color.White),
        new Button('hellow', Color.White)
      ])),
    });


    super.add(app);


  }
}

export default TestScaffold;