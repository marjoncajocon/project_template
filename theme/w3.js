import { a, button, div, h3, i, img, input, label, li, option, select, span, table, td, textarea, th, tr, ul, Widget } from "../plugin/core/core.js";
const Config = {
    Colors: {
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
        "pale-blue": "pale-blue"
    },
    Sizes: {
        "tiny": "w3-tiny",
        "small": "w3-small",
        "large": "w3-large",
        "xlarge": "w3-xlarge",
        "xxlarge": "w3-xxlarge",
        "xxxlarge": "w3-xxxlarge"
    },

    GetSize: function(size) {
        if (typeof(this.Sizes[size]) != "undefined") {
            return size;
        }
        throw new TypeError("wrong sized!")
    },

    GetColor: function (color) {
        if (typeof(this.Colors[color]) != "undefined") {
            return color;
        }
        throw new TypeError("wrong color!")
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
    
}

class Text extends div {
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


class Table extends table {
    constructor(header = [], size = null) {
        super();

        if (size != null) {
            super.class(["w3-table", `w3-${Config.GetSize(size)}`]);
        }

        const tr1 = new tr();

        for (const item of header) {
            const td1 = new th().html(item);
            tr1.add(td1);
        }

        super.add(tr1);
    }

    add(items = []) {
        const tr1 = new tr();

        for (const item of items) {
            const td1=  new td();
            if (item instanceof Widget) {
                td1.add(item);
            } else {
                td1.html(item);
            }
            tr1.add(td1);
        }

        super.add(tr1);
        return tr1;
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

class Image extends img {
    constructor(path = null) {
        super();
        super.class("w3-image");
    }
}

class TextField extends div {
    constructor(text = null, type = "text", placeholder = null) {
        super();
        this.label = new label();
        this.tf = new input().class(["w3-input"]);


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
    constructor(text = null, type = "text", placeholder = null) {
        super();
        this.label = new label();
        this.tf = new textarea().class(["w3-input"]);


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

    border() {
        super.class("w3-border");
        return this;
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
            cell.class(item);
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
    constructor(color = null, size = null, mobile = false) {
        super();
        super.class("w3-bar");

        if (color != null) {
            super.class(`w3-${Config.GetColor(color)}`);
        }

        if (size != null) {
            super.class(`w3-${Config.GetSize(size)}`);
        }
        

        this.mobile = mobile;
        
    }

    add(text = null, hovercolor = null, evt = null, hoverableBGColor = null, hoverText = null) {
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
    constructor(ico = null) {
        super();

        if (ico != null) {
            super.class(["fa", `fa-${ico}`]);
        }
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

class BasicTab extends div {
    constructor(bgColor = null, size = null) {
        super();

        this.menu = new div();

        this.menu.class(["w3-bar"]);

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
        this.content = new div().class(["w3-container", "w3-display-container"]);

        super.add([
            this.menu,
            this.content
        ]);

        this.list = [];
    }
    clearActive() {
        for (const item of this.list) {
            item.removeClass("w3-sand");
        }
    }
    add(title = null, fn = null, active = false) {
        if (title instanceof Widget) {

        } else {
            const btn = new Button(title).button().class(["w3-bar-item"]);
            this.menu.add(btn);

            if (active) {
                btn.class("w3-sand");
                this.content.clear();
                fn(this.content);
            }

            this.list.push(btn);

            if (typeof(fn) == "function") {
                btn.addEventListener("click", () => {

                    this.clearActive();
                    btn.class("w3-sand");
                    this.content.clear();
                    fn(this.content);

                });
            }
        }
    }
}

class Pagination extends div {
    constructor(prev_fn = null, next_fn = null, size = null) {
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

        if (typeof(prev_fn) == "function") {
            before.addEventListener("click", (e) => {
                e.preventDefault();
                prev_fn();
            });
        }

        if (typeof(next_fn) == "function") {
            forward.addEventListener("click", (e) => {
                e.preventDefault();
                next_fn();
            });
        }

    }

    border() {
        super.class("w3-border");
        return this;
    }

    add(num = null, fn = null) {
        const link = new a().attr({
            href: "#",
            class: "w3-bar-item w3-button"
        }).html(`${num}`);
        
        this.between.add(link);

        if (typeof(fn) == "function") {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                fn();
            });
        }

        return link;
    }
}

class ProgressBar extends div {
    constructor() {
        super();
        super.class(["w3-light-grey", "w3-round"]).style({
            height: "20px"
        });

        this.con = new div().class(["w3-container", "w3-round", "w3-blue"]).style({
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
    constructor(title = null, maxwidth = null, bgcolor = null) {
        super();
        super.class("w3-modal");
        this.resolvefn = null;

        this.content = new div().class(["w3-modal-content", "w3-card-4", "w3-animate-top"]);
        
        if (maxwidth != null) {
            this.content.style({
                maxWidth: maxwidth
            })
        }

        

        if (title != null) {
            const header = new Card().add(new Label(title)).style({
                padding: "15px"
            });

            const close = new Button("X").style({
                float: "right"
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
        this.body.appendChild(super.control());
        
        const promise = new Promise((resolve, reject) => {
            this.resolvefn = resolve;
        });

        return promise;
    }

    hide(value = null) {
        this.resolvefn(value);
        super.hide();
        this.delete();
    }
    
}

export {
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
    List,
    Image,
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
    BasicTab,
    Pagination,
    ProgressBar,
    Modal
};