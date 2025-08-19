import { BreadCrumb, Button, Card, Color, Column, Grid, GridSize, Html, Icon, Icons, Panel, Row, Size, Text, TextField, TextFieldAddon } from "./bs.3.mts";
import { button, div, h3, h5, img, input, title, Widget } from "./core.mts";
import "./lte.3.css";

class LTESubMenuButton extends div {
  constructor(o: {
    title: string,
    fn?: () => void
  }) {
    super();
    const menu = new button().Add(new Row([new Icon(Icons.OptionVertical).AddStyle({
      color: "rgba(255, 255, 255, 0.3)"
    }), 10, new Html(o.title).AddClass("lte-hidable")])).AddClass("lte-menu-btn");

    super.Add(menu);

    if (o.fn != undefined) {
      menu.AddEventListener("click", () => {
        if (o.fn != undefined)
        o.fn();
      });
    }
  }
}

class LTEMenuButton extends div {
  constructor(o: {
    icon: Icons,
    title: string,
    submenu?: LTESubMenuButton[],
    fn?: () => void
  }) {
    super();
    const arrow_icon = new Icon(Icons.ChevronLeft);
    const menu = new button().Add(new Row([new Icon(o.icon), 10, new Html(o.title).AddClass("lte-hidable")])).AddClass("lte-menu-btn");
    
    arrow_icon.AddClass("lte-hidable");

    const arrow = new Panel().Add(arrow_icon);    
    
    arrow.AddStyle({
      position: "absolute",
      right: "10px",
      top: "10px"
    });
    
    if (o.submenu != undefined) {
      menu.Add(arrow);
    }
    
    super.Add(menu);

    if (o.submenu != undefined) {
      /// here is the logic for the drop 
      const panel = new Panel().AddStyle({
        display: "none"
      });
      super.Add(panel);

      for (const menu of o.submenu) {
        panel.Add(menu);
      }


      menu.AddEventListener("click", () => {
        if (!panel.HasClass("lte-menu-show")) {
          panel.AddClass("lte-menu-show");
          //arrow_icon.change(Icons.ChevronDown);
          arrow_icon.AddClass("lte-rotate-arrow");
          menu.AddClass("lte-light-active");
        } else {
          panel.DeleteClass("lte-menu-show");
          //arrow_icon.change(Icons.ChevronLeft);
          arrow_icon.DeleteClass("lte-rotate-arrow");
          arrow_icon.AddClass("lte-rotate-arrow-original");
          setTimeout(() => {
            arrow_icon.DeleteClass("lte-rotate-arrow-original");
          }, 500);
          menu.DeleteClass("lte-light-active");
        }
      });

    } else {

      if (o.fn != undefined) {
        menu.AddEventListener("click", () => {
          if (o.fn != undefined) o.fn();
        });
      }
    }

  }
}

class LTEApp extends Panel {
  page_title: Widget
  page_bread: Widget
  page_body: Widget
  constructor(o: {
    title?: string,
    logo?: string, // must be  a link or blob link
    userPhoto?: string, // must be a link or blob link
    userName?: string,
    sideMenu: LTEMenuButton[],
    topLeftMenu?: Row
  }) {
    super();

    const sideBar = this.sideBar({
      sideMenu: o.sideMenu,
      title: o.title,
      logo: o.logo,
      userName: o.userName,
      userPhoto: o.userPhoto
    });
    
    const body = this.createBody({
      sidebar: sideBar,
      topleftmenu: o.topLeftMenu
    });

    super.Add([
      sideBar,
      body
    ]);
  }

  route(o: {
    title?: string,
    page?: string[],
    body?: Widget
  }) {
    
    if (o.title != undefined) {
      this.page_title.Html(o.title);
    }

    if (o.page != undefined) {
      this.page_bread.Clear();
      const bread = new BreadCrumb({});
      bread.AddStyle({
        background: "rgba(0, 0, 0, 0)"
      });

      for (const item of o.page) {
        bread.add(item);
      }

      this.page_bread.Add(bread);
    } 

    this.page_body.Clear();

    if (o.body != undefined) {
      this.page_body.Add(o.body);
    }

  }

