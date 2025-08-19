import { Icons, Pagination } from "./plugin/core/bs.3.mts";
import {Window} from "./plugin/core/core.mjs";
import LTEApp, { LTEMenuButton, LTESubMenuButton } from "./plugin/core/lte.3.mts";

const MyApp = new Window();

const lte = new LTEApp({
  title: "Application Title",
  userName: "MARJON CAJOCON",
  sideMenu: [
    new LTEMenuButton({
      icon: Icons.Dashboard,
      title: "Dashboard",
      submenu: [
        new LTESubMenuButton({title: "View Graph"}),
        new LTESubMenuButton({title: "View Likeds page"}),
      ]
    }),
    new LTEMenuButton({
      icon: Icons.User,
      title: "Profile",
      submenu: [
        new LTESubMenuButton({title: "Edit Profile"})
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


