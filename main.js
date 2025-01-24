import { div, Window } from "./plugin/core/core.js";
import { Accordion, Badge, Bar, BasicTab, Button, Card, CheckBox, ComboBox, Container, DropDownHover, Grid, Icon, Label, List, Panel, Radio, SideBar, Table, Tag, Text, TextBox, TextField } from "./theme/w3.js";

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

// testing w3css
class TestPage extends div {
    constructor() {
        super();
        super.style({
            marginBottom: "50vh"
        });

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

        const input1 = new TextField("Password", "password", "Enter Password").border().labelColor("green").round().size("small");
        input1.disabled();

        const male = new Radio("Male", "gender");
        const female = new Radio("Female", "gender");

        const gender = new Button("hellow", "red");

        const check1 = new CheckBox("Select 1");

        const check2 = new CheckBox("Select2");

        const cb = new ComboBox().border();

        cb.add("", "All Document");
        cb.add("f", "Female");
        cb.add("m", "Male");

        cb.disabled();
        setTimeout(() => {
            cb.enabled();
        }, 3000);


        const card1 = new Card();
        card1.add(new Button("test", "green").block());

        const card2 = new Card();
        card2.add(new Button("test2", "red").block());

        const grid = new Grid();

        grid.add(card1, ["m3"]);
        grid.add(card2, ["m6"]);

        const grid2 = new Grid();

        grid2.add(new Card().add(new Button("test", "red").block()), ["m3"]);
        grid2.add(new Card().add(new Button("test2", "orange").block()), ["m2"]);

        const bar = new Bar("red", null, true);
        bar.add(new Icon("user"));
        bar.add(new Icon("cog"), "green", () => {
            alert("settings");
        });

        const drop2 = new DropDownHover("Menu2");
        drop2.add("Item1");
        drop2.add("Item2", () => {
            alert("item2");
        });
        drop2.add("Item3");

        const drop = new DropDownHover("Menu");
        drop.add("Test");
        drop.add("Test2");
        drop.add("test3");

        const acc = new Accordion("Test Accordion", "this is a content sample");

        const iconbtn = new Button(new Label([new Icon("user").style({ marginRight: "5px" }), "Hellow"]), "red");

        const box = new TextBox("Enter your information", null, "Hellow").border();

        const basic = new BasicTab("teal");
        basic.add("User", (o) => {
            o.add(new Button("User Information").block());
        });
        basic.add("Setting", (o) => {
            o.add(new Button("Setting information").block());
        }, true);

        cr.add([
            btn1,
            new Text("Hellow").left(),
            new Text("Hope").right(),
            table1,
            list,
            input1,
            male,
            female,
            check1,
            check2,
            gender,
            cb,
            new Badge(12).textColor("red"),
            new Tag("Hellow", "red", "xxlarge").border(),
            grid,
            grid2,
            bar,
            drop,
            acc,
            iconbtn,
            box,
            basic
        ]);

        male.disabled();

        check1.setValue(true);
        check1.disabled();

        gender.addEventListener("click", () => {
            console.log(check1.getValue());
            console.log(check2.getValue());
        });

        super.add([pan, cr]);
    }
}
/// end testing foundation

const MyApp = new Window();
MyApp.navigate(new TestPage());
MyApp.run();

export default MyApp;