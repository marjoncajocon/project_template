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
        super.AddClass(["w3-container"]);

    }
}

class Content extends div {
    constructor() {
        super();
        super.AddClass(["w3-content", "w3-display-container"]);
    }
}

class Panel extends div {
    constructor(color: Color | null = null) {
        super();
        super.AddClass(["w3-panel"]);

        if (color != null) {
            super.AddClass(`w3-${color}`);
        }
    }
}

class Card extends div {
    constructor(color: Color | null = null) {
        super();
        super.AddClass(["w3-card"]);

        if (color != null) {
            super.AddClass(`w3-${color}`);
        }
    }
}

class ButtonGroup extends div {
    lists: Widget[];

    constructor(btn: Widget | null | Widget[]) {
        super();
        super.AddClass("w3-bar");

        this.lists = [];

        if (btn instanceof Widget) {
            btn.AddClass("w3-bar-item");
            super.Add(btn);
            this.lists.push(btn);
        } else if (btn instanceof Array) {
            for (const item of btn) {
                item.AddClass("w3-bar-item");
                super.Add(item);

                this.lists.push(item);
            }
        }
    }

    public Round(): Widget {
        if (this.lists.length > 0) {
            this.lists[0].AddStyle({
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px"
            }); /// first button;

            this.lists[this.lists.length - 1].AddStyle({
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
        super.AddClass(["w3-btn"]);
        if (text instanceof Widget) {
            super.Add(text);
        }
        else {
            super.Html(text);
        }

        if (color != null) {
            super.AddClass(`w3-${color}`);
        }

        this.loader = new div().AddClass("loader").AddStyle({
            position: "absolute",
            top: '5px',
            left: '5px'
        }).Hide();

        this.loader_txt = new Text().AddStyle({
            position: "absolute",
            top: '5px',
            left: '40px',
            color: "white",
            fontWeight: "bold"
        });

        super.Add([this.loader, this.loader_txt]);
    }

    public Round(): Widget {
        super.AddStyle({
            borderRadius: "20px"
        });
        return this;
    }

    public Size(size: Size): Widget {
        super.AddClass(`w3-${size}`);

        return this;
    }
    public Circle(): Widget {
        super.AddClass("w3-circle");
        return this;
    }
    public Block(): Widget {
        super.AddClass("w3-block");
        return this;
    }
    public Button(): Widget {
        super.AddClass("w3-button");
        return this;
    }

    public Ripple(): Widget {
        super.AddClass("w3-ripple");
        return this;
    }
    public Border(): Widget {
        super.AddClass("w3-border");
        return this;
    }

    public LoaderText(txt: string): void {
        this.loader_txt.Text(txt);
    }

    public ShowLoader(): void {
        this.loader.Show();
        super.AddAttr({ disabled: "" });
        super.AddStyle({ position: "relative" });
    }
    public HideLoader(): void {
        super.DeleteAttr("disabled");
        this.loader.Hide();
        super.AddStyle({ position: '' });
    }

}

class Text extends div {
    constructor(text: string | null = null, color: Color | null = null) {
        super();
        if (text != null) {
            super.Text(text);
        }

        if (color != null) {
            super.AddClass(`w3-text-${color}`);
        }


    }

    public TextColor(): Widget {
        super.AddStyle({
            color: "rgb(54, 54, 54)",
            fontSize: "10pt"
        });
        return this;
    }

    public SetTextColor(color: Color): Widget {
        super.AddClass(`w3-text-${color}`);
        return this;
    }

    public Left(): Widget {
        super.AddClass("w3-left-align");
        return this;
    }
    public Right(): Widget {
        super.AddClass("w3-right-align");
        return this;
    }
}

class Html extends div {
    constructor(text: string | null = null) {
        super();
        if (text != null) {
            super.Html(text);
        }
    }

    public Left(): Widget {
        super.AddClass("w3-left-align");
        return this;
    }
    public Right(): Widget {
        super.AddClass("w3-right-align");
        return this;
    }
}

class TableResponsive extends div {
    constructor(obj: Widget | Widget[], height: number = 0, padding: number = 0) {
        super();
        super.AddClass("w3-responsive");

        super.Add(obj);

        if (height != 0) {
            super.AddStyle({
                height: `${height}px`,
                overflowY: "auto",
                position: "relative"
            });
        }

        if (padding != 0) {
            super.AddStyle({ padding: `${padding}px` });
        }
    }
}



class Table extends table {
    rows: Widget[];
    constructor(header: string[] = [], size: Size | null = null, color: Color | null = null, header_height: number | null = null, sticky: boolean = false) {
        super();

        super.AddClass(["c-table", "w3-table-all"]);

        if (size != null) {
            super.AddClass([`w3-${size}`]);
        } else {
            super.AddClass([`w3-${Size.Small}`]);
        }

        const tr1 = new tr();;

        const header_len = header.length;
        for (let i = 0; i < header_len; i++) {
            const item = header[i];
            const td1 = new th().Html(item);
            if (color != null) {
                if (td1 instanceof Widget) {
                    td1.AddClass(`w3-${color}`);
                }
            }

            if (header_height != null) {
                if (td1 instanceof Widget)
                    td1.AddStyle({ height: `${header_height}px` });
            } else {
                if (td1 instanceof Widget)
                    td1.AddStyle({ height: `0px`, padding: "0px" });

            }

            if (td1 instanceof Widget)
                tr1.Add(td1);

            if (sticky) {
                if (td1 instanceof Widget)
                    td1.AddStyle({
                        position: "sticky",
                        top: "0px",
                        zIndex: "100",
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid #ddd"
                    });
            }
        }



        super.Add(tr1);

        this.rows = [];
    }

    public AddItem(items: Widget | Widget[] | string[] | any[] = [], arr: { [index: number]: string }[] = [], padding = 0): Widget {

        const tr1 = new tr();
        if (items instanceof Array) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];

                const td1 = new td();

                if (padding != 0) {
                    td1.AddStyle({ padding: `${padding}px` });
                }

                if (item instanceof Widget) {
                    td1.Add(item);
                } else {
                    td1.Html(item);
                }
                tr1.Add(td1);

                if (arr) {
                    if (typeof (arr[i]) != "undefined") {
                        if (typeof (arr[i]["style"]) != "undefined") {
                            td1.AddStyle(arr[i]["style"]);
                        }
                    }
                }
            }
        }

        super.Add(tr1);

        this.rows.push(tr1);

        return tr1;

    }

    public ClearItem(): Widget {
        for (const item of this.rows) {
            item.Delete();
        }

        this.rows = [];
        return this;
    }

    public Striped(): Widget {
        super.AddClass("c-table-striped");
        return this;
    }
    public Border(): Widget {
        super.AddClass("c-table-border");
        return this;
    }
    public All(): Widget {
        super.AddClass("w3-table-all");
        return this;
    }
    public Center(): Widget {
        super.AddClass("w3-centered");
        return this;
    }
    public Hover(): Widget {
        super.AddClass("c-table-hover");
        return this;
    }
}


