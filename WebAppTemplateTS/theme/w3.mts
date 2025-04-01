import MyApp from "../main.mjs";
import { a, button, canvas, div, h3, header, hr, Http, i, img, input, label, li, option, select, span, table, td, textarea, th, tr, ul, Widget } from "../plugin/core/core.mts";


enum FlexDirection {
    Default = 'row',
    Reverse = 'row-reverse'
}

// Continue the Enum for Font Awesome Icons
enum Icons {
    Dashboard = 'dashboard',
    // Solid style (fas)
    Plus = "plus", // fa-plus
    Save = "save", // fa-save
    Trash = "trash", // fa-trash
    Edit = "edit", // fa-edit
    Cog = "cog", // fa-cog
    Home = "home", // fa-home
    Search = "search", // fa-search
    User = "user", // fa-user
    Users = "users", // fa-users
    Envelope = "envelope", // fa-envelope
    Bell = "bell", // fa-bell
    Calendar = "calendar", // fa-calendar
    Clock = "clock", // fa-clock
    Star = "star", // fa-star
    Heart = "heart", // fa-heart
    ThumbsUp = "thumbs-up", // fa-thumbs-up
    Check = "check", // fa-check
    Times = "times", // fa-times
    Lock = "lock", // fa-lock
    Unlock = "unlock", // fa-unlock
    Eye = "eye", // fa-eye
    EyeSlash = "eye-slash", // fa-eye-slash
    Download = "download", // fa-download
    Upload = "upload", // fa-upload
    Print = "print", // fa-print
    Camera = "camera", // fa-camera
    Music = "music", // fa-music
    Video = "video", // fa-video
    Image = "image", // fa-image
    File = "file", // fa-file
    Folder = "folder", // fa-folder
    Book = "book", // fa-book
    Bars = "bars", // fa-bars
    EllipsisH = "ellipsis-h", // fa-ellipsis-h
    ShoppingCart = "shopping-cart", // fa-shopping-cart
    CreditCard = "credit-card", // fa-credit-card
    Globe = "globe", // fa-globe
    Wifi = "wifi", // fa-wifi
    BatteryFull = "battery-full", // fa-battery-full
    Database = "database", // fa-database
    Server = "server", // fa-server
    Laptop = "laptop", // fa-laptop
    Mobile = "mobile", // fa-mobile
    Tablet = "tablet", // fa-tablet
    Desktop = "desktop", // fa-desktop
    Gamepad = "gamepad", // fa-gamepad
    Keyboard = "keyboard", // fa-keyboard
    Mouse = "mouse", // fa-mouse

    // Brands (fab)
    Facebook = "facebook-f", // fa-facebook-f
    Twitter = "twitter", // fa-twitter
    Instagram = "instagram", // fa-instagram
    Github = "github", // fa-github
    Google = "google", // fa-google
    Apple = "apple", // fa-apple
    Windows = "windows", // fa-windows
    Android = "android", // fa-android
    Linkedin = "linkedin-in", // fa-linkedin-in
    Youtube = "youtube", // fa-youtube
    Spotify = "spotify", // fa-spotify
    Paypal = "paypal", // fa-paypal
    Bitcoin = "bitcoin", // fa-bitcoin

    // Regular style (far)
    StarRegular = "star", // fa-star (regular)
    HeartRegular = "heart", // fa-heart (regular)
    BellRegular = "bell", // fa-bell (regular)
    CalendarRegular = "calendar", // fa-calendar (regular)
    FileRegular = "file", // fa-file (regular)

    Message = "message", // fa-message
    // Light style (fal) - if using Font Awesome Pro
    // PlusLight = "plus", // fa-plus (light)
    QuestionCircle = "question-circle",
    // Duotone style (fad) - if using Font Awesome Pro
    // PlusDuotone = "plus", // fa-plus (duotone)

    // Additional icons
    Shield = "shield", // fa-shield
    Certificate = "certificate", // fa-certificate
    Play = "play", // fa-play
    Stop = "stop", // fa-stop
    FileAlt = "file-alt", // fa-file-alt
    Share = "share", // fa-share
    Phone = "phone", // fa-phone
    TrashAlt = "trash-alt", // fa-trash-alt
    Cloud = "cloud", // fa-cloud
    Sun = "sun", // fa-sun
    Moon = "moon", // fa-moon
    Lightbulb = "lightbulb", // fa-lightbulb
    Flag = "flag", // fa-flag
    Bolt = "bolt", // fa-bolt
    InfoCircle = "info-circle", // fa-info-circle
    SearchPlus = "search-plus", // fa-search-plus
    SearchMinus = "search-minus", // fa-search-minus
    Sync = "sync", // fa-sync
    ArrowLeft = "arrow-left", // fa-arrow-left
    ArrowRight = "arrow-right", // fa-arrow-right
    ArrowUp = "arrow-up", // fa-arrow-up
    ArrowDown = "arrow-down",
    Close = "close" // fa-arrow-down
}

// Note: Make sure to continue adding additional icons as per your requirement.


enum Color {
    White = 'white',
    Black = "black",
    Red = "red",
    Pink = "pink",
    Purple = "purple",
    DeepPurple = "deep-purple",
    Indigo = "indigo",
    Blue = "blue",
    LightBlue = "light-blue",
    Cyan = "cyan",
    Aqua = "aqua",
    Teal = "teal",
    Green = "green",
    LightGreen = "light-green",
    Aspalth = 'asphalt',
    crimson = 'crimson',
    Cobalt = 'cobalt',
    Emeral = 'emerald',
    Olive = 'Olive',
    Paper = 'paper',
    Sienna ='sienna',
    Taupe = 'taupe',
    Danger = 'danger',
    Note = 'note',
    Info = 'info',
    Warning = 'warning',
    Success = 'success',
    Lime = "lime",
    Sand = "sand",
    Khaki = "khaki",
    Yellow = "yellow",
    Amber = "amber",
    Orange = "orange",
    DeepOrange = "deep-orange",
    BlueGray = "blue-gray",
    Brown = "brown",
    LightGray = "light-gray",
    Gray = "gray",
    DarkGray = "dark-gray",
    PaleRed = "pale-red",
    PaleYellow = "pale-yellow",
    PaleGreen = "pale-green",
    PaleBlue = "pale-blue",
    FlatTurquoise = "flat-turquoise",
    FlatEmerald = "flat-emerald",
    IOSDarkBlue = "ios-dark-blue",
    FlatPeterRiver = "flat-peter-river",
    FlatAmethyst = "flat-amethyst",
    FlatWetAsphalt = "flat-wet-asphalt",
    FlatGreenSea = "flat-green-sea",
    FlatNephritis = "flat-nephritis",
    FlatBelizeHole = "flat-belize-hole",
    FlatWisteria = "flat-wisteria",
    FlatMidnightBlue = "flat-midnight-blue",
    FlatSunFlower = "flat-sun-flower",
    FlatCarrot = "flat-carrot",
    FlatAlizarin = "flat-alizarin",
    FlatClouds = "flat-clouds",
    FlatConcrete = "flat-concrete",
    FlatOrange = "flat-orange",
    FlatPumpkin = "flat-pumpkin",
    FlatPomegranate = "flat-pomegranate",
    FlatSilver = "flat-silver",
    FlatAsbestos = "flat-asbestos",
    IOSDeepBlue = "ios-deep-blue",
    IOSBlue = "ios-blue",
    IOSLightBlue = "ios-light-blue",
    IOSGreen = "ios-green",
    IOSPink = "ios-pink",
    IOSRed = "ios-red",
    IOSOrange = "ios-orange",
    IOSYellow = "ios-yellow",
    IOSGrey = "ios-grey",
    IOSLightGrey = "ios-light-grey",
    IOSBackground = "ios-background",
    Win8Lime = "win8-lime",
    Win8Green = "win8-green",
    Win8Emerald = "win8-emerald",
    Win8Teal = "win8-teal",
    Win8Cyan = "win8-cyan",
    Win8Blue = "win8-blue",
    Win8Cobalt = "win8-cobalt",
    Win8Indigo = "win8-indigo",
    Win8Violet = "win8-violet",
    Win8Pink = "win8-pink",
    Win8Magenta = "win8-magenta",
    Win8Crimson = "win8-crimson",
    Win8Red = "win8-red",
    Win8Orange = "win8-orange",
    Win8Amber = "win8-amber",
    Win8Yellow = "win8-yellow",
    Win8Brown = "win8-brown",
    Win8Olive = "win8-olive",
    Win8Steel = "win8-steel",
    Win8Mauve = "win8-mauve",
    Win8Taupe = "win8-taupe",
    Win8Sienna = "win8-sienna",
    MetroLightGreen = "metro-light-green",
    MetroGreen = "metro-green",
    MetroDarkGreen = "metro-dark-green",
    MetroMagenta = "metro-magenta",
    MetroLightPurple = "metro-light-purple",
    MetroPurple = "metro-purple",
    MetroDarkPurple = "metro-dark-purple",
    MetroDarken = "metro-darken",
    MetroTeal = "metro-teal",
    MetroLightBlue = "metro-light-blue",
    MetroBlue = "metro-blue",
    MetroDarkBlue = "metro-dark-blue",
    MetroYellow = "metro-yellow",
    MetroOrange = "metro-orange",
    MetroDarkOrange = "metro-dark-orange",
    MetroRed = "metro-red",
    MetroDarkRed = "metro-dark-red"
};

