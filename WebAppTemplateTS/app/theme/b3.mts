import { Chart } from "../plugin/core/chartjs";
import { a, button, canvas, col, div, h3, h4, h5, head, header, img, input, label, li, nav, option, select, span, table, tbody, td, textarea, th, thead, tr, ul, Widget } from "../plugin/core/core.mts";
import { InputMask } from "../plugin/core/imask";


enum ChartType {
  LINE = 'line',
  BAR = 'bar',
  RADAR = 'radar',
  DOUGHNUT = 'doughnut',
  PIE ='pie',
  BUBBLE ='bubble',
  SCATTER ='scatter',
  POLAR_AREA = 'polarArea'
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

enum Theme {
  Light = 'light',
  Dark = 'dark'
}

enum ValueRange {
  Auto = 'auto',
  Zero = '0',
  One = '1',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5'
}

enum Direction {
  Up = 'up',
  Down = 'down',
  Right = 'right',
  Left = 'left'
}

enum Position {
  Top = 'top',
  Left = 'left',
  Bottom = 'bottom',
  Right = 'right',
  BaseLine = 'baseline',
  Middle = 'middle'
}

enum Size {
  Large = 'lg',
  ExtraLarge = 'xl',
  Small = 'sm',
  Medium = 'md',
  ExtraSmall = 'xs'
}

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

enum Status {
  Ok = "Okay",
  Error = "Not Okay",
  Warning = "Warning"
}

enum Corner {
  Rounded = 'rounded',
  Thumbnail = 'thumbnail',
  Circle = 'circle'
}

enum Resource {
  Network = 1,
  Local = 2
}

enum GridSize {
  Phone1 = 'col-xs-1',
  Phone2 = 'col-xs-2',
  Phone3 = 'col-xs-3',
  Phone4 = 'col-xs-4',
  Phone5 = 'col-xs-5',
  Phone6 = 'col-xs-6',
  Phone7 = 'col-xs-7',
  Phone8 = 'col-xs-8',
  Phone9 = 'col-xs-9',
  Phone10 = 'col-xs-10',
  Phone11 = 'col-xs-11',
  Phone12 = 'col-xs-12',

  Tablet1 = 'col-sm-1',
  Tablet2 = 'col-sm-2',
  Tablet3 = 'col-sm-3',
  Tablet4 = 'col-sm-4',
  Tablet5 = 'col-sm-5',
  Tablet6 = 'col-sm-6',
  Tablet7 = 'col-sm-7',
  Tablet8 = 'col-sm-8',
  Tablet9 = 'col-sm-9',
  Tablet10 = 'col-sm-10',
  Tablet11 = 'col-sm-11',
  Tablet12 = 'col-sm-12',

  Laptop1 = 'col-md-1',
  Laptop2 = 'col-md-2',
  Laptop3 = 'col-md-3',
  Laptop4 = 'col-md-4',
  Laptop5 = 'col-md-5',
  Laptop6 = 'col-md-6',
  Laptop7 = 'col-md-7',
  Laptop8 = 'col-md-8',
  Laptop9 = 'col-md-9',
  Laptop10 = 'col-md-10',
  Laptop11 = 'col-md-11',
  Laptop12 = 'col-md-12',

  Desktop1 = 'col-lg-1',
  Desktop2 = 'col-lg-2',
  Desktop3 = 'col-lg-3',
  Desktop4 = 'col-lg-4',
  Desktop5 = 'col-lg-5',
  Desktop6 = 'col-lg-6',
  Desktop7 = 'col-lg-7',
  Desktop8 = 'col-lg-8',
  Desktop9 = 'col-lg-9',
  Desktop10 = 'col-lg-10',
  Desktop11 = 'col-lg-11',
  Desktop12 = 'col-lg-12'
}

enum ButtonVariant {
  Outlined = 'outline'
}

enum SpinnerVariant {
  Border = 'border',
  Grow = 'grow'
}

enum JustifyContent {
  Start = 'start',
  End  = 'end',
  Center = 'center',
  Between = 'between',
  Around = 'around'
}

class Button extends button {
  private spin: span;
  constructor(option: {
    text?: string|Widget,
    color?: Color,
    block?: boolean,
    active?: boolean,
    size?: Size,
    prefix_icon?: Icons,
    suffix_icon?: Icons,
    variant?: ButtonVariant,
    spinner?: {
      variant?: SpinnerVariant,
      size?: Size
    } 
  }) {
    super();

    const { text, color, block, active, size, prefix_icon, suffix_icon, variant, spinner } = option;
    
   
    this.spin = new span();
    if (spinner != undefined) {
      
      this.spin = new span();
      this.spin.AddStyle({marginRight: '2px', marginLeft: '2px'});
      if (spinner.variant != undefined) {
        this.spin.AddClass(`spinner-${spinner.variant}`);
      } else {
        // default
        this.spin.AddClass(`spinner-${SpinnerVariant.Border}`);
      }

      if (spinner.size != undefined) {
        this.spin.AddClass(`spinner-${spinner.variant}-${spinner.size}`);
      } else {
        this.spin.AddClass(`spinner-${SpinnerVariant.Border}-${Size.Small}`);
      }

      super.Add(this.spin);
    }

    if (prefix_icon != undefined) {
      const icon = new Icon({icon: prefix_icon});
      super.Add(icon);
      if (text != undefined) icon.AddStyle({marginRight: '5px'});
    }

    if (text != undefined && typeof(text) == 'string')
      super.Add(new Text( {text: text }));
    
    if (text != undefined && text instanceof Widget)
      super.Add(text);


    if (suffix_icon != undefined) {
      const icon = new Icon({icon: suffix_icon});
      super.Add(icon);
      if (text != undefined) icon.AddStyle({marginLeft: '5px'});
    }

    super.AddClass('btn');

    if (color != undefined) 
      if (variant != undefined)
        super.AddClass(`btn-${variant}-${color}`);
      else
        super.AddClass(`btn-${color}`)

    if (block != undefined && block)
      super.AddClass('btn-block')

    if (active != undefined && active) 
      super.AddClass('active');
    else if (active != undefined && !active) 
      super.AddClass('disabled')

    if (size != undefined)
      super.AddClass(`btn-${size}`)

  
    this.HideLoader();
  

  }

  ShowLoader() {
    this.Disabled();
    this.spin.Show();
    return this;
  }

  HideLoader() {
    this.Enabled();
    this.spin.Hide();
    return this;
  }

  Disabled() {
    super.AddAttr({
      disabled: ''
    });

    return this;
  }

  Enabled() {
    super.DeleteAttr('disabled');
    return this;
  }

  PopOver(option: {
    header: string|Widget,
    body: string|Widget
  }) {

    // const {header, body} = option;

    super.AddEventListener('click', (e) => {

      // this is use for debugging purpose only
      // we will try to create a popover or tooltip in the future
      // using this will help us to build dynamic tooltip position and 
      // popover positioning
      
      console.dir(`TOP:${this.control.offsetTop} - LEFT: ${this.control.offsetLeft} - WIDTH:${this.control.clientWidth} - HEIGHT:${this.control.clientHeight}`);
    
    });



    return this;
  }

}



class ButtonGroup extends div {
  constructor(option: {
    list: Button[],
    justify?: boolean,
    vertical?: boolean
  }) {
    super();

    const { list, justify, vertical } = option;
    if (vertical != undefined && vertical)
      super.AddClass('btn-group-vertical');
    else 
      super.AddClass('btn-group');
    


    for (const item of list) 
      super.Add(item);

    if (justify != undefined && justify) 
      super.AddClass('btn-group-justified')

  }
}


class Badge extends span {
  constructor(option: {text: string|Widget, color?: Color, pill?: boolean}) {
    super();

    const {text, color, pill} = option;

    if (typeof(text) == 'string')
      super.Text(text)

    if (color != undefined)
      super.AddClass(`badge-${color}`);

    if (pill != undefined && pill)
      super.AddClass(`badge-pill`)
    
  }
}

class Icon extends span {
  gicon: Icons
  constructor(option: { icon: Icons, size?: number}) {
    super();

    const {icon, size} = option;

    super.AddClass(['glyphicon', `glyphicon-${icon}`]);

    if (size != undefined) {
      super.AddStyle({
        fontSize: `${size}px`
      });
    }

    this.gicon = icon;

  }

  Update(option: {icon: Icons}) {
    const {icon} = option;

    super.DeleteClass(`glyphicon-${this.gicon}`);
    super.AddClass(['glyphicon', `glyphicon-${icon}`]);
    
    this.gicon = icon;
    return this;
  }
}

class Label extends span {
  constructor(option: { text: string|Widget, color?: Color }) {
    super();

    const {text, color} = option;

    super.AddClass('label');

    if (typeof(text) == 'string')
      super.Text(text)


    if (color != undefined) 
      super.AddClass(`label-${color}`);

  }
}

class ProgressBar extends div {
  bar: div
  constructor(option: {color: Color, striped?: boolean, animate?: boolean}) {
    super();
    
    const {color, striped, animate} = option;

    super.AddClass('progress');

    this.bar = new div();
    this.bar.AddClass('progress-bar');
    this.bar.AddClass(`bg-${color}`);
    this.bar.AddStyle({ width: '0%' });

    if (striped != undefined && striped) 
      this.bar.AddClass(`progress-bar-striped`);

    if (animate != undefined && animate)
      this.bar.AddClass(`progress-bar-animated`);

    super.Add(this.bar);

  }