class List extends ul {
    constructor(size: Size | null = null) {
        super();
        super.AddClass("w3-ul");
        if (size != null) {
            super.AddClass(`w3-${size}`);
        }
    }

    public AddItem(widget: Widget | Widget[] | string | null = null, color: Color | null = null, hover_color: Color | null = null): Widget {
        const li1 = new li();

        if (color != null) {
            li1.AddClass(`w3-${color}`);
        }

        if (widget instanceof Widget) {
            li1.Add(widget);
        } else if (typeof (widget) == "string") {
            li1.Html(widget);
        }

        if (hover_color != null) {
            li1.AddClass(`w3-hover-${hover_color}`);
        }

        super.Add(li1);

        return li1;
    }

    public Border(): Widget {
        super.AddClass("w3-border");
        return this;
    }
    public Center(): Widget {
        super.AddClass("w3-center");
        return this;
    }
    public Hover(): Widget {
        super.AddClass("w3-hoverable");
        return this;
    }
}



class TextField extends div {

    label: label;
    tf: input;
    error_label: label;
    search: Widget;


    public constructor(text: string | null | Widget = null, type: InputType = InputType.Text, placeholder: null | string = null, error: boolean = false) {
        super();

        super.AddStyle({
            position: "relative"
        });

        this.label = new label();
        this.tf = new input().AddClass(["w3-input"]);
        this.error_label = new label();


        if (text != null) {
            if (text instanceof Widget) {
                this.label.Add(text);
            } else {

                this.label.Html(text);

                this.label.AddStyle({
                    color: "rgb(54, 54, 54)",
                    fontSize: "10pt"
                });

            }
            super.Add(this.label);
        }

        this.tf.AddAttr({"type": type});

        if (placeholder != null) {
            this.tf.AddAttr({"placeholder": placeholder});
        }

        super.Add([
            this.tf
        ]);

        if (error) {
            super.Add(this.error_label);
        }

        this.search = new Card().Hide();

        super.Add(this.search);

    }

    public Filter(param: { data: { key: string, value: string }[], network: boolean, url: string, token_key: string, token_value: string }): void {

        const {
            data = [],
            network = false,
            url = "/",
            token_key = "X-Auth",
            token_value = ""
        } = param;


        this.search.AddStyle({
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
            this.tf.AddEventListener("keyup", () => {
                this.search.Clear();

                let has_found = false;
                for (const item of data) {

                    if (this.tf.GetValue() != "" && item.value.toLowerCase().indexOf(this.tf.GetValue().toString().toLowerCase()) > -1) {
                        has_found = true;

                        const btn = new Button().AddStyle({
                            width: "100%",
                            textAlign: "left",
                            paddingLeft: "5px"
                        });

                        btn.Text(item.value);

                        if (btn instanceof Button) {
                            btn.Size(Size.Small);
                        }

                        this.search.Add(
                            btn
                        );

                        btn.AddEventListener("click", () => {
                            this.tf.AddValue(item.key);
                            this.search.Hide();
                        });
                    }
                }

                if (has_found) {
                    this.search.Show();
                } else {
                    this.search.Hide();
                }
            });
        } else {

            let time_out: null | number | undefined = null;
            this.tf.AddEventListener("keyup", () => {

                if (this.tf.GetValue().toString().trim() == "") {
                    this.search.Clear();
                    this.search.Hide();
                    return;
                }

                if (typeof (time_out) === "number")
                    clearTimeout(time_out);


                time_out = setTimeout(async () => {

                    try {
                        const header = {};
                        header["Content-Type"] = "application/json";
                        header[token_key] = token_value;

                        this.search.Show();
                        const http = new Http({
                            url: `${url}`,
                            method: "POST",
                            header: header,
                            body: {
                                search: this.tf.GetValue().toString()
                            }
                        });
                        this.search.Clear();


                        const res = JSON.parse(await http.Load<string>());
                        console.log(res);

                        // plotting the result
                        for (const item of res) {
                            const btn = new Button();

                            btn.AddStyle({
                                width: "100%",
                                textAlign: "left",
                                paddingLeft: "5px"
                            });

                            btn.Text(item.value);

                            btn.Size(Size.Small);

                            this.search.Add(
                                btn
                            );

                            btn.AddEventListener("click", () => {
                                this.tf.AddValue(item.value);
                                this.search.Hide();
                            });
                        }
                        // show the search result
                        if (res.length > 0) {
                            this.search.Show();
                        } else {
                            this.search.Hide();
                        }


                    } catch (er) {
                        console.log(er);
                        this.search.Hide();
                    }

                }, 200);
            });

        }


    }

    public Error(err: string | null = null): void {

        if (err != null) {
            this.tf.AddClass(`w3-border-${Color.Red}`);
            this.error_label.AddClass(`w3-text-${Color.Red}`);
            this.error_label.Html(err);
        } else {
            this.tf.DeleteClass(`w3-border-${Color.Red}`);
            this.error_label.DeleteClass(`w3-text-${Color.Red}`);
            this.error_label.Html("");
        }
    }

    public SetIconPrefix(param: { icon: Icons | null, size?: number, color?: Color | null }): void {

        const { icon = null, size = 20, color = null } = param;
        if (icon != null) {
            const ico = new Icon(icon, color).AddStyle({
                position: "absolute",
                bottom: "10px",
                left: "5px",
                fontSize: `${size}px`,
                width: `${size}px`,
                height: `${size}px`
            });

            this.tf.AddStyle({
                paddingLeft: `${size + (size / 2)}px`
            });

            super.Add(ico);
        }

    }

    public SetIconSuffix(param: { icon: Icons | null, size?: number, color?: Color | null }) {
        const { icon = null, size = 20, color = null } = param;
        if (icon != null) {
            const ico = new Icon(icon, color).AddStyle({
                position: "absolute",
                bottom: "10px",
                right: "5px",
                fontSize: `${size}px`,
                width: `${size}px`,
                height: `${size}px`
            });

            this.tf.AddStyle({
                paddingRight: `${size + (size / 2)}px`
            });

            super.Add(ico);
        }
        return this;
    }

    public Size(size: Size) {
        this.tf.AddClass(`w3-${size}`);
        return this;
    }

    public LbelColor(color: Color | null = null) {
        this.label.AddClass(`w3-text-${color}`);
        return this;
    }
    public Round() {
        this.tf.AddClass("w3-round");
        return this;
    }

    public Border() {
        this.tf.AddClass("w3-border");
        return this;
    }

    public GetValue() {
        return this.tf.GetValue();
    }

    public AddValue(value) {
        this.tf.AddValue(value);
        return this;
    }

    public Disabled() {
        this.tf.AddAttr({"disabled": ""});
        return this;
    }

    public Enabled() {
        this.tf.DeleteAttr("disabled");
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
        this.tf = new textarea().AddClass(["w3-input"]);
        this.error_label = new label();

        if (text != null) {
            if (text instanceof Widget) {
                this.label.Add(text);
            } else {
                this.label.Html(text);
            }
            super.Add(this.label);
        }


        if (placeholder != null) {
            this.tf.AddAttr({"placeholder": placeholder});
        }

        super.Add([
            this.tf
        ]);

        if (error) {
            super.Add(this.error_label);
        }

    }

    public Error(err: null | string = null) {

        if (err != null) {
            this.tf.AddClass(`w3-border-${Color.Red}`);
            this.error_label.AddClass(`w3-text-${Color.Red}`);
            this.error_label.Html(err);
        } else {
            this.tf.DeleteClass(`w3-border-${Color.Red}`);
            this.error_label.DeleteClass(`w3-text-${Color.Red}`);
            this.error_label.Html("");
        }
        return this;
    }


    public Size(size: Size) {
        this.tf.AddClass(`w3-${size}`);
        return this;
    }

    public LabelColor(color: Color | null = null) {
        this.label.AddClass(`w3-text-${color}`);
        return this;
    }
    public Round() {
        this.tf.AddClass("w3-round");
        return this;
    }

    public Border() {
        this.tf.AddClass("w3-border");
        return this;
    }

    public GetValue() {
        return this.tf.GetValue();
    }

    public AddValue(value: string) {
        this.tf.AddValue(value);
        return this;
    }

    public Disabled() {
        this.tf.AddAttr({"disabled": ""});
        return this;
    }

    public Enabled() {
        this.tf.DeleteAttr("disabled");
        return this;
    }
}

class Radio extends span {
    tf: input;
    label: label;