enum Size {
    Tiny = "tiny",
    Small = "small",
    Large = "large",
    XLarge = "xlarge",
    XXLarge = "xxlarge",
    XXXLarge = "xxxlarge"
}

enum Direction {
    TopLeft = "topleft",
    TopRight = "topright",
    BottomLeft = "bottomleft",
    BottomRight = "bottomright",
    Left = "left",
    Right = "right",
    Middle = "middle",
    Top = "top",
    Bottom = "bottom",
    TopMiddle = "topmiddle",
    BottomMiddle = "bottommiddle"
}


enum GridSize {
    Small1 = "s1",
    Small2 = "s2",
    Small3 = "s3",
    Small4 = "s4",
    Small5 = "s5",
    Small6 = "s6",
    Small7 = "s7",
    Small8 = "s8",
    Small9 = "s9",
    Small10 = "s10",
    Small11 = "s11",
    Small12 = "s12",

    Medium1 = "m1",
    Medium2 = "m2",
    Medium3 = "m3",
    Medium4 = "m4",
    Medium5 = "m5",
    Medium6 = "m6",
    Medium7 = "m7",
    Medium8 = "m8",
    Medium9 = "m9",
    Medium10 = "m10",
    Medium11 = "m11",
    Medium12 = "m12",

    Large1 = "l1",
    Large2 = "l2",
    Large3 = "l3",
    Large4 = "l4",
    Large5 = "l5",
    Large6 = "l6",
    Large7 = "l7",
    Large8 = "l8",
    Large9 = "l9",
    Large10 = "l10",
    Large11 = "l11",
    Large12 = "l12",

    ExtraLarge1 = "xl1",
    ExtraLarge2 = "xl2",
    ExtraLarge3 = "xl3",
    ExtraLarge4 = "xl4",
    ExtraLarge5 = "xl5",
    ExtraLarge6 = "xl6",
    ExtraLarge7 = "xl7",
    ExtraLarge8 = "xl8",
    ExtraLarge9 = "xl9",
    ExtraLarge10 = "xl10",
    ExtraLarge11 = "xl11",
    ExtraLarge12 = "xl12",
    Rest = "rest"
}

enum InputType {
    Text = "text",
    Number = "number",
    CheckBox = "check",
    Radio = "radio",
    Date = "date",
    Email = "email",
    Password = "password",
    Select = "select",
    File = "file",
    Color = "color",
    Tel = "tel",
    Url = "url",
}



class Container extends div {
    constructor() {
        super();
        super.class(["w3-container"]);

    }
}

class Content extends div {
    constructor() {
        super();
        super.class(["w3-content", "w3-display-container"]);
    }
}

class Panel extends div {
    constructor(color: Color | null = null) {
        super();
        super.class(["w3-panel"]);

        if (color != null) {
            super.class(`w3-${color}`);
        }
    }
}

class Card extends div {
    constructor(color: Color | null = null) {
        super();
        super.class(["w3-card"]);

        if (color != null) {
            super.class(`w3-${color}`);
        }
    }
}

class ButtonGroup extends div {
    lists: Widget[];

    constructor(btn: Widget | null | Widget[]) {
        super();
        super.class("w3-bar");

        this.lists = [];

        if (btn instanceof Widget) {
            btn.class("w3-bar-item");
            super.add(btn);
            this.lists.push(btn);
        } else if (btn instanceof Array) {
            for (const item of btn) {
                item.class("w3-bar-item");
                super.add(item);

                this.lists.push(item);
            }
        }
    }

    public round(): Widget {
        if (this.lists.length > 0) {
            this.lists[0].style({
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px"
            }); /// first button;

            this.lists[this.lists.length - 1].style({
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px"
            })
        }

        return this;
    }
}

class Button extends button {

    loader: Widget;
    loader_txt: Widget;

    constructor(text: string | null | Widget = null, color: Color | null = null) {
        super();
        super.class(["w3-btn"]);
        if (text instanceof Widget) {
            super.add(text);
        }
        else {
            super.html(text);
        }

        if (color != null) {
            super.class(`w3-${color}`);
        }

        this.loader = new div().class("loader").style({
            position: "absolute",
            top: '5px',
            left: '5px'
        }).hide();

        this.loader_txt = new Text().style({
            position: "absolute",
            top: '5px',
            left: '40px',
            color: "white",
            fontWeight: "bold"
        });

        super.add([this.loader, this.loader_txt]);
    }

    public round(): Widget {
        super.style({
            borderRadius: "20px"
        });
        return this;
    }

    public size(size: Size): Widget {
        super.class(`w3-${size}`);

        return this;
    }
    public circle(): Widget {
        super.class("w3-circle");
        return this;
    }
    public block(): Widget {
        super.class("w3-block");
        return this;
    }
    public button(): Widget {
        super.class("w3-button");
        return this;
    }

    public ripple(): Widget {
        super.class("w3-ripple");
        return this;
    }
    public border(): Widget {
        super.class("w3-border");
        return this;
    }

    public loaderText(txt: string): void {
        this.loader_txt.text(txt);
    }

    public showLoader(): void {
        this.loader.show();
        super.attr({ disabled: "" });
        super.style({ position: "relative" });
    }
    public hideLoader(): void {
        super.removeAttr("disabled");
        this.loader.hide();
        super.style({ position: '' });
    }

}

class Text extends div {
    constructor(text: string | null = null, color: Color | null = null) {
        super();
        if (text != null) {
            super.text(text);
        }

        if (color != null) {
            super.class(`w3-text-${color}`);
        }


    }

    public textColor(): Widget {
        super.style({
            color: "rgb(54, 54, 54)",
            fontSize: "10pt"
        });
        return this;
    }

    public setTextColor(color: Color): Widget {
        super.class(`w3-text-${color}`);
        return this;
    }

    public left(): Widget {
        super.class("w3-left-align");
        return this;
    }
    public right(): Widget {
        super.class("w3-right-align");
        return this;
    }
}

