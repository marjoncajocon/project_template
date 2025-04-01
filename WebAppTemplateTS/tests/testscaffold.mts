import { div } from "../plugin/core/core.mts";
import { Button, Color, Icon, Icons, Row, Scaffold } from "../theme/w3.mts";

class TestScaffold extends div{
  constructor() {
    super();


    super.add(new Scaffold({
      appBar: {
        title: "HRMS V3",
        color: Color.Amber,
        action: new Row([ new Button('Profile', Color.Cobalt), new Button('Sign Out', Color.Amber)]).style({ marginTop: '8px' }),
        drawer: new Button('hellow drawer', Color.Amber)
      },
      body: new Button('hellow', Color.Red),
    }));


  }
}

export default TestScaffold;