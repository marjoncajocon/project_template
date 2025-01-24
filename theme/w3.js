import { a, button, div, img, input, label, li, option, select, span, table, td, th, tr, ul, Widget } from "../plugin/core/core.js";
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
    constructor(text = null, color = null, icon = null) {
        super();
        super.class(["w3-btn"]);
        if (text != null) {
            super.html(text);
        }

        if (color != null) {
            super.class(`w3-${Config.GetColor(color)}`);
        }
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
            this.label.html(text);
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

export {
    Container,
    Panel,
    Card,
    Button,
    TextField,
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
    Accordion
};