class Html extends div {
    constructor(text: string | null = null) {
        super();
        if (text != null) {
            super.html(text);
        }
    }

    public left(): Widget {
        super.class("w3-left-align");
        return this;
    }
    public right(): Widget {
        super.class("w3-right-align");
        return this;
    }
}

class TableResponsive extends div {
    constructor(obj: Widget | Widget[], height: number = 0, padding: number = 0) {
        super();
        super.class("w3-responsive");

        super.add(obj);

        if (height != 0) {
            super.style({
                height: `${height}px`,
                overflowY: "auto",
                position: "relative"
            });
        }

        if (padding != 0) {
            super.style({ padding: `${padding}px` });
        }
    }
}



class Table extends table {
    rows: Widget[];
    constructor(header: string[] = [], size: Size | null = null, color: Color | null = null, header_height: number | null = null, sticky: boolean = false) {
        super();

        super.class(["c-table", "w3-table-all"]);

        if (size != null) {
            super.class([`w3-${size}`]);
        } else {
            super.class([`w3-${Size.Small}`]);
        }

        const tr1 = new tr();;

        const header_len = header.length;
        for (let i = 0; i < header_len; i++) {
            const item = header[i];
            const td1 = new th().html(item);
            if (color != null) {
                if (td1 instanceof Widget) {
                    td1.class(`w3-${color}`);
                }
            }

            if (header_height != null) {
                if (td1 instanceof Widget)
                    td1.style({ height: `${header_height}px` });
            } else {
                if (td1 instanceof Widget)
                    td1.style({ height: `0px`, padding: "0px" });

            }

            if (td1 instanceof Widget)
                tr1.add(td1);

            if (sticky) {
                if (td1 instanceof Widget)
                    td1.style({
                        position: "sticky",
                        top: "0px",
                        zIndex: "100",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid #ddd"
                    });
            }
        }



        super.add(tr1);

        this.rows = [];
    }

    public add(items: Widget | Widget[] | string[] | any[] = [], arr: { [index: number]: string }[] = [], padding = 0): Widget {

        const tr1 = new tr();
        if (items instanceof Array) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];

                const td1 = new td();

                if (padding != 0) {
                    td1.style({ padding: `${padding}px` });
                }

                if (item instanceof Widget) {
                    td1.add(item);
                } else {
                    td1.html(item);
                }
                tr1.add(td1);

                if (arr) {
                    if (typeof (arr[i]) != "undefined") {
                        if (typeof (arr[i]["style"]) != "undefined") {
                            td1.style(arr[i]["style"]);
                        }
                    }
                }
            }
        }

        super.add(tr1);

        this.rows.push(tr1);

        return tr1;

    }

    public clearBody(): Widget {
        for (const item of this.rows) {
            item.delete();
        }

        this.rows = [];
        return this;
    }

    public striped(): Widget {
        super.class("c-table-striped");
        return this;
    }
    public border(): Widget {
        super.class("c-table-border");
        return this;
    }
    public all(): Widget {
        super.class("w3-table-all");
        return this;
    }
    public center(): Widget {
        super.class("w3-centered");
        return this;
    }
    public hover(): Widget {
        super.class("c-table-hover");
        return this;
    }
}


class List extends ul {
    constructor(size: Size | null = null) {
        super();
        super.class("w3-ul");
        if (size != null) {
            super.class(`w3-${size}`);
        }
    }

    public add(widget: Widget | Widget[] | string | null = null, color: Color | null = null, hover_color: Color | null = null): Widget {
        const li1 = new li();

        if (color != null) {
            li1.class(`w3-${color}`);
        }

        if (widget instanceof Widget) {
            li1.add(widget);
        } else if (typeof (widget) == "string") {
            li1.html(widget);
        }

        if (hover_color != null) {
            li1.class(`w3-hover-${hover_color}`);
        }

        super.add(li1);

        return li1;
    }

    public border(): Widget {
        super.class("w3-border");
        return this;
    }
    public center(): Widget {
        super.class("w3-center");
        return this;
    }
    public hover(): Widget {
        super.class("w3-hoverable");
        return this;
    }
}



class TextField extends div {

    label: label;
    tf: input;
    error_label: label;
    search: Widget;


    public constructor(text: string | null | Widget = null, type: string = "text", placeholder: null | string = null, error: boolean = false) {
        super();

        super.style({
            position: "relative"
        });

        this.label = new label();
        this.tf = new input().class(["w3-input"]);
        this.error_label = new label();


        if (text != null) {
            if (text instanceof Widget) {
                this.label.add(text);
            } else {

                this.label.html(text);

                this.label.style({
                    color: "rgb(54, 54, 54)",
                    fontSize: "10pt"
                });

            }
            super.add(this.label);
        }

        this.tf.attr("type", type);

        if (placeholder != null) {
            this.tf.attr("placeholder", placeholder);
        }

        super.add([
            this.tf
        ]);

        if (error) {
            super.add(this.error_label);
        }

        this.search = new Card().hide();

        super.add(this.search);

    }

    public filter(param: { data: { key: string, value: string }[], network: boolean, url: string, token_key: string, token_value: string }): void {

        const {
            data = [],
            network = false,
            url = "/",
            token_key = "X-Auth",
            token_value = ""
        } = param;


        this.search.style({
            width: "100%",
            height: "100px",
            overflowY: "auto",
            position: "absolute",
            left: "0px",
            top: "63px",
            backgroundColor: "white",
            zIndex: "2"
        });

        if (!network) {
            this.tf.addEventListener("keyup", () => {
                this.search.clear();

                let has_found = false;
                for (const item of data) {

                    if (this.tf.getValue() != "" && item.value.toLowerCase().indexOf(this.tf.getValue().toLowerCase()) > -1) {
                        has_found = true;

                        const btn = new Button().style({
                            width: "100%",
                            textAlign: "left",
                            paddingLeft: "5px"
                        });

                        btn.text(item.value);

                        if (btn instanceof Button) {
                            btn.size(Size.Small);
                        }

                        this.search.add(
                            btn
                        );

                        btn.addEventListener("click", () => {
                            this.tf.setValue(item.key);
                            this.search.hide();
                        });
                    }
                }

                if (has_found) {
                    this.search.show();
                } else {
                    this.search.hide();
                }
            });
        } else {

            let time_out: null | number | undefined = null;
            this.tf.addEventListener("keyup", () => {

                if (this.tf.getValue().trim() == "") {
                    this.search.clear();
                    this.search.hide();
                    return;
                }

                if (typeof (time_out) === "number")
                    clearTimeout(time_out);


                time_out = setTimeout(async () => {

                    try {
                        const header = {};
                        header["Content-Type"] = "application/json";
                        header[token_key] = token_value;

                        this.search.show();
                        const http = new Http({
                            url: `${url}`,
                            method: "POST",
                            header: header,
                            body: {
                                search: this.tf.getValue()
                            }
                        });
                        this.search.clear();


                        const res = JSON.parse(await http.load<string>());
                        console.log(res);

                        // plotting the result
                        for (const item of res) {
                            const btn = new Button();

                            btn.style({
                                width: "100%",
                                textAlign: "left",
                                paddingLeft: "5px"
                            });

                            btn.text(item.value);

                            btn.size(Size.Small);

                            this.search.add(
                                btn
                            );

                            btn.addEventListener("click", () => {
                                this.tf.setValue(item.value);
                                this.search.hide();
                            });
                        }
                        // show the search result
                        if (res.length > 0) {
                            this.search.show();
                        } else {
                            this.search.hide();
                        }


                    } catch (er) {
                        console.log(er);
                        this.search.hide();
                    }

                }, 200);
            });

        }


    }

