import { button, Widget, Window } from "./plugin/core/core.ts";
import { Accordion, Alert, BasicTab, Box, Button, Card, CheckBox, Color, Confirm, Direction, Divider, DropDownHover, Icon, Icons, LeftTab, Modal, Padding, Pagination, ProgressBar, Radio, Row, SideBar, Size, Switch, Table, Text, TextField } from "./theme/w3.ts";

import "./theme/w3css/w3.css";
import "./theme/icon/css/all.css";


class TestModal extends Modal {
  constructor() {
    super('Test Modal', '480px', Color.Amber, Direction.Top);

    const username = new TextField('username', 'text', 'Enter Username').border();
    username.setIconPrefix({icon: Icons.User});

    const password = new TextField('password', 'password', 'Enter Password').border();
    password.setIconPrefix({icon: Icons.Lock, color: Color.MetroBlue});

    const signin = new Button(new Row([new Icon(Icons.Unlock),new Box(5), new Text('Sign In')]), Color.IOSPink)
    signin.size(Size.Tiny);
    signin.round();

    super.set(new Padding([
      username,
      password,
      new Divider(),
      signin
    ], 20));
  }
}

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


    const openmodal = new Button('Open Modal', Color.FlatAsbestos);

    openmodal.addEventListener('click', async () => {

      const modal = new TestModal();

      const res = await modal.open();
      console.log(res);

    });

    const progress = new ProgressBar(Color.Aqua);
    progress.update(10, 10);


    const male = new Radio('Male', 'gender');
    const female = new Radio('Female', 'gender');

    const ss = new Switch({round: true});
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
      progress,
      openmodal,
      male, 
      female,
      ss
    ]);



  }
}


const MyApp = new Window();
MyApp.navigate(new TestPage());

MyApp.run();

export default MyApp;