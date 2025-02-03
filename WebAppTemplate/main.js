import { div, Window } from "./plugin/core/core.js";
import { Accordion, Badge, Bar, BasicTab, Box, Button, Canvas, Card, CheckBox, Code, Column, ComboBox, Container, Display, DropDownHover, Grid, Icon, Label, List, Modal, Pagination, Panel, Photo, Photo2d, Picture, ProgressBar, Radio, Row, SideBar, Table, Tag, Text, TextBox, TextField } from "./theme/w3.js";

/** Start Mcontrol Theme This the the mcontrol gui  **/
// import "./theme/bt/bootstrap.min.css";
// import "./theme/bt/icon/css/all.css";
// import "./theme/bt/bootstrap.bundle.min.js";
/** End MControl Theme End of the mcontrol gui **/ 

/** Start for the Foundation Theme **/
// import $ from "./theme/foundation/js/vendor/jquery.js";
// import "./theme/foundation/css/foundation.css";
// import "./theme/foundation/js/vendor/foundation.js";
// import { Button, Grid, HDropDown, Panel, SubMenu, TextField } from "./theme/foundation.js"; // import example
// $(document).foundation();
/** End of the Foundation Theme **/ 


/* W3css Theme */
import "./theme/icon/css/all.css";
import "./theme/W3css/w3.css";
/* End W3css */


class Login extends Modal {
    constructor() {
        super(
            new Row([ new Icon("user"), new Box(5), new Text("User Information") ])
            , "400px", "win8-blue");

        const card = new Card().style({
            padding: "10px"
        });

        const file = new TextField("File", "file").border();
        
        const username = new TextField("Usrename", "text", "Enter Username").border();
        const password = new TextField("Password", "password", "Enter Password").border();
        const submit = new Button(
            new Row([new Icon("sign-in"), new Box(5), new Text("Sigin")])
            , "ios-dark-blue").style({
            marginTop: "10px"
        }).ripple();

        card.add([
            file,
            username,
            password,
            submit
        ]);

        super.add(card);
        
        submit.addEventListener("click", () => {
            super.hide("you are handsome");
        });
    }
    dispose() {
        console.log("login closed");
    }
}

// testing w3css
class TestPage extends div {
    constructor() {
        super();
        super.style({
            marginBottom: "50vh"
        });

        const bar  = new Bar("green");
        
        bar.add("About");
        bar.add("Contact");
        bar.add("Testing");
        bar.add("About");
        bar.add("Contact");
        bar.add("Testing");
        bar.add("About");
        bar.add("Contact");
        bar.add("Testing");
        bar.add("About");
        bar.add("Contact");
        bar.add("Testing");



        const tf = new TextBox("Testing", "hellow", true).border().error("Invalid Username");

        const check = new CheckBox("Testing");
        const radio = new Radio("Male", "gender");

        setTimeout(() => {
            tf.error();
        }, 2000);
        super.add([
            bar,
            tf,
            check,
            radio
        ]);

        

        
    }
}
/// end testing foundation

import './main.css'; // this is required
const MyApp = new Window();
MyApp.navigate(new TestPage());
MyApp.run();

export default MyApp;