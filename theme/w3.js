import { button, div, img, input, label, li, table, td, th, tr, ul, Widget } from "../plugin/core/core.js";
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
    Image
};