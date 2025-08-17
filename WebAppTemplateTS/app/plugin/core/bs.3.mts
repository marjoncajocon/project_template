import { a, button, div, li, span, ul, Widget } from "./core.mts";

enum Color {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Link = 'link',
  Dark = 'dark',
  Light = 'light',
  Muted = 'Muted',
  White = 'white'
}

enum Size {
  Lg = "lg",
  Sm = "sm",
  Xs = "xs"
}

class Text extends div {
  constructor(option: {text: string, textColor?: Color, textOverflow?: boolean, width?: number } | (string|number)) {
    super();
    if (typeof(option) == 'object') {
      const {text, textColor, textOverflow, width} = option;
      super.Text(text);

      if (textColor != undefined) {
        super.AddClass(`text-${textColor}`);
      }

      super.AddStyle({display: 'inline-block'});

      if (textOverflow != undefined && textOverflow) {
        super.AddStyle({
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        });

      }

      if (width != undefined) {
        super.AddStyle({
          width: `${width}px`
        });
      }
    } else if (typeof(option) == 'string') {
      super.Text(option);
    } else if (typeof(option) == 'number') {
      super.Text(option.toString());
    }
    
  }
}

class Html extends span {
  constructor(option: {text: string, textColor?: Color}|string) {
    super();
    if (typeof(option) == 'object') {
      const {text, textColor} = option;
      super.Html(text);
      if (textColor != undefined) {
        super.AddClass(`text-${textColor}`);
      }
    } else if (typeof(option) == 'string') {
      super.Html(option);
    }
  
  }
}

class Badge extends span {
  constructor(o: {
    text: string | Widget
  }) {
    super();
    super.AddClass("badge");
    if (o.text != undefined) {

      if (typeof(o.text) == "string") {
        super.Add(new Text({text: o.text}));
      } else {
        super.Add(o.text);
      }
    }

  }
}


class Button extends button {
  constructor(o : {  
    text: Widget | string,
    color?: Color,
    size?: Size,
    block?: boolean
  }) {
    super();

    if (o.color != undefined) {
      super.AddClass(["btn", "btn-" + o.color]);
    }

    if (o.size != undefined) {
      super.AddClass(["btn-" + o.size]);
    }

    if (typeof(o.text) == "string") {
      super.Add(new Html({text: o.text}));
    } else {
      super.Add(o.text);
    }

    if (o.block != undefined && o.block) {
      super.AddClass("btn-block");
    }

  }

  enable(ok: boolean) {
    super.DeleteClass(["active", "disabled"]);
    if (ok) {
      super.AddClass("active");
    } else {
      super.AddClass("disabled");
    }
  }
  
}

class ProgressBar extends div {
  bar: div;
  constructor(o: {
    color?: Color,
    striped?: boolean,
    animation?: boolean
  }) {
    super();

    // <div class="progress">
//   <div class="progress-bar" role="progressbar" aria-valuenow="70"
//   aria-valuemin="0" aria-valuemax="100" style="width:70%">
//     <span class="sr-only">70% Complete</span>
//   </div>
// </div>

    super.AddClass("progress");

    this.bar = new div().AddClass("progress-bar");
    
    this.bar.AddAttr({
      role: "progressbar",
      "aria-valuenow": "0",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
    });

    this.bar.AddStyle({
      width: "0%"
    });;

    super.Add(this.bar);

    if (o.color != undefined) {
      this.bar.AddClass(`progress-bar-${o.color}`);
    }

    if (o.striped != undefined && o.striped) {
      this.bar.AddClass([`progress-bar-striped`]);
    }
    if (o.animation != undefined && o.animation) {
      this.bar.AddClass("active");
    }
  }

  update(percent: number, showText: boolean = false) {
    this.bar.AddStyle(`${percent}%`);
    this.bar.AddAttr({
      "aria-valuenow": `${percent}`,
    });
    this.bar.AddStyle({
      width: `${percent}%`
    });

    if (showText) {
      this.bar.Clear();
      this.bar.Add(new Text(`${percent}%`));
    }
  }

}

class Pagination extends ul {
  constructor(o: {
    size?: Size
  }) {
    super();
    super.AddClass("pagination");
  
    if (o.size != undefined) {
      super.AddClass(`pagination-${o.size}`);
    }
  }
  addItem(num: number, fn?: (n: number) => void) {

    const aa = new a();

    super.Add(new li().Add(aa));
    aa.AddAttr({href: "#"});
    aa.Add(new Text(`${num}`));

    if ( fn != undefined )
    aa.AddEventListener("click", () => {
      fn(num);
    });

    return this;
  }
}

export {
  Color,
  Size
};

export {
  Button,
  Html,
  Badge,
  ProgressBar,
  Pagination
};