    public error(err: string | null = null): void {

        if (err != null) {
            this.tf.class(`w3-border-${Color.Red}`);
            this.error_label.class(`w3-text-${Color.Red}`);
            this.error_label.html(err);
        } else {
            this.tf.removeClass(`w3-border-${Color.Red}`);
            this.error_label.removeClass(`w3-text-${Color.Red}`);
            this.error_label.html("");
        }
    }

    public setIconPrefix(param: { icon: Icons | null, size?: number, color?: Color | null }): void {

        const { icon = null, size = 20, color = null } = param;
        if (icon != null) {
            const ico = new Icon(icon, color).style({
                position: "absolute",
                bottom: "10px",
                left: "5px",
                fontSize: `${size}px`,
                width: `${size}px`,
                height: `${size}px`
            });

            this.tf.style({
                paddingLeft: `${size + (size / 2)}px`
            });

            super.add(ico);
        }

    }

    public setIconSuffix(param: { icon: Icons | null, size?: number, color?: Color | null }) {
        const { icon = null, size = 20, color = null } = param;
        if (icon != null) {
            const ico = new Icon(icon, color).style({
                position: "absolute",
                bottom: "10px",
                right: "5px",
                fontSize: `${size}px`,
                width: `${size}px`,
                height: `${size}px`
            });

            this.tf.style({
                paddingRight: `${size + (size / 2)}px`
            });

            super.add(ico);
        }
        return this;
    }

    public size(size: Size) {
        this.tf.class(`w3-${size}`);
        return this;
    }

    public labelColor(color: Color | null = null) {
        this.label.class(`w3-text-${color}`);
        return this;
    }
    public round() {
        this.tf.class("w3-round");
        return this;
    }

    public border() {
        this.tf.class("w3-border");
        return this;
    }

    public getText() {
        return this.tf.value();
    }

    public setText(value) {
        this.tf.value(value);
        return this;
    }

    public disabled() {
        this.tf.attr("disabled", "");
        return this;
    }

    public enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }
}


class TextBox extends div {
    label: label;
    tf: textarea;
    error_label: label;

    constructor(text: string | Widget | null = null, placeholder: string | null = null, error: boolean = false) {
        super();
        this.label = new label();
        this.tf = new textarea().class(["w3-input"]);
        this.error_label = new label();

        if (text != null) {
            if (text instanceof Widget) {
                this.label.add(text);
            } else {
                this.label.html(text);
            }
            super.add(this.label);
        }


        if (placeholder != null) {
            this.tf.attr("placeholder", placeholder);
        }

        super.add([
            this.tf
        ]);

        if (error) {
            super.add(this.error_label);
        }

    }

    public error(err: null | string = null) {

        if (err != null) {
            this.tf.class(`w3-border-${Color.Red}`);
            this.error_label.class(`w3-text-${Color.Red}`);
            this.error_label.html(err);
        } else {
            this.tf.removeClass(`w3-border-${Color.Red}`);
            this.error_label.removeClass(`w3-text-${Color.Red}`);
            this.error_label.html("");
        }
        return this;
    }


    public size(size: Size) {
        this.tf.class(`w3-${size}`);
        return this;
    }

    public labelColor(color: Color | null = null) {
        this.label.class(`w3-text-${color}`);
        return this;
    }
    public round() {
        this.tf.class("w3-round");
        return this;
    }

    public border() {
        this.tf.class("w3-border");
        return this;
    }

    public getText() {
        return this.tf.value();
    }

    public setText(value: string | null) {
        this.tf.value(value);
        return this;
    }

    public disabled() {
        this.tf.attr("disabled", "");
        return this;
    }

    public enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }
}

class Radio extends span {
    tf: input;
    label: label;

    constructor(text: string | null = null, name: string | null = null) {
        super();

        this.tf = new input().attr({
            type: "radio",
            class: "w3-radio",
            name: name
        });

        this.label = new label();

        super.add(this.tf);

        if (text != null) {
            this.label.html(text);
            super.add(this.label);
        }

    }
    public enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }

    public setText(bool: boolean) {
        if (this.tf.control instanceof HTMLInputElement) {
            this.tf.control.checked = bool;
        }
        return this;
    }

    public getText(): boolean {

        if (this.tf.control instanceof HTMLInputElement) {
            return this.tf.control.checked;
        }

        return false;
    }

    public disabled() {
        this.tf.attr("disabled", "");
        return this;
    }
}

class CheckBox extends span {
    label: input;
    tf: input;

    constructor(text: string | null = null) {
        super();

        this.tf = new input().attr({
            type: "checkbox",
            class: "w3-radio"
        });

        this.label = new label();

        super.add(this.tf);

        if (text != null) {
            this.label.html(text);
            super.add(this.label);
        }

    }



    public setText(bool: boolean) {
        if (this.tf.control instanceof HTMLInputElement) {
            this.tf.control.checked = bool;
        }

        return this;
    }

    public getText(): boolean {
        if (this.tf.control instanceof HTMLInputElement) {
            return this.tf.control.checked;
        }
        return false;
    }

    public enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }

    public disabled() {
        this.tf.attr("disabled", "");
        return this;
    }
}



class ComboBox extends select {
    constructor() {
        super();
        super.class("w3-select");


    }

    public set(key: string, value: string): option {
        const opt = new option();
        opt.attr({
            value: key
        });
        opt.html(value);
        super.add(opt);
        return opt;
    }

    public enabled() {
        this.removeAttr("disabled");
        return this;
    }

    public disabled() {
        this.attr("disabled", "");
        return this;
    }

    public size(size: Size) {
        this.class(`w3-${size}`);
        return this;
    }

    public border() {
        super.class("w3-border");
        return this;
    }

    public setText(value: string) {
        super.value(value);
        return this;
    }

    public getText() {
        return super.value();
    }
}


class Badge extends span {
    constructor(text: string | null = null, color: Color | null = null, size: Size | null = null) {
        super();
        super.class("w3-badge");

        if (size != null) {
            super.class(`w3-${size}`);
        }

        if (color != null) {
            super.class(`w3-${color}`);
        }

        if (text != null) {
            super.html(text);
        }
    }

    public textColor(color: Color) {
        super.class(`w3-text-${color}`);
        return this;
    }
}

class Tag extends span {
    constructor(text: string | null = null, color: Color | null = null, size: Size | null = null) {
        super();
        super.class("w3-tags");

        if (size != null) {
            super.class(`w3-${size}`);
        }

        if (color != null) {
            super.class(`w3-${color}`);
        }

        if (text != null) {
            super.html(text);
        }
    }

    public textColor(color: Color) {
        super.class(`w3-text-${color}`);
        return this;
    }
    public border() {
        super.class("w3-border");
        return this;
    }
}

class Grid extends div {
    constructor(is_padding: boolean = false) {
        super();
        super.class("w3-row");

        if (is_padding) {
            super.class(["w3-row-padding", "w3-stretch"]);
        }
    }

    public set(obj: Widget | string, sizes: GridSize[] = []) {
        const cell = new div().class("w3-col");

        for (const item of sizes) {
            if (item == GridSize.Rest) {
                cell.class(`w3-${GridSize.Rest}`);
            } else {
                cell.class(item);
            }
        }

        if (obj instanceof Widget) {
            cell.add(obj);
        } else {
            cell.html(obj);
        }

        super.add(cell);
        return cell;
    }

    public padding() {
        super.class("w3-row-padding");
        return this;
    }

    public section() {
        super.class("w3-section");
        return this;
    }
}

