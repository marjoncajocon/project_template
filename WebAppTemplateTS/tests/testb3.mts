import { button, div } from "../plugin/core/core.mts";
import {Alerts, Badge, BasicTab, BreadCrumb, Button, ButtonGroup, CheckBox, Color, Grid, GridSize, Icon, Icons, InputType, Label, ListGroup, Navbar, Pagination, Card, ProgressBar, Radio, SelectBox, Size, Status, Table, TextBox, Textfield, Well, Panel, Html, Text, Dialog} from "../theme/b3.mts";

class TestBootstrap3 extends div {
  constructor() {
    super();

    //super.AddStyle({padding: '20px'});
    

    const btn_primary = new Button({  
      text: 'hellow button',
      color: Color.Warning,
      size: Size.ExtraSmall
    });


    super.Add(btn_primary);
  }
}

export default TestBootstrap3;