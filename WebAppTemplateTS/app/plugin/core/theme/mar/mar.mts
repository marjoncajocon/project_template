import { Button, Color, Column, Flex, Row, Text } from "../../bs.3.mts";
import { div } from "../../core.mts";
import "./mar.css"


class MarAdmin extends div {
    constructor(o: {
        logo?: string,
        title?: string,
        menu?: Row
    }) {
        super();

        this.initTopBar({
            title: o.title,
            logo: o.logo,
            menu: o.menu
        });
        
        this.initSider();
        this.initBody();
    }

    initTopBar(o: {
        logo?: string,
        title?: string,
        menu?: Row
    }) {
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

    

    initSider() {
        const sider = new div().AddClass("mar-sider");

        super.Add(sider);
    }

}

export default MarAdmin;