  UpdateText(percent: number, text: string = '') {

    this.bar.AddAttr({
      'aria-valuenow': percent.toString()
    });

    this.bar.AddStyle({ width: `${percent}%` });

    if (text != '')
      this.bar.Text(`${percent} ${text}`);

    return this;
  }
}

class Pagination extends ul {

  private items: ul[];
  private changeCallback: (value: number) => void;
  
  constructor(option: {
    onchange?: (value: number) => void
    size?: Size
  }) {
    super();
    const {onchange, size} = option;

    super.AddClass(`pagination`);
    super.AddStyle({marginBottom: '0px'});

    if (size != undefined) 
      this.AddClass(`pagination-${size}`);

    this.items = [];
    
    if (onchange != undefined)
      this.changeCallback = onchange;
  }

  AddItem(item: number|number[]) {
    // <li><a href="#">1</a></li>


    if (typeof(item) == 'number') {
      const link = new a()
      link.AddAttr({ href: '#' }).Text(item.toString());
      link.AddClass(`page-link`);
      
      
      const ww = new li().Add(link);
      ww.AddClass(`page-item`);
      
      ww.AddEventListener('click', (e) => {
        this.ClearActive();
        ww.AddClass('active');
        this.changeCallback(item);
        e.preventDefault();
      });

      super.Add(ww);
      this.items.push(ww);
      
    } 
    else if (item instanceof Array)
      for (const b of item) { 
        
        const link = new a();
        link.AddAttr({ href: '#' }).Text(b.toString()); 
        link.AddClass(`page-link`);

        
        const ww = new li().Add(link);
        ww.AddClass(`page-item`);
        ww.AddEventListener('click', (e) => {
          this.ClearActive();
          ww.AddClass('active');
          this.changeCallback(b);
          e.preventDefault();
        });

        super.Add(ww);
        this.items.push(ww);
      }
    
    
    return this;
  }

  ClearActive() {
    for (const item of this.items) 
      item.DeleteClass('active');
  }

  ClearItem() {
    this.items.length = 0;
    super.Clear();
  }

}


class BreadCrumb extends ul {
  constructor(option: { menu: string[] }) {
    super();

    const { menu } = option;

    super.AddClass('breadcrumb');
    
    for (const item of menu) {
    
      const list = new li();
      list.AddClass('breadcrumb-item');

      const aa = new a();
      aa.AddAttr({href: '#'});
      aa.Html(item);
      list.Add(aa);

      list.AddEventListener('click', (e) => {
        e.preventDefault();
      });

      super.Add(list);

    }
  }
}

class ListGroup extends ul {
  constructor(option: {list?: Widget[], horizontal?: boolean}) {
    super();
    super.AddClass('list-group');

    const { list, horizontal } = option;

    // if there is list of item then add it
    if (list != undefined) 
      for (const item of list)
        this.AddItem(item);

    if (horizontal != undefined && horizontal)
      super.AddClass('list-group-horizontal');

  }

  AddItem(item: Widget) {
    const _li = new li();
    _li.AddClass('list-group-item');
    _li.Add(item);
    super.Add(_li);

    return this;
  }
}

class Card extends div {
  constructor(option: { color?: Color, body?: Widget, footer?: Widget, title?: string, header_color?: Color, bodyPadding?: number }) {
    super();
    const {color, body, footer, title, header_color, bodyPadding} = option;
    super.AddClass(`card`);

    
    if (color != undefined) super.AddClass(`bg-${color}`);

    const head = new div().AddClass('card-header');

    if (header_color != undefined) 
      head.AddClass(`bg-${header_color}`);
    
    if (title != undefined) 
      head.Text(title);

    const content = new div().AddClass('card-body');
    if (body != undefined) 
      content.Add(body)

    if (bodyPadding != undefined) 
      content.AddStyle({padding: `${bodyPadding}px`});
    

    if (title != undefined)
      super.Add(head);

    

    super.Add(content);

    if (footer != undefined) {
      const foot = new div().AddClass('card-footer');

      foot.Add(footer);
      super.Add(foot);
    }

  }
}

class BasicTab extends div {
  private menu: ul;
  private list: a[];
  private content: Widget;

  constructor(option: { pill?:boolean }) {
    super();
    
    const {pill} = option;
    this.list = [];

    this.menu = new ul();
    this.menu.AddClass('nav');

    if(pill != undefined && pill) {
      this.menu.AddClass('nav-pills');
    } else {
      this.menu.AddClass('nav-tabs');
    }

    this.content = new div();

    super.Add(this.menu);
    super.Add(this.content);

  }

  ClearActive() {
    for (const item of this.list) 
      item.DeleteClass('active');
    return this;
  }

  AddItem(option: {
    title: string,
    active?: boolean,
    body?: (obj: div) => void
  }) {
    const { title, active, body } = option;

    const lli = new li();
    const aa = new a();
    aa.AddAttr({ 
      href: '#'
    });
    aa.AddClass('nav-link');
    aa.Text(title);
    lli.Add(aa);
    lli.AddClass('nav-item');

    if (active != undefined && active) {
      aa.AddClass('active');
      
      if (body != undefined) {
        this.content.Clear();
        //this.content.Add(body);
        body(this.content);
      }

    }


    lli.AddEventListener('click', (e) => {
      this.ClearActive();
      aa.AddClass('active');

      if (body != undefined) {
        this.content.Clear();
        //this.content.Add(body);
        body(this.content);
      }
      e.preventDefault();
    });

    this.menu.Add(lli);


    this.list.push(aa);
    return this;
  }
}


class Textfield extends div {
  /*
  
  MASKING GUIDE: 
    where definitions are:
    
    0 - any digit
    a - any letter
    * - any char
    
    other chars which is not in custom definitions supposed to be fixed
    [] - make input optional
    {} - include fixed part in unmasked value
    ` - prevent symbols shift back

    If definition character should be treated as fixed it should be escaped by \\ (E.g. \\0).
  
  */ 
  public input: input;
  private msg: div
  private mask
  constructor(option: { 
    title?: string,
    type?: InputType,
    size?: Size,
    placeholder?: string,
    has_feedback?: boolean,
    InputGroup?: {
      prepend: boolean,
      group: Widget,
      size?: Size
    },
    imask?: {
      option: {
        
      } 
    }
  }) {
    super();
    const {title, type, size, placeholder, has_feedback, InputGroup, imask} = option;

    this.input = new input();

    if (InputGroup != undefined) {
      // here is for input group
      super.AddClass('input-group');
      
      if (InputGroup.size != undefined) 
        super.AddClass(`input-group-${InputGroup.size}`);

      this.input.AddAttr({
        type: 'text',
        class: 'form-control'
      });

      if (type != undefined)
        this.input.AddAttr({type: type});
  
      if (placeholder != undefined)
        this.input.AddAttr({placeholder: placeholder});

      
      const group_append = new div().AddClass('input-group-append');

      if (InputGroup.group instanceof Text || InputGroup.group instanceof CheckBox || InputGroup.group instanceof Radio || InputGroup.group instanceof Switch || InputGroup.group instanceof Icon) {
        group_append.Add(new span().AddClass('input-group-text').Add(InputGroup.group));
      } else {
        group_append.Add(InputGroup.group);
      }
      if (InputGroup.prepend) {
        
        super.Add(group_append);
        super.Add(this.input);
      } else {
    
        super.Add(this.input);
        super.Add(group_append);
      }

      
      

    
    } else {

      if (type != undefined && type == InputType.File) {
        // for specific input file
        
        if (size != undefined)
          super.AddClass(`input-group-${size}`);
        
        if (type != undefined)
          this.input.AddAttr({type: type});
    
        if (placeholder != undefined)
          this.input.AddAttr({placeholder: placeholder});

        super.AddStyle({marginBottom: '0px'});
        super.AddClass('custom-file');
        this.input.AddClass('custom-file-input');
        
        const lbl = new label().AddClass('custom-file-label');
        lbl.Html(`Choose file`);

        super.Add(this.input);
        super.Add(lbl);


      } else {
        // for general input
        if (has_feedback != undefined && has_feedback)
          super.AddClass('has-success');
    
        super.AddClass('form-group');
        super.AddStyle({marginBottom: '0px'});
    
        this.input.AddClass('form-control');
    
        if (size != undefined)
          super.AddClass(`input-group-${size}`);
        
        if (type != undefined)
          this.input.AddAttr({type: type});
    
        if (placeholder != undefined)
          this.input.AddAttr({placeholder: placeholder});
    
        if (title != undefined) {
          const lbl = new label();
          lbl.AddClass('form-control-label');
          lbl.Text(title);
          super.Add(lbl);
        }
    
        
    
      
        super.Add(this.input);
        this.msg = new div().Hide();
    
        if (has_feedback != undefined && has_feedback) {
        
    
          super.Add(this.msg);
        }
        /// for general input
      }
    }

    if (imask != undefined) {
      
      this.mask = new InputMask(this.input.control, imask.option);
    
    }
  }

