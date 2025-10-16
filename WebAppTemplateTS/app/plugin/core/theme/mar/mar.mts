import { Button, Color, Column, Flex, Icon, Icons, Row, Text } from "../../bs.3.mts";
import { button, div, Widget } from "../../core.mts";
import "./mar.css"

class MarMenu extends div {
    btn: div
    constructor(o: {
        logo?: Icon,
        title?: string,
        menu?: MarMenu[],
        click?: () => void,
        isMainMenu?: boolean,
    }) {
        
        super();        
        
        const btn = new div();
        
        btn.AddClass("mar-menu");

        this.btn = btn;

        const arr: (string | number | Widget)[] = [];
        
        if (o.logo != undefined) {
            arr.push(o.logo);
            arr.push(8);
        }

        if (o.title != undefined) {
            arr.push(new Text({text: o.title}).AddStyle({"font-size": "12px"}));
        }

        if (o.title != undefined) {
            btn.Add(new Row(arr, undefined, Flex.Center).AddStyle({"height": "100%"}));
        }

        this.btn.AddStyle({
            "padding-left": "20px"
        });

        super.Add(btn);
        const drop = new div().AddStyle({
            "background-color": "rgba(0, 0, 0, 0.2)"
        });

        if (o.menu != undefined) {

            super.Add(drop);

            drop.AddClass("mar-active");
            // drop.AddStyle({
            //     "padding-left": "20px"
            // });
            
            for (const sub of o.menu) {
                sub.btn.AddStyle({
                    "border": "none",
                    "padding-left": "30px"
                });
                drop.Add(sub);
            }

            this.btn.AddEventListener("click", () => {
                if (drop.HasClass("mar-active")) {
                    drop.DeleteClass("mar-active");
                    
                    if (o.isMainMenu != undefined && o.isMainMenu) {
                        this.btn.AddClass("mar-menu-main");
                    }
                } else {
                    drop.AddClass("mar-active");

                    if (o.isMainMenu != undefined && o.isMainMenu) {
                        this.btn.DeleteClass("mar-menu-main");
                    }
                }

            });

        } else {
            this.btn.AddEventListener("click", () => {
                if (o.click != undefined) {
                    const d = document.getElementsByClassName("mar-menu");
                    for (const i of d) {
                        i.classList.remove("mar-link-active");
                    }

                    this.btn.AddClass("mar-link-active");
                    o.click();
                }
            });
        }

    }
}

class MarAdmin extends div {
    constructor(o: {
        logo?: string,
        title?: string,
        menu?: Row,
        sideBarColor?: string,
        sideMenu?: MarMenu[]
    }) {
        super();

        const sider = this.initSider({
            sidebar: o.sideMenu,
            sideBarColor: o.sideBarColor
        });

        const body = this.initBody();

        this.initTopBar({
            title: o.title,
            logo: o.logo,
            menu: o.menu,
            body: body,
            sider: sider,
        });
        
    }

    initTopBar(o: {
        logo?: string,
        title?: string,
        menu?: Row,
        body: div,
        sider: div,
    }) {

        const bar = new button().Add(new Icon(Icons.MenuHamburger)).AddStyle({
            "margin-right": "5px",
            "height": "30px",
            "width": "30px",
            "border": "none",
            "background-color": "white"
        });

        const top = new div().AddClass("mar-top-bar");
        
        const logo = new div().AddStyle({
            "width": "30px",
            "height": "30px",
            "border-radius": "50%",
            "border": "1px solid grey"
        });

        top.Add(
            new Row([
                new Row([
                    bar,
                    o.logo != undefined ? logo : "",
                    o.title != undefined ? new Text({text: o.title}).AddStyle({"margin-left": "5px", "fong-weight": "bold"}) : ""
                ], undefined, Flex.Center).AddStyle({"height": "100%", "margin-left": "5px"}),
                o.menu != undefined ? o.menu : ""
            ], Flex.SpaceBetween, Flex.Center).AddStyle({"height": "100%"})
        );

        super.Add(top);

        let flag = true;

        bar.AddEventListener("click", () => {
            if (flag) {
                o.sider.AddStyle({
                    "left": "-230px"
                });
                o.body.AddStyle({
                    "padding-left": "0px"
                });
                top.AddStyle({
                    "padding-left": "0px"
                });
            }  else {
                o.sider.AddStyle({
                    "left": "0px"
                });
                o.body.AddStyle({
                    "padding-left": "230px"
                });
                top.AddStyle({
                    "padding-left": "230px"
                });
            }

            flag = !flag;

        });

    }

    initBody() {

        const body = new div().AddClass("mar-body");
        body.Add(new Button({text: "test", color: Color.Primary}));
        super.Add(body);

        return body;
    }

    

    initSider(o: {
        sidebar?: MarMenu[],
        sideBarColor?: string
    }) {
        const sider = new div().AddClass("mar-sider");

        if (o.sideBarColor != undefined) {
            sider.AddStyle({
                "background-color": o.sideBarColor
            });
        }

        if (o.sidebar != undefined) {
            // add the sidebar her
            for (const item of o.sidebar) {
                sider.Add(item);
            }
        }

        super.Add(sider);

        return sider;
    }

}

export {MarMenu};
export default MarAdmin;