class Bar extends div {
    constructor(color: Color | null = null, size: Size | null = null) {
        super();
        super.class("w3-bar");
        super.style({
            "overflow-x": "auto",
            "white-space": "nowrap"
        })


        if (color != null) {
            super.class(`w3-${color}`);
        }

        if (size != null) {
            super.class(`w3-${size}`);
        }


    }

    public block() {
        super.class("w3-bar-block");
        return this;
    }

    public set(text: string | null | Widget = null, isRight: boolean = false, hovercolor: Color | null = null, evt: EventListenerOrEventListenerObject | null = null, hoverableBGColor: Color | null = null, hoverText: Color | null = null) {
        const item = new div().class("w3-bar-item");
        if (text instanceof Widget) {
            item.add(text);
        }
        else {
            item.html(text);
        }

        if (hovercolor != null) {
            item.class(`w3-hover-${hovercolor}`);
        }

        if (evt != null) {
            item.addEventListener("click", evt);
        }



        if (hoverableBGColor != null) {
            item.class(`w3-hover-${hoverableBGColor}`);
        }

        if (hoverText != null) {
            item.class(`w3-hover-${hoverText}`);
        }

        if (isRight) {
            item.class("w3-right");
        }

        super.add(item);
        return item;
    }
}

class DropDownHover extends div {
    drop_content: div;

    constructor(title: string | null = null) {
        super();
        super.class("w3-dropdown-hover");
        const btn = new Button(title);

        super.add(btn);
        this.drop_content = new div().class(["w3-dropdown-content", "w3-bar-block", "w3-card-4"]);

        super.add(this.drop_content);
    }

    public set(title: string | Widget | null = null, fn: null | EventListenerOrEventListenerObject = null) {
        const a1 = new a().class(["w3-bar-item", "w3-button"]);

        if (title instanceof Widget) {
            a1.add(title);

            if (typeof (fn) == "function") {
                a1.addEventListener("click", fn);
            }
        } else {
            a1.html(title);
            if (typeof (fn) == "function") {
                a1.addEventListener("click", fn);
            }
        }

        this.drop_content.add(a1);
        return a1;
    }
}

class Accordion extends span {
    constructor(title: string | null = null, content: Widget | null = null) {
        super();
        const btn = new Button(title);
        btn.button()
        btn.block()
        btn.class("w3-left-align");

        const div = new Container().class("w3-hide");

        if (content instanceof Widget) {
            div.add(content);
        } else {
            div.html(content);
        }

        super.add([btn, div]);

        btn.addEventListener("click", () => {
            if (div.hasClass("w3-show")) {
                div.removeClass("w3-show");
            } else {
                div.addClass("w3-show");
            }
        });
    }
}

class Icon extends i {
    constructor(ico: Icons | null = null, color: Color | null = null) {
        super();

        if (ico != null) {
            super.class(["fa", `fa-${ico}`]);
        }

        if (color != null) {
            super.class(`w3-text-${color}`);
        }
    }

    setColor(color) {
        super.class(`w3-text-${color}`);
        return this;
    }
}
class Label extends label {
    constructor(title: string | Widget | Widget[] | null = null) {
        super();

        if (title instanceof Widget) {
            super.add(title);
        }
        else if (title instanceof Array) {
            for (const item of title) {
                if (item instanceof Widget) {
                    super.add(item);
                } else {
                    super.add(new Label(item));
                }
            }
        }
        else {
            super.text(title);
        }
    }
}

class SideBar extends div {
    constructor(title: string | Widget | null = null) {
        super();
        super.class(["w3-sidebar", "w3-light-grey", "w3-bar-block"]);
        if (title instanceof Widget) {
            super.add(title);
        } else {
            const hh = new h3();

            hh.html(title);
            super.add(hh);
        }
    }

    public set(title: Widget | string | null = null, fn: null | EventListenerOrEventListenerObject = null) {
        if (title instanceof Widget) {
            super.add(title);
            return title;
        } else {
            const a1 = new a().attr({
                href: "#",
                class: "w3-bar-item w3-button"
            });
            a1.html(title);

            if (typeof (fn) == "function") {
                a1.addEventListener("click", fn);
            }
            super.add(a1);
            return a1;
        }

    }
}


class LeftTab extends div {
    round: boolean;
    lists: Widget[];
    grid: Grid;
    side_bar: div;
    content: div;

    constructor(param: { bgColor?: Color | null, size?: Size | null, round?: boolean, roundContent?: boolean }) {

        const { bgColor = null, size = null, round = false, roundContent = false } = param;

        super();
        this.round = round;
        this.lists = [];

        this.grid = new Grid();

        this.side_bar = new div().class(["w3-card"]);


        if (bgColor != null) {
            this.side_bar.class(`w3-${bgColor}`);
        }


        this.content = new div().style({ width: "100%" }).class("w3-card");

        this.grid.set(this.side_bar, [GridSize.Small12, GridSize.Medium3, GridSize.Large12]);

        const main_row = new Row().add(this.content).style({ paddingLeft: "5px" });
        this.grid.set(main_row, [GridSize.Small12, GridSize.Medium9, GridSize.Large10]);

        if (window.innerWidth <= 600) {
            main_row.style({
                paddingTop: "10px",
                paddingLeft: ""
            });
        }

        if (roundContent) {
            this.content.style({
                borderRadius: "10px"
            });
        }


        super.add([
            this.grid
        ]);

    }

    public checkRound() {
        if (this.round) {


            /// clearRadius:
            for (const btn of this.lists) {
                btn.style({
                    borderTopRightRadius: "",
                    borderTopLeftRadius: "",
                    borderBottomRightRadius: "",
                    borderBottomLeftRadius: ""
                });
            }

            /// 


            this.side_bar.style({
                borderRadius: "10px"
            });

            this.lists[0].style({
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px"
            });

            this.lists[this.lists.length - 1].style({
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px"
            })

        }
    }

    public addActive(cur_btn) {
        for (const btn of this.lists) {
            btn.removeClass("w3-rtab-active");
        }

        cur_btn.addClass("w3-rtab-active");
    }

    public set(param: { title: string | null | Widget, fn: Function | null, active?: boolean, color?: Color | null }) {
        const { title = null, fn = null, active = false, color = null } = param;
        const btn = new button().style({
            width: "100%",
            textAlign: "left",
            paddingLeft: "10px",
            fontSize: "8pt"
        }).class(["w3-bar-item", "w3-button", "tablink"]);

        if (title instanceof Widget) {
            btn.add(title);
        } else {
            btn.html(title);
        }

        this.side_bar.add(btn);

        if (typeof (fn) == "function") {
            btn.addEventListener("click", () => {
                this.addActive(btn);
                this.content.clear();
                fn(this.content);
            });
        }

        if (active) {
            this.addActive(btn);
            if (typeof (fn) == "function")
                fn(this.content);
        }

        this.lists.push(btn);

        this.checkRound();

        return this;
    }
}

class BasicTab extends div {
    menu: div;
    borderRadius: number;
    content: div;
    list: Widget[];