  public Dispose(): void {
    if (this.mask != undefined) {
      
      this.mask.destroy();
      delete this.mask;
      console.log('mask destroyed!');
      super.Dispose();
    }
  }
  
  ReadOnly(ok:boolean = true) {
    if (ok)
      this.input.AddAttr({readonly: ''});
    else
      this.input.DeleteAttr('readonly');
  }

  UpdateMaskValue() {
    if (this.mask != undefined) {
      this.mask.updateValue();
      this.mask._onChange();
    }
    return this;
  }

  MaskValue() {
    if (this.mask != undefined) {
      return this.mask.value;
    } 

    return '';
  }

  UnMaskValue() {
    if (this.mask != undefined) {
      return this.mask.unmaskedValue;
    } 

    return '';
  }

  Update(okay: boolean, msg: string): boolean{
    this.msg.Show();
    this.msg.DeleteClass(['valid-feedback', 'invalid-feedback']);
    super.DeleteClass(['has-success', 'has-danger']);
    this.input.DeleteClass(['is-valid', 'is-invalid']);

    this.msg.Text(msg);

    if (okay) {
      this.msg.AddClass('valid-feedback');
      super.AddClass('has-success');
      this.input.AddClass('is-valid');
      return true;
    }

    this.msg.AddClass('invalid-feedback');
    super.AddClass('has-danger');
    this.input.AddClass('is-invalid');
    
    return false;
  }

  ClearFeedBack() {
    this.msg.DeleteClass(['valid-feedback', 'invalid-feedback']);
    super.DeleteClass(['has-success', 'has-danger']);
    this.input.DeleteClass(['is-valid', 'is-invalid']);
    this.msg.Text('');
    return this;
  }

  public AddEventListener(evt: string, fn: EventListenerOrEventListenerObject): Widget {
    this.input.AddEventListener(evt, fn);
    return this;
  }

  GetValue() {
    return this.input.GetValue();
  }

  SetValue(n: string) {
    this.input.AddValue(n);
  }
}


class TextBox extends div {
  input: textarea;
  ico: Icon;
  constructor(option: { 
    title?: string,
    size?: Size,
    placeholder?: string,
    feedback?: boolean
  }) {
    super();
    const {title, size, placeholder, feedback} = option;

    if (feedback != undefined && feedback) {
      super.AddClass('has-feedback');
    }

    super.AddClass('form-group');
    this.input = new textarea();

    this.input.AddClass('form-control');

    if (size != undefined)
      this.input.AddClass(`input-${size}`);
    


    if (placeholder != undefined)
      this.input.AddAttr({placeholder: placeholder});

    if (title != undefined) {
      const lbl = new label();
      lbl.Text(title);
      super.Add(lbl);
    }

    super.Add(this.input);
    
    if (feedback != undefined && feedback) {
      this.ico = new Icon({ icon: Icons.Ok });
      this.ico.AddClass('form-control-feedback');
      this.ico.Hide();
      super.Add(this.ico);
    }
    
  }

  UpdateFeedBack(option: { msg?: string, status: Status }) {
    const {msg, status} = option;

    super.DeleteClass(['has-success', 'has-error', 'has-warning' ]);

    if (status == Status.Ok) {
      super.AddClass('has-success');
      this.ico.Show();
      this.ico.Update({icon: Icons.Ok});
    } else if (status == Status.Error) {
      super.AddClass('has-error');
      this.ico.Update({icon: Icons.Remove});
      this.ico.Show();
    } else if (status == Status.Warning) {
      super.AddClass('has-warning');
      this.ico.Update({icon: Icons.WarningSign});
      this.ico.Show();
    }

  }

  GetValue() {
    return this.input.GetValue();
  }

  SetValue(n: string) {
    this.input.AddValue(n);
  }
}

class Alerts extends div {
  init_color?: Color
  constructor(option: {
    color?: Color,
    msg?: string|Widget
  }) {
    
    super();
    const {color, msg} = option;

    super.AddClass(['alert', `alert-${color}`]);

    if (typeof(msg) == 'string') {
      super.Add(new Text({text: msg}));
    } 

    this.init_color = color;

  }

  Update(option: {color?: Color, msg: string}) {
    

    const {color, msg} = option;
    if (color != undefined) {
      super.DeleteClass(`alert-${this.init_color}`);

      super.AddClass(`alert-${color}`);
    }

    if (typeof(msg) == 'string') {
      super.Clear();
      super.Add(new Text({text: msg}));
    } 

  }
}

class Well extends div {
  constructor(option: {size?: Size, content?: string|Widget}) {
    super();

    const {size, content} = option;
    super.AddClass(['jumbotron', 'jumbotron-fluid']);
    
  
    if (content != undefined && typeof(content) == 'string') {
      super.Text(content);
    } else if (content != undefined && content instanceof Widget) {
      super.Add(content);
    }

  }
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
  constructor(option: {text: string, textColor?: Color}) {
    super();
    const {text, textColor} = option;
    super.Html(text);
    if (textColor != undefined) {
      super.AddClass(`text-${textColor}`);
    }
  
  }
}

class Image extends img {
  constructor(option: {type: Corner}) {
    super();

    const {type} = option;

    super.AddClass(`img-${type}`);

  }
}


class Table extends div {

  // future plan for the table,
  // add a search filter,,
  // add a network support
  // add table to excel download,
  // add table printing
  // add pagination of the table

  private table: table;
  private tbody: tbody;

  private search: Textfield;
  private selectlimit: SelectBox;
  private pagination: Pagination;

  constructor(option: {
    header: (Widget|string)[],
    style?: {[key:string]:string}[],
    scrollable?: boolean,
    striped?: boolean,
    bordered?: boolean,
    hover?: boolean,
    condensed?: boolean,
    size?: Size,
    filter?: {
      type: Resource,
      limit: number
    }, 
    item?: (string|Widget)[][]
  }) {

    super();
    const {scrollable, striped, bordered, hover, condensed, header, size, item, filter, style} = option;
    if (scrollable != undefined && scrollable)
      super.AddClass('table-responsive');

    this.table = new table();
    this.table.AddClass('table');
    
    this.table.AddStyle({
      marginTop: '0px',
      marginBottom: '0px'
    });

    // initialized the limit
    this.search = new Textfield({placeholder: 'Search...', InputGroup: {
      prepend: false,
      group: new Icon({icon: Icons.Search})
    }});

    // initialized the limit
    this.selectlimit = new SelectBox({
      
    });
    
    this.selectlimit.AddStyle({width: '75px'});

    this.selectlimit.AddItem({key: '10', value: '10'});
    this.selectlimit.AddItem({key: '50', value: '50'});
    this.selectlimit.AddItem({key: '100', value: '100'});
    this.selectlimit.AddItem({key: '500', value: '500'});
    this.selectlimit.AddItem({key: '1000', value: '1000'});


    /// pagination init
    this.pagination = new Pagination({
      onchange: (n) => { 
        console.log(n);
      }
    });
    this.pagination.AddItem([1, 2, 3])

    if (size != undefined)
      this.table.AddClass(`table-${size}`);


    if (striped != undefined && striped)
      this.table.AddClass('table-striped');

    if (bordered != undefined && bordered) 
      this.table.AddClass('table-bordered');
    
    if (hover != undefined && hover)
      this.table.AddClass('table-hover');

    if (condensed != undefined && condensed) 
      this.table.AddClass('table-condensed');


    // create a header
    let i = 0;
    const ttr = new tr();
    for (const item of header) {
      const tth = new th();
      
      if (typeof(item) == 'string') {
        tth.Text(item);
      } else if (item instanceof Widget) {
        tth.Add(item);
      }

      if (typeof(style) != 'undefined') {
        if (typeof(style[i]) != 'undefined') {
          tth.AddStyle(style[i]);  
        }
      }

      ttr.Add(tth);
      i++;
    }
    this.table.Add(new thead().Add(ttr));
    // end create header
    this.tbody = new tbody();

    this.table.Add(this.tbody);

    // initialized! 

    if (item != undefined) {
      
      const len = item.length;
      for (let i = 0; i < len; i++ ){
        const jitem = item[i];
        this.AddItem({item: jitem});
      }

      this.Update();

      this.search.AddEventListener('keyup', () => {
        this.Update();
      });

      this.selectlimit.AddEventListener('change', () => {
        this.Update();
      });

    }

    if (filter != undefined) {
      this.search.AddStyle({width: '150px'})
      super.Add([new Row({
          reverse: true,
          widgets: [this.selectlimit, new Box({width: 5}), this.search]
        }),
        new Box({height: 1})
      ]);

      super.Add(this.table);

      super.Add([
        new Box({height: 1}),
        new Row({
          reverse: true,
          widgets: [ this.pagination ]
        })
      ]);

    } else {

      super.Add(this.table);
    }
  }



