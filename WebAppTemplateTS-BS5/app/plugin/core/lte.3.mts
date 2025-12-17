import { Badge, BreadCrumb, Button, Card, Color, Column, Dialog, FaIcon, FaIcons, FlexDirection, Grid, GridSize, Html, Icon, Icons, Panel, ProgressBar, Row, Size, Text, TextField, TextFieldAddon } from "./bs.3.mts";
import { a, button, div, h1, h2, h3, h5, hr, img, input, p, span, title, Widget } from "./core.mts";
import "./lte.3.css";

// class LTESubMenuButton extends div {
//   constructor(o: {
//     title: string,
//     fn?: () => void
//   }) {
//     super();
//     const menu = new button().Add(new Row([new Icon(Icons.OptionVertical).AddStyle({
//       color: "rgba(255, 255, 255, 0.3)"
//     }), 10, new Html(o.title).AddClass("lte-hidable")])).AddClass("lte-menu-btn").AddClass("cc-menu");

//     super.Add(menu);

//     if (o.fn != undefined) {
//       menu.AddEventListener("click", () => {
//         if (o.fn != undefined) {
//           o.fn();
//           const a = document.getElementsByClassName("cc-menu");
//           for (const item of a) {
//             item.classList.remove("lte-active");
//           }
//           menu.AddClass("lte-active");
//         }
//       });
//     }
//   }
// }

class LTELoaderProgress extends Dialog {
  progress: ProgressBar
  constructor(o: {  
    title: string,
    color: Color
  }) {


    super();

    const progress = new ProgressBar({color: o.color, striped: true, animation: true});

    this.progress = progress;

    super.show({
      width: "480px",
      padding: 7,
      widget: new Column([
        o.title,
        30,
        progress
      ])
    });
    
  }

  update(loaded: number, total: number) {
    if (total > 0) {
      this.progress.update(Math.ceil(
        (loaded / total) * 100
      ));
    }
  }

  close() {
    super.close();
  }

}

class LTESmallBox extends div {
  constructor(p: {
    value: string,
    label: string,
    color: Color,
    icon: FaIcons,
    click?: () => void
  }) {
    super();
    super.AddStyle({
      "width": "100%",
      "border-radius": "6px",
      "box-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)"
    });

    super.AddClass("bg-" + p.color);

    const content = new Panel().AddStyle({
      width: "100%",
      height: "113px",
      padding: "10px",
      "border-radius": "6px",
      "position": "relative"
    });

    content.AddClass("bg-" + p.color);

    super.Add(content);

    /// content 
    const h = new h1().AddStyle({
      "font-weight": "bolder",
      "color": "white"
    });
    h.Text(p.value);
    content.Add(h);

    const lbl = new span();
    lbl.Text(p.label);
    lbl.AddStyle({
      color: "white"
    });

    content.Add(lbl);
    // end content

    const footer = new Panel().AddStyle({
      width: "100%",
      height: "30px",
      "background-color": "rgba(0, 0, 0, 0.1)",
      "text-align": "center",
      "padding": "5px"
    });

    const icon = new FaIcon(p.icon);
    icon.AddStyle({
      "position": "absolute",
      "right": "20px",
      "top": "20px",
      "font-size": "80px",
      "color": "rgba(0, 0, 0, 0.1)"
    });

    content.Add(icon);

    const link = new a().AddStyle({
      "color": "white"
    }).Add(new Row([
      new Icon(Icons.CircleArrowRight), 10, "More Info"
    ], undefined, undefined, FlexDirection.ROW_REVERSE));
    footer.Add(link);

    if (p.click != undefined) {
      link.AddStyle({cursor: "pointer"});
      link.AddEventListener("click", e => {
        e.preventDefault();
        if (p.click != undefined)
          p.click();
      });
    }

    super.Add(footer);

  }

  update() {

  }
}

