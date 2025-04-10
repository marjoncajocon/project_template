import { button, div } from "../plugin/core/core.mts";
import {Badge, BasicTab, BreadCrumb, Button, ButtonGroup, Color, Icon, Icons, Label, ListGroup, Pagination, Panel, ProgressBar, Size} from "../theme/b3.mts";

class TestBootstrap3 extends div {
  constructor() {
    super();

    super.Add(new Button({
      text: 'Hellow testing',
      color: Color.Primary,
      block: true,
      active: true,
      size: Size.Large
    }));

    super.Add(new ButtonGroup({
      vertical: true,
      list: [
        new Button({text: 'test 1', color: Color.Primary}),
        new Button({text: 'testfdsaf 2', color: Color.Primary}),
        new Button({text: 'testffdsf 3', color: Color.Primary})

      ]
    }));

    super.Add(new Icon({icon: Icons.Apple}))
    
    super.Add(new Badge({text: '2345'}));
    super.Add(new Label({ text: 'hellow this is a label', color: Color.Danger }));

    super.Add(new ProgressBar({ color: Color.Info, striped: true, animate: true }).UpdateText(10, 'Loading'));

    super.Add(new Pagination({
      onchange: (value: number) => {
        console.log(value);
      }
    }).AddItem([1, 2, 3, 4, 5]));

    super.Add(new BreadCrumb({
      menu: ['Home', 'Profile', 'About']
    }));

    super.Add(new ListGroup().AddItem(new Button({ text: 'hellow'})));

    super.Add(new Panel({ title: 'Hellow this is a sample', color: Color.Info }));

    const tab = new BasicTab({});

    tab.AddItem({
      title: 'Home',
      active: true
    });

    tab.AddItem({
      title: 'Contact'
    });

    tab.AddItem({
      title: 'About'
    });

    super.Add(tab);


  }
}

export default TestBootstrap3;