    constructor(text: string | null = null, name: string) {
        super();

        this.tf = new input().AddAttr({
            type: "radio",
            class: "w3-radio",
            name: name
        });

        this.label = new label();

        super.Add(this.tf);

        if (text != null) {
            this.label.Html(text);
            super.Add(this.label);
        }

    }
    public Enabled() {
        this.tf.DeleteAttr("disabled");
        return this;
    }

    public AddValue(bool: boolean) {
        if (this.tf.control instanceof HTMLInputElement) {
            this.tf.control.checked = bool;
        }
        return this;
    }

    public GetValue(): boolean {

        if (this.tf.control instanceof HTMLInputElement) {
            return this.tf.control.checked;
        }

        return false;
    }

    public Disabled() {
        this.tf.AddAttr({"disabled": ""});
        return this;
    }
}

class CheckBox extends span {
    label: input;
    tf: input;

    constructor(text: string | null = null) {
        super();

        this.tf = new input().AddAttr({
            type: "checkbox",
            class: "w3-radio"
        });

        this.label = new label();

        super.Add(this.tf);

        if (text != null) {
            this.label.Html(text);
            super.Add(this.label);
        }

    }



    public AddValue(bool: boolean) {
        if (this.tf.control instanceof HTMLInputElement) {
            this.tf.control.checked = bool;
        }

        return this;
    }

    public GetValue(): boolean {
        if (this.tf.control instanceof HTMLInputElement) {
            return this.tf.control.checked;
        }
        return false;
    }

    public Enabled() {
        this.tf.DeleteAttr("disabled");
        return this;
    }

    public Disabled() {
        this.tf.AddAttr({"disabled": ""});
        return this;
    }
}



class ComboBox extends select {
    constructor() {
        super();
        super.AddClass("w3-select");


    }

    public AddItem(key: string, value: string): option {
        const opt = new option();
        opt.AddAttr({
            value: key
        });
        opt.Html(value);
        super.Add(opt);
        return opt;
    }

    public Enabled() {
        this.DeleteAttr("disabled");
        return this;
    }

    public Disabled() {
        this.AddAttr({"disabled": ""});
        return this;
    }

    public Size(size: Size) {
        this.AddClass(`w3-${size}`);
        return this;
    }

    public Border() {
        super.AddClass("w3-border");
        return this;
    }

    public AddValue(value: string) {
        super.AddValue(value);
        return this;
    }

    public GetValue() {
        return super.GetValue();
    }
}


class Badge extends span {
    constructor(text: string | null = null, color: Color | null = null, size: Size | null = null) {
        super();
        super.AddClass("w3-badge");

        if (size != null) {
            super.AddClass(`w3-${size}`);
        }

        if (color != null) {
            super.AddClass(`w3-${color}`);
        }

        if (text != null) {
            super.Html(text);
        }
    }

    public TextColor(color: Color) {
        super.AddClass(`w3-text-${color}`);
        return this;
    }
}

class Tag extends span {
    constructor(text: string | null = null, color: Color | null = null, size: Size | null = null) {
        super();
        super.AddClass("w3-tags");

        if (size != null) {
            super.AddClass(`w3-${size}`);
        }

        if (color != null) {
            super.AddClass(`w3-${color}`);
        }

        if (text != null) {
            super.Html(text);
        }
    }

    public TextColor(color: Color) {
        super.AddClass(`w3-text-${color}`);
        return this;
    }
    public Border() {
        super.AddClass("w3-border");
        return this;
    }
}

class Grid extends div {
    constructor(is_padding: boolean = false) {
        super();
        super.AddClass("w3-row");

        if (is_padding) {
            super.AddClass(["w3-row-padding", "w3-stretch"]);
        }
    }

    public AddItem(obj: Widget | string, sizes: GridSize[] = []) {
        const cell = new div().AddClass("w3-col");

        for (const item of sizes) {
            if (item == GridSize.Rest) {
                cell.AddClass(`w3-${GridSize.Rest}`);
            } else {
                cell.AddClass(item);
            }
        }

        if (obj instanceof Widget) {
            cell.Add(obj);
        } else {
            cell.Html(obj);
        }

        super.Add(cell);
        return cell;
    }

    public Padding() {
        super.AddClass("w3-row-padding");
        return this;
    }

    public Section() {
        super.AddClass("w3-section");
        return this;
    }
}

class Bar extends div {
    constructor(color: Color | null = null, size: Size | null = null) {
        super();
        super.AddClass("w3-bar");
        super.AddStyle({
            "overflow-x": "auto",
            "white-space": "nowrap"
        })


        if (color != null) {
            super.AddClass(`w3-${color}`);
        }

        if (size != null) {
            super.AddClass(`w3-${size}`);
        }


    }

    public Block() {
        super.AddClass("w3-bar-block");
        return this;
    }

    public AddItem(text: string | null | Widget = null, isRight: boolean = false, hovercolor: Color | null = null, evt: EventListenerOrEventListenerObject | null = null, hoverableBGColor: Color | null = null, hoverText: Color | null = null) {
        const item = new div().AddClass("w3-bar-item");
        if (text instanceof Widget) {
            item.Add(text);
        }
        else {
            item.Html(text);
        }

        if (hovercolor != null) {
            item.AddClass(`w3-hover-${hovercolor}`);
        }

        if (evt != null) {
            item.AddEventListener("click", evt);
        }



        if (hoverableBGColor != null) {
            item.AddClass(`w3-hover-${hoverableBGColor}`);
        }

        if (hoverText != null) {
            item.AddClass(`w3-hover-${hoverText}`);
        }

        if (isRight) {
            item.AddClass("w3-right");
        }

        super.Add(item);
        return item;
    }
}

class DropDownHover extends div {
    drop_content: div;