class LTEMenuButton extends div {
  submenu_g?: LTEMenuButton[]
  constructor(o: {
    icon: FaIcons,
    title: string,
    submenu?: LTEMenuButton[],
    fn?: () => void,
    hide?: boolean,
    badge?: Badge
  }) {
    super();

    if (o.hide != undefined && o.hide) {
      super.AddStyle({
        display: "none"
      });
    }

    const arrow_icon = new FaIcon(FaIcons.ChevronRight);
    const menu = new button().Add(new Row([new FaIcon(o.icon), 10, new Html(o.title).AddClass("lte-hidable")])).AddClass("lte-menu-btn").AddClass("cc-menu");
    
    arrow_icon.AddClass("lte-hidable");

    arrow_icon.AddStyle({"font-size": "10px"});

    const arrow = new Panel().Add(arrow_icon);    
    
    arrow.AddStyle({
      position: "absolute",
      right: "10px",
      top: "10px"
    });
    
    if (o.submenu != undefined) {
      menu.Add(arrow);

      this.submenu_g = o.submenu;
    }
    
    if (o.badge != undefined) {
      o.badge.AddClass("lte-btn-badge");
      o.badge.AddClass("lte-hidable");
      menu.Add(o.badge);
    }

    super.Add(menu);

    if (o.submenu != undefined) {
      /// here is the logic for the drop  
      const panel = new Panel().AddStyle({
        display: "none",
        "padding-left": "5px",
        "padding-right": "5px"
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

      if (o.badge != undefined) {
        o.badge.DeleteClass("lte-btn-badge");
        o.badge.AddClass("lte-btn-badge-no-arrow");
        o.badge.AddClass("lte-hidable");
        menu.Add(o.badge);
      }

      if (o.fn != undefined) {
        menu.AddEventListener("click", () => {
          if (o.fn != undefined) { 
            o.fn();
            const a = document.getElementsByClassName("cc-menu");
            for (const item of a) {
              item.classList.remove("lte-active");
            }
            menu.AddClass("lte-active");
          }
        });
      }
    }

  }
}

class LTEApp extends Panel {
  page_title: Widget = new Panel()
  page_bread: Widget = new Panel()
  page_body: Widget = new Panel()
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
      topleftmenu: o.topLeftMenu,
      submenu: o.sideMenu
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
    topleftmenu?: Row,
    submenu: LTEMenuButton[]
  }): Panel {
    const panel = new Panel().AddClass("lte-body");

    const topBar = new Panel().AddClass(["lte-top-bar"]);
    topBar.AddStyle({
      "background-color": "var(--bs-body-bg)"
    });

    panel.Add(topBar);

    const bar = new button().AddClass(["lte-bar-btn"]);

    bar.AddStyle({
      "background-color": "var(--bs-body-bg)"
    });

    bar.Add(new FaIcon(FaIcons.Bars))
    topBar.Add(bar);

    
    if (o.topleftmenu != undefined) {
      o.topleftmenu.AddStyle({
        position: "absolute",
        right: "10px",
        top: "10px"
      });
      topBar.Add(o.topleftmenu);
    }

    let gbackdrop: Panel|undefined;

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

          gbackdrop = backdrop;
          
        }
      }
    });

    // title bar and bread crumb
    const title_grid = new Grid({});
    panel.Add(new Panel().AddStyle({
      padding: "0px 15px 0px 15px"
    }).Add(title_grid));
    const htitle = new p().AddStyle({"font-size": "18px", "margin-top": "10px"});

    this.page_title = htitle;

    title_grid.add(
      new Row([new FaIcon(FaIcons.InfoCircle), 3, htitle]), [GridSize.Lg6]
    );
    // const bread = new BreadCrumb({});
    // bread.AddStyle({
    //   background: "rgba(0, 0, 0, 0)"
    // });
    // bread.add("Home");
    // bread.add("Widgets");

    this.page_bread = new Panel();

    title_grid.add(this.page_bread, [GridSize.Lg6]);

    this.page_body = new Panel().AddStyle({
      padding: "16px",
      "padding-top": "0px"
    });

    panel.Add(this.page_body);


    
    /// this is for mobile
    const recursive_fn = (btn: LTEMenuButton) => {
      
      if (btn.submenu_g == undefined || btn.submenu_g.length == 0) {
        btn.AddEventListener("click", () => {

          // close the menu if it is mobile version
          if (!(window.innerWidth > 990)) {
            console.log("mobile version");
            
            if (o.sidebar.HasClass("lte-menu-active")) {
              o.sidebar.DeleteClass("lte-menu-active");
              if (gbackdrop != undefined) {
                gbackdrop.Delete();
              }
            }
          }
  
        });
      }

      if (btn.submenu_g != undefined && btn.submenu_g.length > 0) {
        

        for (const item of btn.submenu_g) {
          recursive_fn(item); // recursive finding all the sub button
        }

      }

      
    };
    
    for (const item of o.submenu) {
      recursive_fn(item);
    }
    // end for  mobile

    return panel;
  }

  sideBar(o: {
    title?: string,
    logo?: string,
    userName?: string,
    userPhoto?: string,
    sideMenu: LTEMenuButton[]
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
      suffix: new Button({text: new FaIcon(FaIcons.Search), color: Color.Default})
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

const LTESleep = async (time: number) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
  return promise;
};

export default LTEApp;

export {
  LTEMenuButton,
  // LTESubMenuButton,
  LTEAppLogin,
  LTELoaderProgress,
  LTESleep,
  LTESmallBox,
};