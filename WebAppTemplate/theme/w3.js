import MyApp from "../main.js";
import { a, button, canvas, div, h3, hr, i, img, input, label, li, option, select, span, table, td, textarea, th, tr, ul, Widget } from "../plugin/core/core.js";
const Config = {
    Colors: {
        "black": "black",
        "red": "red",
        "pink": "pink",
        "purple": "purple",
        "deep-purple": "deep-purple",
        "indigo": "indigo",
        "blue": "blue",
        "light-blue": "light-blue",
        "cyan": "cyan",
        "aqua": "aqua",
        "teal": "teal",
        "green": "green",
        "light-green": "light-green",
        "lime": "lime",
        "sand": "sand",
        "khaki": "khaki",
        "yellow": "yellow",
        "amber": "amber",
        "orange": "orange",
        "deep-orange": "deep-orange",
        "blue-gray": "blue-gray",
        "brown": "brown",
        "light-gray": "light-gray",
        "gray": "gray",
        "dark-gray": "dark-gray",
        "pale-red": "pale-red",
        "pale-yellow": "pale-yellow",
        "pale-green": "pale-green",
        "pale-blue": "pale-blue",
        "flat-turquoise": "flat-turquoise",
        "flat-emerald": "flat-emerald",
        "ios-dark-blue": "ios-dark-blue",
        "flat-peter-river": "flat-peter-river",
        "flat-amethyst": "flat-amethyst",
        "flat-wet-asphalt": "flat-wet-asphalt",
        "flat-green-sea": "flat-green-sea",
        "flat-nephritis": "flat-nephritis",
        "flat-belize-hole": "flat-belize-hole",
        "flat-wisteria": "flat-wisteria",
        "flat-midnight-blue": "flat-midnight-blue",
        "flat-sun-flower": "flat-sun-flower",
        "flat-carrot": "flat-carrot",
        "flat-alizarin": "flat-alizarin",
        "flat-clouds": "flat-clouds",
        "flat-concrete": "flat-concrete",
        "flat-orange": "flat-orange",
        "flat-pumpkin": "flat-pumpkin",
        "flat-pomegranate": "flat-pomegranate",
        "flat-silver": "flat-silver",
        "flat-asbestos": "flat-asbestos",
        "ios-deep-blue": "ios-deep-blue",
        "ios-blue": "ios-blue",
        "ios-light-blue": "ios-light-blue",
        "ios-green": "ios-green",
        "ios-pink": "ios-pink",
        "ios-red": "ios-red",
        "ios-orange": "ios-orange",
        "ios-yellow": "ios-yellow",
        "ios-grey": "ios-grey",
        "ios-light-grey": "ios-light-grey",
        "ios-background": "ios-background",
        "win8-lime": "win8-lime",
        "win8-green": "win8-green",
        "win8-emerald": "win8-emerald",
        "win8-teal": "win8-teal",
        "win8-cyan": "win8-cyan",
        "win8-blue": "win8-blue",
        "win8-cobalt": "win8-cobalt",
        "win8-indigo": "win8-indigo",
        "win8-violet": "win8-violet",
        "win8-pink": "win8-pink",
        "win8-magenta": "win8-magenta",
        "win8-crimson": "win8-crimson",
        "win8-red": "win8-red",
        "win8-orange": "win8-orange",
        "win8-amber": "win8-amber",
        "win8-yellow": "win8-yellow",
        "win8-brown": "win8-brown",
        "win8-olive": "win8-olive",
        "win8-steel": "win8-steel",
        "win8-mauve": "win8-mauve",
        "win8-taupe": "win8-taupe",
        "win8-sienna": "win8-sienna"
    },
    Sizes: {
        "tiny": "w3-tiny",
        "small": "w3-small",
        "large": "w3-large",
        "xlarge": "w3-xlarge",
        "xxlarge": "w3-xxlarge",
        "xxxlarge": "w3-xxxlarge"
    },
    Direction: {
        "topleft": "topleft",
        "topright": "topright",
        "bottomleft": "bottomleft",
        "bottomright": "bottomright",
        "left": "left",
        "right": "right",
        "middle": "middle",
        "top": "top",
        "bottom": "bottom",
        "topmiddle": "topmiddle",
        "bottommiddle": "bottommiddle"
    }
    ,
    GetDirection: function(dir) {
        if (typeof(this.Direction[dir]) != "undefined") {
            return dir;
        }
        throw new TypeError("wrong direction!");
    },
    GetSize: function(size) {
        if (typeof(this.Sizes[size]) != "undefined") {
            return size;
        }
        throw new TypeError("wrong sized!");
    },

    GetColor: function (color) {
        if (typeof(this.Colors[color]) != "undefined") {
            return color;
        }
        throw new TypeError("wrong color!");
    }
};


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
    constructor(color = null) {
        super();
        super.class(["w3-panel"]);
        
        if (color != null) {   
            super.class(`w3-${Config.GetColor(color)}`);
        }
    }
}

