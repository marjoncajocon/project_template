//import "./bootstrap3/css/bootstrap.min.css";
import "./bootstrap3/css/theme-lumen.css";
//import "./bootstrap3/css/theme-sandstone.css";
//import "./bootstrap3/css/theme-spacelab.css";

import { a, button, col, div, fieldset, h4, input, label, legend, li, option, select, span, table, tbody, td, textarea, th, thead, tr, u, ul, Widget } from "./core.mts";

enum Icons {
  Asterisk = 'asterisk',
  Plus = 'plus',
  Minus = 'minus',
  Euro = 'euro',
  Cloud = 'cloud',
  Envelope = 'envelope',
  Pencil = 'pencil',
  Glass = 'glass',
  Music = 'music',
  Search = 'search',
  Heart = 'heart',
  Star = 'star',
  StarEmpty = 'star-empty',
  User = 'user',
  Film = 'film',
  ThLarge = 'th-large',
  Th = 'th',
  ThList = 'th-list',
  Ok = 'ok',
  Remove = 'remove',
  ZoomIn = 'zoom-in',
  ZoomOut = 'zoom-out',
  Off = 'off',
  Signal = 'signal',
  Cog = 'cog',
  Trash = 'trash',
  Home = 'home',
  File = 'file',
  Time = 'time',
  Road = 'road',
  DownloadAlt = 'download-alt',
  Download = 'download',
  Upload = 'upload',
  Inbox = 'inbox',
  PlayCircle = 'play-circle',
  Repeat = 'repeat',
  Refresh = 'refresh',
  ListAlt = 'list-alt',
  Lock = 'lock',
  Flag = 'flag',
  Headphones = 'headphones',
  VolumeOff = 'volume-off',
  VolumeDown = 'volume-down',
  VolumeUp = 'volume-up',
  QRCode = 'qrcode',
  Barcode = 'barcode',
  Tag = 'tag',
  Tags = 'tags',
  Book = 'book',
  Bookmark = 'bookmark',
  Print = 'print',
  Camera = 'camera',
  Font = 'font',
  Bold = 'bold',
  Italic = 'italic',
  TextHeight = 'text-height',
  TextWidth = 'text-width',
  AlignLeft = 'align-left',
  AlignCenter = 'align-center',
  AlignRight = 'align-right',
  AlignJustify = 'align-justify',
  List = 'list',
  IndentLeft = 'indent-left',
  IndentRight = 'indent-right',
  FacetimeVideo = 'facetime-video',
  Picture = 'picture',
  MapMarker = 'map-marker',
  Adjust = 'adjust',
  Tint = 'tint',
  Edit = 'edit',
  Share = 'share',
  Check = 'check',
  Move = 'move',
  StepBackward = 'step-backward',
  FastBackward = 'fast-backward',
  Backward = 'backward',
  Play = 'play',
  Pause = 'pause',
  Stop = 'stop',
  Forward = 'forward',
  FastForward = 'fast-forward',
  StepForward = 'step-forward',
  Eject = 'eject',
  ChevronLeft = 'chevron-left',
  ChevronRight = 'chevron-right',
  PlusSign = 'plus-sign',
  MinusSign = 'minus-sign',
  RemoveSign = 'remove-sign',
  OkSign = 'ok-sign',
  QuestionSign = 'question-sign',
  InfoSign = 'info-sign',
  Screenshot = 'screenshot',
  RemoveCircle = 'remove-circle',
  OkCircle = 'ok-circle',
  BanCircle = 'ban-circle',
  ArrowLeft = 'arrow-left',
  ArrowRight = 'arrow-right',
  ArrowUp = 'arrow-up',
  ArrowDown = 'arrow-down',
  ShareAlt = 'share-alt',
  ResizeFull = 'resize-full',
  ResizeSmall = 'resize-small',
  ExclamationSign = 'exclamation-sign',
  Gift = 'gift',
  Leaf = 'leaf',
  Fire = 'fire',
  EyeOpen = 'eye-open',
  EyeClose = 'eye-close',
  WarningSign = 'warning-sign',
  Plane = 'plane',
  Calendar = 'calendar',
  Random = 'random',
  Comment = 'comment',
  Magnet = 'magnet',
  ChevronUp = 'chevron-up',
  ChevronDown = 'chevron-down',
  Retweet = 'retweet',
  ShoppingCart = 'shopping-cart',
  FolderClose = 'folder-close',
  FolderOpen = 'folder-open',
  ResizeVertical = 'resize-vertical',
  ResizeHorizontal = 'resize-horizontal',
  HDD = 'hdd',
  Bullhorn = 'bullhorn',
  Bell = 'bell',
  Certificate = 'certificate',
  ThumbsUp = 'thumbs-up',
  ThumbsDown = 'thumbs-down',
  HandRight = 'hand-right',
  HandLeft = 'hand-left',
  HandUp = 'hand-up',
  HandDown = 'hand-down',
  CircleArrowRight = 'circle-arrow-right',
  CircleArrowLeft = 'circle-arrow-left',
  CircleArrowUp = 'circle-arrow-up',
  CircleArrowDown = 'circle-arrow-down',
  Globe = 'globe',
  Wrench = 'wrench',
  Tasks = 'tasks',
  Filter = 'filter',
  Briefcase = 'briefcase',
  Fullscreen = 'fullscreen',
  Dashboard = 'dashboard',
  Paperclip = 'paperclip',
  HeartEmpty = 'heart-empty',
  Link = 'link',
  Phone = 'phone',
  Pushpin = 'pushpin',
  USD = 'usd',
  GBP = 'gbp',
  Sort = 'sort',
  SortByAlphabet = 'sort-by-alphabet',
  SortByAlphabetAlt = 'sort-by-alphabet-alt',
  SortByOrder = 'sort-by-order',
  SortByOrderAlt = 'sort-by-order-alt',
  SortByAttributes = 'sort-by-attributes',
  SortByAttributesAlt = 'sort-by-attributes-alt',
  Unchecked = 'unchecked',
  Expand = 'expand',
  CollapseDown = 'collapse-down',
  CollapseUp = 'collapse-up',
  LogIn = 'log-in',
  Flash = 'flash',
  LogOut = 'log-out',
  NewWindow = 'new-window',
  Record = 'record',
  Save = 'save',
  Open = 'open',
  Saved = 'saved',
  Import = 'import',
  Export = 'export',
  Send = 'send',
  FloppyDisk = 'floppy-disk',
  FloppySaved = 'floppy-saved',
  FloppyRemove = 'floppy-remove',
  FloppySave = 'floppy-save',
  FloppyOpen = 'floppy-open',
  CreditCard = 'credit-card',
  Transfer = 'transfer',
  Cutlery = 'cutlery',
  Header = 'header',
  Compressed = 'compressed',
  Earphone = 'earphone',
  PhoneAlt = 'phone-alt',
  Tower = 'tower',
  Stats = 'stats',
  SDVideo = 'sd-video',
  HDVideo = 'hd-video',
  Subtitles = 'subtitles',
  SoundStereo = 'sound-stereo',
  SoundDolby = 'sound-dolby',
  Sound51 = 'sound-5-1',
  Sound61 = 'sound-6-1',
  Sound71 = 'sound-7-1',
  CopyrightMark = 'copyright-mark',
  RegistrationMark = 'registration-mark',
  CloudDownload = 'cloud-download',
  CloudUpload = 'cloud-upload',
  TreeConifer = 'tree-conifer',
  TreeDeciduous = 'tree-deciduous',
  CD = 'cd',
  SaveFile = 'save-file',
  OpenFile = 'open-file',
  LevelUp = 'level-up',
  Copy = 'copy',
  Paste = 'paste',
  Alert = 'alert',
  Equalizer = 'equalizer',
  King = 'king',
  Queen = 'queen',
  Pawn = 'pawn',
  Bishop = 'bishop',
  Knight = 'knight',
  BabyFormula = 'baby-formula',
  Tent = 'tent',
  Blackboard = 'blackboard',
  Bed = 'bed',
  Apple = 'apple',
  Erase = 'erase',
  Hourglass = 'hourglass',
  Lamp = 'lamp',
  Duplicate = 'duplicate',
  PiggyBank = 'piggy-bank',
  Scissors = 'scissors',
  Bitcoin = 'bitcoin',
  Yen = 'yen',
  Ruble = 'ruble',
  Scale = 'scale',
  IceLolly = 'ice-lolly',
  IceLollyTasted = 'ice-lolly-tasted',
  Education = 'education',
  OptionHorizontal = 'option-horizontal',
  OptionVertical = 'option-vertical',
  MenuHamburger = 'menu-hamburger',
  ModalWindow = 'modal-window',
  Oil = 'oil',
  Grain = 'grain',
  Sunglasses = 'sunglasses',
  TextSize = 'text-size',
  TextColor = 'text-color',
  TextBackground = 'text-background',
  ObjectAlignTop = 'object-align-top',
  ObjectAlignBottom = 'object-align-bottom',
  ObjectAlignHorizontal = 'object-align-horizontal',
  ObjectAlignLeft = 'object-align-left',
  ObjectAlignVertical = 'object-align-vertical',
  ObjectAlignRight = 'object-align-right',
  TriangleRight = 'triangle-right',
  TriangleLeft = 'triangle-left',
  TriangleBottom = 'triangle-bottom',
  TriangleTop = 'triangle-top',
  Superscript = 'superscript',
  Subscript = 'subscript',
  MenuLeft = 'menu-left',
  MenuRight = 'menu-right',
  MenuDown = 'menu-down',
  MenuUp = 'menu-up',
}

