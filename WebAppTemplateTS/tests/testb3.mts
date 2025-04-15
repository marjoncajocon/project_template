import { button, div } from "../plugin/core/core.mts";
import {Alerts, Badge, BasicTab, BreadCrumb, Button, ButtonGroup, CheckBox, Color, Grid, GridSize, Icon, Icons, InputType, Label, ListGroup, Navbar, Pagination, Card, ProgressBar, Radio, SelectBox, Size, Status, Table, TextBox, Textfield, Well, Panel, Html, Text, Dialog, ButtonVariant, SpinnerVariant, Spinner, Switch, Modal, Row, Column, JustifyContent} from "../theme/b3.mts";

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
      ]
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
    select.input.AddEventListener('change', () => {
      alert(select.GetValue());
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

    const grid = new Grid({
      item: [new Card({title: 'Left', header_color: Color.Danger, body: new Html({text: `
          <H1>Sample Project</H1>
        `})}), 
        new Card({title: 'right', header_color: Color.Primary, body: new Html({text: `<h1>test</h1>`})})],
      size: [GridSize.Desktop6, GridSize.Phone6]
    });

    const btn = new Button({text: 'Open Modal', color: Color.Danger});


    class TestModal extends Modal {
      constructor() {
        super({width: 600, title: 'User Information', icon: Icons.FloppyRemove, padding: 20, dismissable: false});

        const username = new Textfield({title: 'Username', type: InputType.Text, placeholder: 'Enter username', size: Size.Small});

        const password = new Textfield({title: 'Password', type: InputType.Password, placeholder: 'Enter password'});

        const signin = new Button({text: 'Sign In', color: Color.Primary});

        const rem = new Switch({title: 'Remember Password', key: 'rempass'});

        const card = new Card({body: new Panel({}).Add([ username, password, signin, rem ])});

        signin.AddEventListener('click', () => {
          this.Close(rem.GetValue());
          
        });

        this.AddItem(card);

      }
      public Dispose(): void {
        console.log('hellow closing the testmodal');
      }
    }


    btn.AddEventListener('click', async () => {
      const modal = new TestModal();
      const res = await modal.Open();

      console.log(res);
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
      tbl,
      grid,
      btn,
      new Row({
        padding: 2,
        justify: JustifyContent.Start,
        widgets: [
        new Text({text: 'hellow'}),
        new Icon({icon: Icons.Alert}),
        new Button({text: 'hellow', color: Color.Dark}).AddStyle({width: '800px'}),
        new Column({
          padding: 2,
          justify: JustifyContent.Center,
          widgets: [
            new Text({text: 'Sample Column'}),
            new Button({text: 'sample btn', color: Color.Primary})
          ]
        })
      ]})
    ]);
  }
}

export default TestBootstrap3;