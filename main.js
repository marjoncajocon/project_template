import { Window } from "./plugin/core/core.js";
import { Button, Container, Divider, Label, Panel, TextBox } from "./theme/bt/mcontrol.js";

const MyApp = new Window();

let idx = 0;


class TestPage extends Panel {
    constructor() {
        super();
        
        const username = new TextBox("Username", "text");
        const password = new TextBox("Password", "password");
        const submit = new Button("Sign In", "primary", "plus-circle");

        super.add(new Container([
            
            new Label("Bootstrap Template").style({
                fontWeight: "bold",
                fontSize: "15pt",
                color: "rgba(0, 0, 0, 0.6)"
            }),
            new Divider(),
            username,
            password,
            submit
        ]).style({
            width: "500px",
            marginTop: "10%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            padding: "20px",
            borderRadius: "10px"
        }));

        submit.addEventListener("click", () => {
            
            const payload = {
                username: username.getValue(),
                password: password.getValue()
            };

            console.log(payload);

        });
    }

    dispose() {
        // clean up the TestPage
        console.log(`clean up ${++idx}`);
    }
}

MyApp.navigate(new TestPage());
MyApp.run();

export default MyApp;