    constructor(title: string | null = null) {
        super();
        super.AddClass("w3-dropdown-hover");
        const btn = new Button(title);

        super.Add(btn);
        this.drop_content = new div().AddClass(["w3-dropdown-content", "w3-bar-block", "w3-card-4"]);

        super.Add(this.drop_content);
    }

    public AddItem(title: string | Widget | null = null, fn: null | EventListenerOrEventListenerObject = null) {
        const a1 = new a().AddClass(["w3-bar-item", "w3-button"]);

        if (title instanceof Widget) {
            a1.Add(title);

            if (typeof (fn) == "function") {
                a1.AddEventListener("click", fn);
            }
        } else {
            a1.Html(title);
            if (typeof (fn) == "function") {
                a1.AddEventListener("click", fn);
            }
        }

        this.drop_content.Add(a1);
        return a1;
    }
}

class Accordion extends span {
    constructor(title: string | null = null, content: Widget | null = null) {
        super();
        const btn = new Button(title);
        btn.Button()
        btn.Block()
        btn.AddClass("w3-left-align");

        const div = new Container().AddClass("w3-hide");

        if (content instanceof Widget) {
            div.Add(content);
        } else {
            div.Html(content);
        }

        super.Add([btn, div]);

        btn.AddEventListener("click", () => {
            if (div.HasClass("w3-show")) {
                div.DeleteClass("w3-show");
            } else {
                div.AddClass("w3-show");
            }
        });
    }
}

class Icon extends i {
    constructor(ico: Icons | null = null, color: Color | null = null) {
        super();

        if (ico != null) {
            super.AddClass(["fa", `fa-${ico}`]);
        }

        if (color != null) {
            super.AddClass(`w3-text-${color}`);
        }
    }

    setColor(color) {
        super.AddClass(`w3-text-${color}`);
        return this;
    }
}
class Label extends label {
    constructor(title: string | Widget | Widget[] | null = null) {
        super();

        if (title instanceof Widget) {
            super.Add(title);
        }
        else if (title instanceof Array) {
            for (const item of title) {
                if (item instanceof Widget) {
                    super.Add(item);
                } else {
                    super.Add(new Label(item));
                }
            }
        }
        else {
            super.Text(title);
        }
    }
}

class SideBar extends div {
    constructor(title: string | Widget | null = null) {
        super();
        super.AddClass(["w3-sidebar", "w3-light-grey", "w3-bar-block"]);
        if (title instanceof Widget) {
            super.Add(title);
        } else {
            const hh = new h3();

            hh.Html(title);
            super.Add(hh);
        }
    }

    public AddItem(title: Widget | string | null = null, fn: null | EventListenerOrEventListenerObject = null) {
        if (title instanceof Widget) {
            super.Add(title);
            return title;
        } else {
            const a1 = new a().AddAttr({
                href: "#",
                class: "w3-bar-item w3-button"
            });
            a1.Html(title);

            if (typeof (fn) == "function") {
                a1.AddEventListener("click", fn);
            }
            super.Add(a1);
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

        this.side_bar = new div().AddClass(["w3-card"]);


        if (bgColor != null) {
            this.side_bar.AddClass(`w3-${bgColor}`);
        }


        this.content = new div().AddStyle({ width: "100%" }).AddClass("w3-card");

        this.grid.AddItem(this.side_bar, [GridSize.Small12, GridSize.Medium3, GridSize.Large12]);

        const main_row = new Row().Add(this.content).AddStyle({ paddingLeft: "5px" });
        this.grid.AddItem(main_row, [GridSize.Small12, GridSize.Medium9, GridSize.Large10]);

        if (window.innerWidth <= 600) {
            main_row.AddStyle({
                paddingTop: "10px",
                paddingLeft: ""
            });
        }

        if (roundContent) {
            this.content.AddStyle({
                borderRadius: "10px"
            });
        }


        super.Add([
            this.grid
        ]);

    }

    public CheckRound() {
        if (this.round) {


            /// clearRadius:
            for (const btn of this.lists) {
                btn.AddStyle({
                    borderTopRightRadius: "",
                    borderTopLeftRadius: "",
                    borderBottomRightRadius: "",
                    borderBottomLeftRadius: ""
                });
            }

            /// 


            this.side_bar.AddStyle({
                borderRadius: "10px"
            });

            this.lists[0].AddStyle({
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px"
            });

            this.lists[this.lists.length - 1].AddStyle({
                borderBottomRightRadius: "10px",
                borderBottomLeftRadius: "10px"
            })

        }
    }

    public AddActive(cur_btn) {
        for (const btn of this.lists) {
            btn.DeleteClass("w3-rtab-active");
        }

        cur_btn.addClass("w3-rtab-active");
    }

    public AddItem(param: { title: string | null | Widget, fn: Function | null, active?: boolean, color?: Color | null }) {
        const { title = null, fn = null, active = false, color = null } = param;
        const btn = new button().AddStyle({
            width: "100%",
            textAlign: "left",
            paddingLeft: "10px",
            fontSize: "8pt"
        }).AddClass(["w3-bar-item", "w3-button", "tablink"]);

        if (title instanceof Widget) {
            btn.Add(title);
        } else {
            btn.Html(title);
        }

        this.side_bar.Add(btn);

        if (typeof (fn) == "function") {
            btn.AddEventListener("click", () => {
                this.AddActive(btn);
                this.content.Clear();
                fn(this.content);
            });
        }

        if (active) {
            this.AddActive(btn);
            if (typeof (fn) == "function")
                fn(this.content);
        }

        this.lists.push(btn);

        this.CheckRound();

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

        this.menu = new div().AddStyle({
            width: "100%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            border: "1px solid #e3e3e3",
            borderBottom: "none"
        });

        this.borderRadius = borderRadius;

        if (borderRadius > 0) {
            this.menu.AddStyle({
                borderRadius: `${borderRadius}px`
            })
        }

        if (bgColor != null) {
            this.menu.AddClass(`w3-${bgColor}`);
        }

        if (size != null) {
            this.menu.AddClass(`w3-${size}`);
        }

        // <div class="w3-bar w3-black">
        //     <button class="w3-bar-item w3-button" onclick="openCity('London')">London</button>
        //     <button class="w3-bar-item w3-button" onclick="openCity('Paris')">Paris</button>
        //     <button class="w3-bar-item w3-button" onclick="openCity('Tokyo')">Tokyo</button>
        // </div>
        this.content = new div();

        super.Add([
            this.menu,
            this.content
        ]);

        this.list = [];
    }
    public ClearActive() {
        for (const item of this.list) {
            item.DeleteClass("w3-tab-active");
            //item.removeAttr("disabled");
        }
    }
    public AddItem(param: { title: string | Widget | null, fn: Function | null, active?: boolean, color?: Color | null }) {
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

            const btn = new button().AddClass(["w3-bar-item", "w3-button", "tablink"]);
            btn.Html(title);
            btn.AddStyle({
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                border: "1px solid rgba(0, 0, 0, 0)"
            });


            this.menu.Add(btn);

            this.list.push(btn);

            if (active) {
                btn.AddClass("w3-tab-active");
                //btn.attr({"disabled": ""});
                this.content.Clear();
                if (typeof (fn) == "function")
                    fn(this.content);
            }


            if (typeof (fn) == "function") {
                btn.AddEventListener("click", () => {

                    this.ClearActive();
                    btn.AddClass("w3-tab-active");
                    //btn.attr({"disabled": ""});
                    this.content.Clear();
                    fn(this.content);

                });
            }
        }
    }
}

class TabBody extends div {
    constructor() {
        super();
        super.AddStyle({
            border: "2px solid #e3e3e3",
            borderTop: "none",
            position: "relative"
        });
    }
    public round() {
        super.AddStyle({
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
        super.AddClass(["w3-bar"]);

        if (size != null) {
            super.AddClass(`w3-${size}`);
        }

        const before = new a();
        before.AddAttr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).Html(`&laquo;`);

        const forward = new a();
        forward.AddAttr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).Html(`&raquo;`);

        super.Add(before);

        this.between = new span();
        super.Add(this.between);

        super.Add(forward);

        this.change_fn = change_fn;

        this.links = [];

        this.current_page = 1;

        if (active_color != null) {
            this.active_color = `w3-${active_color}`;
        } else {
            // default color is green
            this.active_color = `w3-${Color.Green}`;
        }

        const changeDir = (step: number) => {
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
                item.link.DeleteClass(this.active_color);
            }


            this.links[this.current_page - 1].link.AddClass(this.active_color);

            if (typeof (this.change_fn) == "function") {
                this.change_fn(this.links[this.current_page - 1].num);
            }

        };

