import { div, Window } from "./plugin/core/core.js";
import { Accordion, Badge, Bar, BasicTab, Box, Button, Card, CheckBox, Code, Column, ComboBox, Container, Display, DropDownHover, Grid, Icon, Label, List, Modal, Pagination, Panel, Photo, Photo2d, Picture, ProgressBar, Radio, Row, SideBar, Table, Tag, Text, TextBox, TextField } from "./theme/w3.js";

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

        const btn = new Button("Open Modal", "red");

        const code = new Code("html");
        code.write(`
            
        `);
        

        const tab = new BasicTab("blue");
        tab.add("HRMS Portal");

        tab.add("Profile", (o) => {
            o.add(new Button("Profile"));
        });
        tab.add("Contact", (o) => {
            o.add(new Button("Contact"));
        });
        tab.add("Setting", (o) => {
            o.add(new Button("Setting"));
        }, true);

        
        const test1 = new ComboBox();
        test1.add("1", "hellow");
        test1.add("2", "test2");
        test1.add("3", "test3");

        const menu = new DropDownHover("Testing");
        menu.add(new Row([new Icon("save"), new Box(5), new Text("Save")]));
        menu.add("open");
        menu.add("open folder");
        


        super.add([
            tab,
            btn,
            menu,
            test1,
            new Row([
                new Button("hellow"), new Button("test", "red"), new Icon("user"),
                new Label("hellow world"), new Column([
                    new Button("test1", "blue"),
                    new Button("test2", "green"),
                    new Button("test3", "lime")
                ])
            ]),
            code,
            new Photo2d().path("https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp")
            .hoverOpacity().hoverGrayScale().hoverSepia()
        ]);

        

        btn.addEventListener("click", async () => {

            const login = new Login();
            const res = await login.show();
            console.log(res);
        });
    }
}
/// end testing foundation

const MyApp = new Window();
MyApp.navigate(new TestPage());
MyApp.run();

export default MyApp;