  Update() {
    const tr = this.tbody.control.children;
    const tr_len = tr.length;


    // get the current limit
    let limit = 0;
    const cur_limit = this.selectlimit.GetValue();
    if (typeof(cur_limit) == 'string')
      limit = parseInt(cur_limit);

    // temporary hide all the tr    
    for (let i = 0; i < tr_len; i++) {
      const item = tr[i];
      item['style'].display = 'none';
    }

    /// searching
    for (let i = 0; i < tr_len; i++) {
      const item = tr[i];
      const content = item.textContent?.toLowerCase();
      const search = this.search.GetValue().toString().toLowerCase();

      if (content != undefined) {
        if (content.indexOf(search) > -1) {
          item['style'].display = '';
          if (i + 1 >= limit) break; // break the loop 
        }
      }

    }
    
  }

  ClearItem() {
    this.tbody.Clear();
    return this;
  }

  AddItem(option: {
    item: (string|Widget)[],
    color?: Color,
    style?: {[key:string]: string}[]
  }) {
    const {item, color, style} = option;
    let i = 0;

    const ttr = new tr();
    for (const o of item) {
      const ttd = new td();
        
      if (typeof(o) == 'string') {
        ttd.Text(o);
      } else if (o instanceof Widget) {
        ttd.Add(o);
      }

      if (typeof(style) != 'undefined') {
        if (typeof(style[i]) != 'undefined') {
          ttd.AddStyle(style[i]);  
        }
      }

      ttr.Add(ttd);

      i++;
    }

    if (color != undefined) {
      ttr.AddClass(color);
    }

    this.tbody.Add(ttr);
  
    return ttr;

  }
}

class CheckBox extends div {
  check: input
  constructor(option: {title?: string, key: string}) {
    super();
    const {title, key} = option;
    
    //super.AddClass(`form-group`);

    this.check = new input();
    this.check.AddClass('custom-control-input');
    this.check.AddAttr({ type: 'checkbox'});

    const lbl = new div();
    lbl.AddClass(['custom-control', 'custom-checkbox']);

    lbl.Add(this.check);

    this.check.AddAttr({id: key});

    super.Add(lbl);

    if (title != undefined) {
      const l = new label();
      l.AddAttr({for: key});
      l.Text(title);
      l.AddClass('custom-control-label');
      lbl.Add(l);
    }
  }

  SetValue(v: boolean) {
    if (this.check.control instanceof HTMLInputElement)
      return this.check.control.checked = v;

    return this;
  }

  GetValue() {
    if (this.check.control instanceof HTMLInputElement)
      return this.check.control.checked;

    return false;
  }

  Disabled() {
    this.check.AddAttr({disabled: ""});
    return this;
  }

  Enabled() {
    this.check.DeleteAttr("disabled");
    return this;
  }
}


class Switch extends div {
  check: input
  constructor(option: {title?: string, key: string}) {
    super();
    const {title, key} = option;
    //super.AddClass(`form-group`);
    this.check = new input();
    this.check.AddClass('custom-control-input');
    this.check.AddAttr({ type: 'checkbox'});

    const lbl = new div();
    lbl.AddClass(['custom-control', 'custom-switch']);

    lbl.Add(this.check);

    this.check.AddAttr({id: key});

    super.Add(lbl);

    if (title != undefined) {
      const l = new label();
      l.AddAttr({for: key});
      l.Text(title);
      l.AddClass('custom-control-label');
      lbl.Add(l);
    }
  }

  SetValue(v: boolean) {
    if (this.check.control instanceof HTMLInputElement)
      return this.check.control.checked = v;

    return this;
  }

  GetValue() {
    if (this.check.control instanceof HTMLInputElement)
      return this.check.control.checked;

    return false;
  }

  Disabled() {
    this.check.AddAttr({disabled: ""});
    return this;
  }

  Enabled() {
    this.check.DeleteAttr("disabled");
    return this;
  }
}


class Radio extends div {
  check: input
  constructor(option: {title?: string, group: string, key: string}) {
    super();
    const {title, group, key} = option;
    //super.AddClass(`form-group`);
    this.check = new input();
    this.check.AddClass('custom-control-input');
    this.check.AddAttr({ type: 'radio'});
    this.check.AddAttr({id: key});

    const dv = new div().AddClass(['custom-control', 'custom-radio']);
    dv.Add(this.check);
    super.Add(dv);

    if (title != undefined) {
      const lbl = new label();
      lbl.AddClass('custom-control-label');
      lbl.Text(title);
      lbl.AddAttr({
        for: key
      });
      dv.Add(lbl);
    }

    if (group != undefined) 
      this.check.AddAttr({name: group}); 
    
    

  }

  SetValue(v: boolean) {
    if (this.check.control instanceof HTMLInputElement)
      return this.check.control.checked = v;

    return this;
  }

  GetValue() {
    if (this.check.control instanceof HTMLInputElement)
      return this.check.control.checked;

    return false;
  }

  Disabled() {
    this.check.AddAttr({disabled: ""});
    return this;
  }

  Enabled() {
    this.check.DeleteAttr("disabled");
    return this;
  }
}

class SelectBox extends div {
  input: select
  search_container: Panel
  items: {key: string, value:string }[]
  item_panel: Panel
  constructor(option: { size?: Size, title?: string, multiple?: boolean, placeholder?: string, search?: {
    type: Resource,
    icon?: Icons,
    maxHeight?: number
  } }) {
    super();
    const {size, title, multiple, search, placeholder} = option;

    super.AddClass('form-group');
    super.AddStyle({marginBottom: '0px', position: 'relative'});
    this.input = new select();

    
    this.input.AddClass('custom-select');

    if (size != undefined)
      this.input.AddClass(`input-${size}`);
    
    if (title != undefined) {
      
      const lbl = new label();
      lbl.Text(title);

      super.Add(lbl);

    }

    this.items = [];
      

    if (multiple != undefined && multiple) 
      this.input.AddAttr({multiple: ''});

    super.Add(this.input);


    /// for search logic
    if (search != undefined) {

      super.AddStyle({
        position: 'relative'
      });

      

      this.search_container = new Panel({
        shadow: Size.Small,
        padding: {
          all: ValueRange.Two
        }
      }).AddStyle({
        width: '100%',
        minHeight: '50px',
        position: 'absolute',
        left: '0',
        zIndex: '20',
        border: '1px solid rgb(92 92 92 / 18%)',
        borderRadius: '5px'
      });
      /// positioning the search_container
      if (title != undefined) {
        this.search_container.AddStyle({ top: '21px' });
      } else {
        this.search_container.AddStyle({ top: '0px' });
      }

      this.search_container.AddClass(`bg-${Color.Light}`);

      super.Add(this.search_container);

      this.search_container.Hide();

      // create a search

      const search_item = new Textfield({ 
        title: 'Search', type: InputType.Text,
        InputGroup: {
          prepend: false,
          group: new Icon({icon: Icons.Search})
        }
      });

      if (placeholder != undefined) {
        search_item.input.AddAttr({
          placeholder: placeholder
        });
      }

      this.search_container.Add(search_item);

      this.item_panel = new Panel({ margin: {
        top: ValueRange.One
      }});

      this.item_panel.AddStyle({
        overflowY: 'auto'
      });

      if (search.maxHeight != undefined) {
        this.item_panel.AddStyle({
          maxHeight: `${search.maxHeight}px`
        });
      } else {
        this.item_panel.AddStyle({
          maxHeight: `150px`
        });
      }

      this.search_container.Add(this.item_panel);

      search_item.AddEventListener('keyup', () => {
        const s = search_item.GetValue().toString().toLowerCase();
        
        const children = this.item_panel.control.children;

        for (const child of children) {
          child['style'].display = 'none';
        }


        for (const child of children) {
          if (child.textContent != undefined)
            if (child.textContent.toString().toLowerCase().indexOf(s) > -1) {
              child['style'].display = '';
            }
  
        }

      });

      this.input.AddEventListener('mousedown', (e) => {
        e.preventDefault();
      });

      this.input.AddEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.input.AddAttr({
          disabled: ''
        });

        for (const item of this.items) {
          const pane = new Panel({padding: {all: ValueRange.One}});

          pane.AddEventListener('mouseover', () => {
            pane.AddClass('bg-info');
          });

          pane.AddEventListener('mouseout', () => {
            pane.DeleteClass('bg-info');
          });

          const row = new Row({});

          if (search.icon != undefined) {
            row.AddWidget({widget: new Icon({icon: search.icon}) });
            row.AddWidget({widget: new Box({width: 5}) });
          }
            
          row.AddWidget({widget: new Text({text: item.value})});


          pane.Add(row);


          pane.AddStyle({
            cursor: 'pointer'
          });

          this.item_panel.Add(pane);

          pane.AddEventListener('click', () => {
            //search_item.AddValue(item.value);
            search_item.SetValue(item.value);
            this.input.AddValue(item.key);
            this.bodyEvent(undefined);
          });

        }

        this.search_container.Show();
        
      });

