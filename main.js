import { div, Window } from "./plugin/core/core.js";

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
class TestPage extends div {
    constructor() {
        super();
    }
}
/// end testing foundation

const MyApp = new Window();
MyApp.navigate(new TestPage());
MyApp.run();

export default MyApp;