    constructor(param: { bgColor?: Color | null, size?: Size | null, borderRadius?: number }) {

        const { bgColor = null, size = null, borderRadius = 0 } = param;
        super();

        this.menu = new div().style({
            width: "100%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            border: "1px solid #e3e3e3",
            borderBottom: "none"
        });

        this.borderRadius = borderRadius;

        if (borderRadius > 0) {
            this.menu.style({
                borderRadius: `${borderRadius}px`
            })
        }

        if (bgColor != null) {
            this.menu.class(`w3-${bgColor}`);
        }

        if (size != null) {
            this.menu.class(`w3-${size}`);
        }

        // <div class="w3-bar w3-black">
        //     <button class="w3-bar-item w3-button" onclick="openCity('London')">London</button>
        //     <button class="w3-bar-item w3-button" onclick="openCity('Paris')">Paris</button>
        //     <button class="w3-bar-item w3-button" onclick="openCity('Tokyo')">Tokyo</button>
        // </div>
        this.content = new div();

        super.add([
            this.menu,
            this.content
        ]);

        this.list = [];
    }
    public clearActive() {
        for (const item of this.list) {
            item.removeClass("w3-tab-active");
            //item.removeAttr("disabled");
        }
    }
    public set(param: { title: string | Widget | null, fn: Function | null, active?: boolean, color?: Color | null }) {
        const { title = null, fn = null, active = false, color = null } = param;
        if (title instanceof Widget) {

        } else {
            // const btn = new button().html(title).style({
            //     backgroundColor: "rgba(0, 0, 0, 0)",
            //     border: "1px solid rgba(0, 0, 0, 0)",
            //     cursor: "pointer",
            //     padding: "10px",
            //     height: "100%"
            // });

            const btn = new button().class(["w3-bar-item", "w3-button", "tablink"]);
            btn.html(title);
            btn.style({
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                border: "1px solid rgba(0, 0, 0, 0)"
            });


            this.menu.add(btn);

            this.list.push(btn);

            if (active) {
                btn.class("w3-tab-active");
                //btn.attr({"disabled": ""});
                this.content.clear();
                if (typeof (fn) == "function")
                    fn(this.content);
            }


            if (typeof (fn) == "function") {
                btn.addEventListener("click", () => {

                    this.clearActive();
                    btn.class("w3-tab-active");
                    //btn.attr({"disabled": ""});
                    this.content.clear();
                    fn(this.content);

                });
            }
        }
    }
}

class TabBody extends div {
    constructor() {
        super();
        super.style({
            border: "2px solid #e3e3e3",
            borderTop: "none",
            position: "relative"
        });
    }
    public round() {
        super.style({
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px"
        });
        return this;
    }
}

class Pagination extends div {
    between: span;
    change_fn: Function | null;
    links: { num: number, link: a }[];
    current_page: number;
    active_color: string;
    constructor(change_fn: Function | null = null, active_color: Color | null = null, size: Size | null = null) {
        super();
        super.class(["w3-bar"]);

        if (size != null) {
            super.class(`w3-${size}`);
        }

        const before = new a();
        before.attr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).html(`&laquo;`);

        const forward = new a();
        forward.attr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).html(`&raquo;`);

        super.add(before);

        this.between = new span();
        super.add(this.between);

        super.add(forward);

        this.change_fn = change_fn;

        this.links = [];

        this.current_page = 1;

        if (active_color != null) {
            this.active_color = `w3-${active_color}`;
        } else {
            // default color is green
            this.active_color = `w3-${Color.Green}`;
        }

        const changeDir = (step) => {
            if (this.links.length == 0) return; // if no data no process 

            this.current_page += step;

            // checking the minumum 
            if (this.current_page <= 1) {
                this.current_page = 1;
            }

            // checking the maximum

            if (this.current_page > this.links[this.links.length - 1].num) {
                this.current_page = this.links[this.links.length - 1].num;
            }

            for (const item of this.links) {
                item.link.removeClass(this.active_color);
            }


            this.links[this.current_page - 1].link.addClass(this.active_color);

            if (typeof (this.change_fn) == "function") {
                this.change_fn(this.links[this.current_page - 1].num);
            }

        };

        forward.addEventListener("click", () => {
            changeDir(1);
        });

        before.addEventListener("click", () => {
            changeDir(-1);
        });


    }

    public border() {
        super.class("w3-border");
        return this;
    }

    public set(num: number | null = null, active: boolean | null = null, change: Function | null = null, style: { [index: string]: string } | null = null) {

        active = active == null ? false : active;

        if (num != null) {
            if (typeof (num) != "number") throw new TypeError("add in pagination must be a number!");
        }

        const link = new a();

        link.attr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).html(`${num} `);

        if (style != null) {
            link.style(style);
        }

        this.between.add(link);

        if (typeof (num) == "number")
            this.links.push({
                num: num,
                link: link
            });

        link.addEventListener("click", () => {

            for (const item of this.links) {
                item.link.removeClass(this.active_color);
            }

            link.addClass(this.active_color);
            if (typeof (this.change_fn) == "function") {
                this.change_fn(num);
            }
            if (typeof (num) == "number")
                this.current_page = num;

        });

        if (active) {

            for (const item of this.links) {
                item.link.removeClass(this.active_color);
            }

            link.addClass(this.active_color);

            if (typeof (this.change_fn) == "function") {
                if (change == null || change) {
                    this.change_fn(num);
                }
            }
            if (typeof (num) == "number")
                this.current_page = num;
        }

        return link;
    }
}

class ProgressBar extends div {
    con: div;
    constructor(color: Color | null = null) {
        super();
        super.class(["w3-light-grey", "w3-round"]).style({
            height: "20px"
        });

        this.con = new div().class(["w3-container", "w3-round", `w3-${color == null ? Color.Blue : color}`]).style({
            width: "1%",
            height: "100%"
        });

        super.add(this.con);
    }

    public update(percent: number, value: number | string | null = null) {
        this.con.style({
            width: `${percent}% `
        });

        if (value != null) {
            this.con.html(`${value}% `);
        }
    }
}

class Center extends div {
    constructor() {
        super();
        super.class("w3-center");
    }
}

class Modal extends div {
    resolvefn: ((value: unknown) => void) | null = null;;
    content: div;

    constructor(title: null | string | Widget = null, maxwidth: string | null = null, bgcolor: Color | null = null, animate: Direction = Direction.Top) {
        super();
        super.class("w3-modal").style({ zIndex: "1000" });

        this.content = new div().class(["w3-modal-content", "w3-card-4"]).style({ borderRadius: "10px" });

        if (animate != null) {
            this.content.class(`w3-animate-${animate}`);
        }
        if (maxwidth != null) {
            this.content.style({
                width: maxwidth,
                maxWidth: "98%"
            })
        }



        if (title != null) {
            const header = new Card().add(new Label(title)).style({
                padding: "15px",
                position: "relative",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px"
            });

            const close = new Button("X");
            close.style({
                position: "absolute",
                top: "10px",
                right: "10px"
            });

            close.size(Size.Tiny);

            header.add(close);

            if (bgcolor != null) {
                header.class(`w3-${bgcolor}`);
            }

            this.content.add(new div().class(["w3-container"]));
            this.content.add(header);

            close.addEventListener("click", () => {
                this.close();
            });
        }
        super.add(this.content);


    }

    public set(obj: null | Widget | Widget[] = null) {
        if (obj instanceof Widget) {
            this.content.add(obj);
        } else if(obj instanceof Array) {
            for (const item of obj) {
                this.content.add(item);
            }
        
        } else {
            throw new TypeError("obj must instance of Widget");
        }
    }

    public async open() {
        super.show();
        //this.body.appendChild(super.control());
        MyApp.add(this);
        const promise = new Promise((resolve, reject) => {
            this.resolvefn = resolve;
        });

        return promise;
    }

    public close(value: string | null | boolean = null) {
        if (this.resolvefn) {
            this.resolvefn(value);
        }
        super.hide();
        this.delete();
        if (typeof (this.dispose) == "function") {
            this.dispose(); // dispose for the modal
        }
    }

}

class Code extends div {
    constructor(lang: string | null = null) {
        super();
        super.class("w3-code");

        if (lang != null) {
            super.class(`${lang} High`);
        }
    }

    public write(code: string | null = null) {
        super.text(code);
        return this;
    }
}

class Display extends div {
    constructor(pos: Direction = Direction.Middle) {
        super();
        super.class(`w3-display-${pos}`);
    }
}