        forward.AddEventListener("click", () => {
            changeDir(1);
        });

        before.AddEventListener("click", () => {
            changeDir(-1);
        });


    }

    public Border() {
        super.AddClass("w3-border");
        return this;
    }

    public AddItem(num: number | null = null, active: boolean | null = null, change: Function | null = null, style: { [index: string]: string } | null = null) {

        active = active == null ? false : active;

        if (num != null) {
            if (typeof (num) != "number") throw new TypeError("add in pagination must be a number!");
        }

        const link = new a();

        link.AddAttr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).Html(`${num} `);

        if (style != null) {
            link.AddStyle(style);
        }

        this.between.Add(link);

        if (typeof (num) == "number")
            this.links.push({
                num: num,
                link: link
            });

        link.AddEventListener("click", () => {

            for (const item of this.links) {
                item.link.DeleteClass(this.active_color);
            }

            link.AddClass(this.active_color);
            if (typeof (this.change_fn) == "function") {
                this.change_fn(num);
            }
            if (typeof (num) == "number")
                this.current_page = num;

        });

        if (active) {

            for (const item of this.links) {
                item.link.DeleteClass(this.active_color);
            }

            link.AddClass(this.active_color);

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
        super.AddClass(["w3-light-grey", "w3-round"]).AddStyle({
            height: "20px"
        });

        this.con = new div().AddClass(["w3-container", "w3-round", `w3-${color == null ? Color.Blue : color}`]).AddStyle({
            width: "1%",
            height: "100%"
        });

        super.Add(this.con);
    }

    public Update(percent: number, value: number | string | null = null) {
        this.con.AddStyle({
            width: `${percent}% `
        });

        if (value != null) {
            this.con.Html(`${value}% `);
        }
    }
}

class Center extends div {
    constructor() {
        super();
        super.AddClass("w3-center");
    }
}

class Modal extends div {
    resolvefn: ((value: unknown) => void) | null = null;;
    content: div;

    constructor(title: null | string | Widget = null, maxwidth: string | null = null, bgcolor: Color | null = null, animate: Direction = Direction.Top) {
        super();
        super.AddClass("w3-modal").AddStyle({ zIndex: "1000" });

        this.content = new div().AddClass(["w3-modal-content", "w3-card-4"]).AddStyle({ borderRadius: "10px" });

        if (animate != null) {
            this.content.AddClass(`w3-animate-${animate}`);
        }
        if (maxwidth != null) {
            this.content.AddStyle({
                width: maxwidth,
                maxWidth: "98%"
            })
        }



        if (title != null) {
            const header = new Card().Add(new Label(title)).AddStyle({
                padding: "15px",
                position: "relative",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px"
            });

            const close = new Button("X");
            close.AddStyle({
                position: "absolute",
                top: "10px",
                right: "10px"
            });

            close.Size(Size.Tiny);

            header.Add(close);

            if (bgcolor != null) {
                header.AddClass(`w3-${bgcolor}`);
            }

            this.content.Add(new div().AddClass(["w3-container"]));
            this.content.Add(header);

            close.AddEventListener("click", () => {
                this.Close();
            });
        }
        super.Add(this.content);


    }

    public AddItem(obj: null | Widget | Widget[] = null) {
        if (obj instanceof Widget) {
            this.content.Add(obj);
        } else if(obj instanceof Array) {
            for (const item of obj) {
                this.content.Add(item);
            }
        
        } else {
            throw new TypeError("obj must instance of Widget");
        }
    }

    public async Open() {
        super.Show();
        //this.body.appendChild(super.control());
        MyApp.Add(this);
        const promise = new Promise((resolve, reject) => {
            this.resolvefn = resolve;
        });

        return promise;
    }

    public Close(value: string | null | boolean = null) {
        if (this.resolvefn) {
            this.resolvefn(value);
        }
        super.Hide();
        this.Delete();
    }

}

class Code extends div {
    constructor(lang: string | null = null) {
        super();
        super.AddClass("w3-code");

        if (lang != null) {
            super.AddClass(`${lang} High`);
        }
    }

    public AddValue(code: string) {
        super.Text(code);
        return this;
    }
}

class Display extends div {
    constructor(pos: Direction = Direction.Middle) {
        super();
        super.AddClass(`w3-display-${pos}`);
    }
}


