import { Html, Icon, Icons, Panel, Row, Size, TextField, TextFieldAddon } from "./bs.3.mts";
import { button, div, input, title, Widget } from "./core.mts";
import "./lte.3.css";

class LTESubMenuButton extends div {
  constructor(o: {
    title: string,
    fn?: () => void
  }) {
    super();
    const menu = new button().Add(new Row([new Icon(Icons.Link).AddStyle({
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
  constructor(o: {
    title?: string,
    logo?: string,
    userPhoto?: string,
    userName?: string,
    sideMenu: LTEMenuButton[]
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
      sidebar: sideBar
    });

    super.Add([
      sideBar,
      body
    ]);
  }

  createBody(o: {
    sidebar: Widget
  }): Panel {
    const panel = new Panel().AddClass("lte-body");

    const topBar = new Panel().AddClass("lte-top-bar");
    panel.Add(topBar);

    const bar = new button().AddClass("lte-bar-btn");
    bar.Add(new Icon(Icons.MenuHamburger))
    topBar.Add(bar);

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

    panel.Add(sidebar_content);
    return panel;
  }
}

export default LTEApp;

export {
  LTEMenuButton,
  LTESubMenuButton
};