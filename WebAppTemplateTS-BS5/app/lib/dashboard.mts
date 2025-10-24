import { div } from "../plugin/core/core.mts";
import { Color, Icon, Icons, Panel, Tile, WindowApp } from "../theme/w3.mts";

class Dashboard extends div {
  constructor() {
    super();

    const app = new WindowApp({
      appBar: {
        title: 'Inventory System',
        color: Color.Green,
        drawer: {
          header: {
            icon: Icons.Bell,
            title: 'I.S'
          },
          color: Color.Green,
          item: [
            new Tile({
              title: 'Dashboard',
              icon: Icons.Home
            }),
            new Tile({
              title: 'About',
              icon: Icons.Calendar
            })
          ]
        }
      }
    });

    
    super.Add(app);

  }
}

export default Dashboard;