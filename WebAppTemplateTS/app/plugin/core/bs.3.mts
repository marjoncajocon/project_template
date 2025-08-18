import { a, button, div, li, span, u, ul, Widget } from "./core.mts";

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

class Tab extends ul {
  list: li[]
  content: div
  constructor(o: {}) {
    
    super();
    super.AddClass(["nav", "nav-tabs"]);

    this.list = [];
    this.content = new div();
  }

  add(title: string|Widget, fn?: () => void) {
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
      });
    }

    this.list.push(ll);
    
    super.Add(ll);
  }
}

class Panel extends div {
  constructor() {
    super();
  }
}

class Icon extends span {
  constructor(icon: Icons) {
    super();
    super.AddClass(["glyphicon", "glyphicon-" + icon])
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
  constructor() {
    super();
    super.AddClass("btn-group");

    const title = new ButtonLink({text: "sample", color: Color.Primary});
    const caret = new ButtonLink({
      text: new span().AddClass("caret"),
      color: Color.Primary
    });
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

    }

    return this;
  }
}

export {
  Color,
  Size,
  Icons
};

export {
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
  ButtonSplit
};