enum InputType {
  Text = "text",
  Password = "password",
  Email = "email",
  Number = "number",
  URL = "url",
  Telephone = "tel",
  Search = "search",
  Date = "date",
  DateTimeLocal = "datetime-local",
  Month = "month",
  Week = "week",
  Time = "time",
  Color = "color",
  File = "file",
  Range = "range",
  Checkbox = "checkbox",
  Radio = "radio",
  Hidden = "hidden",
  Submit = "submit",
  Reset = "reset",
  Button = "button",
}

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
  Xs = "xs",
  Md = "md"
}

enum Message {
  Success = "success",
  Danger = "error",
  Warning = "warning"
}

enum Flex {
  Center = 'center',
  Stretch = 'stretch',
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly'
}

enum GridSize {
  // Extra small devices (xs)
  Xs1 = "col-xs-1",
  Xs2 = "col-xs-2",
  Xs3 = "col-xs-3",
  Xs4 = "col-xs-4",
  Xs5 = "col-xs-5",
  Xs6 = "col-xs-6",
  Xs7 = "col-xs-7",
  Xs8 = "col-xs-8",
  Xs9 = "col-xs-9",
  Xs10 = "col-xs-10",
  Xs11 = "col-xs-11",
  Xs12 = "col-xs-12",

  // Small devices (sm)
  Sm1 = "col-sm-1",
  Sm2 = "col-sm-2",
  Sm3 = "col-sm-3",
  Sm4 = "col-sm-4",
  Sm5 = "col-sm-5",
  Sm6 = "col-sm-6",
  Sm7 = "col-sm-7",
  Sm8 = "col-sm-8",
  Sm9 = "col-sm-9",
  Sm10 = "col-sm-10",
  Sm11 = "col-sm-11",
  Sm12 = "col-sm-12",

