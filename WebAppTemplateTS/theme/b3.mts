import { a, button, col, div, head, img, input, label, li, nav, option, select, span, table, tbody, td, textarea, th, thead, tr, ul, Widget } from "../plugin/core/core.mts";


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
  Muted = 'Muted'
}

enum Size {
  Large = 'lg',
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


    if (text != undefined && typeof(text) == 'string')
      super.Add(new Text( {text: text }));


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
  constructor(option: { icon: Icons}) {
    super();

    const {icon} = option;

    super.AddClass(['glyphicon', `glyphicon-${icon}`]);

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
      aa.Html(item);
      list.Add(aa.AddAttr({ 
        'href': '#'
      }));

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
  constructor(option: { color?: Color, body?: Widget, footer?: Widget, title?: string, header_color?: Color }) {
    super();
    const {color, body, footer, title, header_color} = option;
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
  private list: li[];
  private content: Widget;

  constructor(option: { }) {
    super();
    
    this.list = [];

    this.menu = new ul();
    this.menu.AddClass(['nav', 'nav-tabs']);

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
    body?: Widget
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
      lli.AddClass('active');
      
      if (body != undefined) {
        this.content.Clear();
        this.content.Add(body);
      }

    }


    lli.AddEventListener('click', (e) => {
      this.ClearActive();
      lli.AddClass('active');

      if (body != undefined) {
        this.content.Clear();
        this.content.Add(body);
      }
      e.preventDefault();
    });

    this.menu.Add(lli);


    this.list.push(lli);
    return this;
  }
}


class Textfield extends div {
  public input: input;
  private msg: div
  constructor(option: { 
    title?: string,
    type?: InputType,
    size?: Size,
    placeholder?: string,
    has_feedback?: boolean
  }) {
    super();
    const {title, type, size, placeholder, has_feedback} = option;

    if (has_feedback != undefined && has_feedback)
      super.AddClass('has-success');

    super.AddClass('form-group');

  
    this.input = new input();

    this.input.AddClass('form-control');

    if (size != undefined)
      this.input.AddClass(`form-control-${size}`);
    
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
  constructor(option: {
    color: Color,
    msg?: string|Widget
  }) {
    
    super();
    const {color, msg} = option;

    super.AddClass(['alert', `alert-${color}`]);

    if (msg != undefined && typeof(msg) == 'string') {
      super.Add(new Text({text: msg}));
    } 

  }
}

class Well extends div {
  constructor(option: {size?: Size, content?: string|Widget}) {
    super();

    const {size, content} = option;
    super.AddClass('well');
  
    if (size != undefined) {
      super.AddClass(`well-${size}`);
    }


    if (content != undefined && typeof(content) == 'string') {
      super.Text(content);
    } else if (content != undefined && content instanceof Widget) {
      super.Add(content);
    }

  }
}

class Text extends span {
  constructor(option: {text: string}) {
    super();
    const {text} = option;
    super.Text(text);
  }
}


class Html extends span {
  constructor(option: {text: string}) {
    super();
    const {text} = option;
    super.Html(text);
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
  constructor(option: {
    header: (Widget|string)[],
    scrollable?: boolean,
    striped?: boolean,
    bordered?: boolean,
    hover?: boolean,
    condensed?: boolean
  }) {

    super();
    const {scrollable, striped, bordered, hover, condensed, header} = option;
    if (scrollable != undefined && scrollable)
      super.AddClass('table-responsive');

    this.table = new table();
    this.table.AddClass('table');


    if (striped != undefined && striped)
      this.table.AddClass('table-striped');

    if (bordered != undefined && bordered) 
      this.table.AddClass('table-bordered');
    
    if (hover != undefined && hover)
      this.table.AddClass('table-hover');

    if (condensed != undefined && condensed) 
      this.table.AddClass('table-condensed');


    // create a header
    const ttr = new tr();
    for (const item of header) {
      const tth = new th();
      
      if (typeof(item) == 'string') {
        tth.Text(item);
      } else if (item instanceof Widget) {
        tth.Add(item);
      }

      ttr.Add(tth);
    }
    this.table.Add(new thead().Add(ttr));
    // end create header
    this.tbody = new tbody();

    this.table.Add(this.tbody);
  

    super.Add(this.table);
  }

  ClearItem() {
    this.tbody.Clear();
    return this;
  }

  AddItem(option: {
    item: (string|Widget)[],
    color?: Color
  }) {
    const {item, color} = option;

    const ttr = new tr();
    for (const o of item) {
      const ttd = new td();
        
      if (typeof(o) == 'string') {
        ttd.Text(o);
      } else if (o instanceof Widget) {
        ttd.Add(o);
      }

      ttr.Add(ttd);
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
    super.AddClass(`form-group`);
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
    super.AddClass(`form-group`);
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
    super.AddClass(`form-group`);
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
  constructor(option: { size?: Size, title?: string, multiple?: boolean }) {
    super();
    const {size, title, multiple} = option;

    super.AddClass('form-group');
    this.input = new select();

    
    this.input.AddClass('custom-select');

    if (size != undefined)
      this.input.AddClass(`input-${size}`);
    
    if (title != undefined) {
      
      const lbl = new label();
      lbl.Text(title);

      super.Add(lbl);

    }
      

    if (multiple != undefined && multiple) 
      this.input.AddAttr({multiple: ''});

    super.Add(this.input);
    
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



class Navbar extends nav {
  constructor(option: { title?: string|Widget, right_menu?: Widget[], fixed?: boolean }) {
    super();

    const {title, right_menu, fixed} = option;



    super.AddClass(['navbar', 'navbar-default']);


    const container = new div().AddClass('container-fluid');

    if (title != undefined) {
      /// draw the title
      const header = new div().AddClass('navbar-header');
      const haa = new a();
      haa.AddClass('navbar-brand');
      haa.AddAttr({ href: '#' });
      if (typeof(title) == 'string')
        haa.Html(title);
      else if (title instanceof Widget)
        haa.Add(title);
      
      header.Add(haa);
      container.Add(header);
    }


    if (right_menu != undefined) {
      /// drawing the right page
      // example button like sign out or notifications
      const uul = new ul();

      for (const item of right_menu) {
        const lli = new li(); 
        
        lli.Add(item);

        uul.Add(lli);
      }    

      uul.AddClass(['nav', 'navbar-nav', 'navbar-right']);
      container.Add(uul);
    }
    

    super.Add(container);
  }
}

class Grid extends div {
  row: div
  constructor(option: { 
    item: Widget[],
    size: GridSize[]
  }) {
    super();
    super.AddClass('container-fluid');

    this.row = new div();
    this.row.AddClass('row');

   
    const {item, size} = option;
    
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
    color?: Color,
    image?: string,
    network_image?: string,
    width?: number,
    height?: number
  }) {
    super();

    const {color, network_image, image, width, height} = option;

    if (color != undefined)
      super.AddClass(`bg-${color}`);

    if (width != undefined)
      super.AddStyle({width: `${width}px`});

    if (height != undefined)
      super.AddStyle({height: `${height}px`});

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


export { Color, Size, Icons, InputType, Corner, GridSize, ButtonVariant, SpinnerVariant }

export {
  Switch,
  Spinner,
  Panel,
  Grid,
  Dialog,
  Navbar,
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
  Alerts
};


// for row implementation
// .row {
//   display: flex;                /* Enables flex context for all its children */
//   justify-content: space-between; /* Align children with space between them */
//   align-items: center;         /* Center content vertically */
//   padding: 10px;              /* Add some padding */
//   background-color: #f2f2f2;  /* Background color for the row */
// }
// .item {
//   padding: 20px;              /* Padding around items */
//   background-color: #4CAF50;  /* Background color for items */
//   color: white;               /* Text color */
//   border-radius: 5px;        /* Rounded corners */
// }

// for columen implementation

// .column {
//   display: flex;                /* Enables flex context for all its children */
//   flex-direction: column;      /* Align items vertically */
//   align-items: center;         /* Center items horizontally */
//   padding: 10px;              /* Add some padding */
//   background-color: #e7e7e7;  /* Background color for the column */
// }
// .item {
//   padding: 20px;              /* Padding around items */
//   background-color: #4CAF50;  /* Background color for items */
//   color: white;               /* Text color */
//   border-radius: 5px;        /* Rounded corners */
//   margin: 10px 0;            /* Margin between items */
// }