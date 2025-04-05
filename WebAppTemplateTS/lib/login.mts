import { Box, Button, Card, Color, Grid, GridSize, InputType, Panel, Size, Text, TextField } from "../theme/w3.mts";

class Login extends Panel {
  constructor() {
    super();


    const username = new TextField('Username', InputType.Text, 'Enter Username').Border();
    const password = new TextField('Password', InputType.Password, 'Enter Password').Border();
    const signin = new Button('Sign In', Color.Blue).Size(Size.Small).AddStyle({marginTop: '5px'});

    const grid = new Grid();
    grid.AddItem(new Text('.'), [ GridSize.Medium4 ]);
    grid.AddItem(new Card({color: Color.White, padding: 10}).AddItem([
      username,
      password,
      signin
    ]), [ GridSize.Medium4 ]);
    grid.AddItem(new Text('.'), [ GridSize.Medium4 ]);
  
    super.Add(grid);
  }
}

export default Login;