  // Medium devices (md)
  Md1 = "col-md-1",
  Md2 = "col-md-2",
  Md3 = "col-md-3",
  Md4 = "col-md-4",
  Md5 = "col-md-5",
  Md6 = "col-md-6",
  Md7 = "col-md-7",
  Md8 = "col-md-8",
  Md9 = "col-md-9",
  Md10 = "col-md-10",
  Md11 = "col-md-11",
  Md12 = "col-md-12",

  // Large devices (lg)
  Lg1 = "col-lg-1",
  Lg2 = "col-lg-2",
  Lg3 = "col-lg-3",
  Lg4 = "col-lg-4",
  Lg5 = "col-lg-5",
  Lg6 = "col-lg-6",
  Lg7 = "col-lg-7",
  Lg8 = "col-lg-8",
  Lg9 = "col-lg-9",
  Lg10 = "col-lg-10",
  Lg11 = "col-lg-11",
  Lg12 = "col-lg-12"
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

class Label extends span {
  constructor(o: {
    text: string | Widget,
    color?: Color
  }) {
    super();
    super.AddClass("label");
    if (o.text != undefined) {

      if (typeof(o.text) == "string") {
        super.Add(new Text({text: o.text}));
      } else {
        super.Add(o.text);
      }
    }

    if (o.color != undefined) {
      super.AddClass("label-" + o.color);
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

class ButtonLink extends a {
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
  list: li[]
  constructor(o: {
    size?: Size
  }) {
    super();
    super.AddClass("pagination");
  
    if (o.size != undefined) {
      super.AddClass(`pagination-${o.size}`);
    }

    this.list = [];
  }
  add(num: number, fn?: (n: number) => void) {

    const aa = new a();
    const ll = new li().Add(aa);

    this.list.push(ll);

    super.Add(ll);
    aa.AddAttr({href: "#"});
    aa.Add(new Text(`${num}`));

    if ( fn != undefined )
    aa.AddEventListener("click", () => {

      for (const item of this.list) {
        item.DeleteClass("active");
      }
      
      ll.AddClass("active");
      fn(num);
    });

    return this;
  }

  clear() {
    for (const item of this.list) {
      item.Delete();
    }
    this.list = [];
  }

}


class BreadCrumb extends ul {
  list: li[]
  constructor(o: {
  }) {
    super();
    super.AddClass("breadcrumb");

    this.list = [];
  }
  add(title: string, fn?: (n: string) => void) {

    const aa = new a();
    const ll = new li().Add(aa);

    this.list.push(ll);

    super.Add(ll);
    aa.AddAttr({href: "#"});
    const h = new span()
    h.Html(title);
    aa.Add(h);

    if ( fn != undefined )
    aa.AddEventListener("click", () => {

      for (const item of this.list) {
        item.DeleteClass("active");
      }
      
      ll.AddClass("active");
      fn(title);
    });

    return this;
  }

  clear() {
    for (const item of this.list) {
      item.Delete();
    }
    this.list = [];
  }
  
}

class Pager extends ul {
  constructor(o: {
    prevLabel?: string,
    nextLabel?: string,
    align?: boolean,
    nextClicked: () => void,
    prevClicked: () => void
  }) {
    super();
    super.AddClass("pager");

    const prev = new li();
    const prev_a = new a().AddAttr({
      href: "#"
    });
    prev.Add(prev_a);
    if (o.prevLabel == undefined) {
      prev_a.Html("Previous");
    } else {
      prev_a.Html(o.prevLabel);
    }

    prev_a.AddEventListener("click", (e) => {
      e.preventDefault();
      o.prevClicked();
    });

    const next = new li();
    const next_a = new a().AddAttr({
      href: "#"
    });
    next.Add(next_a);
    if (o.nextLabel == undefined) {
      next_a.Html("Next");
    } else {
      next_a.Html(o.nextLabel);
    }

    if (o.align != undefined && o.align) {
      prev.AddClass("previous");
      next.AddClass("next");
    }

    next_a.AddEventListener("click", (e) => {
      e.preventDefault();
      o.nextClicked();
    });

    super.Add([prev, next]);
  }
}

class ListGroup extends ul {
  constructor(o: {}) {
    super();
    super.AddClass("list-group");

  }

  add(a: Widget|string, color?: Color) {
    const ll = new li();
    ll.AddClass("list-group-item");
    
    super.Add(ll);
    if (typeof(a) != "string") {
      ll.Add(a);
    } else {
      ll.Add(new Html(a));
    }

    if (color != undefined) {
      ll.AddClass(`list-group-item-${color}`);
    }

    return this;
  }

}

class Card extends div {
  constructor(o: {
    header: string | Widget,
    color?: Color,
    body: string | Widget
    footer?: string | Widget,
  }) {
    super();
    super.AddClass("panel");

    if (o.color != undefined) {
      super.AddClass("panel-" + o.color);
    }

    const panel_heading = new div().AddClass("panel-heading");
    if (typeof(o.header) == "string") {
      panel_heading.Add(new Html(o.header));
    } else {
      panel_heading.Add(o.header);
    }
    super.Add(panel_heading);

    // body
    const body_panel = new div().AddClass("panel-body");

    if (typeof(o.body) == "string") {
      body_panel.Add(new Html(o.body));
    } else {
      body_panel.Add(o.body);
    }

    super.Add(body_panel);

    if (o.footer != undefined) {
      const panel_footer = new div().AddClass("panel-footer");
      if (typeof(o.footer) == "string") {
        panel_footer.Add(new Html(o.footer));
      } else {
        panel_footer.Add(o.footer);
      }
    
      super.Add(panel_footer);
    }
  }

}

class _Tab extends ul {
  list: li[]
  content: div
  constructor(o: {}) {
    
    super();
    super.AddClass(["nav", "nav-tabs"]);

    this.list = [];
    this.content = new div();
  }

  add(title: string|Widget, fn?: () => void, active: boolean = false) {
    const ll = new li().AddStyle({
      cursor: "pointer"
    });
    const aa = new a();
    ll.Add(aa);
    if (typeof(title) == "string") {
      aa.Add(new Html(title));
    } else {
      aa.Add(title);
    }

    if (fn != undefined) {
      ll.AddEventListener("click", () => {
        for (const item of this.list) {
          item.DeleteClass("active");
        }

        ll.AddClass("active");
        fn();
      });
    }

    if (active) {
      ll.AddClass("active");
      if (fn != undefined) {
        fn();
      }
    }

    this.list.push(ll);
    
    super.Add(ll);
  }
}

class Tab extends div {
  tab: _Tab
  content: div
  constructor(o: {
    padding?: number 
  }) {
    super();
    this.tab = new _Tab(o);

    super.Add(this.tab);
    this.content = new Panel();
    this.content.AddStyle({
      "border-bottom-right-radius": "4px",
      "border-bottom-left-radius": "4px",
      "border-left": "1px solid #e7e7e7",
      "border-right": "1px solid #e7e7e7",
      "border-bottom": "1px solid #e7e7e7"
    })

    if (o.padding != undefined) {
      this.content.AddStyle({
        "padding": `${o.padding}px`
      });
    } else {
      this.content.AddStyle({
        "padding": `10px`
      });
    }
    
    super.Add(this.content);
  }

  add(title: string, fn: (o: Panel) => void, active: boolean = false) {
    this.tab.add(title, () => {
      this.content.Clear();
      fn(this.content);
    }, active);
    return this;
  }

}

class Panel extends div {
  constructor() {
    super();
  }
}

class Icon extends span {
  prev: string
  constructor(icon: Icons) {
    super();

    this.prev = "glyphicon-" + icon;
    
    super.AddClass(["glyphicon", this.prev])
  }

  change(icon: Icons) {
    super.DeleteClass(this.prev);
    this.prev = "glyphicon-" + icon;
    super.AddClass(this.prev);
  }
}

class Divider extends div {
  constructor() {
    super();
    super.AddClass("divider");
  }
}

class ButtonSplit extends div {
  menu: ul
  constructor(o: {
    color: Color,
    clicked?: () => void,
    enable?: boolean
  }) {
    super();
    super.AddClass("btn-group");

    const title = new ButtonLink({text: "sample", color: o.color});
    if (o.enable != undefined) {
      title.enable(o.enable);
    }

    const caret = new ButtonLink({
      text: new span().AddClass("caret"),
      color: o.color
    });

    if (o.enable != undefined) {
      caret.enable(o.enable);
    }


    caret.AddClass("dropdown-toggle");
    caret.AddAttr({
      "data-toggle": "dropdown",
      "aria-expanded": "false",
      "href": "#"
    });

    this.menu = new ul();
    this.menu.AddClass("dropdown-menu");
    this.menu.AddAttr({
      role: "menu"
    });

    super.Add(title);
    super.Add(caret);
    super.Add(this.menu);

    caret.AddEventListener("click", (e) => {
      e.preventDefault();
      if (!super.HasClass("open")) {
        super.AddClass("open");
      } else {
        super.DeleteClass("open");
      }
    });

    
    title.AddEventListener("click", () => {
      if (o.clicked != undefined) {
        o.clicked();
      }
    });
    

  }

  add(title: string|Divider, fn?:() => void) {

    const aa = new a().AddAttr({ href: "#" });
    
    
    if (typeof(title) == "string") {
      this.menu.Add(new li().Add(aa));
      aa.Html(title);
    } else {
      this.menu.Add(new li().AddClass("divider"));
    }

    if (fn != undefined) {
      aa.AddEventListener("click", (e) => {
        e.preventDefault();
        fn();
        if (!super.HasClass("open")) {
          super.AddClass("open");
        } else {
          super.DeleteClass("open");
        }
      });
    }

    return this;
  }
}

class Well extends div {
  constructor(o: {
    size?: Size
  }) {
    super();

    super.AddClass("well");
    if (o.size != undefined) {
      super.AddClass("well-" + o.size);
    }
  }
}


class AlertMessage extends div {
  constructor(o: {color?: Color, dismissible?: boolean}) {
    super();
    super.AddClass("alert");
    
    if (o.dismissible != undefined && o.dismissible) {
      super.AddClass("alert-dismissible");

      const close = new button();close.Html("x");
      close.AddAttr({
        type: "button",
        class: "close",
        "data-dismiss": "alert"
      });

      close.AddEventListener("click", () => {
        super.Delete();
      });

      super.Add(close);
    }

    if (o.color != undefined) {
      super.AddClass("alert-" + o.color);
    }
    
  }
}

class TextField extends input {
  constructor(o: {
    size?: Size,
    type?: InputType,
    placeholder?: string
  }) {

    super();

    super.AddClass("form-control");

    if (o.size != undefined) {
      super.AddClass("input-" + o.size);
    }

    if (o.type != undefined) {
      super.AddAttr({
        type: o.type
      });
    }

    if (o.placeholder != undefined) {
      super.AddAttr({
        placeholder: o.placeholder
      });
    }

  }

  value(v: string = "") {
    if (v == "")
      return this.GetValue();
    else 
      this.AddValue(v);
    return this;
  }

  enable(v: boolean = true) {
    if (v) {
      this.DeleteAttr("disabled");
    } else {
      this.AddAttr({
        disabled: ""
      });
    }
  }

}

class TextFieldAddon extends div{
  tf: TextField
  constructor(o: { 
    size?: Size,
    type?: InputType,
    placeholder?: string,
    prefix?: string | Widget,
    suffix?: string | Widget,
    suffix_fn?: () => void
  }) {
    super();
    super.AddClass("input-group");
    this.tf = new TextField(o);

    const prefix = new span();
    prefix.AddClass("input-group-addon");
    if (o.prefix != undefined) {
      if (typeof(o.prefix) == "string") {
        prefix.Html(o.prefix);
      } else {
        prefix.Add(o.prefix);
      }
      super.Add(prefix);
    }

    super.Add(this.tf);

    const suffix = new span();
    suffix.AddClass("input-group-btn");
    if (o.suffix != undefined) {
      
      const btn = new Button({text: o.suffix, color: Color.Default});
      suffix.Add(btn);
      super.Add(suffix);
      
      btn.AddEventListener("click", () => {
        if (o.suffix_fn != undefined) o.suffix_fn();
      });
    }
  

  }

  value(v: string = "") {
    if (v == "")
      return this.tf.GetValue();
    else 
      this.tf.AddValue(v);
    return this;
  }

  enable(v: boolean = true) {
    if (v) {
      this.tf.DeleteAttr("disabled");
    } else {
      this.tf.AddAttr({
        disabled: ""
      });
    }
  }

}

class TextFieldFeedBack extends div {
  tf: TextField
  icon: Icon
  msg: div
  constructor(o: {
    size?: Size,
    type?: InputType,
    placeholder?: string,
  }) {
    super();
    this.tf = new TextField(o);

    super.AddClass("has-feedback");
    super.Add(this.tf);

    this.icon = new Icon(Icons.Ok);
    this.icon.AddClass("form-control-feedback");
    this.icon.Hide();
    super.Add(this.icon);
  }

  check(msg: string, type: Message) {

    super.DeleteClass(["has-success", "has-warning", "has-danger"]);
    this.icon.Show();

    if (type == Message.Success) {
      super.AddClass("has-success");
      this.icon.change(Icons.Ok);
    } else if (type == Message.Warning) {
      this.icon.change(Icons.WarningSign);
      super.AddClass("has-warning");
    } else {
      this.icon.change(Icons.Remove);
      super.AddClass("has-error");
    }
  }

  value(v: string = "") {
    if (v == "")
      return this.tf.GetValue();
    else 
      this.tf.AddValue(v);
    return this;
  }

  enable(v: boolean = true) {
    if (v) {
      this.tf.DeleteAttr("disabled");
    } else {
      this.tf.AddAttr({
        disabled: ""
      });
    }
  }
}

class TextBox extends textarea {
  constructor(o: {
    placeholder?: string
  }) {

    super();

    super.AddClass("form-control");


    if (o.placeholder != undefined) {
      super.AddAttr({
        placeholder: o.placeholder
      });
    }

  }

  value(v: string = "") {
    if (v == "")
      return this.GetValue();
    else 
      this.Html(v);
    return this;
  }

  enable(v: boolean = true) {
    if (v) {
      this.DeleteAttr("disabled");
    } else {
      this.AddAttr({
        disabled: ""
      });
    }
  }

}

class Radio extends div {
  tf: input
  constructor(o: {
    label?: string | Widget,
    inline?: boolean,
    group: string,
    change?: (v: boolean) => void
  }) {
    super();
    super.AddClass("radio");
    
    if (o.inline != undefined && o.inline) {
      super.AddStyle({display: "inline"});
    }

    this.tf = new input().AddAttr({
      type: InputType.Radio,
      name: o.group
    });

    const lbl = new label();
    
    lbl.Add(this.tf);

    super.Add(lbl);
    
    if (o.label != undefined) {
      if (typeof(o.label) == "string") {
        const a = new span();
        a.Html(o.label);
        lbl.Add(a);
      } else {
        lbl.Add(o.label);
      }
    }

    if (o.change != undefined) {
      this.tf.AddEventListener("change", () => {
        if (o.change != undefined) {
          const v = this.tf.GetValue() as boolean;
          o.change(v);
        }
      });
    }

  }

  value(v: boolean|null = null) {
    if (v == null) {
      return this.tf.GetValue();
    } else {
      this.tf.AddValue(v);
    }
    return false;
  } 

  enable(v: boolean = true) {
    if (v) {
      this.tf.DeleteAttr("disabled");
    } else {
      this.tf.AddAttr({
        disabled: ""
      });
    }
  }
}


class CheckBox extends div {
  tf: input
  constructor(o: {
    label?: string | Widget,
    inline?: boolean,
    change?: (v: boolean) => void
  }) {
    super();
    super.AddClass("checkbox");
    
    if (o.inline != undefined && o.inline) {
      super.AddStyle({display: "inline"});
    }

    this.tf = new input().AddAttr({
      type: InputType.Checkbox
    });

    const lbl = new label();
    
    lbl.Add(this.tf);

    super.Add(lbl);
    
    if (o.label != undefined) {
      if (typeof(o.label) == "string") {
        const a = new span();
        a.Html(o.label);
        lbl.Add(a);
      } else {
        lbl.Add(o.label);
      }
    }

    if (o.change != undefined) {
      this.tf.AddEventListener("change", () => {
        if (o.change != undefined) {
          const v = this.tf.GetValue() as boolean;
          o.change(v);
        }
      });
    }

  }

  value(v: boolean|null = null) {
    if (v == null) {
      if (this.tf.control instanceof HTMLInputElement)
        return this.tf.control.checked;
      //return this.tf.GetValue();
    } else {
      this.tf.AddValue(v);
    }
    return false;
  } 

  enable(v: boolean = true) {
    if (v) {
      this.tf.DeleteAttr("disabled");
    } else {
      this.tf.AddAttr({
        disabled: ""
      });
    }
  }
}

class SelectBox extends select {
  constructor(o: {
    multiple?: boolean
  }) {
    super();
    super.AddClass("form-control");
    if (o.multiple != undefined && o.multiple) {
      super.AddAttr({
        multiple: ""
      });
    }
  }

  clear() {

  }

  add(key: string, value: string) {
    const o = new option();
    o.AddAttr({key: key});
    o.Text(value);
    super.Add(o);
  }

  value(v: string = "") {
    if (v == "") {
      return this.GetValue();
    } else {
      this.AddValue(v);
    }
  }

  enable(v: boolean = true) {
    if (v) {
      this.DeleteAttr("disabled");
    } else {
      this.AddAttr({
        disabled: ""
      });
    }
  }
}

class Row extends div {
  constructor(obj: (Widget|string|number)[], align?: Flex) {
    super();

    super.AddStyle({
      display: "flex",
      "flex-direction": "row",
      "align-items": "baseline"
    })

    if (align != undefined) {
      super.AddStyle({
        "align-content": align
      })
    }

    for (const item of obj) {
      if (item instanceof Widget) {
        super.Add(item);
      } else if (typeof(item) == "number") {
        super.Add(new div().AddStyle({width: `${item}px`}));
      } else if (typeof(item) == "string") {
        super.Add(new Text({text: item}));
      }
    }
  }
}


class Column extends div {
  constructor(obj: (Widget|string|number)[]) {
    super();

    super.AddStyle({
      display: "block"
    })

    for (const item of obj) {
      if (item instanceof Widget) {
        super.Add(item);
      } else if (typeof(item) == "number") {
        super.Add(new div().AddStyle({height: `${item}px`}));
      }
    }
  }
}

class Modal extends div {
  backdrop: div
  promise: Promise<unknown>
  resolvefn: (value: unknown) => void
  content: div
  constructor(o: {
    label?: string | Widget,
    size?: Size,
    footer?: (Button|ButtonLink|ButtonSplit)[]
  }) {
    super();
    super.AddClass(["modal", "fade"]);
    super.AddStyle({
      display: "none"
    });

    this.promise = new Promise((resolve) => {
      this.resolvefn = resolve;
    });

    const modal_dialog = new div();
    if (o.size != undefined) {
      modal_dialog.AddClass(["modal-dialog", "modal-" + o.size]);
    } else {
      modal_dialog.AddClass(["modal-dialog", "modal-" + Size.Lg]);
    }
    const modal_content = new div().AddClass("modal-content");
    modal_dialog.Add(modal_content);

    super.Add(modal_dialog);

    // for header
    const header = new div().AddClass("modal-header");

    const close = new button();
    close.AddAttr({
      type: "button",
      class: "close",
      "data-dismiss": "modal"
    });
    close.Html("×");

    close.AddEventListener("click", () => {
      this.hide(null);
    });

    header.Add(close);

    if (o.label != undefined) {
      if (typeof(o.label) == "string") {
        const h = new h4();
        h.AddClass("modal-title");
        h.Html(o.label);
        header.Add(h);
      } else {
        header.Add(o.label);
      }
    }
    /// end header

    const body = new div().AddClass("modal-body");
    const footer = new div().AddClass("modal-footer");

    if (o.label != undefined) {
      modal_content.Add(header);
    }

    modal_content.Add([body]);

    if (o.footer != undefined) {
      modal_content.Add(footer);
    }

    this.backdrop = new div();
    this.backdrop.AddClass(["modal-backdrop", "fade", "in"]);

    this.content = body;

    if (o.footer != undefined) {
      footer.Add(o.footer);
    }

  }

  add(obj: Widget) {
    this.content.Add(obj);
  }

  async show() {

    this.body.appendChild(this.control);

    super.AddStyle({
      display: "block"
    });
    super.AddClass("in");

    this.body.appendChild(this.backdrop.control);
  
    this.backdrop.AddClass(["modal-backdrop", "fade", "in"]);

    this.backdrop.AddEventListener("click", () => {
      this.hide(null);
    });

    return this.promise;
  }

  hide(msg: string|null = null) {
    this.resolvefn(msg);
    
    super.AddStyle({
      display: "none"
    });
    super.DeleteClass("in");
    
    super.Delete();
    this.backdrop.Delete();
  }
}


class Form extends fieldset {
  content: div
  constructor(o: {label: string|Widget}) {
    super();

    if (typeof(o.label) == "string") {
      super.Add(new legend().Add(new Text(o.label)));
    } else {
      super.Add(new legend().Add(o.label));
    }

    this.content = new div();
    super.Add(this.content);
  }

  add(obj: Widget|Widget[]) {
    this.content.Add(obj);
    return this;
  }
}

class Table extends div {
  table: table
  tbody: tbody
  list: tr[]
  constructor(o: {
    header?: (string|Widget)[],
    hover?: boolean,
    size?: Size,
    border?: boolean
  }) {
    super();
    super.AddClass("table-responsive");

    this.table = new table().AddClass("table");
    
    if ( o.size != undefined ) {
      this.table.AddClass("table-" + o.size);
    }

    super.Add(this.table);
    if (o.header != undefined) {
      //draw the header
      const tr1 = new tr();
      for (const item of o.header) {
        const th1 = new th();
        
        if (typeof(item) == "string") {
          th1.Add(new Text(item));
        } else {
          th1.Add(item);
        }

        tr1.Add(th1);
      }
      this.table.Add(new thead().Add(tr1));
    }

    if (o.hover != undefined && o.hover) {
      this.table.AddClass("table-hover");
    } 

    if (o.border != undefined && o.border) {
      this.table.AddClass("table-bordered");
    }

    this.tbody = new tbody();

    this.table.Add(this.tbody);

    this.list = [];

  }
  
  add(o: {
    item: (string|Widget)[]
  }): tr {
    
    const tr1 = new tr();
    
    for (const item of o.item) {
      const th1 = new td();
      
      if (typeof(item) == "string") {
        th1.Add(new Text(item));
      } else {
        th1.Add(item);
      }

      tr1.Add(th1);
    }

    this.tbody.Add(tr1);

    this.list.push(tr1);
    return tr1;
  }

  clear() {
    for (const item of this.list) {
      item.Delete();
    }
    this.list = [];
  }
}


class Grid extends div {
  constructor(o: {}) {
    super();
    super.AddClass("row");
  }
  add(obj: Widget, grid: GridSize[]): Widget{
    const panel = new Panel().AddClass(grid);

    panel.Add(obj);

    super.Add(panel);

    return this;
  }
}

class CardV2 extends div {
  constructor(o: {
    header?: string|Widget,
    body: Widget,
    footer?: Widget,
    bodyPadding?: boolean
  }) {
    super()
    super.AddStyle({
      "background-color": "white",
      "border-radius": "5px",
      "box-shadow": "0 0 2px rgba(0, 0, 0, 0.3)"
    })

    if (o.header != undefined) {
      
      const header = new Panel().AddStyle({
        height: "46.41px",
        "border-bottom": "1px solid #dee2e6",
        "padding": "12px 20px"
      });

      if (typeof(o.header) == "string") {
        header.Html(o.header)
        header.AddStyle({
          "font-size": "17.6px",
          "color": "#212529"
        })
      } else {
        header.Add(o.header);
      }

      super.Add(header);
    }
    
    // add the body
    const bodyPanel = new Panel();
    if (o.bodyPadding != undefined && o.bodyPadding) {
      bodyPanel.AddStyle({
        "padding": "20px"
      });
    }
    bodyPanel.Add(o.body);
    super.Add(bodyPanel);

    if (o.footer != undefined) {
      const footer = new Panel().AddStyle({
        "height": "55px",
        "border-top": "1px solid #dee2e6",
        "padding": "12px 20px"
      });
      footer.Add(o.footer);
      super.Add(footer);
    }
    

  }
}



export {
  Color,
  Size,
  Icons,
  InputType,
  Message,
  Flex,
  GridSize
};

export {
  Form,
  SelectBox,
  AlertMessage,
  Button,
  Html,
  Badge,
  ProgressBar,
  Pagination,
  BreadCrumb,
  Pager,
  ListGroup,
  Card,
  Tab,
  Panel,
  Icon,
  Divider,
  ButtonLink,
  ButtonSplit,
  Label,
  Well,
  Text,
  TextField,
  TextBox,
  TextFieldAddon,
  TextFieldFeedBack,
  Radio,
  CheckBox,
  Row,
  Column,
  Modal,
  Table,
  Grid,
  CardV2
};