class Card extends div {
    constructor(color = null) {
        super();
        super.class(["w3-card"]);

        if (color != null) {
            super.class(`w3-${Config.GetColor(color)}`);
        }
    }
}

class Button extends button {
    constructor(text = null, color = null) {
        super();
        super.class(["w3-btn"]);
        if (text instanceof Widget) {
            super.add(text);
        }
        else {
            super.html(text);
        }

        if (color != null) {
            super.class(`w3-${Config.GetColor(color)}`);
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

    round() {
        super.style({
            borderRadius: "20px"
        });
        return this;
    }

    size(size) {
        super.class(`w3-${Config.GetSize(size)}`);
        return this;
    }
    circle() {
        super.class("w3-circle");
        return this;
    }
    block() {
        super.class("w3-block");
        return this;
    }
    button() {
        super.class("w3-button");
        return this;
    }

    ripple() {
        super.class("w3-ripple");
        return this;
    }
    border() {
        super.class("w3-border");
        return this;
    }

    loaderText(txt) {
        this.loader_txt.text(txt);
    }

    showLoader() {
        this.loader.show();
        super.attr({ disabled: "" });
        super.style({ position: "relative" });
    }
    hideLoader() {
        super.removeAttr("disabled");
        this.loader.hide();
        super.style({ position: '' });    
    }
    
}

class Text extends div {
    constructor(text = null, color = null) {
        super();
        if (text != null) {
            super.text(text);
        }

        if (color != null) {
            super.class(`w3-text-${Config.GetColor(color)}`);
        }
    }

    setTextColor(color) {
        super.class(`w3-text-${Config.GetColor(color)}`);
        return this;
    }

    left() {
        super.class("w3-left-align");
        return this;
    }
    right() {
        super.class("w3-right-align");
        return this;
    }
}

class Html extends div {
    constructor(text = null) {
        super();
        if (text != null) {
            super.html(text);
        }
    }

    left() {
        super.class("w3-left-align");
        return this;
    }
    right() {
        super.class("w3-right-align");
        return this;
    }
}

class TableResponsive extends div {
    constructor(obj) {
        super();
        super.class("w3-responsive");
        
        super.add(obj);
    }
}

class Table extends table {
    constructor(header = [], size = null, color = "light-gray") {
        super();

        super.class("w3-table");
        super.class("curved-table");
        if (size != null) {
            super.class([`w3-${Config.GetSize(size)}`]);
        }

        const tr1 = new tr().class(`w3-${Config.GetColor(color)}`);;

        const header_len = header.length;
        for (let i = 0; i < header_len; i++) {
            const item = header[i];
            const td1 = new th().html(item);
            tr1.add(td1);
        }


        super.add(tr1);

        this.rows = [];
    }

    add(items = [], arr = []) {
        const tr1 = new tr();

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            const td1=  new td();
            if (item instanceof Widget) {
                td1.add(item);
            } else {
                td1.html(item);
            }
            tr1.add(td1);

            if (arr) {
                if (typeof(arr[i]) != "undefined") {
                    if (typeof(arr[i]["style"]) != "undefined") {
                        td1.style(arr[i]["style"]);
                    }
                }
            }
        }

        super.add(tr1);

        this.rows.push(tr1);

        return tr1;
    }

    clearBody() {
        for (const item of this.rows) {
            item.delete();
        }        

        this.rows = [];
        return this;
    }

    striped() {
        super.class("w3-striped");
        return this;
    }
    border() {
        super.class("w3-border");
        return this;
    }
    all() {
        super.class("w3-table-all");
        return this;
    }
    center() {
        super.class("w3-centered");
        return this;
    }
    hover() {
        super.class("w3-hoverable");
        return this;
    }
}


class List extends ul {
    constructor(size = null) {
        super();
        super.class("w3-ul");
        if (size != null) {
            super.class(`w3-${Config.GetSize(size)}`);
        }
    }

