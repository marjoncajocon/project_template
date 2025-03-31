import { button, Widget, Window } from "./plugin/core/core.ts";
import { Accordion, Alert, BasicTab, Button, Card, CheckBox, Color, Confirm, Divider, DropDownHover, Icon, Icons, LeftTab, Pagination, ProgressBar, SideBar, Size, Switch, Table, TextField } from "./theme/w3.ts";

import "./theme/w3css/w3.css";
import "./theme/icon/css/all.css";

class TestPage extends Card {
  constructor() {
    super();

    const btn = new Button("Test", Color.Blue);

    btn.addEventListener("click", async () => {
      await Confirm('okay?');

      const res = await Alert("Are you sure", Color.Amber);
      console.log(res);
    });

    const tf = new TextField("Username", "text");
    tf.border();

    const tab = new BasicTab({ bgColor: Color.Aqua });

    tab.set({
      title: "Option 1", fn: (o: any) => {
        o.add(new Button("hellow"));
      },
      active: true
    });

    tab.set({
      title: "Option 2", fn: (o: any) => {
        o.add(new Button("hellow2"));
      }
    });

    const t = new CheckBox('Sample');

    const s = new Switch({});

    const tbl = new Table(['no', 'name', 'Action'], Size.Small, Color.FlatAsbestos);
    tbl.add([
      '1', 'Marjon Cajocon', new Button('trash', Color.Win8Red).round(),
    ]);

    const drop = new DropDownHover('hellow');
    drop.set('test1', () => { console.log(1); });
    drop.set('test2', () => { });
    drop.set('test3', () => { });
    drop.set('test4', () => { });

    const acc = new Accordion('sample accordion', new Button('accordiion sample'));
    const acc2 = new Accordion('sample accordion2', new Button('accordiion sample', Color.BlueGray));

    const side = new SideBar('testing');
    side.set('sample');
    side.set('sample2');
    side.set('sample3', () => {
      console.log('sample3 is clicked!');
    });

    const left = new LeftTab({ bgColor: Color.DeepPurple });

    left.set({
      title: "sample", fn: () => {
        console.log('sample1');
      }
    });
    left.set({
      title: "sample2", fn: () => {
        console.log('sample1');
      }
    });



    const page = new Pagination(() => {
      console.log("change");
    }, null, Size.Large);

    page.set(1, false, () => {

    });

    page.set(2, false, () => {

    });
    page.set(3, false, () => {

    });


    const progress = new ProgressBar(Color.Aqua);
    progress.update(10, 10);
    super.add([
      tf,
      btn,
      tab,
      t,
      s,
      tbl,
      new Divider(),
      drop,
      acc,
      acc2,
      new Icon(Icons.Plus),
      // side,
      left,
      new Divider(),
      page,
      progress
    ]);



  }
}


const MyApp = new Window();
MyApp.navigate(new TestPage());

MyApp.run();

export default MyApp;