import { a, button, div, input, label, li, ul } from "../plugin/core/core.js";
import $ from "./foundation/js/vendor/jquery.js";

class Panel extends div {
    constructor() {
        super();


    }
}


class Button extends button {
    constructor(text = null, type = null, icon = null, size = "small") {
        /*
        @param
         -> text: can be html for design
         -> type: alert, success
         -> size: tiny, small, large
        */
        super();
        super.class([ "button"]);
        if (size != null) {
            super.class(size);
        }

        if (type != null) {
            super.class(type);
        }

        if (text != null) {
            super.html(text);
        }
    
    }
}


class Grid extends div {
    constructor() {
        super();
        super.class("grid-x");
    }
    cell(obj, size = []) {
        /* size must be 
           m-6, s-6
        */
        const cell = new div().class("cell");

        for (const item of size) {
            let nsize = "";
            if (item[0] == 'm') {
                nsize = item.replace("m", "medium");
            } else if(item[0] == 's') {
                nsize = item.replace("s", "small");
            } else if(item[0] == 'l') {
                nsize = item.replace("l", "large");
            } else if (item == "auto") {
                nsize = item;
            }
            else {
                throw new TypeError("size must be m-n or s-n");
            }

            cell.class(nsize);
        }

        cell.add(obj);
        super.add(cell);
    }
}

class SubMenu extends li {
    constructor(text = null) {
        super();
        super.class(["is-dropdown-submenu-parent"]);
        const a1 = new a().attr("href", "#").html(text);
        this.menu = new ul().class("menu");

        super.add([a1, this.menu]);
    }
    add(text = null, action = null) {
        //<li><a href="#">Item 1A</a></li>
        const li1 = new li();
        const a1 = new a().html(text).attr("href", "#");
        li1.add(a1);
        this.menu.add(li1);
        return this;
    }
    
}

class HDropDown extends ul {
    constructor() {
        super();
        super.class(["dropdown", "menu"]);
        super.attr("id", "test223");
        super.attr("data-dropdown-menu","")

        var elem = new Foundation.DropdownMenu($("#test223"));
    }
    add(text = null, submenu = null) {

        if (submenu != null) {
            // <a href="#">Item 1</a>
            // <ul class="menu">
            // <li><a href="#">Item 1A</a></li>
            // <!-- ... -->
            // </ul>
            super.add(submenu);
        } else {
            const li1 = new li();
            const a1 = new a().attr("href", "#");
            li1.add(a1);
            if (text != null) {
                a1.html(text);
            }

            super.add(li1);
        }
    }
}


export {
    Panel,
    Button,
    Grid,
    HDropDown,
    SubMenu
};