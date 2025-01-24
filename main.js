import { div, Window } from "./plugin/core/core.js";
import { Accordion, Badge, Bar, BasicTab, Button, Card, CheckBox, ComboBox, Container, DropDownHover, Grid, Icon, Label, List, Modal, Pagination, Panel, ProgressBar, Radio, SideBar, Table, Tag, Text, TextBox, TextField } from "./theme/w3.js";

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
        super("Login Information", "500px", "orange");

        const card = new Card().style({
            padding: "10px"
        });
        
        const username = new TextField("Usrename", "text", "Enter Username").border();
        const password = new TextField("Password", "password", "Enter Password").border();
        const submit = new Button("Sign In", "blue").style({
            marginTop: "10px"
        });

        card.add([
            username,
            password,
            submit
        ]);

        super.add(card);
        
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

        
        super.add(btn);

        

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