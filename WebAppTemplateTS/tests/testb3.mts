import { button, div } from "../plugin/core/core.mts";
import {Alerts, Badge, BasicTab, BreadCrumb, Button, ButtonGroup, CheckBox, Color, Grid, GridSize, Icon, Icons, InputType, Label, ListGroup, Navbar, Pagination, Card, ProgressBar, Radio, SelectBox, Size, Status, Table, TextBox, Textfield, Well, Panel, Html, Text, Dialog, ButtonVariant, SpinnerVariant, Spinner, Switch} from "../theme/b3.mts";

class TestBootstrap3 extends div {
  constructor() {
    super();

    //super.AddStyle({padding: '20px'});
    

    const btn_primary = new Button({  
      text: 'hellow button',
      color: Color.Danger,
      size: Size.Small,
      variant: ButtonVariant.Outlined,
      spinner: {
        variant: SpinnerVariant.Grow,
        size: Size.Small
      }
    });

    btn_primary.AddEventListener('click', () => {
      btn_primary.ShowLoader();
      setTimeout(() => {
        btn_primary.HideLoader();
      }, 3000);
    });


    const alert1 = new Alerts({color: Color.Danger, msg: 'Hellow sample'});

    const badge = new Badge({ text: 'hellow badge', color: Color.Warning, pill: true });

    const progress = new ProgressBar({color:  Color.Success, striped: true, animate: true});

    progress.UpdateText(20, '');

    const spin = new Spinner({variant: SpinnerVariant.Border, color: Color.Danger, size: Size.Small});

    const pagination = new Pagination({
      onchange:(e) => {console.log(e);},
      size: Size.Small
    });

    pagination.AddItem([1,2 ,3, 4,5 ]);

    const bread = new BreadCrumb({menu: ['Home', 'Profile', 'About']});

    const list = new ListGroup({
      list: [
        new Text({text: 'hellow'}),
        new Text({text: 'Word'}),
        new Text({text: 'Test Word'})
      ],
      horizontal: true
    });

    const card = new Card({title: 'Test Card',header_color: Color.Success, footer: new Text({text: 'this is a footer'}), body: new Html({text: `this is a sample html<h1>hey</h1>`})});

    const tf = new Textfield({
      title: 'Username',
      type: InputType.Text,
      placeholder: 'Please enter username',
      size: Size.Small,
      has_feedback: true
    });

    tf.Update(false, 'Required Field!');

    tf.AddEventListener('keyup', () => {
      if (tf.GetValue() == '') {
        tf.ClearFeedBack();
      } else if (tf.GetValue() == 'valid') {
        tf.Update(true, 'Okay Valid input');
      } else {
        tf.Update(false, 'Input is invalid');
      }
    });

    const area = new TextBox({ title: 'Hellow area'});

    const checkb = new CheckBox({title: 'Remember Me', key: 'rem'});
    const checkc = new CheckBox({title: 'Remember Me 2', key: 'rem2'});


    


    const male = new Radio({
      key: 'm',
      group: 'gender',
      title: 'Male'
    });

    const female = new Radio({
      key: 'f',
      group: 'gender',
      title: 'Female'
    });


    const off = new Switch({title: 'Turn On Update', key: 'off'});
    const on = new Switch({title: 'Turn On follower', key: 'on'});

    on.Disabled();

    const select = new SelectBox({title: 'Hellow'});
    select.AddItem({
      key: 'a',
      value: 'Active'
    });

    select.AddItem({
      key: 'd',
      value: 'Not Active'
    });

    const tab = new BasicTab({});
    tab.AddItem({
      title: 'Test Item',
      active: true,
      body: new Text({text: 'Home'})
    });

    tab.AddItem({
      title: 'Test Item2',
      body: new Text({text: 'About'})
    });

    const tbl = new Table({
      header: ['Id', 'Name', 'Age'],
      striped: true,
      bordered: true,
      scrollable: true,
      size: Size.Small
    });

    tbl.AddItem({
      item: ['12', 'John Doe', '56']
    });

    tbl.AddItem({
      item: ['1', 'Jack Ma', '30']
    });

    tbl.AddItem({
      item: ['3', 'Rose Doe', '20']
    });

    super.Add([bread, btn_primary, alert1, badge, progress, spin, pagination,
      list,
      card,
      tf,
      area,
      checkb,
      checkc,
      male,
      female,
      off, 
      on,
      select,
      tab,
      tbl
    ]);
  }
}

export default TestBootstrap3;