class Row extends div {
    constructor(obj: Widget | Widget[] | null = null, direction: FlexDirection|null = null) {
        super();
        super.AddStyle({
            display: 'flex'
        });

        if (direction != null) {
            super.AddStyle({
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

            super.Add(new div().AddStyle(item_style).Add(obj));

        } else if (obj instanceof Array) {
            for (const item of obj) {
                if (item instanceof Widget) {
                    //item.style({ display: "inline-block" });
                    //item.class("w3-cell");
                    //super.add(new div().class(["w3-cell", direction == null ? "w3-cell-top" : `w3-cell-${direction}`]).add(item));
                    super.Add(new div().AddStyle(item_style).Add(item));
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
            super.Add(new div().AddClass("w3-row").Add(obj));

        } else if (obj instanceof Array) {
            for (const item of obj) {
                if (item instanceof Widget) {
                    //item.style({ display: "inline-block" });
                    //item.class("w3-cell");
                    super.Add(new div().AddClass("w3-row").Add(item));
                }
            }
        }

    }
}


class Photo2d extends img {
    constructor() {
        super();
        super.AddClass("w3-image");
    }

    public Path(src: string) {
        super.AddAttr({
            "src": src
        });


        super.AddStyle({
            "-webkit-filter": "blur(8px)",
            "filter": "blur(8px)"
        })

        super.AddEventListener("load", () => {
            super.AddStyle({
                "-webkit-filter": "",
                "filter": ""
            })
        });

        return this;
    }

    public Default() {
        super.AddStyle({
            objectFit: "cover"
        });
        return this;
    }

    public Base64() {
        return this;
    }

    public Sepia() {
        super.AddClass("w3-sepia");
        return this;
    }
    public SepiaMin() {
        super.AddClass("w3-sepia-min");
        return this;
    }
    public SepiaMax() {
        super.AddClass("w3-sepia-max");
        return this;
    }

    public HoverOpacity() {
        super.AddClass("w3-hover-opacity");
        return this;
    }
    public HoverGrayScale() {
        super.AddClass("w3-hover-grayscale");
        return this;
    }

    public HoverSepia() {
        super.AddClass("w3-hover-sepia");
        return this;
    }

    public Round() {
        super.AddClass("w3-round");
        return this;
    }

    public Circle() {
        super.AddClass("w3-circle");
        return this;
    }

    public Border() {
        super.AddClass("w3-border");
        return this;
    }

    public Padding() {
        super.AddClass("w3-padding");
        return this;
    }
}

class Box extends div {
    constructor(width: number | string | null = null, height: number | string | null = null) {
        super();
        super.AddClass("w3-cell");
        super.AddStyle({
            // display: "inline-block",
            width: "1px",
            height: "1px"
        });

        if (width != null) {
            super.AddStyle({
                width: typeof (width) == "number" ? `${width} px` : width
            });
        }

        if (height != null) {
            super.AddStyle({
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
            super.AddAttr({
                width: width
            });
        }

        if (height != null) {
            super.AddAttr({
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
        this.list.Border()
        this.list.Hide();

        super.Add([
            this.input, this.list
        ]);


        let time: number | null = null;
        this.input.tf.AddEventListener("focusin", () => {
            if (time != null)
                clearTimeout(time);

            this.list.Show();
        });


        this.input.tf.AddEventListener("focusout", () => {
            time = setTimeout(() => {
                this.list.Hide();
            }, 1000);
        });

        this.list.AddEventListener("mouseover", () => {
            if (time != null)
                clearTimeout(time);
            this.list.Show();
        });

        this.list.AddEventListener("mouseout", () => {
            time = setTimeout(() => {
                this.list.Hide();
            }, 1000);
        });

    }
    public Init(items: { key: string, value: string }[] | null = null) {

        if (items != null)
            for (const item of items) {
                this.list.AddItem(item.value);
            }

        return this;
    }
    public Border() {
        this.input.tf.AddClass("w3-border");
        return this;
    }

}


class Alert1 extends Modal {
    constructor(msg: string, color: Color = Color.Sand) {
        super(new Row([new Icon(Icons.Message), new Box(10), new Text("Alert")]), "480px", color);

        const ok = new Button(new Row([new Icon(Icons.Check), new Box(5), new Text("OK")]), Color.Blue).Size(Size.Small).AddStyle({ borderRadius: "20px" });

        super.AddItem(new Panel().AddStyle({
            padding: "0px 20px 20px 20px"
        }).Add(new Column([
            new Html(`<p> ${msg} </p>`).AddStyle({ fontSize: "13pt" }),
            new Row([
                ok, new Box(10)
            ])
        ])));

        ok.AddEventListener("click", async () => {
            super.Close(true);
        });

    }
}

class Confirm1 extends Modal {
    constructor(msg: string, color: Color) {
        super(new Row([new Icon(Icons.QuestionCircle), new Box(10), new Text("Confirmation")]), "480px", color, Direction.Bottom);

        const ok = new Button(new Row([new Icon(Icons.Check), new Box(5), new Text("OK")]), Color.Blue).Size(Size.Small).AddStyle({ borderRadius: "20px" });
        const cancel = new Button(new Row([new Icon(Icons.Close), new Box(5), new Text("CANCEL")]), Color.Red).Size(Size.Small).AddStyle({ borderRadius: "20px" });

        super.AddItem(new Panel().AddStyle({
            padding: "0px 20px 20px 20px"
        }).Add(new Column([
            new Html(`<p>${msg}</p>`).AddStyle({ fontSize: "13pt" }),
            new Row([
                ok, new Box(5), cancel
            ])
        ])));

        ok.AddEventListener("click", async () => {
            super.Close(true);
        });

        cancel.AddEventListener("click", () => {
            super.Close(false);
        });
    }
}

const Alert = async (msg: string = "Alert", color: Color = Color.Sand) => {
    return new Alert1(msg, color).Open();
}

const Confirm = async (msg: string = "Confirm", color: Color = Color.Red) => {
    return new Confirm1(msg, color).Open();
};


class Loader extends div {
    constructor(w = null, h = null) {
        super();

        if (w != null) {
            super.AddStyle({
                width: `${w}px`
            });
        }

        if (h != null) {
            super.AddStyle({
                width: `${h}px`
            });
        }

        super.AddClass("loader");
    }

    open() {
        super.Show();
    }

    close() {
        super.Delete();
    }
}

/// my custom Widget
class Switch extends label {
    tf: input;

    constructor(param: { check?: boolean, size?: number, round?: boolean }) {
        const { check = false, size = 30, round = false } = param;
        super();
        super.AddClass("switch");

        this.tf = new input();
        this.tf.AddAttr({ "type": "checkbox" });

        const slider = new span().AddClass("slider");

        if (round) {
            slider.AddClass("round");
        }
        if (this.tf.control instanceof HTMLInputElement)
            this.tf.control.checked = check;

        super.Add([
            this.tf,
            slider
        ]);
    }

    public addValue(check: boolean = true) {
        if (this.tf.control instanceof HTMLInputElement)
            this.tf.control.checked = check;

        return this;
    }

    public getValue(): boolean {
        if (this.tf.control instanceof HTMLInputElement)
            return this.tf.control.checked;
        return false;
    }

    public Disabled() {
        this.tf.AddAttr({"disabled": ""});
        return this;
    }

    public Enabled() {
        this.tf.DeleteAttr("disabled");
        return this;
    }


}

class Divider extends hr {
    constructor() {
        super();
    }
    public Dotted() {
        super.AddStyle({
            borderStyle: "dotted"
        });

        return this;
    }

    public Dashed() {
        super.AddStyle({
            borderStyle: "dashed"
        });

        return this;
    }
}

class Padding extends div {
    constructor(obj: Widget| Widget[], padding: number = 0) {
        super();
        super.Add(obj);

        if (padding != 0) {
            super.AddStyle({
                padding: `${padding}px`
            });
        }
    }
}


class BackDrop extends div {
    constructor() {
        super();
        super.AddStyle({
            position: 'fixed',
            top: '0px',
            left: '0px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
            height: '100%',
            width: '100%'
        });
        this.Hide();
        this.body.appendChild(this.control);

        this.AddEventListener('click', (e) => {
            this.close();
        });
    }

    public Open() {

        
        this.Show();
    }

    public close() {
        this.Hide();
    }
}


class Tile extends div{
    constructor(option: {
        title?: string,
        icon?: Icons,
        color?: Color
    }) {
        super();

        super.AddStyle({
            width: '100%',
            height: '40px',
            paddingLeft: '15px',
            paddingTop: '6px',
            fontSize: '13pt',
            color: 'inherit',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            cursor: 'pointer'
        });

        super.AddEventListener('mouseover', () => {
            super.AddStyle({
                backgroundColor: 'rgba(0, 0, 0, 0.1)'
            });
        });

        super.AddEventListener('mouseout', () => {
            super.AddStyle({
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
            });
        });

        super.Add(new Row([
            option.icon != undefined ? new Icon(option.icon).AddStyle({ width: '30px' }) : new Text(''),
            option.title != undefined ? new Text(option.title) : new Text('')
        ]));
    

    }
}


class WindowApp extends div {
    private content: Widget;
    private backdrop: BackDrop;
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
        this.content = new div().AddStyle({
            width: '100%',
            height: 'calc(100% - 56px)',
            position: 'fixed',
            top: '56px',
            left: '0',
            overflowY: 'auto'
        });

        this.backdrop = new BackDrop();

        /* Drawing the AppBar */

        if (option.appBar != undefined) {

            const drawer_bar = new button();
            drawer_bar.Html(`<i class="fa fa-bars"></i>`);
            drawer_bar.AddStyle({
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
            
            bar.AddStyle({ 
                width: '100%',
                height: option.appBar.height != undefined ? `${option.appBar.height}px`  : '56px',
                zIndex: '100',
                top: '0px',
                position: 'fixed'
            });

            bar.AddClass(`w3-${option.appBar.color != undefined ? option.appBar.color : Color.Blue}`);
            
            /* Drawing the title */
        
            const left = new Row([
                option.appBar.drawer != undefined ? drawer_bar : new Text(''),
                option.appBar.title != undefined && typeof(option.appBar.title) == 'string' ? new Text(option.appBar.title).AddStyle({
                    fontWeight: 'bold',
                    fontSize: '15pt',
                    marginTop: '5px',
                    marginLeft: '5px'
                }) : new Text('')
            ]);
            left.AddStyle({ marginTop: '8px' });

            bar.Add(left);

            /* Drawing the Action */

            if (option.appBar.action != undefined) {
                /* Drawing the right action */
                const action = new div().AddStyle({
                    position: 'absolute',
                    right: '2px',
                    top: '0px'
                });

                action.Add(option.appBar.action);
                bar.Add(action);
            }

            /* Drawing a drawer*/

            if (option.appBar.drawer != undefined) {
                

                const drawer = new div();   
                drawer.AddEventListener('click', (e)  => {
                    e.stopPropagation();
                });
                drawer.AddStyle({
                    width: '240px',
                    height: '100%',
                    position: 'absolute',
                    top: '0px',
                    left: '0px'
                });

                /* Drawer Header */
                if (option.appBar.drawer.header != undefined) {
                    drawer.AddClass(`w3-animate-${Direction.Left}`);
                    const header = new div();
                    header.AddStyle({
                        height: '56px',
                        width: '100%',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)'
                    });

                    const left2 = new Row([
                        // option.appBar.drawer != undefined ? drawer_bar : new Text(''),
                        option.appBar.title != undefined && typeof(option.appBar.drawer.header.title) == 'string' ? new Text(option.appBar.drawer.header.title).AddStyle({
                            fontWeight: 'bold',
                            fontSize: '15pt',
                            marginTop: '10px',
                            marginLeft: '10px'
                        }) : option.appBar.drawer.header.title instanceof Widget ? option.appBar.drawer.header.title : new Text('')
                    ]);
                    //left2.style({ marginTop: '8px' });
                    header.Add(left2);

                    drawer.Add(header);
                }
                /* end Drawer Header */ 

                if (option.appBar.drawer.color != undefined) {
                    drawer.AddClass(`w3-${option.appBar.drawer.color}`);
                } else {
                    // default color
                    drawer.AddClass(`w3-${Color.White}`);
                }

                this.backdrop.Add(drawer);

                drawer_bar.AddEventListener('click', () => {
                    console.log('Drawer clicked!');
                    this.backdrop.Open();
                });

                /* Draw ITEM */

                if (option.appBar.drawer.item != undefined) {
                    // draw the item here
                    const header_item = new div();
                    header_item.AddStyle({
                        height: 'calc(100% - 57px)',
                        width: '100%',
                        overflowY: 'auto',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                    });


                    for (const item of option.appBar.drawer.item) {
                        header_item.Add(item.AddStyle({marginBottom: '1px', borderRadius: '5px'}));

                        item.AddEventListener('click', () => {
                            this.backdrop.close();
                        });
                    }

                    drawer.Add(header_item);
                }
            }


            super.Add(bar);
        }

        /* Body of the WindowApp */

        if (option.body != undefined) {
            this.UpdateBody(option.body);
        }

        super.Add(this.content);
    }

    public UpdateBody(body: Widget) {
        this.content.Clear();
        this.content.Add(body);
    }

    public Dispose(): void {
        this.backdrop.Delete(); // ensuring that the backdrop is removed
    }
}


class BreadCrumb extends ul {
    constructor(option: { color?: Color, round?: boolean }) {
        super();
        super.AddClass('bread');

        const {color, round} = option;
        if (color != undefined) {
            super.AddClass(`w3-${color}`);    
        }

        if (round != undefined && round) {
            super.AddStyle({ borderRadius: '20px' });
        }
    }

    public AddItem(texts: string[]) {
        super.Clear(); /*  Clear */
        for (const txt of texts) {
            const item = new li().Html(txt);
            if (item instanceof Widget) 
                super.Add(item);
        }
        return this;
    }
}


class ListView extends div {
    content: Widget;
    is_mt_down: boolean;
    point_start: number;
    constructor({  }) {
        super();
        super.AddStyle({
            width: '100%',
            height: '100px',
            position: 'relative',
            backgroundColor: 'orange',
            overflowY: 'hidden',
            overflowX: 'hidden'
        });

        this.content = new div().AddStyle({
            height: '100%',
            minHeight: '100%'
        });

        super.Add(this.content);

        /*  */
        this.content.AddEventListener('mousedown', this.mt_down);
        this.content.AddEventListener('mouseup', this.mt_up);
        this.content.AddEventListener('mousemove', this.mt_move);
        this.content.AddEventListener('mouseleave', this.mt_leave);
        
        this.is_mt_down = false;

        this.point_start = 0.0;

        

    }

    private mt_down = (e: any) => {
        // initial the pont_start here
        const {layerX, layerY} = e;
        console.log(layerX, layerY);

        this.is_mt_down = true;
    }

    private mt_up =(e: any) => {
        this.is_mt_down = false;
    }

    private mt_leave = () => {
        this.is_mt_down = false;
    }

    private mt_move = (e: any) => {
        if (!this.is_mt_down) return;
        const {layerX, layerY} = e;
        this.point_start = layerX;
        console.log(this.point_start);
        //this.content.control.style.marginLeft += 10;
        this.content.AddStyle({
            marginLeft: `${this.point_start}px`
        });
        //console.log(layerX, layerY);
       // console.log(this.content.control.scrollLeft);

    }

    public AddItem(item: Widget) {
        this.content.Add(item);

        this.Update(item);
        return this;
    }

    private Update(item: Widget) {
        /// update if there is a chnages in the file    
        
        setTimeout(() => {
            const w = this.content.control.clientWidth + item.control.clientWidth;
            
            this.content.AddStyle({
                width: `${w}px`
            });
        }, 200);

    }
}



class Dialog extends div {
    is_mouse_down: boolean;
    mouse_pos: {x: number, y: number};
    dialog_pos: {x: number, y: number};
    content: div;
    hdr: div;

    resolve: Function

    constructor(option: { position?: {
        left: number,
        top: number
    }, width: number, height: number, bgColor?: Color, round?:boolean, header?: { color?: Color, icon?: Icons, title?: string } }) {
        super();
        
        const { position, width, height, header, bgColor, round } = option;

        super.AddStyle({
            width: `${width}px`,
            height: `${height}px`,
            position: 'fixed',
            left: `calc((100% / 2) - (${width}px / 2))`,
            top: `15%`,
            zIndex: '1000',
            boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
            border: '1px solid white'
        });

        if (position != undefined) {
            super.AddStyle({
                left: `${position.left}px`,
                top: `${position.top}px`
            });
        }

        if (bgColor != undefined) {

            super.AddClass(`w3-${bgColor}`);
        }


        this.hdr = new div().AddStyle({
            width: '100%',
            height: '50px',
            position: 'relative',
            cursor: 'move',
            paddingLeft: '10px'
        });

        this.hdr.AddEventListener('dragstart',  () => false);
        this.hdr.AddEventListener('ondrop', () => false);

        if (option.round != undefined && option.round) {
            this.hdr.AddStyle({
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px'
            });

            super.AddStyle({
                borderRadius: '10px'
            });
        }

        if (header != undefined && header.color != undefined) {
            this.hdr.AddClass(`w3-${header.color}`);
        } else {
            // default
            this.hdr.AddClass(`w3-${Color.Blue}`);
        }

        if (header != undefined) {
            this.hdr.Add(new Row([ 
                header.icon != undefined ? new Icon(header.icon).AddStyle({ width: '20px' }) : new Text(''),
                header.title != undefined ? new Text(header.title): new Text('') 
            
            ]).AddStyle({ paddingTop: '13px' }));
        }


        /*  close btn */
        const btn = new button();
        btn.AddStyle({
            position: 'absolute',
            right: '10px',
            top: '10px',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            border: 'none',
            color: 'inherit',
            borderRadius: '5px',
            cursor: 'pointer'
        });
        btn.Html(`<i class="fa fa-close">`);

        btn.AddEventListener('click', () => {
            this.Close();
        });

        this.hdr.Add(btn);


        this.mouse_pos = {x: 0, y: 0};
        this.dialog_pos = {x: 0, y: 0};



        // for mouse events
        this.hdr.AddEventListener('mousedown', this.m_down);
        this.hdr.AddEventListener('mouseup', this.m_up);
        this.hdr.AddEventListener('mouseleave', this.m_leave);
        this.hdr.AddEventListener('mousemove', this.m_move);


        // Touch events
        this.hdr.AddEventListener('touchstart', this.t_down);
        this.hdr.AddEventListener('touchend', this.t_up);
        this.hdr.AddEventListener('touchcancel', this.t_leave);
        this.hdr.AddEventListener('touchmove', this.t_move);



        this.is_mouse_down = false;

        this.content = new div();

        super.Add(this.hdr);        
        super.Add(this.content);
    }

    public async Open() {
        this.body.appendChild(this.control);
        return new Promise((resolve, reject) => {
            this.resolve = resolve;
        });
    }

    public Close(resp:any = null) {
        this.Delete();
        
        if (this.resolve != undefined) {
            this.resolve(resp);
        }
    }
    
    public DeleteItem() {
        this.content.Clear();
        return this;
    }

    public AddItem(item: Widget|Widget[]) {

        this.content.Add(item);        
        return this;
    }

    private priority() {
        super.AddStyle({
            zIndex: '1001'
        });
    }

    private removePriority() {
        super.AddStyle({
            zIndex: '1000'
        });
    }

    private m_down = (e: any) => {
        //console.log(e.clientY);
        //console.log(e);
    
        this.mouse_pos.x = e.clientX;
        this.mouse_pos.y = e.clientY;
        
        this.is_mouse_down = true;

        this.priority();
    }

    private m_up = (e: any) => {
        this.is_mouse_down = false;
        this.removePriority();
    }

    private m_leave = (e: any) => {
        this.is_mouse_down = false;
        this.removePriority();
    }

    private m_move = (e: any) => {
        if (this.is_mouse_down) {
            this.dialog_pos.x = this.mouse_pos.x - e.clientX;
            this.dialog_pos.y = this.mouse_pos.y - e.clientY;

            this.mouse_pos.x = e.clientX;
            this.mouse_pos.y = e.clientY;

            super.AddStyle({
                'top': `${this.control.offsetTop - this.dialog_pos.y}px`,
                'left': `${this.control.offsetLeft - this.dialog_pos.x}px`
            });

            // pos1 = pos3 - e.clientX;
            // pos2 = pos4 - e.clientY;
            // pos3 = e.clientX;
            // pos4 = e.clientY;
            // // set the element's new position:
            // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        }
    }



    private t_down = (e: any) => {
        //console.log(e.clientY);
        //console.log(e);
        this.priority();
        
    
        this.mouse_pos.x = e.touches[0].clientX;
        this.mouse_pos.y = e.touches[0].clientY;
        
        this.is_mouse_down = true;
    }

    private t_up = (e: any) => {
        this.is_mouse_down = false;
        this.removePriority();
    }

    private t_leave = (e: any) => {
        this.is_mouse_down = false;
        this.removePriority();
    }

    private t_move = (e: any) => {
        if (this.is_mouse_down) {
            this.dialog_pos.x = this.mouse_pos.x - e.touches[0].clientX;
            this.dialog_pos.y = this.mouse_pos.y - e.touches[0].clientY;

            this.mouse_pos.x = e.touches[0].clientX;
            this.mouse_pos.y = e.touches[0].clientY;

            super.AddStyle({
                'top': `${this.control.offsetTop - this.dialog_pos.y}px`,
                'left': `${this.control.offsetLeft - this.dialog_pos.x}px`
            });

            // pos1 = pos3 - e.clientX;
            // pos2 = pos4 - e.clientY;
            // pos3 = e.clientX;
            // pos4 = e.clientY;
            // // set the element's new position:
            // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        }
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
    Dialog,
    ListView,
    BreadCrumb,
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