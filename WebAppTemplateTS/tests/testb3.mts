import { button, div } from "../plugin/core/core.mts";
import {Alerts, Badge, BasicTab, BreadCrumb, Button, ButtonGroup, CheckBox, Color, Grid, GridSize, Icon, Icons, InputType, Label, ListGroup, Navbar, Pagination, Card, ProgressBar, Radio, SelectBox, Size, Status, Table, TextBox, Textfield, Well, Panel, Html, Text, Dialog, ButtonVariant, SpinnerVariant, Spinner, Switch, Modal, Row, Column, JustifyContent, Resource} from "../theme/b3.mts";

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

        const username = new Textfield({title: 'Username', type: InputType.Text, placeholder: 'Enter username', size: Size.Small, InputGroup: {
          prepend: true,
          group: new Icon({icon: Icons.Apple})
        }});

        // new Button({text: 'hellow', color: Color.Info, variant: ButtonVariant.Outlined})
        const password = new Textfield({title: 'Password', type: InputType.Password, placeholder: 'Enter password'});

        const signin = new Button({text: 'Sign In', color: Color.Primary, prefix_icon: Icons.LogIn, suffix_icon: Icons.Apple});

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



    const tbl = new Table({
      header: ['Id', 'Name', 'Age'],
      striped: true,
      bordered: true,
      scrollable: true,
      size: Size.Small,
      filter: {
        type: Resource.Local,
        limit: 10
      },
      item: [
          ['1', 'John Doe', '12'],
          ['2', 'Jane Smith', '22'],
          ['3', 'Michael Johnson', '32'],
          ['4', 'Emily Davis', '25'],
          ['5', 'Matthew Brown', '18'],
          ['6', 'Ashley Wilson', '29'],
          ['7', 'James Jones', '40'],
          ['8', 'Linda Garcia', '31'],
          ['9', 'Robert Martinez', '27'],
          ['10', 'Patricia Rodriguez', '35'],
          ['11', 'David Anderson', '45'],
          ['12', 'Barbara Thomas', '50'],
          ['13', 'Joseph Taylor', '28'],
          ['14', 'Charles Hernandez', '33'],
          ['15', 'Jessica Moore', '24'],
          ['16', 'Thomas Lee', '38'],
          ['17', 'Sarah White', '19'],
          ['18', 'Daniel Harris', '26'],
          ['19', 'Laura Clark', '36'],
          ['20', 'Kevin Lewis', '44'],
          ['21', 'Maria Hall', '23'],
          ['22', 'William Allen', '30'],
          ['23', 'Debra Young', '34'],
          ['24', 'Brian King', '20'],
          ['25', 'Nancy Wright', '42'],
          ['26', 'Andrew Scott', '48'],
          ['27', 'Samantha Green', '39'],
          ['28', 'Joshua Adams', '29'],
          ['29', 'Megan Baker', '37'],
          ['30', 'Barbara Nelson', '22'],
          ['31', 'Jennifer Carter', '18'],
          ['32', 'William Mitchell', '33'],
          ['33', 'Patricia Perez', '30'],
          ['34', 'Bryan Roberts', '41'],
          ['35', 'Linda Turner', '36'],
          ['36', 'Richard Phillips', '34'],
          ['37', 'Show Tan', '47'],
          ['38', 'Rachel Hall', '50'],
          ['39', 'Rebecca Wilson', '29'],
          ['40', 'Charles Clarke', '38'],
          ['41', 'Kate Hughes', '59'],
          ['42', 'Julia Miles', '20'],
          ['43', 'Graham Simmons', '44'],
          ['44', 'Melanie Campbell', '31'],
          ['45', 'Miles Johnson', '35'],
          ['46', 'Stewart Young', '26'],
          ['47', 'Jessica James', '25'],
          ['48', 'Samuel Brooks', '39'],
          ['49', 'Kyle Morgan', '28'],
          ['50', 'Danielle Perry', '24'],
          ['51', 'Shane Long', '30'],
          ['52', 'Elaine Kelly', '32'],
          ['53', 'Brandon Price', '45'],
          ['54', 'Tracy Griffin', '27'],
          ['55', 'Rick Medd', '33'],
          ['56', 'Keith Rivera', '37'],
          ['57', 'Fred Sanders', '21'],
          ['58', 'Cynthia Phillips', '48'],
          ['59', 'Johnny Coleman', '40'],
          ['60', 'Bill Reed', '50'],
          ['61', 'Emily Simpson', '42'],
          ['62', 'Evelyn Rose', '35'],
          ['63', 'Alicia Lewis', '26'],
          ['64', 'Curtis Adams', '22'],
          ['65', 'Bradley Cox', '29'],
          ['66', 'Laura Brooks', '43'],
          ['67', 'Mandy Alexander', '31'],
          ['68', 'Colin Hughes', '29'],
          ['69', 'Paula Jenkins', '24'],
          ['70', 'Victor Stone', '22'],
          ['71', 'Carl Holt', '25'],
          ['72', 'Elena Ford', '38'],
          ['73', 'Aria Bennett', '36'],
          ['74', 'Thomas Sue', '57'],
          ['75', 'Kathy Johnson', '33'],
          ['76', 'Jessie Clark', '45'],
          ['77', 'Jerry Martin', '42'],
          ['78', 'Ronald Roberts', '49'],
          ['79', 'Lucy Ramirez', '39'],
          ['80', 'Lisa Murphy', '54'],
          ['81', 'Danny Turner', '41'],
          ['82', 'Kevin Rivera', '26'],
          ['83', 'Jane Holt', '35'],
          ['84', 'Raymond Morales', '44'],
          ['85', 'Scott Turner', '23'],
          ['86', 'Terry Reed', '30'],
          ['87', 'Madison Williams', '28'],
          ['88', 'Lillian Anderson', '32'],
          ['89', 'Sara Edwards', '26'],
          ['90', 'Marlon Gomez', '20'],
          ['91', 'Danny Diaz', '43'],
          ['92', 'Sonia Wong', '36'],
          ['93', 'Martha Robbins', '22'],
          ['94', 'Jacob Foster', '49'],
          ['95', 'Ryder Lewis', '34'],
          ['96', 'Madeline White', '30'],
          ['97', 'Nicholas Martin', '50'],
          ['98', 'Stephen Walker', '38'],
          ['99', 'Natalie Thompson', '21'],
          ['10', 'Victoria Hall', '28'],
      ]
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
      grid,
      btn,
      new Row({
        padding: 2,
        justify: JustifyContent.Start,
        widgets: [
        new Text({text: 'hellow'}),
        new Icon({icon: Icons.Alert}),
        new Button({text: 'hellow', color: Color.Dark}),
        new Column({
          padding: 2,
          justify: JustifyContent.Center,
          widgets: [
            new Text({text: 'Sample Column'}),
            new Button({text: 'sample btn', color: Color.Primary})
          ]
        })
      ]}),
      new Well({content: new Html({text: `<h5>Powered by: Bootstrap 4</h5>`})}),
      new Card({body: tbl})
    ]);
  }
}

export default TestBootstrap3;