class Row extends div {
    constructor(obj: Widget | Widget[] | null = null, direction: FlexDirection|null = null) {
        super();
        super.style({
            display: 'flex'
        });

        if (direction != null) {
            super.style({
                FlexDirection: direction
            });
        }

        /*
            flex-start: Align items to the start.
            flex-end: Align items to the end.
            center: Center items.
            space-between: Equal space between items.
            space-around: Equal space around items.
            space-evenly: Equal space between and around items.
        */

        const item_style = {
            // flexGrow: '1'
        };

        if (obj instanceof Widget) {
            //obj.style({ display: "inline-block" });
            //super.add(new div().class(["w3-cell", direction == null ? "w3-cell-top" : `w3-cell-${direction}`]).add(obj));

            super.add(new div().style(item_style).add(obj));

        } else if (obj instanceof Array) {
            for (const item of obj) {
                if (item instanceof Widget) {
                    //item.style({ display: "inline-block" });
                    //item.class("w3-cell");
                    //super.add(new div().class(["w3-cell", direction == null ? "w3-cell-top" : `w3-cell-${direction}`]).add(item));
                    super.add(new div().style(item_style).add(item));
                }
            }
        }

    }
}


class Column extends div {
    constructor(obj: Widget | null | Widget[] = null) {
        super();

        if (obj instanceof Widget) {
            //obj.style({ display: "inline-block" });
            super.add(new div().class("w3-row").add(obj));

        } else if (obj instanceof Array) {
            for (const item of obj) {
                if (item instanceof Widget) {
                    //item.style({ display: "inline-block" });
                    //item.class("w3-cell");
                    super.add(new div().class("w3-row").add(item));
                }
            }
        }

    }
}


class Photo2d extends img {
    constructor() {
        super();
        super.class("w3-image");
    }

    public path(src: string) {
        super.attr({
            "src": src
        });


        super.style({
            "-webkit-filter": "blur(8px)",
            "filter": "blur(8px)"
        })

        super.addEventListener("load", () => {
            super.style({
                "-webkit-filter": "",
                "filter": ""
            })
        });

        return this;
    }

    public default() {
        super.style({
            objectFit: "cover"
        });
        return this;
    }

    public base64() {
        return this;
    }

    public sepia() {
        super.class("w3-sepia");
        return this;
    }
    public sepiaMin() {
        super.class("w3-sepia-min");
        return this;
    }
    public sepiaMax() {
        super.class("w3-sepia-max");
        return this;
    }

    public hoverOpacity() {
        super.class("w3-hover-opacity");
        return this;
    }
    public hoverGrayScale() {
        super.class("w3-hover-grayscale");
        return this;
    }

    public hoverSepia() {
        super.class("w3-hover-sepia");
        return this;
    }

    public round() {
        super.class("w3-round");
        return this;
    }

    public circle() {
        super.class("w3-circle");
        return this;
    }

    public border() {
        super.class("w3-border");
        return this;
    }

    public padding() {
        super.class("w3-padding");
        return this;
    }
}

class Box extends div {
    constructor(width: number | string | null = null, height: number | string | null = null) {
        super();
        super.class("w3-cell");
        super.style({
            // display: "inline-block",
            width: "1px",
            height: "1px"
        });

        if (width != null) {
            super.style({
                width: typeof (width) == "number" ? `${width} px` : width
            });
        }

        if (height != null) {
            super.style({
                width: typeof (height) == "number" ? `${height} px` : height
            });
        }

    }
}

class Canvas extends canvas {
    ctx: CanvasRenderingContext2D | null;
    constructor(width: string | null = null, height: string | null = null) {
        super();

        if (this.control instanceof HTMLCanvasElement) {
            this.ctx = this.control.getContext("2d");
        }

        if (width != null) {
            super.attr({
                width: width
            });
        }

        if (height != null) {
            super.attr({
                height: height
            });
        }
    }
}

class TextFieldFilter extends div {
    input: TextField;
    list: List;

    constructor(text: string | null = null, type: InputType = InputType.Text, placeholder: string | null = null, error: boolean = false) {
        super();
        this.input = new TextField(text, type, placeholder, error);

        this.list = new List();
        this.list.border()
        this.list.hide();

        super.add([
            this.input, this.list
        ]);


        let time: number | null = null;
        this.input.tf.addEventListener("focusin", () => {
            if (time != null)
                clearTimeout(time);

            this.list.show();
        });


        this.input.tf.addEventListener("focusout", () => {
            time = setTimeout(() => {
                this.list.hide();
            }, 1000);
        });

        this.list.addEventListener("mouseover", () => {
            if (time != null)
                clearTimeout(time);
            this.list.show();
        });

        this.list.addEventListener("mouseout", () => {
            time = setTimeout(() => {
                this.list.hide();
            }, 1000);
        });

    }
    public init(items: { key: string, value: string }[] | null = null) {

        if (items != null)
            for (const item of items) {
                this.list.add(item.value);
            }

        return this;
    }
    public border() {
        this.input.tf.class("w3-border");
        return this;
    }

}


class Alert1 extends Modal {
    constructor(msg: string, color: Color = Color.Sand) {
        super(new Row([new Icon(Icons.Message), new Box(10), new Text("Alert")]), "480px", color);

        const ok = new Button(new Row([new Icon(Icons.Check), new Box(5), new Text("OK")]), Color.Blue).size(Size.Small).style({ borderRadius: "20px" });

        super.set(new Panel().style({
            padding: "0px 20px 20px 20px"
        }).add(new Column([
            new Html(`<p> ${msg} </p>`).style({ fontSize: "13pt" }),
            new Row([
                ok, new Box(10)
            ])
        ])));

        ok.addEventListener("click", async () => {
            super.close(true);
        });

    }
}

class Confirm1 extends Modal {
    constructor(msg: string, color: Color) {
        super(new Row([new Icon(Icons.QuestionCircle), new Box(10), new Text("Confirmation")]), "480px", color, Direction.Bottom);

        const ok = new Button(new Row([new Icon(Icons.Check), new Box(5), new Text("OK")]), Color.Blue).size(Size.Small).style({ borderRadius: "20px" });
        const cancel = new Button(new Row([new Icon(Icons.Close), new Box(5), new Text("CANCEL")]), Color.Red).size(Size.Small).style({ borderRadius: "20px" });

        super.set(new Panel().style({
            padding: "0px 20px 20px 20px"
        }).add(new Column([
            new Html(`<p>${msg}</p>`).style({ fontSize: "13pt" }),
            new Row([
                ok, new Box(5), cancel
            ])
        ])));

        ok.addEventListener("click", async () => {
            super.close(true);
        });

        cancel.addEventListener("click", () => {
            super.close(false);
        });
    }
}

const Alert = async (msg: string = "Alert", color: Color = Color.Sand) => {
    return new Alert1(msg, color).open();
}

const Confirm = async (msg: string = "Confirm", color: Color = Color.Red) => {
    return new Confirm1(msg, color).open();
};


class Loader extends div {
    constructor(w = null, h = null) {
        super();

        if (w != null) {
            super.style({
                width: `${w}px`
            });
        }

        if (h != null) {
            super.style({
                width: `${h}px`
            });
        }

        super.class("loader");
    }

    open() {
        super.show();
    }

    close() {
        super.delete();
    }
}

/// my custom Widget
class Switch extends label {
    tf: input;

    constructor(param: { check?: boolean, size?: number, round?: boolean }) {
        const { check = false, size = 30, round = false } = param;
        super();
        super.class("switch");

        this.tf = new input();
        this.tf.attr({ "type": "checkbox" });

        const slider = new span().class("slider");

        if (round) {
            slider.class("round");
        }
        if (this.tf.control instanceof HTMLInputElement)
            this.tf.control.checked = check;

        super.add([
            this.tf,
            slider
        ]);
    }