    add(item = null, color = null, hover_color = null) {
        const li1 = new li();

        if (color != null) {
            li1.class(`w3-${Config.GetColor(color)}`);
        }
        
        if (item instanceof Widget) {
            li1.add(item);
        } else {
            li1.html(item);
        }

        if (hover_color != null) {
            li1.class(`w3-hover-${Config.GetColor(hover_color)}`);
        }
        
        super.add(li1);

        return li1;
    }

    border() {
        super.class("w3-border");
        return this;
    }
    center() {
        super.class("w3-center");
        return this;
    }
    hover() {
        super.class("w3-hoverable");
        return this;
    }
}



class TextField extends div {
    constructor(text = null, type = "text", placeholder = null, error = false) {
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

    filter({ data = [], network = false }) {
        
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

                    if (this.tf.getValue() != "" & item.value.toLowerCase().indexOf(this.tf.getValue().toLowerCase()) > -1) {
                        has_found = true;
                        
                        const btn = new Button().style({
                            width: "100%",
                            textAlign: "left",
                            paddingLeft: "5px"
                        }).text(item.value).size("tiny");

                        this.search.add(    
                            btn
                        );

                        btn.addEventListener("click", () => {
                            this.tf.setValue(item.value);
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
        }

        return this;
    }
    
    error(err = null) {

        if (err != null) {
            this.tf.class(`w3-border-${Config.GetColor("red")}`);
            this.error_label.class(`w3-text-${Config.GetColor("red")}`);
            this.error_label.html(err);
        } else {
            this.tf.removeClass(`w3-border-${Config.GetColor("red")}`);
            this.error_label.removeClass(`w3-text-${Config.GetColor("red")}`);
            this.error_label.html("");
        }
        return this;
    }

    setIconPrefix({ icon = null, size = 20, color = null}) {
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
        return this;
    }

    setIconSuffix({ icon = null, size = 20, color = null}) {
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

    size(size) {
        this.tf.class(`w3-${Config.GetSize(size)}`);
        return this;
    }

    labelColor(color = null) {
        this.label.class(`w3-text-${Config.GetColor(color)}`);
        return this;
    }
    round() {
        this.tf.class("w3-round");
        return this;
    }

    border() {
        this.tf.class("w3-border");
        return this;
    }

    getValue() {
        return this.tf.value();
    }

    setValue(value) {
        this.tf.value(value);
        return this;
    }

    disabled() {
        this.tf.attr("disabled", "");
        return this;
    }

    enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }
}


class TextBox extends div {
    constructor(text = null, placeholder = null, error = false) {
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

    error(err = null) {

        if (err != null) {
            this.tf.class(`w3-border-${Config.GetColor("red")}`);
            this.error_label.class(`w3-text-${Config.GetColor("red")}`);
            this.error_label.html(err);
        } else {
            this.tf.removeClass(`w3-border-${Config.GetColor("red")}`);
            this.error_label.removeClass(`w3-text-${Config.GetColor("red")}`);
            this.error_label.html("");
        }
        return this;
    }


    size(size) {
        this.tf.class(`w3-${Config.GetSize(size)}`);
        return this;
    }

    labelColor(color = null) {
        this.label.class(`w3-text-${Config.GetColor(color)}`);
        return this;
    }
    round() {
        this.tf.class("w3-round");
        return this;
    }

    border() {
        this.tf.class("w3-border");
        return this;
    }

    getValue() {
        return this.tf.value();
    }

    setValue(value) {
        this.tf.value(value);
        return this;
    }

    disabled() {
        this.tf.attr("disabled", "");
        return this;
    }

    enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }
}

class Radio extends span {
    constructor(text = null, name = null) {
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
    enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }

    setValue(bool) {
        this.tf.control.checked = bool;
        return this;
    }

    getValue() {

        return this.tf.control.checked;
    }

    disabled() {
        this.tf.attr("disabled", "");
        return this;
    }
}

class CheckBox extends span {
    constructor(text = null) {
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

    

    setValue(bool) {
        this.tf.control.checked = bool;
        return this;
    }

    getValue() {

        return this.tf.control.checked;
    }

    enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }

    disabled() {
        this.tf.attr("disabled", "");
        return this;
    }
}



class ComboBox extends select {
    constructor() {
        super();
        super.class("w3-select");


    }

    add(key, value) {
        const opt = new option();
        opt.attr({
            value: key
        });
        opt.html(value);
        super.add(opt);
        return opt;
    }

    enabled() {
        this.removeAttr("disabled");
        return this;
    }
    
    disabled() {
        this.attr("disabled", "");
        return this;
    }

    size(size) {
        this.class(`w3-${Config.GetSize(size)}`);
        return this;
    }

    border() {
        super.class("w3-border");
        return this;
    }

    setValue(value) {
        super.value(value);
        return this;
    }

    getValue() {
        return super.value();
    }
}


class Badge extends span {
    constructor(text = null, color = null, size = null) {
        super();
        super.class("w3-badge");

        if (size != null) {
            super.class(`w3-${Config.GetSize(size)}`);
        }

        if (color != null) {
            super.class(`w3-${Config.GetColor(color)}`);
        }

        if (text != null) {
            super.html(text);
        }
    }

    textColor(color) {
        super.class(`w3-text-${Config.GetColor(color)}`);
        return this;
    }
}

class Tag extends span {
    constructor(text = null, color = null, size = null) {
        super();
        super.class("w3-tags");

        if (size != null) {
            super.class(`w3-${Config.GetSize(size)}`);
        }

        if (color != null) {
            super.class(`w3-${Config.GetColor(color)}`);
        }

        if (text != null) {
            super.html(text);
        }
    }

    textColor(color) {
        super.class(`w3-text-${Config.GetColor(color)}`);
        return this;
    }
    border() {
        super.class("w3-border");
        return this;
    }
}

class Grid extends div {
    constructor() {
        super();
        super.class("w3-row");
    }

    add(obj, sizes = []) {
        const cell = new div().class("w3-col");

        for (const item of sizes) {
            if (item == "rest") {
                cell.class("w3-rest");
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

    padding() {
        super.class("w3-row-padding");
        return this;
    }

    section() {
        super.class("w3-section");
        return this;
    }
}

class Bar extends div {
    constructor(color = null, size = null) {
        super();
        super.class("w3-bar");
        super.style({
            "overflow-x": "auto",
            "white-space": "nowrap"
        })
        

        if (color != null) {
            super.class(`w3-${Config.GetColor(color)}`);
        }

        if (size != null) {
            super.class(`w3-${Config.GetSize(size)}`);
        }
        
        
    }

    block() {
        super.class("w3-bar-block");
        return this;
    }

    add(text = null, isRight = false, hovercolor = null, evt = null, hoverableBGColor = null, hoverText = null) {
        const item = new div().class("w3-bar-item");
        if (text instanceof Widget) {
            item.add(text);
        }
        else {
            item.html(text);
        }

        if (hovercolor != null) {
            item.class(`w3-hover-${Config.GetColor(hovercolor)}`);
        }

        if (evt != null && typeof(evt) == "function") {
            item.addEventListener("click", evt);
        }

        if (this.mobile) {
            item.class("w3-mobile");
        }

        if (hoverableBGColor != null) {
            item.class(`w3-hover-${Config.GetColor(hoverableBGColor)}`);
        }

        if (hoverText != null) {
            item.class(`w3-hover-${Config.GetColor(hoverText)}`);
        }

        if (isRight) {
            item.class("w3-right");
        }

        super.add(item);
        return item;
    }
}

class DropDownHover extends div {
    constructor(title = null) {
        super();
        super.class("w3-dropdown-hover");
        const btn = new Button(title);

        super.add(btn);
        this.drop_content = new div().class(["w3-dropdown-content", "w3-bar-block", "w3-card-4"]);

        super.add(this.drop_content);
    }

    add(title = null, fn = null) {
        const a1 = new a().class(["w3-bar-item", "w3-button"]);

        if (title instanceof Widget) {
            a1.add(title);
            
            if (typeof(fn) == "function") {
                a1.addEventListener("click", fn);
            }
        } else {
            a1.html(title);
            if (typeof(fn) == "function") {
                a1.addEventListener("click", fn);
            }
        }
        
        this.drop_content.add(a1);
        return a1;
    }
}

class Accordion extends span {
    constructor(title = null, content = null) {
        super();
        const btn = new Button(title).button().block().class("w3-left-align");
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
    constructor(ico = null, color = null) {
        super();

        if (ico != null) {
            super.class(["fa", `fa-${ico}`]);
        }

        if (color != null) {
            super.class(`w3-text-${Config.GetColor(color)}`);
        }
    }

    setColor(color) {
        super.class(`w3-text-${Config.GetColor(color)}`);
        return this;
    }
}
class Label extends label {
    constructor(title = null) {
        super();

        if (title instanceof Widget) {
            super.add(title);
        } 
        else if(title instanceof Array) {
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
    constructor(title = null) {
        super();
        super.class(["w3-sidebar", "w3-light-grey", "w3-bar-block"]);
        if (title instanceof Widget) {
            super.add(title);
        } else {
            super.add(new h3().html(title));
        }
    }

    add(title = null, fn = null) {
        if (title instanceof Widget) {
            super.add(title);
            return title;
        } else {
            const a1 = new a().attr({
                href: "#",
                class: "w3-bar-item w3-button"
            });
            a1.html(title);

            if (typeof(fn) == "function") {
                a1.addEventListener("click", fn);
            }
            super.add(a1);
            return a1;
        }
        
    }
}


class LeftTab extends div {
    constructor({ bgColor = null, size = null, round = false, roundContent = false}) {
        super();
        this.round = round;
        this.lists = [];

        this.grid = new Grid();

        this.side_bar = new div().class([ "w3-card" ]);


        if (bgColor != null) {
            this.side_bar.class(`w3-${Config.GetColor(bgColor)}`);
        }


        this.content = new div().style({ width: "100%" }).class("w3-card");
        
        this.grid.add(this.side_bar, ["s12", "m3", "l2"]);
        this.grid.add(new Row().add(this.content).style({ paddingLeft: "2px" }), ["s12", "m9", "l10"]);


        if (roundContent) {
            this.content.style({
                borderRadius: "10px"
            });
        }


        super.add([
            this.grid
        ]);

    }

    checkRound() {
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

    addActive(cur_btn) {
        for (const btn of this.lists) {
            btn.removeClass("w3-rtab-active");
        }

        cur_btn.addClass("w3-rtab-active");
    }

    add({title = null, fn = null, active = false, color = null}) {

        const btn = new button().style({
            width: "100%",
            textAlign: "left",
            paddingLeft: "10px",
            fontSize: "8pt"
        }).class([ "w3-bar-item", "w3-button", "tablink" ]);

        if (title instanceof Widget) {
            btn.add(title);
        } else {
            btn.html(title);
        }

        this.side_bar.add(btn);

        if (typeof(fn) == "function") {
            btn.addEventListener("click", () => {
                this.addActive(btn);
                this.content.clear();
                fn(this.content);
            });
        }

        if (active) {
            this.addActive(btn);
            fn(this.content);
        }

        this.lists.push(btn);

        this.checkRound();

        return this;
    }
}

class BasicTab extends div {
    constructor({bgColor = null, size = null, borderRadius = 0 }) {
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
            this.menu.class(`w3-${Config.GetColor(bgColor)}`);
        }

        if (size != null) {
            this.menu.class(`w3-${Config.GetSize(size)}`);
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
    clearActive() {
        for (const item of this.list) {
            item.removeClass("w3-tab-active");
            //item.removeAttr("disabled");
        }
    }
    add({title = null, fn = null, active = false, color = null}) {
        if (title instanceof Widget) {

        } else {
            // const btn = new button().html(title).style({
            //     backgroundColor: "rgba(0, 0, 0, 0)",
            //     border: "1px solid rgba(0, 0, 0, 0)",
            //     cursor: "pointer",
            //     padding: "10px",
            //     height: "100%"
            // });

            const btn = new button().class(["w3-bar-item", "w3-button", "tablink"]).html(title).style({
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                border: "1px solid rgba(0, 0, 0, 0)"
            });


            this.menu.add(btn);

            if (active) {
                btn.class("w3-tab-active");
                //btn.attr({"disabled": ""});
                this.content.clear();
                fn(this.content);
            }

            this.list.push(btn);

            if (typeof(fn) == "function") {
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
            border: "1px solid #e3e3e3",
            borderTop: "none",
            position: "relative"
        });
    }
    round() {
        super.style({
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px"
        });
        return this;
    }
}

class Pagination extends div {
    constructor(change_fn = null, active_color = null, size = null) {
        super();
        super.class(["w3-bar"]);

        if (size != null) {
            super.class(`w3-${Config.GetSize(size)}`);
        }

        const before = new a().attr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).html(`&laquo;`);

        const forward = new a().attr({
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
            this.active_color = `w3-${Config.GetColor(active_color)}`;
        } else {
            // default color is green
            this.active_color = `w3-${Config.GetColor("green")}`;
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
            
            if (typeof(this.change_fn) == "function") {
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

    border() {
        super.class("w3-border");
        return this;
    }

    add(num = null, active = null, change = null, style = null) {

        active = active == null ? false: active;

        if (num != null) {
            if (typeof(num) != "number") throw new TypeError("add in pagination must be a number!");
        }

        const link = new a().attr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).html(`${num}`);

        if (style != null) {
            link.style(style);
        }
        
        this.between.add(link);

        this.links.push({
            num: num,
            link: link
        });

        link.addEventListener("click", () => {

            for (const item of this.links) {
                item.link.removeClass(this.active_color);    
            }

            link.addClass(this.active_color);
            if (typeof(this.change_fn) == "function") {
                this.change_fn(num);
            }
            this.current_page = num;

        });

        if (active) {

            for (const item of this.links) {
                item.link.removeClass(this.active_color);    
            }

            link.addClass(this.active_color);

            if (typeof(this.change_fn) == "function") {
                if (change == null || change) {
                    this.change_fn(num);
                }
            }

            this.current_page = num;
        }

        return link;
    }
}

class ProgressBar extends div {
    constructor(color = null) {
        super();
        super.class(["w3-light-grey", "w3-round"]).style({
            height: "20px"
        });

        this.con = new div().class(["w3-container", "w3-round", `w3-${color == null ? "blue" : Config.GetColor(color)}`]).style({
            width: "1%",
            height: "100%"
        });

        super.add(this.con);
    }

    update(percent, value = null) {
        this.con.style({
            width: `${percent}%`
        });

        if (value != null) {
            this.con.html(`${value}%`);
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
    constructor(title = null, maxwidth = null, bgcolor = null, animate = "top") {
        super();
        super.class("w3-modal").style({ zIndex: "1000" });
        this.resolvefn = null;

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

            const close = new Button("X").style({
                position: "absolute",
                top: "10px",
                right: "10px"
            }).size("tiny");
            header.add(close);

            if (bgcolor != null) {
                header.class(`w3-${Config.GetColor(bgcolor)}`);
            }
            
            this.content.add(new div().class(["w3-container"]));
            this.content.add(header);
            
            close.addEventListener("click", () => {
                this.hide();
            });
        }
        super.add(this.content);


    }

    add(obj = null) {
        if (obj instanceof Widget) {
            this.content.add(obj);
        } else {
            throw new TypeError("obj must instance of Widget");
        }
    }

    async show() {
        super.show();
        //this.body.appendChild(super.control());
        MyApp.add(this);
        const promise = new Promise((resolve, reject) => {
            this.resolvefn = resolve;
        });

        return promise;
    }

    hide(value = null) {
        this.resolvefn(value);
        super.hide();
        this.delete();
        if (typeof (this.dispose) == "function") {
            this.dispose(); // dispose for the modal
        }
    }
    
}

class Code extends div {
    constructor(lang = null) {
        super();
        super.class("w3-code");

        if (lang != null) {
            super.class(`${lang}High`);
        }
    }

    write(code = null) {
        super.text(code);
        return this;
    }
}

class Display extends div {
    constructor(pos = "middle") {
        super();
        super.class(`w3-display-${Config.GetDirection(pos)}`);
    }
}


class Row extends div {
    constructor(obj = null, direction = null) {
        super();
        

        if (obj instanceof Widget) {
            //obj.style({ display: "inline-block" });
            super.add(new div().class(["w3-cell", direction == null ?  "w3-cell-top" : `w3-cell-${Config.GetDirection(direction)}`]).add(obj));
            
        } else if (obj instanceof Array) {
            for (const item of obj) {
                if (item instanceof Widget) {
                    //item.style({ display: "inline-block" });
                    //item.class("w3-cell");
                    super.add(new div().class(["w3-cell", direction == null ?  "w3-cell-top" : `w3-cell-${Config.GetDirection(direction)}`]).add(item));
                }
            }
        }
  
    }
}


class Column extends div {
    constructor(obj = null) {
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

    path(src) {
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

    base64() {
        return this;
    }

    sepia() {
        super.class("w3-sepia");
        return this;
    }
    sepiaMin() {
        super.class("w3-sepia-min");
        return this;
    }
    sepiaMax() {
        super.class("w3-sepia-max");
        return this;
    }

    hoverOpacity() {
        super.class("w3-hover-opacity");
        return this;
    }
    hoverGrayScale() {
        super.class("w3-hover-grayscale");
        return this;
    }

    hoverSepia() {
        super.class("w3-hover-sepia");
        return this;
    }

    round() {
        super.class("w3-round");
        return this;
    }

    circle() {
        super.class("w3-circle");
        return this;
    }

    border() {
        super.class("w3-border");
        return this;
    }

    padding() {
        super.class("w3-padding");
        return this;
    }
}

class Box extends div{
    constructor(width = null, height = null) {
        super();
        super.class("w3-cell");
        super.style({
            // display: "inline-block",
            width: "1px",
            height: "1px"
        });

        if (width != null) {
            super.style({
                width: typeof(width) == "number" ? `${width}px` : width
            });
        }

        if (height != null) {
            super.style({
                width: typeof(height) == "number" ? `${height}px` : height
            });
        }
        
    }
}

class Canvas extends canvas {
    constructor(width = null, height = null) {
        super();
        this.ctx = this.control.getContext("2d");

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
    constructor(text = null, type = "text", placeholder = null, error = false) {
        super();
        this.input = new TextField(text, type, placeholder, error);

        this.list = new List().border().hide();

        super.add([
            this.input, this.list
        ]);


        let time = null;
        this.input.tf.addEventListener("focusin", () => {
            clearTimeout(time);
            this.list.show();
        });

        
        this.input.tf.addEventListener("focusout", () => {
            time = setTimeout(() => {
                this.list.hide();
            }, 1000);
        });

        this.list.addEventListener("mouseover", () => {
            clearTimeout(time);
            this.list.show();
        });

        this.list.addEventListener("mouseout", () => {
            time = setTimeout(() => {
                this.list.hide();
            }, 1000);
        });

    }
    init(arr_list_of_key_value = null) {
        
        for (const item of arr_list_of_key_value) {
            this.list.add(item.value);
        }
    
        return this;
    }
    border() {
        this.input.tf.class("w3-border");
        return this;
    }
    
}


class Alert1 extends Modal {
    constructor(msg, color = "sand") {
        super(new Row([new Icon("message"), new Box(10), new Text("Alert")]), "480px", color);
        
        const ok = new Button(new Row([ new Icon("check"), new Box(5), new Text("OK") ]), "blue").size("small").style({ borderRadius: "20px" });

        super.add(new Panel().style({
            padding: "0px 20px 20px 20px"
        }).add(new Column([
            new Html(`<p>${msg}</p>`).style({fontSize: "13pt"}),
            new Row([
                ok, new Box(10)
            ])
        ])));

        ok.addEventListener("click", async () => {
            super.hide(true);
        });

    }
}

class Confirm1 extends Modal {
    constructor(msg, color) {
        super(new Row([new Icon("question-circle"), new Box(10), new Text("Confirmation")]), "480px", color, "bottom");
        
        const ok = new Button(new Row([ new Icon("check"), new Box(5), new Text("OK") ]), "blue").size("small").style({ borderRadius: "20px" });
        const cancel = new Button(new Row([ new Icon("close"), new Box(5), new Text("CANCEL") ]), "red").size("small").style({ borderRadius: "20px" });
        
        super.add(new Panel().style({
            padding: "0px 20px 20px 20px"
        }).add(new Column([
            new Html(`<p>${msg}</p>`).style({fontSize: "13pt"}),
            new Row([
                ok, new Box(5), cancel
            ])
        ])));

        ok.addEventListener("click", async () => {
            super.hide(true);
        });

        cancel.addEventListener("click", () => {
            super.hide(false);
        });
    }
}

const Alert = async (msg = "Alert", color = "sand") => {
    return new Alert1(msg, color).show();
}

const Confirm = async (msg = "Confirm", color = "red") => {
    return new Confirm1(msg, color).show();
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
    
    show() {
        super.show();
    }

    hide() {
        super.delete();
    }
}

/// my custom Widget
class Switch extends label {
    constructor({check = false, size = 30, round = false}) {
        super();
        super.class("switch");

        this.tf = new input();
        this.tf.attr({ "type": "checkbox" });

        const slider = new span().class("slider");

        if (round) {
            slider.class("round");
        }

        this.tf.control.checked = check;

        super.add([
            this.tf,
            slider
        ]);
    }

    setValue(check = true) {
        this.tf.control.checked = check;
        return this;
    }

    getValue() {
        return this.tf.control.checked;
    }

    disabled() {
        this.tf.attr("disabled", "");
        return this;
    }

    enabled() {
        this.tf.removeAttr("disabled");
        return this;
    }


}

class Divider extends hr {
    constructor() {
        super();
    }
    dotted() {
        super.style({
            borderStyle: "dotted"
        });

        return this;
    }

    dashed() {
        super.style({
            borderStyle: "dashed"
        });

        return this;
    }
}

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
    LeftTab,
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
    Loader
};

export {Alert, Confirm};