import { Button, Card, Color, Icon, Icons, Pagination, Row, Size, Table } from "./plugin/core/bs.3.mts";
import {Window} from "./plugin/core/core.mjs";
import LTEApp, { LTEMenuButton, LTESubMenuButton } from "./plugin/core/lte.3.mts";

const MyApp = new Window();

const tbl = new Table({
  header: ["name", "age", "gender"],
  border: true,
});

tbl.add({item: [
  "Marjon Cajocon", "12", "Male"
]})

const lte = new LTEApp({
  topLeftMenu: new Row([
    new Button({text: new Icon(Icons.Bell), color: Color.Default, size: Size.Sm}), 10,
    new Button({text: new Icon(Icons.Th), color: Color.Default, size: Size.Sm}),
  ]),
  title: "Application Title",
  userName: "MARJON CAJOCON",
  sideMenu: [
    new LTEMenuButton({
      icon: Icons.Dashboard,
      title: "Dashboard",
      submenu: [
        new LTESubMenuButton({title: "View Graph", fn: () => {
          lte.route({
            title: "Dashboard",
            page: ["Dashboard", "View Graph"],
            body: new Card({header: "List of User", color: Color.Primary, body: tbl})
          })
        }}),
        new LTESubMenuButton({
          title: "View Likeds page",
          fn: () => {
            lte.route({
              title: "Dashboard",
              page: ["Dashboard", "View Liked Page"]
            })
          }
        }),
      ]
    }),
    new LTEMenuButton({
      icon: Icons.User,
      title: "Profile",
      submenu: [
        new LTESubMenuButton({
          title: "Edit Profile",
          fn: () => {
            lte.route({
              title: "Edit Profile",
              page: ["Profile", "Edit Profile"],
              body: new Button({text: "Edit Profile button", color: Color.Danger})
            });
          }
        })
      ]
    })
  ]
});



const test = new Pagination({});

test.add(1, (n) => {
  console.log(n);
});
test.add(2, (n) => {
  console.log(n);
});

MyApp.Navigate(lte);

MyApp.Run();

export default MyApp;


