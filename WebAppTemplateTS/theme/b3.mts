import { a, button, div, li, span, ul, Widget } from "../plugin/core/core.mts";


enum Color {
  Default = 'default',
  Primary = 'primary',
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
  Link = 'link'
}

enum Size {
  Large = 'lg',
  Small = 'sm',
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

class Button extends button {
  constructor(option: {
    text?: string|Widget,
    color?: Color,
    block?: boolean,
    active?: boolean,
    size?: Size
  }) {
    super();

    const { text, color, block, active, size } = option;
    
    if (text != undefined && typeof(text) == 'string')
      super.Text(text);

    super.AddClass('btn');

    if (color != undefined) 
      super.AddClass(`btn-${color}`)

    if (block != undefined && block)
      super.AddClass('btn-block')

    if (active != undefined && active) 
      super.AddClass('active');
    else if (active != undefined && !active) 
      super.AddClass('disabled')

    if (size != undefined)
      super.AddClass(`btn-${size}`)


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
  constructor(option: {text: string|Widget}) {
    super();

    const {text} = option;

    if (typeof(text) == 'string')
      super.Text(text)
    
  }
}

class Icon extends span {
  constructor(option: { icon: Icons}) {
    super();

    const {icon} = option;

    super.AddClass(['glyphicon', `glyphicon-${icon}`]);

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
    this.bar.AddClass(`progress-bar-${color}`);
    this.bar.AddStyle({ width: '0%' });

    if (striped != undefined && striped) 
      this.bar.AddClass(`progress-bar-striped`);

    if (animate != undefined && animate)
      this.bar.AddClass(`active`);

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
      
      
      const ww = new li().Add(link);
      
      ww.AddEventListener('click', () => {
        this.ClearActive();
        ww.AddClass('active');
        this.changeCallback(item);
      });

      super.Add(ww);
      this.items.push(ww);
      
    } 
    else if (item instanceof Array)
      for (const b of item) { 
        
        const link = new a();
        link.AddAttr({ href: '#' }).Text(b.toString());

        
        const ww = new li().Add(link);
        ww.AddEventListener('click', () => {
          this.ClearActive();
          ww.AddClass('active');
          this.changeCallback(b);
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
      const aa = new a();
      aa.Html(item);
      list.Add(aa.AddAttr({ 
        'href': '#'
      }));

      super.Add(list);

    }
  }
}

class ListGroup extends ul {
  constructor() {
    super();
    super.AddClass('list-group');
  }

  AddItem(item: Widget) {
    const _li = new li();
    _li.Add(item);
    super.Add(_li);

    return this;
  }
}

class Panel extends div {
  constructor(option: { color?: Color, body?: Widget, footer?: Widget, title?: string }) {
    super();
    const {color, body, footer, title} = option;
    super.AddClass(`panel`);

    
    if (color != undefined) super.AddClass(`panel-${color}`);

    const head = new div().AddClass('panel-heading');
    
    if (title != undefined) 
      head.Text(title);

    const content = new div().AddClass('panel-body');
    if (body != undefined) 
      content.Add(body)

    
    super.Add(head);
    super.Add(content);

    if (footer != undefined) {
      const foot = new div().AddClass('panel-footer');
      super.Add(foot);
    }

  }
}

class BasicTab extends div {
  private menu: ul;
  private list: li[];

  constructor(option: { }) {
    super();
    
    this.list = [];

    this.menu = new ul();
    this.menu.AddClass(['nav', 'nav-tabs']);

    super.Add(this.menu);

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
    aa.Text(title);
    lli.Add(aa);

    if (active != undefined && active) 
      lli.AddClass('active');


    lli.AddEventListener('click', () => {
      this.ClearActive();
      lli.AddClass('active');
    });

    this.menu.Add(lli);


    this.list.push(lli);
    return this;
  }
}

export { Color, Size, Icons }

export { 
  Button, 
  ButtonGroup, 
  Icon, 
  Badge, 
  Label, 
  ProgressBar, 
  Pagination, 
  BreadCrumb, 
  ListGroup,
  Panel,
  BasicTab 
};