      this.body.addEventListener('click', this.bodyEvent);

      this.search_container.AddEventListener('click', (e) => {
        e.stopPropagation();
      });
    } // end of search

  }

  private bodyEvent = (e)=> {

    this.search_container.Hide();
    this.item_panel.Clear();

    this.input.DeleteAttr('disabled');
  }


  ClearItem() {
    this.input.Clear();
    return this;
  }

  AddItem(obj:{key: string, value: string}) {
    const opt = new option();
    const {key, value} = obj;

    opt.Text(value);
    opt.AddAttr({value: key});

    this.input.Add(opt);

    this.items.push({ key: key, value: value });
    return this;
  }

  SetValue(v: string) {
    this.input.AddValue(v);
    return this;
  }

  GetValue() {
    
    return this.input.GetValue();
  }

  Disabled() {

    this.input.AddAttr({disabled: ""});

    return this;
  }

  Enabled() {
    this.input.DeleteAttr("disabled");
    return this;
  }
}

class Grid extends div {
  row: div
  constructor(option: { 
    item: Widget[],
    size: GridSize[],
    noPadding?: boolean
  }) {
    super();
    // super.AddClass('container-fluid');

    this.row = new div();
    this.row.AddClass('row');

   
    const {item, size, noPadding} = option;
    
    if (noPadding != undefined && noPadding) {
      this.row.AddClass('no-gutters');
    }

    for (const item1 of item) {
      const cell = new div();
      cell.AddClass(size);

      cell.Add(item1);

      this.row.Add(cell);
    }


    super.Add(this.row);


  }

  
}


class Panel extends div {
  constructor(option: {
    isFluid?: boolean,
    backgroundcolor?: Color,
    image?: string,
    network_image?: string,
    width?: number,
    height?: number,
    shadow?: Size,
    textAlign?: Position,
    padding?: {
      all?: ValueRange,
      top?: ValueRange,
      left?: ValueRange,
      bottom?: ValueRange,
      right?: ValueRange
    },
    margin?: {
      all?: ValueRange,
      top?: ValueRange,
      left?: ValueRange,
      bottom?: ValueRange,
      right?: ValueRange
    },
    hide?: Size[]
  }) {
    super();

    const {backgroundcolor, network_image, image, width, height, shadow, textAlign, padding, margin, hide, isFluid} = option;

    if (isFluid != undefined && isFluid) {
      super.AddClass(`container-fluid`);
    }

    if (backgroundcolor != undefined)
      super.AddClass(`bg-${backgroundcolor}`);

    if (width != undefined)
      super.AddStyle({width: `${width}px`});

    if (height != undefined)
      super.AddStyle({height: `${height}px`});

    if (shadow != undefined)
      this.AddClass(`shadow-${shadow}`)

    if (padding != undefined) {
      if (padding.all != undefined) {
        this.AddClass(`p-${padding.all}`); 
      } else {
        if (padding.top != undefined) this.AddClass(`pt-${padding.top}`);
        if (padding.bottom != undefined) this.AddClass(`pb-${padding.bottom}`);
        if (padding.left != undefined) this.AddClass(`pl-${padding.left}`);
        if (padding.right != undefined) this.AddClass(`pr-${padding.right}`);
      }
    }
    
    if (margin != undefined) {
      if (margin.all != undefined) {
        this.AddClass(`m-${margin.all}`); 
      } else {
        if (margin.top != undefined) this.AddClass(`mt-${margin.top}`);
        if (margin.bottom != undefined) this.AddClass(`mb-${margin.bottom}`);
        if (margin.left != undefined) this.AddClass(`ml-${margin.left}`);
        if (margin.right != undefined) this.AddClass(`mr-${margin.right}`);
      }
    }

    if (textAlign != undefined) {
      super.AddStyle({
        display: 'inline-block'
      });
      this.AddClass(`align-text-${textAlign}`);
    }

    if (hide != undefined) {
      const len = hide.length;
      for (let i = 0; i < len; i++) {
        super.AddClass(`d-${hide[i]}-none`);
      }
    }
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

          super.AddClass(`bg-${bgColor}`);
        } else {
          super.AddClass(`bg-${Color.Default}`);
        }


