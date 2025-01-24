import { div, Window } from "./plugin/core/core.js";
import { Button, Card, Container, List, Panel, Table, Text, TextField } from "./theme/w3.js";

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
import "./theme/W3css/w3.css";
/* End W3css */

// testing w3css
class TestPage extends Container {
    constructor() {
        super();

        const pan = new Panel("blue").html("Testing panel");
        const cr = new Card();

        const btn1 = new Button("Sign In", "blue");
        btn1.ripple();
        
        const table1 = new Table(["no", "name","age", "Action"]).striped().border().all().center();

        table1.add([
            1, "Marjon", 20, new Button("test", "red").ripple().addEventListener("click", () => {
                alert("jon");
            })
        ]);

        table1.add([
            2, "Shad", 32, new Button("test", "blue")
        ]);

        const list = new List().hover().center();
        list.add("Marjon", "blue");
        list.add("Shad", null, "red");
        list.add(new Button("Testing2", "green"));

        const input1 = new TextField("Password", "password", "Enter Password").border().labelColor("green").round();

        cr.add([
            btn1,
            new Text("Hellow").left(),
            new Text("Hope").right(),
            table1,
            list,
            input1
        ]);

        super.add([pan, cr]);
    }
}
/// end testing foundation

const MyApp = new Window();
MyApp.navigate(new TestPage());
MyApp.run();

export default MyApp;