  createBody(o: {
    sidebar: Widget,
    topleftmenu?: Row
  }): Panel {
    const panel = new Panel().AddClass("lte-body");

    const topBar = new Panel().AddClass("lte-top-bar");
    panel.Add(topBar);

    const bar = new button().AddClass("lte-bar-btn");
    bar.Add(new Icon(Icons.MenuHamburger))
    topBar.Add(bar);

    
    if (o.topleftmenu != undefined) {
      o.topleftmenu.AddStyle({
        position: "absolute",
        right: "10px",
        top: "10px"
      });
      topBar.Add(o.topleftmenu);
    }

    bar.AddEventListener("click", () => {

      if (window.innerWidth > 990) {
        // for desktop and tablets
        if (o.sidebar.HasClass("lte-desktop-hide-side")) {
          panel.DeleteClass("lte-desktop-body");
          o.sidebar.DeleteClass("lte-desktop-hide-side");
          const all = document.getElementsByClassName("lte-hidable"); // get all the hidable content
          for (const item of all) {
            item.setAttribute("style", "display:;");
          }
        } else {
          o.sidebar.AddClass("lte-desktop-hide-side");
          panel.AddClass("lte-desktop-body");
          const all = document.getElementsByClassName("lte-hidable"); // get all the hidable content
          for (const item of all) {
            item.setAttribute("style", "display: none;");
          }
        }
      } else {
        if (o.sidebar.HasClass("lte-menu-active")) {
          o.sidebar.DeleteClass("lte-menu-active");
        } else {
          const backdrop = new Panel().AddStyle({
            background: "rgba(0,0,0,0.3)",
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: "999",
            top: "0px",
            left: "0px"
          }).AddClass("lte-backdrop");
          this.body.appendChild(backdrop.control);

          backdrop.AddEventListener("click", () => {
            o.sidebar.DeleteClass("lte-menu-active");
            backdrop.Delete();
          });

          o.sidebar.AddClass("lte-menu-active");
          
        }
      }
    });

    // title bar and bread crumb
    const title_grid = new Grid({});
    panel.Add(new Panel().AddStyle({
      padding: "0px 15px 15px 15px"
    }).Add(title_grid));
    const htitle = new h3();
    htitle.Html(`Widgets`);

    this.page_title = htitle;

    title_grid.add(
      htitle, [GridSize.Lg9]
    );
    // const bread = new BreadCrumb({});
    // bread.AddStyle({
    //   background: "rgba(0, 0, 0, 0)"
    // });
    // bread.add("Home");
    // bread.add("Widgets");

    this.page_bread = new Panel();

    title_grid.add(this.page_bread, [GridSize.Lg3]);

    this.page_body = new Panel().AddStyle({
      padding: "16px",
      paddingTop: "0px"
    });

    panel.Add(this.page_body);

    return panel;
  }

  sideBar(o: {
    title?: string,
    logo?: string,
    userName?: string,
    userPhoto?: string,
    sideMenu: LTESubMenuButton[]
  }): Widget {
    const panel = new Panel().AddClass("lte-sidebar");
    const brand = new Panel().AddClass("lte-brand");
    const brand_icon = new Panel().AddClass("lte-brand-icon");
    const brand_title = new Panel();
    brand_title.Html(o.title != undefined ? o.title : `AdminLTE 3`);
    brand_title.AddClass(["lte-brand-title", "lte-hidable"]);

    // brand_icon logo
    const logo_img = new img().AddStyle({
      width: "100%",
      height: "100%",
      "border-radius": "50%"
    });
    if (o.logo != undefined) {
      logo_img.AddAttr({
        src: o.logo
      });
      brand_icon.Add(logo_img);
    }
    // end brand icon logo
    

    brand.Add(new Row([
      brand_icon,
      10,
      brand_title
    ]));

    panel.Add(brand);

    const sidebar_content = new Panel().AddClass("lte-sidebar-content");
    /// working with sidebar_content
    const user_panel = new Panel().AddClass("lte-user-panel");
    sidebar_content.Add(user_panel);
    const user_photo = new Panel().AddClass("lte-user-pic");
    user_panel.Add(user_photo);
    const user_name = new Panel().AddClass(["lte-user-name", "lte-hidable"]);
    user_name.Add(new Html(o.userName != undefined ? o.userName : "Name of the user"));
    user_panel.Add(user_name);
    /// end sidebar content
    // search


     // brand_icon logo
    const pic_img = new img().AddStyle({
      width: "100%",
      height: "100%",
      "border-radius": "50%"
    });
    if (o.userPhoto != undefined) {
      pic_img.AddAttr({
        src: o.userPhoto
      });
      user_photo.Add(pic_img);
    }
    // end brand icon logo

    const search = new TextFieldAddon({
      placeholder: "Search",
      suffix: new Icon(Icons.Search)
    }).AddClass("lte-hidable");
    sidebar_content.Add(new Panel().Add(search).AddClass("lte-search"));
    // end search

    // generation of the menu
  
    for (const menu of o.sideMenu) {
      sidebar_content.Add(menu);
    }

    // end generation of the menu

    sidebar_content.AddClass("lte-side-bar-content");

    panel.Add(sidebar_content);
    return panel;
  }
}

class LTEAppLogin extends div {
  constructor(o: {
    title: string
  }) {
    super();

    const username = new TextFieldAddon({
      prefix: new Icon(Icons.User),
      placeholder: "Enter Username"
    });

    const password = new TextFieldAddon({
      prefix: new Icon(Icons.Lock),
      placeholder: "Enter Password"
    });

    const submit = new Button({text: new Row([new Icon(Icons.LogIn), 10, "Sign In"]), color: Color.Success});

    const login = new Card({
      header: o.title,
      color: Color.Primary,
      body: new Column([
        new Text({text: "Username"}),
        username,
        10,
        new Text({text: "Password"}),
        password,
        10,
        submit
      ])
    });

    super.Add(new Panel().Add(login).AddStyle({
      width: "480px",
      height: "480px",
      margin: "auto",
      "margin-top": "10%",
      "max-width": "98%"
    }));

  }
}

export default LTEApp;

export {
  LTEMenuButton,
  LTESubMenuButton,
  LTEAppLogin
};