        this.hdr = new div().AddStyle({
            width: '100%',
            height: '50px',
            position: 'relative',
            cursor: 'move',
            paddingLeft: '10px',
            color: 'inherit'
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
            this.hdr.AddClass(`bg-${header.color}`);
        } else {
            // default
            this.hdr.AddClass(`bg-${Color.Info}`);
        }

        if (header != undefined) {
            this.hdr.AddStyle({ paddingTop: '13px' });

            if (header.icon != undefined) {
              this.hdr.Add(new Icon({icon: header.icon}).AddStyle({color: 'inherit'}));
            }

            if (header.title != undefined) {
              this.hdr.Add(new Text({text: header.title}).AddStyle({color: 'inherit'}));
            }
        }


        /*  close btn */
        const btn = new button();
        btn.AddStyle({
            position: 'absolute',
            right: '10px',
            top: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        });
        btn.AddClass(`btn-${Color.Danger}`);
        btn.Add(new Icon({icon: Icons.Remove}));

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

class Spinner extends div {
  constructor(option: {variant: SpinnerVariant, size?: Size, color?: Color}) {
    super();
    const {variant, size, color} = option;

    super.AddClass(`spinner-${variant}`);
    if (color != undefined)
      super.AddClass(`text-${color}`);

    if (size != undefined)
      super.AddClass(`spinner-${variant}-${size}`);

  }
}


// Modal2 base on the bootstrap modal
// Integration part of the bootstrap
class Modal2 extends div {
  private resolvefn;
  private promise;
  private backdrop:div;

  private fheader:div;
  private fbody:div;
  private ffooter:div;

  private modal_content;

  constructor(option: {
    header: Row|string,
    footer?: Widget,
    size?: Size,
    isCenter?: boolean,
    scrollable?: boolean,
    headerColor?: Color
  }) {
    super();
    const {header, footer, size, isCenter, scrollable, headerColor} = option;
    super.AddClass(['modal', 'fade']);
    super.AddStyle({
      display: 'none'
    });

    this.promise = new Promise((resolve) => {
      this.resolvefn = resolve;
    });


    const dialog = new div();
    dialog.AddClass('modal-dialog');

    if (size != undefined) {
      dialog.AddClass(`modal-${size}`);
    }

    if (isCenter != undefined && isCenter) {
      dialog.AddClass('modal-dialog-centered');
    }

    if (scrollable != undefined && scrollable) {
      dialog.AddClass('modal-dialog-scrollable');
    }

    this.modal_content = new div();
    this.modal_content.AddClass('modal-content');

    dialog.Add(this.modal_content);
    // draw the header, body and the footer
    // this area is part of the modal_content variable
    this.fheader = new div().AddClass('modal-header');
    this.fbody = new div().AddClass('modal-body');
    this.ffooter = new div().AddClass('modal-footer');

    if (header != undefined) {

      const modal_title = new div().AddClass('modal-title');

      this.fheader.Add(modal_title);

      if (typeof(header) == 'string') {
        modal_title.Add(new Text({text: header}));
      } else if (header instanceof Row) {
        modal_title.Add(header);
      }

      this.modal_content.Add(this.fheader);

      const close = new button().AddClass('close');
      close.AddAttr({type: 'button'});
      close.Add(new Icon({icon: Icons.RemoveCircle}));

      close.AddEventListener('click', () => {
        this.Close();
      });

      this.fheader.Add(close);

      if (headerColor != undefined) {
        this.fheader.AddClass(`bg-${headerColor}`);
      }

    }

    

    this.modal_content.Add(this.fbody);

    if (footer != undefined) {
      this.modal_content.Add(this.ffooter);

      this.ffooter.Add(footer);
    }

    // end here the header, body and footer

    

    this.backdrop = new div();
    this.backdrop.AddClass(['modal-backdrop', 'show']);
    
    

    super.Add(dialog);
  }

  SetFooter(footer:Row) {
    
    this.modal_content.Add(this.ffooter);

    this.ffooter.Add(footer);
  }

  SetBody(body: Panel) {
    this.fbody.Add(body);
  }

  async Open() {
    setTimeout(() => {
      super.AddClass(['show', 'fade']);
    
    }, 10);
    
    
    this.body.classList.add('modal-open');
    super.AddStyle({display: 'block'});

    this.body.style.overflow = 'hidden';
    this.body.appendChild(this.control);

    setTimeout(() => {
      this.backdrop.AddClass('fade');
    }, 10);

    this.body.appendChild(this.backdrop.control);
    return this.promise;
  }

  Close(resolve: boolean|string|null = null) {

    super.DeleteClass('show');
    this.body.classList.remove('modal-open');
    super.AddStyle({display: 'none'});
    this.backdrop.Delete();


    this.body.style.overflow = '';

    this.resolvefn(resolve);

    this.Delete();
  }

  public Dispose(): void {
    
  }
  
}


class Modal3 extends div {
  private backdrop:div
  private fn: Function

  private cbody: div 
  private card: div
  
  private custom_resolve: object|boolean|string|null = null

  constructor(option: {
    header?: Row,
    footer?: (Button|button)[],
    size?: Size|number,
    isFull?: boolean,
    showBackdrop?: boolean,
    closableBackdrop?: boolean, 
    scrollableBody?: boolean,
    bodyFixedHeight?: boolean
  }) {
    
    super();

    let { 
      showBackdrop, 
      closableBackdrop, 
      isFull, 
      size,
      footer,
      header,
      scrollableBody,
      bodyFixedHeight
    } = option;

    showBackdrop = showBackdrop ?? true;
    closableBackdrop = closableBackdrop ?? false;
    isFull = isFull ?? false;
    size = size ?? Size.Medium; // default to medium screen
  
    scrollableBody = scrollableBody ?? true;
    bodyFixedHeight = bodyFixedHeight ?? true;

    this.custom_resolve = null;

    this.backdrop = new div().AddStyle({
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      zIndex: '3000',
      overflowY: 'auto'
    });

    this.card = new div().AddClass(`bg-${Color.Light}`);

    this.cbody = new div();
  

    if (isFull) {
      this.card.AddStyle({
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: '0px',
        top: '0px'
      })
    } else { 
      this.card.AddStyle({
        maxWidth: 'calc(100% - 10px)',
        borderRadius: '2px'
      });

      if (typeof (size) == 'number') {
        this.card.AddStyle({
          width: `${size}px`
        });
      } else {
      
        if (size == Size.Medium) {
          this.card.AddStyle({
            width: '768px'
          });
        } else if (size == Size.Large) {
          this.card.AddStyle({
            width: '992px'
          });
        } else if (size == Size.ExtraLarge) {
          this.card.AddStyle({
            width: '1200px'
          });
        } else if (size == Size.Small) {
          this.card.AddStyle({
            width: '600px'
          });
        } else if (size == Size.ExtraSmall) {
          this.card.AddStyle({
            width: '360px'
          });
        }


        this.card.AddStyle({
          margin: 'auto',
          marginTop: '10%',
          marginBottom: '10px'
        });

      }
    }

    if (showBackdrop) {
      this.backdrop.AddStyle({
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      });
    }

    if (closableBackdrop) {
      /* if the backdrop is clickable then close the modal */
      this.backdrop.AddEventListener('click', () => this.Close());
      this.card.AddEventListener('click', e => e.stopPropagation());
    }

    /*  Create a footer,body, header now  */
    this.card.AddStyle({
      display: 'flex',
      flexDirection: 'column'
    });
    
    const header_panel = new div().AddStyle({
      width: '100%',
      minHeight: '20px',
      padding: '10px',
      borderBottom: '1px solid #ddd'
    });
    
    this.cbody = new div().AddStyle({
      width: '100%',
      flexGrow: '1'
    });

    const footer_panel = new div().AddStyle({
      width: '100%',
      minHeight: '30px',
      padding: '5px',
      borderTop: '1px solid #ddd'
    });



    // add close button in footer
    if (typeof(footer) != 'undefined') {
      const close = new Button({text: 'Close', color: Color.Danger});
      close.AddEventListener('click', () => this.Close());

      const footer_list:(Button|button|number)[] = [];
      footer_list.push(close);

      for (let i = footer.length - 1; i >= 0; --i) {
        footer_list.push(5);
        footer_list.push(footer[i]);
      } 


      footer_panel.Add(new Row({widgets: footer_list, reverse: true}));
    }
    // end draw footer

    if (typeof(header) != 'undefined') {
      header_panel.Add(header);
      this.card.Add(header_panel);
    }
  

    if (scrollableBody) {
      this.card.AddStyle({
        marginTop: '20px'
      });
      if (bodyFixedHeight) {
        if (!isFull) {
          this.cbody.AddStyle({
            height: 'calc(100vh - 200px)',
            overflowY: 'auto'
          });
        }
      } else {
        this.cbody.AddStyle({
          maxHeight: 'calc(100vh - 200px)',
          overflowY: 'auto'
        });
      }

    }

    this.card.Add([
      this.cbody
    ]);
    if (typeof(footer) != 'undefined') {
      this.card.Add(footer_panel);
    }
    /* End Create a footer, body, header */


    this.backdrop.Add(this.card);

  }

  SetCustomResolve(v: object|boolean|string|null = null) {
    this.custom_resolve = v;
    return this;
  }

  SetBody(obj: Widget) {
    this.cbody.Add(obj);
    return this;
  }

  async Open() {
    
    /* create a promise */
    const promise = new Promise((resolve, reject) => {
      this.fn = resolve;
    });

    this.body.style.overflow = 'hidden';
    this.body.appendChild(this.backdrop.control);

    return promise;
  }

  Close(resolve: object|boolean|string|null = null) {
    this.body.style.overflow = '';
    this.backdrop.Delete();
    this.Delete();
    if (this.custom_resolve != null) {
      this.fn(this.custom_resolve);
    } else {
      this.fn(resolve);
    }
  }

  public Dispose(): void {
    
  }
}

// this modal is a custom modal
// not part of the bootstrap
class Modal extends div {


  private content: div;
  private header_content: div;
  private body_content;
  private resolvefn;
  private promise;

  constructor(option: {width?: number, icon?: Icons, title: string, padding?: number, dismissable?: boolean}) {
    super();
    // make the super as a backdrop
    const { width, icon, title, padding, dismissable } = option;

    super.AddStyle({
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      zIndex: '2000',
      position: 'fixed',
      top: '0',
      left: '0',
      overflowY: 'auto'
    });

    this.content = new div();

    this.content.AddStyle({
      width: '750px',
      maxWidth: '98%',
      minHeight: '230px',
      margin: 'auto',
      marginTop: '10%',
      marginBottom: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)'
    });

    if (width != undefined) 
      this.content.AddStyle({ width: `${width}px` });

    this.content.AddClass(`bg-${Color.Light}`);

    super.Add(this.content);


    this.content.AddEventListener('click', (e) => {
      e.stopPropagation();
    });

    if (dismissable == undefined || dismissable == true)
      this.AddEventListener('click', () => {
        this.Close();
      });

    this.header_content = new div();
    this.body_content = new div();
    /// creating the header
    // header properties
    this.header_content.AddStyle({
      borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
      width: '100%',
      height: '40x',
      borderTopRightRadius: '5px',
      borderTopLeftRadius: '5px',
      paddingTop: '10px',
      paddingBottom: '5px',
      paddingLeft: '10px',
      position: 'relative'
    });

    if (icon != undefined)
      this.header_content.Add(new Icon({icon: Icons.Apple}).AddStyle({marginRight: '5px'}));
    
    if(title != undefined)
      this.header_content.Add(new Text({text: title}));
    //end header properties

    if (padding != null) 
      this.body_content.AddStyle({
        padding: `${padding}px`
      });

    const close = new Button({text: 'Close', color: Color.Danger, prefix_icon: Icons.RemoveCircle, size: Size.Small});
    close.AddStyle({
      position: 'absolute',
      right: '5px',
      top: '5px'
    });
    
    close.AddEventListener('click', () => {
      this.Close(null);
    });

    this.header_content.Add(close);
    


    this.promise = new Promise((resolve) => {
      this.resolvefn = resolve;
    });
    

    this.content.Add(this.header_content);
    this.content.Add(this.body_content);
    
    /// creating the body

  
  }

  AddItem(obj: Widget|Widget[]) {
    if (obj instanceof Widget) {
      this.body_content.Add(obj);
    } else if (obj instanceof Array) {
      for (const item of obj) {
        this.body_content.Add(item);
      }
    }
    return this;
  }

  async Open() {
    this.body.style.overflow = 'hidden';
    this.body.appendChild(this.control);
    return this.promise;
  }

  Close(resolve: boolean|string|null = null) {
    this.Delete();
    this.body.style.overflow = '';

    this.resolvefn(resolve);
  }

  public Dispose(): void {
    
  }
  
}

class Row extends div {
  pad?: number
  constructor(option: {
    widgets?: (Widget|number)[],
    reverse?: boolean,
    justify?: JustifyContent,
    padding?: number
  }|(Widget|number)[]) {
    super();
    
    if (option instanceof Array) {

      super.AddClass(['d-flex', 'flex-row']);

      for (const item of option) {
        if (item instanceof Widget) {
          this.AddWidget({widget: item});
        } else if (typeof(item) == 'number') {
          this.AddWidget({widget: new Box({width: item})});
        }
      }

    } else {
      const {widgets, reverse, justify, padding} = option;
      super.AddClass(['d-flex', 'flex-row']);

      if (justify != undefined) {
        super.AddClass(`justify-content-${justify}`);
      }

      if (reverse != undefined && reverse == true) {
        super.AddClass('flex-row-reverse');
      }

      this.pad = padding;

      if (widgets != undefined) {
        for (const item of widgets) {
          if (item instanceof Widget) {
            this.AddWidget({widget: item});
          } else if (typeof(item) == 'number') {
            this.AddWidget({widget: new Box({width: item})});
          }
        }
      }

    }

  }

