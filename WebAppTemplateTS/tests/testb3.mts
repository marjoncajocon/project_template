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
      }
    });

    
    tbl.AddItem({ item: ['1', 'John Smith', '25'] });
    tbl.AddItem({ item: ['2', 'Alice Johnson', '30'] });
    tbl.AddItem({ item: ['3', 'Robert Brown', '27'] });
    tbl.AddItem({ item: ['4', 'Emily Davis', '22'] });
    tbl.AddItem({ item: ['5', 'Michael Wilson', '35'] });
    tbl.AddItem({ item: ['6', 'Sarah Miller', '28'] });
    tbl.AddItem({ item: ['7', 'David Garcia', '33'] });
    tbl.AddItem({ item: ['8', 'Jessica Rodriguez', '26'] });
    tbl.AddItem({ item: ['9', 'Daniel Martinez', '31'] });
    tbl.AddItem({ item: ['10', 'Laura Hernandez', '29'] });
    tbl.AddItem({ item: ['11', 'James Lee', '23'] });
    tbl.AddItem({ item: ['12', 'Kimberly Gonzalez', '27'] });
    tbl.AddItem({ item: ['13', 'William Perez', '32'] });
    tbl.AddItem({ item: ['14', 'Linda Thompson', '30'] });
    tbl.AddItem({ item: ['15', 'Charles White', '34'] });
    tbl.AddItem({ item: ['16', 'Patricia Harris', '24'] });
    tbl.AddItem({ item: ['17', 'Thomas Clark', '26'] });
    tbl.AddItem({ item: ['18', 'Angela Hall', '29'] });
    tbl.AddItem({ item: ['19', 'Christopher Young', '31'] });
    tbl.AddItem({ item: ['20', 'Barbara Allen', '28'] });
    tbl.AddItem({ item: ['21', 'Matthew Scott', '35'] });
    tbl.AddItem({ item: ['22', 'Elizabeth King', '25'] });
    tbl.AddItem({ item: ['23', 'Joshua Wright', '33'] });
    tbl.AddItem({ item: ['24', 'Megan Lopez', '22'] });
    tbl.AddItem({ item: ['25', 'Ryan Hill', '20'] });
    tbl.AddItem({ item: ['26', 'Michelle Green', '39'] });
    tbl.AddItem({ item: ['27', 'David Adams', '29'] });
    tbl.AddItem({ item: ['28', 'Emma Baker', '34'] });
    tbl.AddItem({ item: ['29', 'Kevin Gonzalez', '21'] });
    tbl.AddItem({ item: ['30', 'Samantha Nelson', '36'] });
    tbl.AddItem({ item: ['31', 'Steven Carter', '24'] });
    tbl.AddItem({ item: ['32', 'Rachel Mitchell', '27'] });
    tbl.AddItem({ item: ['33', 'Andrew Perez', '32'] });
    tbl.AddItem({ item: ['34', 'Laura Roberts', '30'] });
    tbl.AddItem({ item: ['35', 'Daniel Turner', '28'] });
    tbl.AddItem({ item: ['36', 'Chloe Phillips', '25'] });
    tbl.AddItem({ item: ['37', 'Matthew Campbell', '31'] });
    tbl.AddItem({ item: ['38', 'Sophie Parker', '24'] });
    tbl.AddItem({ item: ['39', 'Nathan Evans', '36'] });
    tbl.AddItem({ item: ['40', 'Katie Edwards', '29'] });
    tbl.AddItem({ item: ['41', 'George Collins', '23'] });
    tbl.AddItem({ item: ['42', 'Diane Stewart', '38'] });
    tbl.AddItem({ item: ['43', 'Jack Sanchez', '26'] });
    tbl.AddItem({ item: ['44', 'Julia Morris', '30'] });
    tbl.AddItem({ item: ['45', 'Eric Rivera', '35'] });
    tbl.AddItem({ item: ['46', 'Anna Cooper', '31'] });
    tbl.AddItem({ item: ['47', 'Brandon Cox', '27'] });
    tbl.AddItem({ item: ['48', 'Sara Ward', '22'] });
    tbl.AddItem({ item: ['49', 'Samuel Torres', '24'] });
    tbl.AddItem({ item: ['50', 'Olivia Peterson', '29'] });
    tbl.AddItem({ item: ['51', 'Thomas Reed', '33'] });
    tbl.AddItem({ item: ['52', 'Cynthia Johnson', '30'] });
    tbl.AddItem({ item: ['53', 'Isaac Wood', '28'] });
    tbl.AddItem({ item: ['54', 'Grace Bennett', '25'] });
    tbl.AddItem({ item: ['55', 'Mason Hughes', '21'] });
    tbl.AddItem({ item: ['56', 'Lily Ramirez', '35'] });
    tbl.AddItem({ item: ['57', 'Jason Price', '34'] });
    tbl.AddItem({ item: ['58', 'Ella Sanders', '22'] });
    tbl.AddItem({ item: ['59', 'Justin Powell', '31'] });
    tbl.AddItem({ item: ['60', 'Hannah Murphy', '29'] });
    tbl.AddItem({ item: ['61', 'Benjamin Ross', '28'] });
    tbl.AddItem({ item: ['62', 'Samantha Diaz', '27'] });
    tbl.AddItem({ item: ['63', 'Noah Martinez', '23'] });
    tbl.AddItem({ item: ['64', 'Victoria Reyes', '37'] });
    tbl.AddItem({ item: ['65', 'Gavin Rivera', '38'] });
    tbl.AddItem({ item: ['66', 'Zoe Bell', '29'] });
    tbl.AddItem({ item: ['67', 'Ethan Wright', '32'] });
    tbl.AddItem({ item: ['68', 'Hannah Lee', '28'] });
    tbl.AddItem({ item: ['69', 'Miguel Martinez', '30'] });
    tbl.AddItem({ item: ['70', 'Amelia King', '25'] });
    tbl.AddItem({ item: ['71', 'Alexis Moore', '22'] });
    tbl.AddItem({ item: ['72', 'Gabriel Henderson', '34'] });
    tbl.AddItem({ item: ['73', 'Liam Young', '31'] });
    tbl.AddItem({ item: ['74', 'Claire Wilson', '27'] });
    tbl.AddItem({ item: ['75', 'Willow Harper', '23'] });
    tbl.AddItem({ item: ['76', 'Matthew Wood', '24'] });
    tbl.AddItem({ item: ['77', 'Ruby Jenkins', '30'] });
    tbl.AddItem({ item: ['78', 'Carter Hughes', '29'] });
    tbl.AddItem({ item: ['79', 'Lucas Campbell', '35'] });
    tbl.AddItem({ item: ['80', 'Mia Johnson', '28'] });
    tbl.AddItem({ item: ['81', 'Evelyn Ramirez', '26'] });
    tbl.AddItem({ item: ['82', 'Josiah Parker', '36'] });
    tbl.AddItem({ item: ['83', 'Autumn Scott', '30'] });
    tbl.AddItem({ item: ['84', 'Abigail Stewart', '22'] });
    tbl.AddItem({ item: ['85', 'Liam Hall', '31'] });
    tbl.AddItem({ item: ['86', 'Wyatt Harper', '38'] });
    tbl.AddItem({ item: ['87', 'Ava Nelson', '29'] });
    tbl.AddItem({ item: ['88', 'Henry King', '26'] });
    tbl.AddItem({ item: ['89', 'Scarlett Edwards', '32'] });
    tbl.AddItem({ item: ['90', 'Sofia Thompson', '28'] });
    tbl.AddItem({ item: ['91', 'Caleb Carter', '24'] });
    tbl.AddItem({ item: ['92', 'Khloe Simmons', '27'] });
    tbl.AddItem({ item: ['93', 'Victoria Wood', '30'] });
    tbl.AddItem({ item: ['94', 'Logan Clark', '33'] });
    tbl.AddItem({ item: ['95', 'Ellie Myers', '25'] });
    tbl.AddItem({ item: ['96', 'Owen Phillips', '29'] });
    tbl.AddItem({ item: ['97', 'Jaxon Rivera', '22'] });
    tbl.AddItem({ item: ['98', 'Maverick Mills', '34'] });
    tbl.AddItem({ item: ['99', 'Paisley Bryant', '36'] });
    tbl.AddItem({ item: ['100', 'Landon Wilkins', '30'] });

    


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