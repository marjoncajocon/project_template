import { div } from "../plugin/core/core.mts";
import { Button, Color, Icon, Icons, Row, WindowApp, Tile, Column } from "../theme/w3.mts";

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
            new Tile({ title: 'Dashboard', icon: Icons.Dashboard }),
            new Tile({ title: 'Profile', icon: Icons.User }),
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