  AddWidget(option: {widget: Widget}) {
    const {widget} = option;

    const d = new div();
    if (this.pad != undefined && this.pad > 0)
      d.AddClass(`p-${this.pad}`);
    
    d.Add(widget);
    super.Add(d);

    return this;
  }
}


class Column extends div {
  pad?: number
  constructor(option: {
    widgets: (Widget|number)[],
    reverse?: boolean,
    justify?: JustifyContent,
    padding?: number
  }|(Widget|number)[]) {
    super();
    if (option instanceof Array) {
      super.AddClass(['d-flex', 'flex-column']);

      for (const item of option) {
        const d = new div();
        
        if (item instanceof Widget) {
          this.AddWidget({widget: item});
        } else if (typeof(item) == 'number') {
          this.AddWidget({widget: new Box({height: item})});
        }

        super.Add(d);
      }
    } else { 
      const {widgets, reverse, justify, padding} = option;
      super.AddClass(['d-flex', 'flex-column']);

      if (justify != undefined) {
        super.AddClass(`justify-content-${justify}`);
      }

      if (reverse != undefined && reverse == true) {
        super.AddClass('flex-column-reverse');
      }
      this.pad = padding;
      for (const item of widgets) {
        const d = new div();
        if (padding != undefined && padding > 0)
          d.AddClass(`p-${padding}`);
        
        if (item instanceof Widget) {
          this.AddWidget({widget: item});
        } else if (typeof(item) == 'number') {
          this.AddWidget({widget: new Box({height: item})});
        }

        super.Add(d);
      }

    }

  }

  AddWidget(option: {widget: Widget}) {
    const {widget} = option;

    const d = new div();
    if (this.pad != undefined && this.pad > 0)
      d.AddClass(`p-${this.pad}`);
    
    d.Add(widget);
    super.Add(d);

    return this;
  }
}

class Box extends div {
  constructor(option: {height?: number, width?: number}) {
    super();
    super.AddStyle({ display: 'block' });
    const {width, height} = option;

    if (width != undefined) {
      super.AddStyle({width: `${width}px`});
    }

    if (height != undefined) {
      super.AddStyle({height: `${height}px`});
    }

  }
}

class ButtonDropDown extends div {
  dropmenu: div
  rowCount: number
  constructor(option: {
    hover?: boolean,
    noCaret?: boolean,
    bgColor?: Color
    title?: string|Widget,
    dropDirection?: Direction,
    isNav?: boolean,
    grid?: {
      width: number,
      rowCount?: number
    },
    items?: {
      key: string|Widget,
      fn: (obj: ButtonDropDown) => void,
      type?: string 
    }[]
  }) {
    super();
    super.AddStyle({
      display: 'inline-block'
    });
    const {bgColor, title, dropDirection, items, isNav, grid, noCaret, hover} = option;
    if(dropDirection != undefined) 
      super.AddClass(`drop${dropDirection}`);
    else 
      super.AddClass('dropdown');

    


    let btn: Widget;

    if (isNav != undefined && isNav) {
      btn = new a().AddClass(['nav-link']);
      btn.AddStyle({cursor: 'pointer'});
      btn.AddAttr({href: '#'});
    } else {
      btn = new button().AddClass(['btn']);
      
      /// it must be added in the button
      if (bgColor != undefined) 
        btn.AddClass(`btn-${bgColor}`);
    }

    if (noCaret != undefined) {
      if (!noCaret) {
        btn.AddClass('dropdown-toggle');
      }
    } else {
      btn.AddClass('dropdown-toggle');
    }

    btn.AddAttr({ariaExpanded: 'false'});

    if (typeof(title) == 'string')
      btn.Add(new Text({text: title}));
    else if (title instanceof Widget)
      btn.Add(title);


    this.rowCount = 0;

    
    this.dropmenu = new div().AddClass('dropdown-menu');

    if (hover != undefined && hover) {
      super.AddEventListener('mouseover', () => {
        super.AddClass('show');
        this.dropmenu.AddClass('show');

        if (grid != undefined && grid) { 
          this.dropmenu.AddStyle({
            width: `${grid.width}px`
          });
        }
      });

      super.AddEventListener('mouseout', () => {
        super.DeleteClass('show');
        this.dropmenu.DeleteClass('show');
      });
    }

    if (grid != undefined && grid) {
      this.dropmenu.AddAttr({
        'aria-labelledby': 'themes'
      });

      this.dropmenu.AddStyle({
        width: `${grid.width}px`
      });
    }


    if (grid != undefined && grid.rowCount != undefined) {
      this.rowCount = grid.rowCount;
    }


    btn.AddEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();


      if (!super.HasClass('show')) {
        super.AddClass('show');
        this.dropmenu.AddClass('show');
      } else {
        // super.DeleteClass('show');
        // this.dropmenu.DeleteClass('show');
        // this.dropmenu.DeleteAttr('style');
        this.bodyClick(null);
      }

      if (grid != undefined && grid) { 
        this.dropmenu.AddStyle({
          width: `${grid.width}px`
        });
      }
    });

    this.body.addEventListener('click', this.bodyClick);

    super.Add(btn);
    super.Add(this.dropmenu);

    if (items != undefined) {
      for (const item of items) {
        this.AddItem(item);
      }
    }

  }

  public AddItem(option: {
    key: string|Widget,
    fn: (obj: ButtonDropDown) => void,
    type?: string 
  }) {

    const {key, fn, type} = option;

    const aa = new a().AddClass('dropdown-item');

    if (this.rowCount > 0) {
      aa.AddStyle({
        width: `${100.0 / this.rowCount}%`
      });
    }

    aa.AddAttr({href: '#'});
    this.dropmenu.Add(aa);
    
    if (typeof(key) == 'string') {
      aa.Add(new Text({text: key}));
    }
    else if (key instanceof Widget) {
      aa.Add(key);
    }

    if (fn != undefined) {
      aa.AddEventListener('click', () => {
        fn(this);
      });
    }


    aa.AddEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

    });
  }

  public Close() {
    super.DeleteClass('show');
    this.dropmenu.DeleteClass('show');
    this.dropmenu.DeleteAttr('style');
  
  }

  private bodyClick = (e) => {
    this.Close();
  }

  public Dispose(): void {
    console.log('dropdown disposed!');
    this.body.removeEventListener('click', this.bodyClick);
  }
}


// create a full navigation Widget
class Navbar extends nav {
  nav_content: div;
  nav_list: ul;
  link_list: li[];
  action: div;
  constructor(option: {
    theme?: Theme,
    bgColor?: Color,
    brand?: string|Widget,
    isFixedTop?: boolean,
    isStickyTop?: boolean
  }) {
    super();
    const { brand, bgColor, theme, isFixedTop, isStickyTop } = option;

    super.AddClass(['navbar', 'navbar-expand-lg']);
    
    if (theme != undefined) {
      super.AddClass(`navbar-${theme}`);
    } else {
      super.AddClass('navbar-dark');
    }

    if (bgColor != undefined) {
      super.AddClass(`bg-${bgColor}`);
    }

    if (typeof(brand) == 'string') {
      const aa = new a().AddClass('navbar-brand');
      aa.AddAttr({href: '#'});
      aa.Add(new Text({text: brand}));

      super.Add(aa);
    } else if (brand instanceof Widget) {
      // 
      super.Add(brand);
    }

    if (isFixedTop != undefined && isFixedTop) {
      super.AddClass(`fixed-top`);
    }

    if (isStickyTop != undefined && isStickyTop) {
      super.AddClass(`sticky-top`);
    }
    // add the toggler button 

    const bar = new button();
    bar.AddClass('navbar-toggler');
    bar.Html(`<span class="navbar-toggler-icon"></span>`);
    super.Add(bar);
    // end toggler button
    this.link_list = [];
    this.nav_content = new div().AddClass([
      'collapse', 'navbar-collapse'
    ]);

    this.nav_list = new ul().AddClass(['navbar-nav', 'mr-auto']);
    this.nav_content.Add(this.nav_list);

    super.Add(this.nav_content);

    this.action = new div().AddClass(['form-inline']);

    this.nav_content.Add(this.action);

    bar.AddEventListener('click', () => {
      
      if (!this.nav_content.HasClass('show'))
        this.nav_content.AddClass('show');
      else
        this.nav_content.DeleteClass('show');

    });
  }
  public Close() {
    this.nav_content.DeleteClass('show');
    return this;
  }
  private clearActive() {
    for (const item of this.link_list) {
      item.DeleteClass('active');
    }
  }