    public setText(check: boolean = true) {
        if (this.tf.control instanceof HTMLInputElement)
            this.tf.control.checked = check;

        return this;
    }

    public getText(): boolean {
        if (this.tf.control instanceof HTMLInputElement)
            return this.tf.control.checked;
        return false;
    }

    public disabled() {
        this.tf.attr("disabled", "");
        return this;
    }

    public enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }


}

class Divider extends hr {
    constructor() {
        super();
    }
    public dotted() {
        super.style({
            borderStyle: "dotted"
        });

        return this;
    }

    public dashed() {
        super.style({
            borderStyle: "dashed"
        });

        return this;
    }
}

class Padding extends div {
    constructor(obj, padding = 0) {
        super();
        super.add(obj);

        if (padding != 0) {
            super.style({
                padding: `${padding}px`
            });
        }
    }
}


class BackDrop extends div {
    constructor() {
        super();
        super.style({
            position: 'fixed',
            top: '0px',
            left: '0px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
            height: '100%',
            width: '100%'
        });
        this.hide();
        this.body.appendChild(this.control);

        this.addEventListener('click', (e) => {
            this.close();
        });
    }

    public open() {

        
        this.show();
    }

    public close() {
        this.hide();
    }
}


class Tile extends div{
    constructor(option: {
        title?: string,
        icon?: Icons,
        color?: Color
    }) {
        super();

        super.style({
            width: '100%',
            height: '40px',
            paddingLeft: '15px',
            paddingTop: '6px',
            fontSize: '13pt',
            color: 'inherit',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            cursor: 'pointer'
        });

        super.addEventListener('mouseover', () => {
            super.style({
                backgroundColor: 'rgba(0, 0, 0, 0.1)'
            });
        });

        super.addEventListener('mouseout', () => {
            super.style({
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
            });
        });

        super.add(new Row([
            option.icon != undefined ? new Icon(option.icon).style({ width: '30px' }) : new Text(''),
            option.title != undefined ? new Text(option.title) : new Text('')
        ]));
    

    }
}


class WindowApp extends div {
    private content: Widget;

    constructor(option: {
        appBar?: {
            title?: string|Widget,
            action?: Widget,
            height?: number,
            color?: Color,
            drawer?: {
                header?: {
                    icon?: Icons,
                    title?: Widget|string
                },
                item?: Tile[],
                color?: Color
            }
        }, 
        body?: Widget
    }) {
        super();
        this.content = new div().style({
            width: '100%',
            height: 'calc(100% - 56px)',
            position: 'fixed',
            top: '56px',
            left: '0',
            overflowY: 'auto'
        });

        /* Drawing the AppBar */

        if (option.appBar != undefined) {

            const drawer_bar = new button();
            drawer_bar.html(`<i class="fa fa-bars"></i>`);
            drawer_bar.style({
                width: '40px',
                height: '40px',
                // marginTop: '7px',
                marginLeft: '5px',
                cursor: 'pointer',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                border: 'none',
                borderRadius: '50%',
                color: 'inherit'
            });



            const bar = new div();
            
            bar.style({ 
                width: '100%',
                height: option.appBar.height != undefined ? `${option.appBar.height}px`  : '56px',
                zIndex: '100',
                top: '0px',
                position: 'fixed'
            });

            bar.class(`w3-${option.appBar.color != undefined ? option.appBar.color : Color.Blue}`);
            
            /* Drawing the title */
        
            const left = new Row([
                option.appBar.drawer != undefined ? drawer_bar : new Text(''),
                option.appBar.title != undefined && typeof(option.appBar.title) == 'string' ? new Text(option.appBar.title).style({
                    fontWeight: 'bold',
                    fontSize: '15pt',
                    marginTop: '5px',
                    marginLeft: '5px'
                }) : new Text('')
            ]);
            left.style({ marginTop: '8px' });

            bar.add(left);

            /* Drawing the Action */

            if (option.appBar.action != undefined) {
                /* Drawing the right action */
                const action = new div().style({
                    position: 'absolute',
                    right: '2px',
                    top: '0px'
                });

                action.add(option.appBar.action);
                bar.add(action);
            }

            /* Drawing a drawer*/

            if (option.appBar.drawer != undefined) {
                const backdrop = new BackDrop();

                const drawer = new div();   
                drawer.addEventListener('click', (e)  => {
                    e.stopPropagation();
                });
                drawer.style({
                    width: '240px',
                    height: '100%',
                    position: 'absolute',
                    top: '0px',
                    left: '0px'
                });

                /* Drawer Header */
                if (option.appBar.drawer.header != undefined) {
                    drawer.class(`w3-animate-${Direction.Left}`);
                    const header = new div();
                    header.style({
                        height: '56px',
                        width: '100%',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)'
                    });

                    const left2 = new Row([
                        // option.appBar.drawer != undefined ? drawer_bar : new Text(''),
                        option.appBar.title != undefined && typeof(option.appBar.drawer.header.title) == 'string' ? new Text(option.appBar.drawer.header.title).style({
                            fontWeight: 'bold',
                            fontSize: '15pt',
                            marginTop: '10px',
                            marginLeft: '10px'
                        }) : option.appBar.drawer.header.title instanceof Widget ? option.appBar.drawer.header.title : new Text('')
                    ]);
                    //left2.style({ marginTop: '8px' });
                    header.add(left2);

                    drawer.add(header);
                }
                /* end Drawer Header */ 

                if (option.appBar.drawer.color != undefined) {
                    drawer.class(`w3-${option.appBar.drawer.color}`);
                } else {
                    // default color
                    drawer.class(`w3-${Color.White}`);
                }

                backdrop.add(drawer);

                drawer_bar.addEventListener('click', () => {
                    console.log('Drawer clicked!');
                    backdrop.open();
                });

                /* Draw ITEM */

                if (option.appBar.drawer.item != undefined) {
                    // draw the item here
                    const header_item = new div();
                    header_item.style({
                        height: 'calc(100% - 57px)',
                        width: '100%',
                        overflowY: 'auto',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                    });


                    for (const item of option.appBar.drawer.item) {
                        header_item.add(item.style({marginBottom: '1px', borderRadius: '5px'}));

                        item.addEventListener('click', () => {
                            backdrop.close();
                        });
                    }

                    drawer.add(header_item);
                }
            }


            super.add(bar);
        }

        /* Body of the WindowApp */

        if (option.body != undefined) {
            this.updateBody(option.body);
        }

        super.add(this.content);
    }

    public updateBody(body: Widget) {
        this.content.clear();
        this.content.add(body);
    }
}

/* enum export */

export { Icons, Color, Size, Direction, GridSize, InputType, FlexDirection };

/* custom */
export {WindowApp, BackDrop};


export {
    Switch
};
// end my custom widget

export {
    Divider,
    TabBody,
    Center,
    Container,
    Panel,
    Content,
    Card,
    Button,
    TextField,
    TextBox,
    Text,
    Table,
    TableResponsive,
    List,
    Photo2d,
    Radio,
    CheckBox,
    ComboBox,
    Badge,
    Tag,
    Grid,
    Bar,
    DropDownHover,
    Accordion,
    Icon,
    SideBar,
    Label,
    LeftTab, // not working yet
    BasicTab,
    Pagination,
    ProgressBar,
    Modal,
    Code,
    Display,
    Html,
    Row,
    Column,
    Box,
    Canvas,
    TextFieldFilter,
    Loader,
    ButtonGroup,
    Padding,
    Tile
};

export { Alert, Confirm };