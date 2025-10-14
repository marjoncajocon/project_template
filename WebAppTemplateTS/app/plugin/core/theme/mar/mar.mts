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

        const title = o.title != undefined ? o.title : "";

        top.Add(
            new Row([
                new Text({text: title}).AddStyle({"margin-left": "5px", "fong-weight": "bold"}),
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