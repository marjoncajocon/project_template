import { Html, Icon, Icons, Panel, Row, Size, TextField, TextFieldAddon } from "./bs.3.mts";
import { button, input, Widget } from "./core.mts";
import "./lte.3.css";

class LTEApp extends Panel {
  constructor() {
    super();

    const sideBar = this.sideBar();

    super.Add(sideBar);
  }

  sideBar(): Widget {
    const panel = new Panel().AddClass("lte-sidebar");
    const brand = new Panel().AddClass("lte-brand");
    const brand_icon = new Panel().AddClass("lte-brand-icon");
    const brand_title = new Panel();
    brand_title.Html(`AdminLTE 3`);
    brand_title.AddClass("lte-brand-title");

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
    const user_name = new Panel().AddClass("lte-user-name");
    user_name.Add(new Html("Marjon M. Cajocon"));
    user_panel.Add(user_name);
    /// end sidebar content
    // search
    const search = new TextFieldAddon({
      placeholder: "Search",
      suffix: new Icon(Icons.Search)
    });
    sidebar_content.Add(new Panel().Add(search).AddClass("lte-search"));
    // end search

    // generation of the menu

    const menu = new button().Add(new Row([new Icon(Icons.Camera), 10, "Dashboard"])).AddClass("lte-menu-btn");
    const arrow = new Panel().Add(new Icon(Icons.TriangleLeft));    
    arrow.AddStyle({
      position: "absolute",
      right: "10px",
      top: "10px"
    });
    menu.Add(arrow);

    sidebar_content.Add(menu);

    // end generation of the menu

    panel.Add(sidebar_content);
    return panel;
  }
}

export default LTEApp;