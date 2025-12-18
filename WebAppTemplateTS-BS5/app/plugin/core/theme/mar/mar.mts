import { Button, Center, Color, Column, Column2, FaIcon, FaIcons, Flex, Icon, Icons, InputType, Row, Text, TextField, TextFieldAddon } from "../../bs.3.mts";
import { button, div, img, Widget } from "../../core.mts";
import "./mar.css"

class MarMenu extends div {
    btn: div
    constructor(o: {
        logo?: FaIcon,
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

        let chev_ron = new FaIcon(FaIcons.ChevronCircleDown);
        chev_ron.AddStyle({
            position: "absolute",
            right: "5px",
            top: "10px",
            opacity: "0.5"
        });

        if (o.title != undefined) {
            btn.Add([
                new Row(arr, undefined, Flex.Center).AddStyle({"height": "100%"})
            ]);

            if (o.menu != undefined  && o.menu.length > 0) {
                btn.Add(chev_ron);
            }
        }

        this.btn.AddStyle({
            "padding-left": "20px"
        });

        super.Add(btn);
        const drop = new div().AddStyle({
            "border-top": "1px solid #ddd",
            "border-bottom": "1px solid #ddd",
            "border-radius": "5px"
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
                    "padding-left": "40px"
                });
                drop.Add(sub);
            }

            this.btn.AddEventListener("click", () => {
                if (drop.HasClass("mar-active")) {
                    drop.DeleteClass("mar-active");
                    
                    if (o.isMainMenu != undefined && o.isMainMenu) {
                        this.btn.AddClass("mar-menu-main");
                    }

                    chev_ron.DeleteClass(FaIcons.ChevronCircleDown);
                    chev_ron.DeleteClass(FaIcons.ChevronCircleUp);

                    chev_ron.AddClass(FaIcons.ChevronCircleUp);

                } else {
                    drop.AddClass("mar-active");

                    if (o.isMainMenu != undefined && o.isMainMenu) {
                        this.btn.DeleteClass("mar-menu-main");
                    }

                    chev_ron.DeleteClass(FaIcons.ChevronCircleDown);
                    chev_ron.DeleteClass(FaIcons.ChevronCircleUp);

                    chev_ron.AddClass(FaIcons.ChevronCircleDown);

                }

            });

        } else {
            this.btn.AddEventListener("click", () => {
                if (o.click != undefined) {

                    const com = getComputedStyle(document.getElementsByClassName("mar-top-bar")[0]);

                    const d = document.getElementsByClassName("mar-menu");
                    for (const i of d) {
                        i.classList.remove("mar-link-active");
                        //@ts-ignore
                        i.style.backgroundColor = "";
                    }

                    this.btn.AddClass("mar-link-active");
                    //@ts-ignore
                    this.btn.control.style.backgroundColor = com.backgroundColor;
                    o.click();
                }
            });
        }

    }
}

class MarAdmin extends div {
    bbody: div
    constructor(o: {
        logo?: string,
        title?: string,
        menu?: Row,
        sideBarColor?: string,
        sideMenu?: MarMenu[],
        sideBgColor?: Color,
        topBarColor?: string
    }) {
        super();

        const sider = this.initSider({
            sidebar: o.sideMenu,
            sideBarColor: o.sideBarColor,
            sideBgColor: o.sideBgColor
        });

        this.bbody = this.initBody();

        this.initTopBar({
            title: o.title,
            logo: o.logo,
            menu: o.menu,
            body: this.bbody,
            sider: sider,
            topBarColor: o.topBarColor
        });
        
    }

    route(obj: Widget) {
        this.bbody.Clear();
        this.bbody.Add(new div().AddStyle({
            "padding": "5px"
        }).Add(obj));
    }

    initTopBar(o: {
        logo?: string,
        title?: string,
        menu?: Row,
        body: div,
        sider: div,
        topBarColor?: string
    }) {

        const bar = new button().Add(new FaIcon(FaIcons.Bars)).AddStyle({
            "margin-right": "5px",
            "height": "30px",
            "width": "30px",
            "border": "none",
            "background-color": "rgba(0, 0, 0, 0)",
            "border-radius": "5px"
        });

        const top = new div().AddClass("mar-top-bar");

        if (o.topBarColor != undefined)
            top.AddStyle({  
                "background-color": "var(--my-martop-bg)"
            });
        
        const logo = new div().AddStyle({
            "width": "30px",
            "height": "30px",
            "border-radius": "50%",
            "border": "1px solid grey"
        });
        
        const title = new Text({text: o.title != undefined ? o.title : ""}).AddStyle({"margin-left": "5px", "fong-weight": "bold"});

        top.Add(
            new Row([
                new Row([
                    bar,
                    o.logo != undefined ? logo : "",
                    o.title != undefined ?  title: ""
                ], undefined, Flex.Center).AddStyle({"height": "100%", "margin-left": "5px"}),
                o.menu != undefined ? o.menu : ""
            ], Flex.SpaceBetween, Flex.Center).AddStyle({"height": "100%"})
        );

        super.Add(top);

        let flag = true;

        const winEvent = () => {
            if (window.screen.width < 1000) {
                flag = false;
                o.sider.AddStyle({
                    "left": "-230px"
                });
                o.body.AddStyle({
                    "padding-left": "0px"
                });
                top.AddStyle({
                    "padding-left": "0px"
                });
            } else {
                flag = true;
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
        };

        winEvent();

        window.addEventListener("resize", winEvent);

        this.SetDispose(() => {
            window.removeEventListener("resize", winEvent);
        });

        bar.AddEventListener("click", () => {
            if (window.screen.width < 1000)  {

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
                    title.Show();
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
                    title.Hide();
                }

                flag = !flag;

            } else {
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
            }

        });

    }

    initBody() {

        const body = new div().AddClass("mar-body");
        super.Add(body);

        return body;
    }

    

    initSider(o: {
        sidebar?: MarMenu[],
        sideBarColor?: string,
        sideBgColor?: Color
    }) {
        const sider = new div().AddClass("mar-sider");

        if (o.sideBarColor != undefined) {
            sider.AddStyle({
                "background-color": o.sideBarColor
            });
        }

        if (o.sideBgColor != undefined) {
            sider.AddClass("bg-" + o.sideBgColor);
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


class MarLogin extends div {
    constructor() {
        super();
        const loginw = new div().AddStyle({
            width: "300px",
            height: "280px",
            "box-shadow": "0 0 2px rgba(0, 0, 0, 0.5)",
            "border-radius": "10px",
            "padding": "20px"
        });

        const title = new Text({text: "template login"}).AddStyle({
            "font-weight": "bold",
            "letter-spacing": "2px"
        });

        const logo = new img().AddStyle({
            "width": "50px",
            "height": "50px",
            "border-radius": "50%"
        });
        
        const username = new TextFieldAddon({prefix: new Icon(Icons.User), placeholder: "username"});

        const password = new TextFieldAddon({prefix: new Icon(Icons.Lock), placeholder: "password", type: InputType.Password});

        const submit = new Button({text: new Row([new Icon(Icons.LogIn), 5, "Sign In"]), color: Color.Success});
      
        loginw.Add(new Column2([
            new Row([new Center(title)], undefined, Flex.Center),
            10,
            new Center(logo),
            10,
            username,
            10,
            password,
            10,
            submit
        ], undefined, Flex.Center));

        

        super.Add(
            new Column2([
                loginw
            ], Flex.Center, Flex.Center).AddStyle({
                "height": "100vh"
            })
        );
    }
}

export {MarMenu};
export default MarAdmin;