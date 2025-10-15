import { Button, Color, Column, Flex, Icon, Icons, Row, Text } from "../../bs.3.mts";
import { button, div, Widget } from "../../core.mts";
import "./mar.css"

class MarMenu extends div {
    constructor(o: {
        logo?: Icon,
        title?: string,
        menu?: MarMenu[]
    }) {
        
        super();        
        
        const btn = new div();
        
        btn.AddClass("mar-menu");

        const arr: (string | number | Widget)[] = [];
        
        arr.push(20);

        if (o.logo != undefined) {
            arr.push(o.logo);
            arr.push(8);
        }

        if (o.title != undefined) {
            arr.push(new Text({text: o.title}).AddStyle({"font-size": "16px"}));
        }

        if (o.title != undefined) {
            btn.Add(new Row(arr, undefined, Flex.Center).AddStyle({"height": "100%"}));
        }

        super.Add(btn);

        if (o.menu != undefined) {
            
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

        this.initTopBar({
            title: o.title,
            logo: o.logo,
            menu: o.menu
        });
        
        this.initSider({
            sidebar: o.sideMenu,
            sideBarColor: o.sideBarColor
        });

        this.initBody();
    }

    initTopBar(o: {
        logo?: string,
        title?: string,
        menu?: Row
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
    }

    initBody() {

        const body = new div().AddClass("mar-body");
        body.Add(new Button({text: "test"}));
        super.Add(body);
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
    }

}

export {MarMenu};
export default MarAdmin;