  AddLink(option: {
    title: string|Widget,
    fn?: (o: Navbar) => void
  }) {
    const {title, fn} = option;

    const li1 = new li().AddClass('nav-item');
    const a1 = new a().AddClass('nav-link');
    a1.AddAttr({
      href: '#'
    });

    
    if (fn != undefined) {
      a1.AddEventListener('click', (e) => { 
        this.clearActive();
        li1.AddClass('active');
        e.preventDefault();
        fn(this);
      });
    } 

    // add the content title
    if (typeof(title) == 'string') {
      a1.Text(title);
      li1.Add(a1);
    } else if (title instanceof Widget) {
      li1.Add(title);
    }
    // end add the content title
   
    
    this.nav_list.Add(li1);

    this.link_list.push(li1); 

    return this;
  }

  AddAction(option: {widget: Widget}) {
    const {widget} = option;

    this.action.Add(widget);
    return this;
  }
}


class Toast extends div {
  cheader: div;
  cbody: div;
  constructor(option: {
    header: string|Widget,
    body: string|Widget,
    open?: boolean
  }) {
    super();
    const {header, body, open} = option;

    super.AddClass(['toast', 'fade']);
    if (open != undefined && open) {
      super.AddClass('show');
    }


    this.cheader = new div().AddClass('toast-header');

    this.cbody = new div().AddClass('toast-body');

    super.Add([ this.cheader, this.cbody ]);


    if (typeof(header) == 'string') {
      this.cheader.Text(header);
    } else if (header instanceof Widget) {
      this.cheader.Add(header);
    }

    if (typeof(body) == 'string') {
      this.cbody.Text(body);
    } else if (body instanceof Widget) {
      this.cbody.Add(body);
    }

  }

  Open() {
    super.AddClass('show');
    return this;
  }

  Close() {
    super.DeleteClass('show');
    return this;
  }
}


const Alert = async (msg: string|Widget, isError = false) => {
  const modal = new Modal2({
  headerColor: isError ? Color.Danger : Color.Success,
  isCenter: true,
  scrollable:true,
    header: new Row({widgets: [
    new Icon({icon: Icons.Envelope}),
    new Box({width: 10}),
    new Text({text: 'Alert'}),
  
  ]})});

  if (typeof(msg) == 'string') {
    modal.SetBody(new Panel({padding: {all: ValueRange.Two}}).Add(new Html({text: msg})));
  } else if (msg instanceof Widget) {
    modal.SetBody(new Panel({padding: {all: ValueRange.Two}}).Add(msg));
  }
  const okay = new Button({
    color: Color.Primary,
    text: new Row({widgets: [
      new Icon({icon: Icons.Check}),
      new Box({width: 10}),
      new Text({text: 'Okay'})
    ]})
  });

  modal.SetFooter(new Row({widgets: [
    okay
  ]}));

  okay.AddEventListener('click', () => {
    modal.Close(true);
  });

  const res = await modal.Open();
  if (res == null) return false;

  if (res) return true;

  return false;
  
};


const Confirm = async (msg: string|Widget, isError = false) => {
  const modal = new Modal2({
  headerColor: isError ? Color.Warning : Color.Primary,
  isCenter: true,
  scrollable:true,
    header: new Row({widgets: [
    new Icon({icon: Icons.QuestionSign}),
    new Box({width: 10}),
    new Text({text: 'Confirmation'}),
  ]})});

  if (typeof(msg) == 'string') {
    modal.SetBody(new Panel({padding: {all: ValueRange.Two}}).Add(new Html({text: msg})));
  } else if (msg instanceof Widget) {
    modal.SetBody(new Panel({padding: {all: ValueRange.Two}}).Add(msg));
  }
  const okay = new Button({
    color: Color.Primary,
    text: new Row({widgets: [
      new Icon({icon: Icons.Check}),
      new Box({width: 10}),
      new Text({text: 'Okay'})
    ]})
  });

  const close = new Button({
    color: Color.Warning,
    text: new Row({widgets: [
      new Icon({icon: Icons.Check}),
      new Box({width: 10}),
      new Text({text: 'Cancel'})
    ]})
  });

  modal.SetFooter(new Row({widgets: [
    okay, 
    new Box({width: 3}),
    close
  ]}));

  close.AddEventListener('click', () => {
    modal.Close(false);
  });

  okay.AddEventListener('click', () => {
    modal.Close(true);
  });

  const res = await modal.Open();
  if (res == null) return false;

  if (res) return true;

  return false;
  
};

// About chart
class ChartV1 extends canvas {
  private chart
  constructor(option: {
    type: ChartType,
    data: number[],
    label?: string,
    backgroundColor?: string[],
    borderWidth?: number,
    labels: string[],
    borderColor?: string[]
  }) {
    super();

    let {data, label, backgroundColor, borderWidth, labels, borderColor, type} = option;

    if (data == undefined) data = [];
    if (label == undefined) label = '';
    if (backgroundColor == undefined) backgroundColor = [];
    if (borderWidth == undefined) borderWidth = 0;
    if (labels == undefined) labels = [];
    if (borderColor == undefined) borderColor = [];

    this.chart = new Chart(this.control,  {
      type: type, // Chart type
      data: {
        labels: labels, // X-axis labels
        datasets: [{
          label: label,
          data: data, // Data points
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  getChartObject() {
    return this.chart;
  }

  Init(option: {
    labels?:string [],
    data: number[],
    label?: string,
    backgroundColor?: string[],
    borderWidth?: number,
    borderColor?: string[]
  }, index: number = 0) {
    const {data, label, backgroundColor, borderWidth, labels, borderColor} = option;

    this.chart.data.datasets[index].data = data;

    if (label != undefined)
      this.chart.data.datasets[index].label = label;

    if (backgroundColor != undefined) 
      this.chart.data.datasets[index].backgroundColor = backgroundColor;

    if (borderWidth != undefined)
      this.chart.data.datasets[index].borderWidth = borderWidth;

    if (labels != undefined) 
      this.chart.data.labels = labels;

    if (borderColor != undefined)
      this.chart.data.datasets[index].borderColor = borderColor;


  }

  Update() {
    this.chart.update();
  }

  public Dispose(): void {
    this.chart.destroy();
    this.chart = null;
    console.log('clearing chart!');
  }
}

class ListTile extends div {
  constructor(option: {
    title?: string|Widget,
    height?: number,
    paddingLeft?: number,
    letterSpacing?: number,
    curve?: boolean,
    cursor?: boolean,
    backgroundColor?: Color,
    click?: (obj:div) => void
  }) {
    super();
    
    let {title, height, paddingLeft, letterSpacing, curve, cursor, backgroundColor, click} = option;

    if (height == undefined) height = 35;
    if (paddingLeft == undefined) paddingLeft = 10;
    if (letterSpacing == undefined) letterSpacing = 2;
    if (curve == undefined) curve = false;
    if (cursor == undefined) cursor = true;
    if (backgroundColor == undefined) backgroundColor = Color.Light;

    super.AddStyle({
      width: '100%',
      height: `${height}px`,
      boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
      paddingLeft: `${paddingLeft}px`,
      letterSpacing: `${letterSpacing}px`
    });


    if (curve) {
      super.AddStyle({
        borderRadius: '15px'
      });
    }

    if (cursor) {
      super.AddStyle({
        cursor: 'pointer'
      });
    }

    super.AddClass(`bg-${backgroundColor}`);

    if (typeof(click) == 'function') {
      super.AddEventListener('click', () => {
        click(this);
      });
    }

    if (typeof(title) == 'string') {
      super.Add(
        new Column({
          widgets: [new Text({text: title})],
          justify: JustifyContent.Center
        }).AddStyle({height: `${height}px`})
      );
    } else if (title instanceof Widget) {
      super.Add(
        new Column({
          widgets: [title],
          justify: JustifyContent.Center
        }).AddStyle({height: `${height}px`})
      );
    }

  }
}


// Enumeration
export { ChartType, Color, Size, Icons, InputType, Corner, GridSize, ButtonVariant, SpinnerVariant, JustifyContent, Resource, Position, ValueRange, Direction, Theme }


// Classes
export {
  ListTile,
  ChartV1,
  Navbar,
  ButtonDropDown,
  Box,
  Column,
  Row,
  Modal,
  Toast,
  Switch,
  Spinner,
  Panel,
  Grid,
  Dialog,
  SelectBox,
  Radio,
  CheckBox,
  Table,
  Image,
  Well, 
  Html,
  Text,
  Button, 
  ButtonGroup, 
  Icon, 
  Badge, 
  Label, 
  ProgressBar, 
  Pagination, 
  BreadCrumb, 
  ListGroup,
  Card,
  BasicTab,
  Textfield,
  TextBox,
  Status,
  Alerts, 
  Modal2,
  Modal3,
  Alert,
  Confirm
};