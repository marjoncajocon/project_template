import { button, div } from "../plugin/core/core.mts";
import {Alerts, Badge, BasicTab, BreadCrumb, Button, ButtonGroup, CheckBox, Color, Icon, Icons, InputType, Label, ListGroup, Navbar, Pagination, Panel, ProgressBar, Radio, SelectBox, Size, Status, Table, TextBox, Textfield, Well} from "../theme/b3.mts";

class TestBootstrap3 extends div {
  constructor() {
    super();

    //super.AddStyle({padding: '20px'});

    const nav = new Navbar({
      title: 'Project Template',
      right_menu: [
        new Button({text: 'Logout', color: Color.Danger, prefix_icon: Icons.LogOut}).AddStyle({marginTop: '10px', marginRight: '10px'}),
        new Button({color: Color.Info, prefix_icon: Icons.Bell}).AddStyle({marginTop: '10px', marginRight: '10px'})
      ]});

    super.Add(nav);

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
        new Button({text: 'testfdsaf 2', color: Color.Warning}),
        new Button({text: 'testffdsf 3', color: Color.Success})

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
      active: true,
      body: new Button({ text: 'Home Page' })
    });

    tab.AddItem({
      title: 'Contact',
      body: new Button({ text: 'Contact Page' })
    });

    tab.AddItem({
      title: 'About',
      body: new Button({ text: 'About Page' })
    });

    super.Add(tab);

    const username = new Textfield({
      title: 'Username',
      type: InputType.Text,
      placeholder: 'Enter username',
      feedback: true
    });

   
    username.AddEventListener('keyup', () => {
      if (username.GetValue() == 'okay') {
        username.UpdateFeedBack({ status: Status.Ok});
      } else if (username.GetValue() == 'warn'){
        username.UpdateFeedBack({ status: Status.Warning});
      } else {
        username.UpdateFeedBack({ status: Status.Error});
      }
    });


    const ubox = new TextBox({
      title: 'Username',
      placeholder: 'Enter username',
      feedback: true
    });

   
    ubox.AddEventListener('keyup', () => {
      if (ubox.GetValue() == 'okay') {
        ubox.UpdateFeedBack({ status: Status.Ok});
      } else if (ubox.GetValue() == 'warn'){
        ubox.UpdateFeedBack({ status: Status.Warning});
      } else {
        ubox.UpdateFeedBack({ status: Status.Error});
      }
    });


    super.Add(username);
    super.Add(ubox);

    const erralert = new Alerts({color: Color.Danger, msg: "This is an error!"});
    const sucalert = new Alerts({color: Color.Success, msg: "This is an Success!"});

    const testwell = new Well({content: new Button({text: 'test well', color: Color.Primary}), size: Size.Large});

    const tbl = new Table({
      header: ['Id', 'Name', 'Age', 'Action'],
      scrollable: true,
      hover: true,
      striped: true,
      bordered: true
    });

    tbl.AddItem({
      item: ['12', 'marjon', '20', 'Action'],
      color: Color.Warning
    });
    tbl.AddItem({
      item: ['12', 'marjon', '20', 'Action']
    });
    tbl.AddItem({
      item: ['12', 'marjon', '20', 'Action']
    });
    tbl.AddItem({
      item: ['12', 'marjon', '20', 'Action']
    });
    tbl.AddItem({
      item: ['12', 'marjon', '20', 'Action'],
      color: Color.Danger
    });

    tbl.AddItem({
      item: ['12', 'marjon', '20', 'Action']
    });
    
    const check = new CheckBox({
      title: 'Remember Me'
    });

    check.SetValue(true);

    check.Disabled();

    check.Enabled();


    const male = new Radio({title: 'Male', group: 'gender'});
    const female = new Radio({title: 'Female', group: 'gender'});
    const other = new Radio({title: 'Other', group: 'gender'});
    other.Disabled();

    const select = new SelectBox({
      title: 'Select Gender'
    });

    select.AddItem({key: 'm', value: 'Male'});
    select.AddItem({key: 'f', value: 'Female'});
    select.AddItem({key: 'o', value: 'Other'});

    select.SetValue('o');

    console.log(select.GetValue());

    super.Add(erralert);
    super.Add(sucalert);
    super.Add(testwell);
    super.Add(tbl);
    super.Add(check);
    super.Add(male);
    super.Add(female);
    super.Add(other);
    super.Add(select);

  }
}

export default TestBootstrap3;