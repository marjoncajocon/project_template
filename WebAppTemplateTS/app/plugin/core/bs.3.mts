import "./bs.3.css";
import "./icon/css/all.css";
//import "./bootstrap3/css/bootstrap.min.css";
import "./bootstrap3/css/theme-lumen.css";
//import "./bootstrap3/css/theme-united.css";
//import "./bootstrap3/css/theme-spacelab.css";

import { Chart } from "./chartjs";
import { a, button, canvas, center, col, div, fieldset, h4, hr, Http, i, input, label, legend, li, option, select, span, table, tbody, td, textarea, th, thead, tr, u, ul, Widget } from "./core.mts";


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

enum FlexDirection {
  ROW = "row",
  ROW_REVERSE = "row-reverse"
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


enum FaIcons {
    FiveHundredPx = "fa-500px",
    AddressBook = "fa-address-book",
    AddressBookO = "fa-address-book-o",
    AddressCard = "fa-address-card",
    AddressCardO = "fa-address-card-o",
    Adjust = "fa-adjust",
    Adn = "fa-adn",
    AlignCenter = "fa-align-center",
    AlignJustify = "fa-align-justify",
    AlignLeft = "fa-align-left",
    AlignRight = "fa-align-right",
    Amazon = "fa-amazon",
    Ambulance = "fa-ambulance",
    AmericanSignLanguageInterpreting = "fa-american-sign-language-interpreting",
    Anchor = "fa-anchor",
    Android = "fa-android",
    Angellist = "fa-angellist",
    AngleDoubleDown = "fa-angle-double-down",
    AngleDoubleLeft = "fa-angle-double-left",
    AngleDoubleRight = "fa-angle-double-right",
    AngleDoubleUp = "fa-angle-double-up",
    AngleDown = "fa-angle-down",
    AngleLeft = "fa-angle-left",
    AngleRight = "fa-angle-right",
    AngleUp = "fa-angle-up",
    Apple = "fa-apple",
    Archive = "fa-archive",
    AreaChart = "fa-area-chart",
    ArrowCircleDown = "fa-arrow-circle-down",
    ArrowCircleLeft = "fa-arrow-circle-left",
    ArrowCircleODown = "fa-arrow-circle-o-down",
    ArrowCircleOLeft = "fa-arrow-circle-o-left",
    ArrowCircleORight = "fa-arrow-circle-o-right",
    ArrowCircleOUp = "fa-arrow-circle-o-up",
    ArrowCircleRight = "fa-arrow-circle-right",
    ArrowCircleUp = "fa-arrow-circle-up",
    ArrowDown = "fa-arrow-down",
    ArrowLeft = "fa-arrow-left",
    ArrowRight = "fa-arrow-right",
    ArrowUp = "fa-arrow-up",
    Arrows = "fa-arrows",
    ArrowsAlt = "fa-arrows-alt",
    ArrowsH = "fa-arrows-h",
    ArrowsV = "fa-arrows-v",
    AslInterpreting = "fa-asl-interpreting",
    AssistiveListeningSystems = "fa-assistive-listening-systems",
    Asterisk = "fa-asterisk",
    At = "fa-at",
    AudioDescription = "fa-audio-description",
    Automobile = "fa-automobile",
    Backward = "fa-backward",
    BalanceScale = "fa-balance-scale",
    Ban = "fa-ban",
    Bandcamp = "fa-bandcamp",
    Bank = "fa-bank",
    BarChart = "fa-bar-chart",
    BarChartO = "fa-bar-chart-o",
    Barcode = "fa-barcode",
    Bars = "fa-bars",
    Bath = "fa-bath",
    Bathtub = "fa-bathtub",
    Battery = "fa-battery",
    Battery0 = "fa-battery-0",
    Battery1 = "fa-battery-1",
    Battery2 = "fa-battery-2",
    Battery3 = "fa-battery-3",
    Battery4 = "fa-battery-4",
    BatteryEmpty = "fa-battery-empty",
    BatteryFull = "fa-battery-full",
    BatteryHalf = "fa-battery-half",
    BatteryQuarter = "fa-battery-quarter",
    BatteryThreeQuarters = "fa-battery-three-quarters",
    Bed = "fa-bed",
    Beer = "fa-beer",
    Behance = "fa-behance",
    BehanceSquare = "fa-behance-square",
    Bell = "fa-bell",
    BellO = "fa-bell-o",
    BellSlash = "fa-bell-slash",
    BellSlashO = "fa-bell-slash-o",
    Bicycle = "fa-bicycle",
    Binoculars = "fa-binoculars",
    BirthdayCake = "fa-birthday-cake",
    Bitbucket = "fa-bitbucket",
    BitbucketSquare = "fa-bitbucket-square",
    Bitcoin = "fa-bitcoin",
    BlackTie = "fa-black-tie",
    Blind = "fa-blind",
    Bluetooth = "fa-bluetooth",
    BluetoothB = "fa-bluetooth-b",
    Bold = "fa-bold",
    Bolt = "fa-bolt",
    Bomb = "fa-bomb",
    Book = "fa-book",
    Bookmark = "fa-bookmark",
    BookmarkO = "fa-bookmark-o",
    Braille = "fa-braille",
    Briefcase = "fa-briefcase",
    Btc = "fa-btc",
    Bug = "fa-bug",
    Building = "fa-building",
    BuildingO = "fa-building-o",
    Bullhorn = "fa-bullhorn",
    Bullseye = "fa-bullseye",
    Bus = "fa-bus",
    Buysellads = "fa-buysellads",
    Cab = "fa-cab",
    Calculator = "fa-calculator",
    Calendar = "fa-calendar",
    CalendarCheckO = "fa-calendar-check-o",
    CalendarMinusO = "fa-calendar-minus-o",
    CalendarO = "fa-calendar-o",
    CalendarPlusO = "fa-calendar-plus-o",
    CalendarTimesO = "fa-calendar-times-o",
    Camera = "fa-camera",
    CameraRetro = "fa-camera-retro",
    Car = "fa-car",
    CaretDown = "fa-caret-down",
    CaretLeft = "fa-caret-left",
    CaretRight = "fa-caret-right",
    CaretSquareODown = "fa-caret-square-o-down",
    CaretSquareOLeft = "fa-caret-square-o-left",
    CaretSquareORight = "fa-caret-square-o-right",
    CaretSquareOUp = "fa-caret-square-o-up",
    CaretUp = "fa-caret-up",
    CartArrowDown = "fa-cart-arrow-down",
    CartPlus = "fa-cart-plus",
    Cc = "fa-cc",
    CcAmex = "fa-cc-amex",
    CcDinersClub = "fa-cc-diners-club",
    CcDiscover = "fa-cc-discover",
    CcJcb = "fa-cc-jcb",
    CcMastercard = "fa-cc-mastercard",
    CcPaypal = "fa-cc-paypal",
    CcStripe = "fa-cc-stripe",
    CcVisa = "fa-cc-visa",
    Certificate = "fa-certificate",
    Chain = "fa-chain",
    ChainBroken = "fa-chain-broken",
    Check = "fa-check",
    CheckCircle = "fa-check-circle",
    CheckCircleO = "fa-check-circle-o",
    CheckSquare = "fa-check-square",
    CheckSquareO = "fa-check-square-o",
    ChevronCircleDown = "fa-chevron-circle-down",
    ChevronCircleLeft = "fa-chevron-circle-left",
    ChevronCircleRight = "fa-chevron-circle-right",
    ChevronCircleUp = "fa-chevron-circle-up",
    ChevronDown = "fa-chevron-down",
    ChevronLeft = "fa-chevron-left",
    ChevronRight = "fa-chevron-right",
    ChevronUp = "fa-chevron-up",
    Child = "fa-child",
    Chrome = "fa-chrome",
    Circle = "fa-circle",
    CircleO = "fa-circle-o",
    CircleONotch = "fa-circle-o-notch",
    CircleThin = "fa-circle-thin",
    Clipboard = "fa-clipboard",
    ClockO = "fa-clock-o",
    Clone = "fa-clone",
    Close = "fa-close",
    Cloud = "fa-cloud",
    CloudDownload = "fa-cloud-download",
    CloudUpload = "fa-cloud-upload",
    Cny = "fa-cny",
    Code = "fa-code",
    CodeFork = "fa-code-fork",
    Codepen = "fa-codepen",
    Codiepie = "fa-codiepie",
    Coffee = "fa-coffee",
    Cog = "fa-cog",
    Cogs = "fa-cogs",
    Columns = "fa-columns",
    Comment = "fa-comment",
    CommentO = "fa-comment-o",
    Commenting = "fa-commenting",
    CommentingO = "fa-commenting-o",
    Comments = "fa-comments",
    CommentsO = "fa-comments-o",
    Compass = "fa-compass",
    Compress = "fa-compress",
    Connectdevelop = "fa-connectdevelop",
    Contao = "fa-contao",
    Copy = "fa-copy",
    Copyright = "fa-copyright",
    CreativeCommons = "fa-creative-commons",
    CreditCard = "fa-credit-card",
    CreditCardAlt = "fa-credit-card-alt",
    Crop = "fa-crop",
    Crosshairs = "fa-crosshairs",
    Css3 = "fa-css3",
    Cube = "fa-cube",
    Cubes = "fa-cubes",
    Cut = "fa-cut",
    Cutlery = "fa-cutlery",
    Dashboard = "fa-dashboard",
    Dashcube = "fa-dashcube",
    Database = "fa-database",
    Deaf = "fa-deaf",
    Deafness = "fa-deafness",
    Dedent = "fa-dedent",
    Delicious = "fa-delicious",
    Desktop = "fa-desktop",
    Deviantart = "fa-deviantart",
    Diamond = "fa-diamond",
    Digg = "fa-digg",
    Dollar = "fa-dollar",
    DotCircleO = "fa-dot-circle-o",
    Download = "fa-download",
    Dribbble = "fa-dribbble",
    DriversLicense = "fa-drivers-license",
    DriversLicenseO = "fa-drivers-license-o",
    Dropbox = "fa-dropbox",
    Drupal = "fa-drupal",
    Edge = "fa-edge",
    Edit = "fa-edit",
    Eercast = "fa-eercast",
    Eject = "fa-eject",
    EllipsisH = "fa-ellipsis-h",
    EllipsisV = "fa-ellipsis-v",
    Empire = "fa-empire",
    Envelope = "fa-envelope",
    EnvelopeO = "fa-envelope-o",
    EnvelopeOpen = "fa-envelope-open",
    EnvelopeOpenO = "fa-envelope-open-o",
    EnvelopeSquare = "fa-envelope-square",
    Envira = "fa-envira",
    Eraser = "fa-eraser",
    Etsy = "fa-etsy",
    Eur = "fa-eur",
    Euro = "fa-euro",
    Exchange = "fa-exchange",
    Exclamation = "fa-exclamation",
    ExclamationCircle = "fa-exclamation-circle",
    ExclamationTriangle = "fa-exclamation-triangle",
    Expand = "fa-expand",
    Expeditedssl = "fa-expeditedssl",
    ExternalLink = "fa-external-link",
    ExternalLinkSquare = "fa-external-link-square",
    Eye = "fa-eye",
    EyeSlash = "fa-eye-slash",
    Eyedropper = "fa-eyedropper",
    Fa = "fa-fa",
    Facebook = "fa-facebook",
    FacebookF = "fa-facebook-f",
    FacebookOfficial = "fa-facebook-official",
    FacebookSquare = "fa-facebook-square",
    FastBackward = "fa-fast-backward",
    FastForward = "fa-fast-forward",
    Fax = "fa-fax",
    Feed = "fa-feed",
    Female = "fa-female",
    FighterJet = "fa-fighter-jet",
    File = "fa-file",
    FileArchiveO = "fa-file-archive-o",
    FileAudioO = "fa-file-audio-o",
    FileCodeO = "fa-file-code-o",
    FileExcelO = "fa-file-excel-o",
    FileImageO = "fa-file-image-o",
    FileMovieO = "fa-file-movie-o",
    FileO = "fa-file-o",
    FilePdfO = "fa-file-pdf-o",
    FilePhotoO = "fa-file-photo-o",
    FilePictureO = "fa-file-picture-o",
    FilePowerpointO = "fa-file-powerpoint-o",
    FileSoundO = "fa-file-sound-o",
    FileText = "fa-file-text",
    FileTextO = "fa-file-text-o",
    FileVideoO = "fa-file-video-o",
    FileWordO = "fa-file-word-o",
    FileZipO = "fa-file-zip-o",
    FilesO = "fa-files-o",
    Film = "fa-film",
    Filter = "fa-filter",
    Fire = "fa-fire",
    FireExtinguisher = "fa-fire-extinguisher",
    Firefox = "fa-firefox",
    FirstOrder = "fa-first-order",
    Flag = "fa-flag",
    FlagCheckered = "fa-flag-checkered",
    FlagO = "fa-flag-o",
    Flash = "fa-flash",
    Flask = "fa-flask",
    Flickr = "fa-flickr",
    FloppyO = "fa-floppy-o",
    Folder = "fa-folder",
    FolderO = "fa-folder-o",
    FolderOpen = "fa-folder-open",
    FolderOpenO = "fa-folder-open-o",
    Font = "fa-font",
    FontAwesome = "fa-font-awesome",
    Fonticons = "fa-fonticons",
    FortAwesome = "fa-fort-awesome",
    Forumbee = "fa-forumbee",
    Forward = "fa-forward",
    Foursquare = "fa-foursquare",
    FreeCodeCamp = "fa-free-code-camp",
    FrownO = "fa-frown-o",
    FutbolO = "fa-futbol-o",
    Gamepad = "fa-gamepad",
    Gavel = "fa-gavel",
    Gbp = "fa-gbp",
    Ge = "fa-ge",
    Gear = "fa-gear",
    Gears = "fa-gears",
    Genderless = "fa-genderless",
    GetPocket = "fa-get-pocket",
    Gg = "fa-gg",
    GgCircle = "fa-gg-circle",
    Gift = "fa-gift",
    Git = "fa-git",
    GitSquare = "fa-git-square",
    Github = "fa-github",
    GithubAlt = "fa-github-alt",
    GithubSquare = "fa-github-square",
    Gitlab = "fa-gitlab",
    Gittip = "fa-gittip",
    Glass = "fa-glass",
    Glide = "fa-glide",
    GlideG = "fa-glide-g",
    Globe = "fa-globe",
    Google = "fa-google",
    GooglePlus = "fa-google-plus",
    GooglePlusCircle = "fa-google-plus-circle",
    GooglePlusOfficial = "fa-google-plus-official",
    GooglePlusSquare = "fa-google-plus-square",
    GoogleWallet = "fa-google-wallet",
    GraduationCap = "fa-graduation-cap",
    Gratipay = "fa-gratipay",
    Grav = "fa-grav",
    Group = "fa-group",
    HSquare = "fa-h-square",
    HackerNews = "fa-hacker-news",
    HandGrabO = "fa-hand-grab-o",
    HandLizardO = "fa-hand-lizard-o",
    HandODown = "fa-hand-o-down",
    HandOLeft = "fa-hand-o-left",
    HandORight = "fa-hand-o-right",
    HandOUp = "fa-hand-o-up",
    HandPaperO = "fa-hand-paper-o",
    HandPeaceO = "fa-hand-peace-o",
    HandPointerO = "fa-hand-pointer-o",
    HandRockO = "fa-hand-rock-o",
    HandScissorsO = "fa-hand-scissors-o",
    HandSpockO = "fa-hand-spock-o",
    HandStopO = "fa-hand-stop-o",
    HandshakeO = "fa-handshake-o",
    HardOfHearing = "fa-hard-of-hearing",
    Hashtag = "fa-hashtag",
    HddO = "fa-hdd-o",
    Header = "fa-header",
    Headphones = "fa-headphones",
    Heart = "fa-heart",
    HeartO = "fa-heart-o",
    Heartbeat = "fa-heartbeat",
    History = "fa-history",
    Home = "fa-home",
    HospitalO = "fa-hospital-o",
    Hotel = "fa-hotel",
    Hourglass = "fa-hourglass",
    Hourglass1 = "fa-hourglass-1",
    Hourglass2 = "fa-hourglass-2",
    Hourglass3 = "fa-hourglass-3",
    HourglassEnd = "fa-hourglass-end",
    HourglassHalf = "fa-hourglass-half",
    HourglassO = "fa-hourglass-o",
    HourglassStart = "fa-hourglass-start",
    Houzz = "fa-houzz",
    Html5 = "fa-html5",
    ICursor = "fa-i-cursor",
    IdBadge = "fa-id-badge",
    IdCard = "fa-id-card",
    IdCardO = "fa-id-card-o",
    Ils = "fa-ils",
    Image = "fa-image",
    Imdb = "fa-imdb",
    Inbox = "fa-inbox",
    Indent = "fa-indent",
    Industry = "fa-industry",
    Info = "fa-info",
    InfoCircle = "fa-info-circle",
    Inr = "fa-inr",
    Instagram = "fa-instagram",
    Institution = "fa-institution",
    InternetExplorer = "fa-internet-explorer",
    Intersex = "fa-intersex",
    Ioxhost = "fa-ioxhost",
    Italic = "fa-italic",
    Joomla = "fa-joomla",
    Jpy = "fa-jpy",
    Jsfiddle = "fa-jsfiddle",
    Key = "fa-key",
    KeyboardO = "fa-keyboard-o",
    Krw = "fa-krw",
    Language = "fa-language",
    Laptop = "fa-laptop",
    Lastfm = "fa-lastfm",
    LastfmSquare = "fa-lastfm-square",
    Leaf = "fa-leaf",
    Leanpub = "fa-leanpub",
    Legal = "fa-legal",
    LemonO = "fa-lemon-o",
    LevelDown = "fa-level-down",
    LevelUp = "fa-level-up",
    LifeBouy = "fa-life-bouy",
    LifeBuoy = "fa-life-buoy",
    LifeRing = "fa-life-ring",
    LifeSaver = "fa-life-saver",
    LightbulbO = "fa-lightbulb-o",
    LineChart = "fa-line-chart",
    Link = "fa-link",
    Linkedin = "fa-linkedin",
    LinkedinSquare = "fa-linkedin-square",
    Linode = "fa-linode",
    Linux = "fa-linux",
    List = "fa-list",
    ListAlt = "fa-list-alt",
    ListOl = "fa-list-ol",
    ListUl = "fa-list-ul",
    LocationArrow = "fa-location-arrow",
    Lock = "fa-lock",
    LongArrowDown = "fa-long-arrow-down",
    LongArrowLeft = "fa-long-arrow-left",
    LongArrowRight = "fa-long-arrow-right",
    LongArrowUp = "fa-long-arrow-up",
    LowVision = "fa-low-vision",
    Magic = "fa-magic",
    Magnet = "fa-magnet",
    MailForward = "fa-mail-forward",
    MailReply = "fa-mail-reply",
    MailReplyAll = "fa-mail-reply-all",
    Male = "fa-male",
    Map = "fa-map",
    MapMarker = "fa-map-marker",
    MapO = "fa-map-o",
    MapPin = "fa-map-pin",
    MapSigns = "fa-map-signs",
    Mars = "fa-mars",
    MarsDouble = "fa-mars-double",
    MarsStroke = "fa-mars-stroke",
    MarsStrokeH = "fa-mars-stroke-h",
    MarsStrokeV = "fa-mars-stroke-v",
    Maxcdn = "fa-maxcdn",
    Meanpath = "fa-meanpath",
    Medium = "fa-medium",
    Medkit = "fa-medkit",
    Meetup = "fa-meetup",
    MehO = "fa-meh-o",
    Mercury = "fa-mercury",
    Microchip = "fa-microchip",
    Microphone = "fa-microphone",
    MicrophoneSlash = "fa-microphone-slash",
    Minus = "fa-minus",
    MinusCircle = "fa-minus-circle",
    MinusSquare = "fa-minus-square",
    MinusSquareO = "fa-minus-square-o",
    Mixcloud = "fa-mixcloud",
    Mobile = "fa-mobile",
    MobilePhone = "fa-mobile-phone",
    Modx = "fa-modx",
    Money = "fa-money",
    MoonO = "fa-moon-o",
    MortarBoard = "fa-mortar-board",
    Motorcycle = "fa-motorcycle",
    MousePointer = "fa-mouse-pointer",
    Music = "fa-music",
    Navicon = "fa-navicon",
    Neuter = "fa-neuter",
    NewspaperO = "fa-newspaper-o",
    ObjectGroup = "fa-object-group",
    ObjectUngroup = "fa-object-ungroup",
    Odnoklassniki = "fa-odnoklassniki",
    OdnoklassnikiSquare = "fa-odnoklassniki-square",
    Opencart = "fa-opencart",
    Openid = "fa-openid",
    Opera = "fa-opera",
    OptinMonster = "fa-optin-monster",
    Outdent = "fa-outdent",
    Pagelines = "fa-pagelines",
    PaintBrush = "fa-paint-brush",
    PaperPlane = "fa-paper-plane",
    PaperPlaneO = "fa-paper-plane-o",
    Paperclip = "fa-paperclip",
    Paragraph = "fa-paragraph",
    Paste = "fa-paste",
    Pause = "fa-pause",
    PauseCircle = "fa-pause-circle",
    PauseCircleO = "fa-pause-circle-o",
    Paw = "fa-paw",
    Paypal = "fa-paypal",
    Pencil = "fa-pencil",
    PencilSquare = "fa-pencil-square",
    PencilSquareO = "fa-pencil-square-o",
    Percent = "fa-percent",
    Phone = "fa-phone",
    PhoneSquare = "fa-phone-square",
    Photo = "fa-photo",
    PictureO = "fa-picture-o",
    PieChart = "fa-pie-chart",
    PiedPiper = "fa-pied-piper",
    PiedPiperAlt = "fa-pied-piper-alt",
    PiedPiperPp = "fa-pied-piper-pp",
    Pinterest = "fa-pinterest",
    PinterestP = "fa-pinterest-p",
    PinterestSquare = "fa-pinterest-square",
    Plane = "fa-plane",
    Play = "fa-play",
    PlayCircle = "fa-play-circle",
    PlayCircleO = "fa-play-circle-o",
    Plug = "fa-plug",
    Plus = "fa-plus",
    PlusCircle = "fa-plus-circle",
    PlusSquare = "fa-plus-square",
    PlusSquareO = "fa-plus-square-o",
    Podcast = "fa-podcast",
    PowerOff = "fa-power-off",
    Print = "fa-print",
    ProductHunt = "fa-product-hunt",
    PuzzlePiece = "fa-puzzle-piece",
    Qq = "fa-qq",
    Qrcode = "fa-qrcode",
    Question = "fa-question",
    QuestionCircle = "fa-question-circle",
    QuestionCircleO = "fa-question-circle-o",
    Quora = "fa-quora",
    QuoteLeft = "fa-quote-left",
    QuoteRight = "fa-quote-right",
    Ra = "fa-ra",
    Random = "fa-random",
    Ravelry = "fa-ravelry",
    Rebel = "fa-rebel",
    Recycle = "fa-recycle",
    Reddit = "fa-reddit",
    RedditAlien = "fa-reddit-alien",
    RedditSquare = "fa-reddit-square",
    Refresh = "fa-refresh",
    Registered = "fa-registered",
    Remove = "fa-remove",
    Renren = "fa-renren",
    Reorder = "fa-reorder",
    Repeat = "fa-repeat",
    Reply = "fa-reply",
    ReplyAll = "fa-reply-all",
    Resistance = "fa-resistance",
    Retweet = "fa-retweet",
    Rmb = "fa-rmb",
    Road = "fa-road",
    Rocket = "fa-rocket",
    RotateLeft = "fa-rotate-left",
    RotateRight = "fa-rotate-right",
    Rouble = "fa-rouble",
    Rss = "fa-rss",
    RssSquare = "fa-rss-square",
    Rub = "fa-rub",
    Ruble = "fa-ruble",
    Rupee = "fa-rupee",
    S15 = "fa-s15",
    Safari = "fa-safari",
    Save = "fa-save",
    Scissors = "fa-scissors",
    Scribd = "fa-scribd",
    Search = "fa-search",
    SearchMinus = "fa-search-minus",
    SearchPlus = "fa-search-plus",
    Sellsy = "fa-sellsy",
    Send = "fa-send",
    SendO = "fa-send-o",
    Server = "fa-server",
    Share = "fa-share",
    ShareAlt = "fa-share-alt",
    ShareAltSquare = "fa-share-alt-square",
    ShareSquare = "fa-share-square",
    ShareSquareO = "fa-share-square-o",
    Shekel = "fa-shekel",
    Sheqel = "fa-sheqel",
    Shield = "fa-shield",
    Ship = "fa-ship",
    Shirtsinbulk = "fa-shirtsinbulk",
    ShoppingBag = "fa-shopping-bag",
    ShoppingBasket = "fa-shopping-basket",
    ShoppingCart = "fa-shopping-cart",
    Shower = "fa-shower",
    SignIn = "fa-sign-in",
    SignLanguage = "fa-sign-language",
    SignOut = "fa-sign-out",
    Signal = "fa-signal",
    Signing = "fa-signing",
    Simplybuilt = "fa-simplybuilt",
    Sitemap = "fa-sitemap",
    Skyatlas = "fa-skyatlas",
    Skype = "fa-skype",
    Slack = "fa-slack",
    Sliders = "fa-sliders",
    Slideshare = "fa-slideshare",
    SmileO = "fa-smile-o",
    Snapchat = "fa-snapchat",
    SnapchatGhost = "fa-snapchat-ghost",
    SnapchatSquare = "fa-snapchat-square",
    SnowflakeO = "fa-snowflake-o",
    SoccerBallO = "fa-soccer-ball-o",
    Sort = "fa-sort",
    SortAlphaAsc = "fa-sort-alpha-asc",
    SortAlphaDesc = "fa-sort-alpha-desc",
    SortAmountAsc = "fa-sort-amount-asc",
    SortAmountDesc = "fa-sort-amount-desc",
    SortAsc = "fa-sort-asc",
    SortDesc = "fa-sort-desc",
    SortDown = "fa-sort-down",
    SortNumericAsc = "fa-sort-numeric-asc",
    SortNumericDesc = "fa-sort-numeric-desc",
    SortUp = "fa-sort-up",
    Soundcloud = "fa-soundcloud",
    SpaceShuttle = "fa-space-shuttle",
    Spinner = "fa-spinner",
    Spoon = "fa-spoon",
    Spotify = "fa-spotify",
    Square = "fa-square",
    SquareO = "fa-square-o",
    StackExchange = "fa-stack-exchange",
    StackOverflow = "fa-stack-overflow",
    Star = "fa-star",
    StarHalf = "fa-star-half",
    StarHalfEmpty = "fa-star-half-empty",
    StarHalfFull = "fa-star-half-full",
    StarHalfO = "fa-star-half-o",
    StarO = "fa-star-o",
    Steam = "fa-steam",
    SteamSquare = "fa-steam-square",
    StepBackward = "fa-step-backward",
    StepForward = "fa-step-forward",
    Stethoscope = "fa-stethoscope",
    StickyNote = "fa-sticky-note",
    StickyNoteO = "fa-sticky-note-o",
    Stop = "fa-stop",
    StopCircle = "fa-stop-circle",
    StopCircleO = "fa-stop-circle-o",
    StreetView = "fa-street-view",
    Strikethrough = "fa-strikethrough",
    Stumbleupon = "fa-stumbleupon",
    StumbleuponCircle = "fa-stumbleupon-circle",
    Subscript = "fa-subscript",
    Subway = "fa-subway",
    Suitcase = "fa-suitcase",
    SunO = "fa-sun-o",
    Superpowers = "fa-superpowers",
    Superscript = "fa-superscript",
    Support = "fa-support",
    Table = "fa-table",
    Tablet = "fa-tablet",
    Tachometer = "fa-tachometer",
    Tag = "fa-tag",
    Tags = "fa-tags",
    Tasks = "fa-tasks",
    Taxi = "fa-taxi",
    Telegram = "fa-telegram",
    Television = "fa-television",
    TencentWeibo = "fa-tencent-weibo",
    Terminal = "fa-terminal",
    TextHeight = "fa-text-height",
    TextWidth = "fa-text-width",
    Th = "fa-th",
    ThLarge = "fa-th-large",
    ThList = "fa-th-list",
    Themeisle = "fa-themeisle",
    Thermometer = "fa-thermometer",
    Thermometer0 = "fa-thermometer-0",
    Thermometer1 = "fa-thermometer-1",
    Thermometer2 = "fa-thermometer-2",
    Thermometer3 = "fa-thermometer-3",
    Thermometer4 = "fa-thermometer-4",
    ThermometerEmpty = "fa-thermometer-empty",
    ThermometerFull = "fa-thermometer-full",
    ThermometerHalf = "fa-thermometer-half",
    ThermometerQuarter = "fa-thermometer-quarter",
    ThermometerThreeQuarters = "fa-thermometer-three-quarters",
    ThumbTack = "fa-thumb-tack",
    ThumbsDown = "fa-thumbs-down",
    ThumbsODown = "fa-thumbs-o-down",
    ThumbsOUp = "fa-thumbs-o-up",
    ThumbsUp = "fa-thumbs-up",
    Ticket = "fa-ticket",
    Times = "fa-times",
    TimesCircle = "fa-times-circle",
    TimesCircleO = "fa-times-circle-o",
    TimesRectangle = "fa-times-rectangle",
    TimesRectangleO = "fa-times-rectangle-o",
    Tint = "fa-tint",
    ToggleDown = "fa-toggle-down",
    ToggleLeft = "fa-toggle-left",
    ToggleOff = "fa-toggle-off",
    ToggleOn = "fa-toggle-on",
    ToggleRight = "fa-toggle-right",
    ToggleUp = "fa-toggle-up",
    Trademark = "fa-trademark",
    Train = "fa-train",
    Transgender = "fa-transgender",
    TransgenderAlt = "fa-transgender-alt",
    Trash = "fa-trash",
    TrashO = "fa-trash-o",
    Tree = "fa-tree",
    Trello = "fa-trello",
    Tripadvisor = "fa-tripadvisor",
    Trophy = "fa-trophy",
    Truck = "fa-truck",
    Try = "fa-try",
    Tty = "fa-tty",
    Tumblr = "fa-tumblr",
    TumblrSquare = "fa-tumblr-square",
    TurkishLira = "fa-turkish-lira",
    Tv = "fa-tv",
    Twitch = "fa-twitch",
    Twitter = "fa-twitter",
    TwitterSquare = "fa-twitter-square",
    Umbrella = "fa-umbrella",
    Underline = "fa-underline",
    Undo = "fa-undo",
    UniversalAccess = "fa-universal-access",
    University = "fa-university",
    Unlink = "fa-unlink",
    Unlock = "fa-unlock",
    UnlockAlt = "fa-unlock-alt",
    Unsorted = "fa-unsorted",
    Upload = "fa-upload",
    Usb = "fa-usb",
    Usd = "fa-usd",
    User = "fa-user",
    UserCircle = "fa-user-circle",
    UserCircleO = "fa-user-circle-o",
    UserMd = "fa-user-md",
    UserO = "fa-user-o",
    UserPlus = "fa-user-plus",
    UserSecret = "fa-user-secret",
    UserTimes = "fa-user-times",
    Users = "fa-users",
    Vcard = "fa-vcard",
    VcardO = "fa-vcard-o",
    Venus = "fa-venus",
    VenusDouble = "fa-venus-double",
    VenusMars = "fa-venus-mars",
    Viacoin = "fa-viacoin",
    Viadeo = "fa-viadeo",
    ViadeoSquare = "fa-viadeo-square",
    VideoCamera = "fa-video-camera",
    Vimeo = "fa-vimeo",
    VimeoSquare = "fa-vimeo-square",
    Vine = "fa-vine",
    Vk = "fa-vk",
    VolumeControlPhone = "fa-volume-control-phone",
    VolumeDown = "fa-volume-down",
    VolumeOff = "fa-volume-off",
    VolumeUp = "fa-volume-up",
    Warning = "fa-warning",
    Wechat = "fa-wechat",
    Weibo = "fa-weibo",
    Weixin = "fa-weixin",
    Whatsapp = "fa-whatsapp",
    Wheelchair = "fa-wheelchair",
    WheelchairAlt = "fa-wheelchair-alt",
    Wifi = "fa-wifi",
    WikipediaW = "fa-wikipedia-w",
    WindowClose = "fa-window-close",
    WindowCloseO = "fa-window-close-o",
    WindowMaximize = "fa-window-maximize",
    WindowMinimize = "fa-window-minimize",
    WindowRestore = "fa-window-restore",
    Windows = "fa-windows",
    Won = "fa-won",
    Wordpress = "fa-wordpress",
    Wpbeginner = "fa-wpbeginner",
    Wpexplorer = "fa-wpexplorer",
    Wpforms = "fa-wpforms",
    Wrench = "fa-wrench",
    Xing = "fa-xing",
    XingSquare = "fa-xing-square",
    YCombinator = "fa-y-combinator",
    YCombinatorSquare = "fa-y-combinator-square",
    Yahoo = "fa-yahoo",
    Yc = "fa-yc",
    YcSquare = "fa-yc-square",
    Yelp = "fa-yelp",
    Yen = "fa-yen",
    Yoast = "fa-yoast",
    Youtube = "fa-youtube",
    YoutubePlay = "fa-youtube-play",
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
  SpaceEvenly = 'space-evenly',
  BaseLine = 'baseline'
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
  overlay: Panel
  constructor(o : {  
    text: Widget | string,
    color?: Color,
    size?: Size,
    block?: boolean,
    loader?: boolean
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
    const overlay = new Panel().AddStyle({
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "top": "0px",
      "left": "0px",
      "border-radius": "5px",
      "background-color": "rgba(0, 0, 0, 0.3)",
      "padding-top": "5px"
    });
    this.overlay = overlay;

    if (o.loader != undefined && o.loader) {
      this.loader(false);
      super.AddStyle({"position": "relative"});

      overlay.AddEventListener("click", (e) => {
        e.stopPropagation();
      });

      const s = new span().AddClass("loader01");
      overlay.Add(s);

      super.Add(overlay);
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

  loader(show: boolean = true) {
    if (show) {
      this.overlay.Show();
      this.enable(false);
    } else {
      this.overlay.Hide();
      this.enable(true);
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

  update(percent: number, showText: boolean = false, text: string = "") {
    this.bar.AddStyle(`${percent}%`);
    this.bar.AddAttr({
      "aria-valuenow": `${percent}`,
    });
    this.bar.AddStyle({
      width: `${percent}%`
    });

    if (showText) {
      this.bar.Clear();
      
      if (text == "")
        this.bar.Add(new Text(`${percent}%`));
      else 
        this.bar.Add(new Row([
          new Text(`${percent}%`), 5, new Text(text)
        ]));
    }
  }

}

class Pagination extends div {
  list: {
    index: number,
    li: li
  }[]
  gul: ul
  start: number
  stop: number
  total: number
  current_page: number
  change?: (n: number) => void
  constructor(o: {
    size?: Size,
    change?: (n: number) => void
  }) {
    super();
    
    this.gul = new ul().AddClass("pagination");
  
    if (o.size != undefined) {
      this.gul.AddClass(`pagination-${o.size}`);
    }

    this.list = [];

    super.Add(this.gul);

    this.change = o.change;

    this.start = 0;
    this.stop = 0;
    this.total = 0;

    this.current_page = 0;
  }

  private clearActive() {
    for (const item of this.list) {
      item.li.DeleteClass("active");
    }
  }

  private getLink(page: number): li|null {
    for (const item of this.list) {
      if (page == item.index) {
        return item.li;
      }
    }
    return null;
  }

  private active(page: number) {
    this.clearActive();
    const ll = this.getLink(page);
    if (ll != null) {
      ll.AddClass("active");
    }
  }

  update(start: number = 1, stop: number = 10, total: number) {

    // if (total <= 1) {
    //   super.Hide();
    // } else {
    //   super.Show();
    // }

    if (start <= 0) {
      start = 1;
    }

    if (this.current_page == 0) {
      this.current_page = start;
    }

    this.start = start;
    this.stop = stop;
    this.total = total;

    // repaint the pagination
    this.clear();
    this.gul.Clear();

    // Group previous
    const prev_all = new li();
    const prev_all_a = new a().AddAttr({
      href: "#"
    });
    prev_all_a.Add(new Icon(Icons.StepBackward));
    prev_all.Add(prev_all_a);
    this.gul.Add(prev_all);

    prev_all.AddEventListener("click", (e) => {
      e.preventDefault();

      this.start = this.start - 10;
      this.stop = this.stop - 10;

      if (this.start < 1) {
        this.start = 1;
      }

      if (this.stop < 1) {
        this.stop = 1;
      }
        
      this.current_page = this.start;
      this.update(this.start, this.stop, this.total);
      this.active(this.current_page);
      
      if (this.change != undefined) {
        this.change(this.current_page);
      }
    });

    const prev = new li();
    const prev_a = new a().AddAttr({
      href: "#"
    });
    prev_a.Add(new Icon(Icons.TriangleLeft));
    prev.Add(prev_a);
    this.gul.Add(prev);
    
    // previous logic
    prev.AddEventListener("click", (e) => {
      
      e.preventDefault();
      
      if (this.current_page <= this.start) {
        this.current_page = this.start;
        // other logic goes here
        if (this.current_page > 1) {
          this.current_page--;
          this.stop--;
          this.update(this.current_page, this.stop, this.total);
          this.active(this.current_page);
          if (this.change != undefined) {
            this.change(this.current_page);
          }
        }
      } else {
        this.current_page--;
        this.active(this.current_page);    
        if (this.change != undefined) {
          this.change(this.current_page);
        }
      }
    
    });

    for (let i = start; i <= stop; i++) {
      this.add(i);
    }

    const next = new li();
    const next_a = new a().AddAttr({
      href: "#"
    });
    next_a.Add(new Icon(Icons.TriangleRight));
    next.Add(next_a);
    this.gul.Add(next);

    next.AddEventListener("click", (e) => {
      e.preventDefault();
      if (this.current_page >= this.stop) {
        this.current_page = this.stop;
        if (this.current_page < this.total) {
          this.current_page++;
          this.stop++;
          this.start++;
          this.update(this.start, this.stop, this.total);
          this.active(this.current_page);
          if (this.change != undefined) {
            this.change(this.current_page);
          }  
        }
      } else {
        this.current_page++;
        this.active(this.current_page);    
        if (this.change != undefined) {
          this.change(this.current_page);
        }
      } 
    });


    //// Group previous
    const next_all = new li();
    const next_all_a = new a().AddAttr({
      href: "#"
    });
    //next_all_a.Html("»»»");
    next_all_a.Add(new Icon(Icons.StepForward));
    next_all.Add(next_all_a);
    this.gul.Add(next_all);

    next_all.AddEventListener("click", (e) => {
      e.preventDefault();

      this.start = this.stop + 1;
      this.stop = this.stop + 10;
      
      if (this.stop > total) {
        this.stop = total;
      }

      if (this.start > total) {
        this.start = total;
        return;
      }
    
      this.current_page = this.start;
      this.update(this.start, this.stop, this.total);
      this.active(this.current_page);

      if (this.change != undefined) {
        this.change(this.current_page);
      }
    });


    /// activate using the current index
    this.clearActive();
    const idx = this.getLink(this.current_page);
    if (idx != null) idx.AddClass("active");
  }

  add(num: number) {

    const aa = new a();
    const ll = new li().Add(aa);

    this.list.push({
      index: num,
      li: ll
    });

    this.gul.Add(ll);
    aa.AddAttr({href: "#"});
    aa.Add(new Text(`${num}`));

    
    aa.AddEventListener("click", (e) => {
      e.preventDefault();
      this.current_page = num;
      for (const item of this.list) {
        item.li.DeleteClass("active");
      }
      
      ll.AddClass("active");
      if (typeof(num) == "number") {
        if (this.change != undefined) {
          this.change(num);
        }
      }
    });

    return this;
  }

  setActive(page: number) {
    this.clearActive();
    for (const item of this.list) {
      if (page == item.index) {
        item.li.AddClass("active");
        break;
      }
    }
  }

  clear() {
    for (const item of this.list) {
      item.li.Delete();
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
    padding?: number,
    height?: string
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

    if (o.height != undefined && o.height) {
      this.content.AddStyle({
        "height": o.height,
        "overflow-y": "auto"
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

class Tab2 extends div {
  menus: {key: number, widget: Widget}[]
  items: {key: number, widget: Widget}[]
  widget: new () => Widget
  content: Panel
  tabInfo: Panel
  key_gen: number
  constructor(p: {
    widgetClass: new () => Widget
  }) {
    super();
    
    this.key_gen = 1;
    
    super.AddStyle({
      width: "100%",
      height: "40px"
    });
    
    this.items = [];
    this.menus = [];

    this.widget = p.widgetClass;

    const tabContainer = new Panel().AddStyle({
      "border-bottom": "1px solid #ccc"
    });
    
    const plus = new Button({text: "+"}).AddStyle({
      "width": "25px",
      "height": "25px",
      "border-radius": "50%"
    }).AddClass("tab2-plus");
    
    const tabInfo = new Panel();
    this.tabInfo = tabInfo;

    tabContainer.Add(new Row([
      tabInfo, 10, plus
    ], undefined, Flex.Center));

    plus.AddEventListener("click", () => {
      this.add();
    });

    this.content = new Panel();
    super.Add(new Column([
      tabContainer,
      1,
      this.content
    ]));

    this.add();
  }

  clear() {

  }

  _updateTab() {
    this.tabInfo.Clear();
    const lbl :Widget[] = [];

    for (let i = 0; i < this.items.length; i++) {

      const tab = new Panel().AddClass("tab2-item");
       
      const x = new Button({text: "x"}).AddClass("tab2-item-close");

      tab.Add(new Row([`Tab ${this.items[i].key}`, 5, x]));

      lbl.push(tab);

      tab.AddEventListener("click", () => {
        
        for (const {key, widget} of this.menus) {
          widget.DeleteClass("tab2-item-active");
        }

        tab.AddClass("tab2-item-active");

        for (const {key, widget} of this.items)
          widget.Hide();

        this.items[i].widget.Show();

      });

      this.menus.push({key: this.key_gen, widget: tab});

      x.AddEventListener("click", async (e) => {
        e.stopPropagation();
        if (this.items.length == 1) {return;}
        // this.items[i].Delete();
        // this.menus[i].Delete();

        // this.items.splice(i, 1);
        // this.menus.splice(i, 1);
        //this._updateTab();
        const key = this.items[i].key;
        // find the key 
        if (!await Confirm(`Close Tab ${key}?`)) return;

        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].key == key) {
            // found a key.,
            this.items[i].widget.Delete();
            this.menus[i].widget.Delete();

            this.items.splice(i, 1);
            this.menus.splice(i, 1);
            this._updateTab();
            break;
          }
        }

      });

    }

    // active the last item
    this.menus[this.menus.length - 1].widget.AddClass("tab2-item-active");

    // hide all 
    for (const {key, widget} of this.items)
      widget.Hide();
    
    if (this.items.length > 0) 
      this.items[this.items.length - 1].widget.Show();

    const row = new Row(lbl);
    this.tabInfo.Add(row);

  }

  // add tab
  add() {
    const item = new this.widget();
    this.content.Add(item);
    this.items.push({key: this.key_gen, widget: item});
    this._updateTab();

    this.key_gen++;
  }

  clearAll() {

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
    text: string|Widget,
    color: Color,
    clicked?: () => void,
    enable?: boolean
  }) {
    super();
    super.AddClass("btn-group");

    const title = new ButtonLink({text: o.text, color: o.color});
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

    const doc_fn = (e: Event) => {
      e.stopPropagation();
      if (super.HasClass("open"))
      super.DeleteClass("open");
    };

    document.addEventListener("click", doc_fn);
   
    this.SetDispose(() => {
      document.removeEventListener("click", doc_fn);
    });
    
    super.AddEventListener("click", (e) => {
      e.stopPropagation();
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
        e.stopPropagation();
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

  value(v: string|null = null) {
    if (v == null)
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
  err: Panel
  document_fn: (() => void) =  () => {};
  constructor(o: { 
    size?: Size,
    type?: InputType,
    placeholder?: string,
    prefix?: string | Widget,
    suffix?: string | Widget,
    suffix_fn?: () => void,
    hasfeedback?: boolean,
    filter?: {
      data?: {key: string, value: string}[],
      url?: string,
      // header example the authentication
      header?: {[key: string]: string},
      // default to 555 ms
      delay?: number, 
    }
  }) {
    super();
    super.AddClass("input-group");
    
    super.AddClass("input-group").AddStyle({
      "width": "100%"
    });

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
    
    this.err = new Panel().AddStyle({
      position: "absolute",
      bottom: "-20px",
      right: "0px"
    });
    if (o.hasfeedback != undefined && o.hasfeedback) {
      super.AddClass(["has-feedback"]);
      super.Add(this.err);
    }

    /*********** Filter *******************/
    if (o.filter != undefined) {

      super.AddStyle({
        "position": "relative"
      });
      
      const items: {key: string, value: string}[] = [];
      
      if (o.filter.data != undefined)
        for (const i of o.filter.data)
          items.push({key: i.key, value: i.value})

      const clearItem = () => {  items.length = 0; }

      const search = new TextFieldAddon({
        prefix: new Icon(Icons.Search), 
        placeholder: o.placeholder,
        size: o.size,
        type: o.type
      });

      const blocker = new Panel().AddStyle({
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": "0",
        "left": "0",
        "z-index": "10",
        "border-radius": "3px",
        "box-shadow": "0px 0px rgba(0, 0, 0, 0.3)",
        "cursor": "text"
      });
      super.Add(blocker);

      const search_result = new Panel().AddStyle({
        "width": "100%",
        "max-height": "300px",
        "position": "relative",
        "overflow-y": "auto"
      }).AddClass(["b-filter-panel"]);

      const search_panel = new Panel().AddStyle({
        "position": "absolute",
        "width": "100%",
        "overflow-y": "auto",
        "z-index": "12",
        "left": "0",
        "top": "0",
        "background-color": "white",
        "border-radius": "3px",
        "box-shadow": "0 0 2px rgba(0, 0, 0, 0.3)"
      }).AddClass("b-filter-panel");
      
      let selected_index: number = 0;
      const search_found: {key: string, panel: Panel}[] = [];

      const search_fn = async () => {
        search_result.Clear();
        search_found.length = 0;
        selected_index = 0;

        if (o.filter?.url != undefined) {

          try {
            let url = o.filter.url;
            
            if (url.indexOf("?") > -1) {
              url = url + "&search=" + search.value()
            } else {
              url = url + "?search=" + search.value()
            }

            const xhr = new Http({
              method: "POST",
              url: url,
              body: {search: `${search.value()}`},
              header: o.filter.header == undefined ? {} : o.filter.header,
            });
            
            const res = JSON.parse(await xhr.Load() as string) as {
              key: string,
              value: string
            }[]

            // clear 
            items.length = 0;

            for (const ii of res) {      
              items.push({key: ii.key, value: ii.value})
            }

          } catch (e) {
            console.warn(e);
          }
          
        }

        for (const item of items) {

          // if the input search found
          if (item.value.toLowerCase().indexOf(`${search.value()}`.toLowerCase()) > -1 || item.key.toLowerCase().indexOf(`${search.value()}`.toLowerCase()) > -1) {
            
            const panel_item = new Panel().AddClass("b-search-filter-item");
            panel_item.Add(new Text({text: item.value}));
            search_result.Add(panel_item);
            panel_item.AddEventListener("click", () => {
              search.value(item.key);
              this.tf.value(item.key);
              search_panel.Hide();
              this.tf.control.dispatchEvent(new Event('change'));
            });

            search_found.push({key: item.key, panel: panel_item});

          }

        }

      }

      search_panel.Hide();

      super.Add(search_panel);

      blocker.AddEventListener("click", (e) => {
        e.stopPropagation();
        search_panel.Show();
        search.tf.control.focus();
        search_fn();
      });
      
      search.AddEventListener("keyup", (e) => {
        this.tf.value(`${search.value()}`);
        
        for (const f of search_found) {
          f.panel.DeleteClass("b-search-active-item");
        }

        //@ts-ignore
        const code = e.keyCode as number;
        if (![40, 38, 13].includes(code)) {
          // reset to zero
          selected_index = 0;

          search_fn();          

          if (search_found.length == 0) return;
          search_found[selected_index].panel.AddClass("b-search-active-item");

        } else if (code == 40) {
          if (search_found.length == 0) return;
          // down
          selected_index++;
          if (selected_index > search_found.length - 1) {
            selected_index = search_found.length - 1;
          }          
          search_result.control.scrollTop = search_found[selected_index].panel.control.offsetTop - search_found[selected_index].panel.control.offsetHeight;
          // set active
          search_found[selected_index].panel.AddClass("b-search-active-item");

        } else if (code == 38) {
          if (search_found.length == 0) return;
          // if up
          selected_index--;
          if (selected_index <= 0) {
            selected_index = 0;
          }
          search_result.control.scrollTop = search_found[selected_index].panel.control.offsetTop - search_found[selected_index].panel.control.offsetHeight;
          search_found[selected_index].panel.AddClass("b-search-active-item");          
        } else if (code == 13) {
          // enter key
          if (search_found.length > 0) {
            search.value(search_found[selected_index].key);
            this.tf.value(search_found[selected_index].key);
          }

          search_panel.Hide();
          
          this.tf.control.dispatchEvent(new Event('change'));

        }
      });

      search_panel.AddEventListener("click", e => e.stopPropagation());

      const document_fn = () => {
        search_panel.Hide();
      };

      document.addEventListener("click", document_fn);
      this.document_fn = document_fn;

      search_panel.Add(search);

      search_panel.Add(search_result);

    }
    /*********** End Filter ***************/

  }

  public Dispose(): void {
    // cleanup
    if (this.document_fn != undefined) {
      document.removeEventListener("click", this.document_fn);
      console.log("document event cleared!");
    }
  }

  check(msg: string, type: Message, hide: boolean = false) {
    
    if (hide) {
      super.DeleteClass(["has-success", "has-warning", "has-error"]);
      this.err.Hide();  
      return;
    }

    super.DeleteClass(["has-success", "has-warning", "has-error"]);
    this.err.DeleteClass([`text-${Color.Success}`, `text-${Color.Warning}`, `text-${Color.Danger}`])
    
    if (type == Message.Success) {
      super.AddClass("has-success");
      this.err.AddClass(`text-${Color.Success}`);
    } else if (type == Message.Warning) {
      super.AddClass("has-warning");
      this.err.AddClass(`text-${Color.Warning}`);
    } else {
      super.AddClass("has-error");
      this.err.AddClass(`text-${Color.Danger}`);
    }

    if (msg == "") {
      this.err.Hide();
    } else {
      this.err.Show();
      this.err.Clear();
      this.err.Html(msg);
    }
  }

  value(v: string|null = null) {
    if (v == null)
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

    super.DeleteClass(["has-success", "has-warning", "has-error"]);
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

  value(v: string|null = null) {
    if (v == null)
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

  value(v: string|null = null) {
    if (v == null)
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
    o.AddAttr({value: key});
    o.Text(value);
    super.Add(o);
  }

  value(v: string|null = null) {
    if (v == null) {
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
  constructor(obj: (Widget|string|number)[], justifyContent?: Flex, alignItem?: Flex, direction?: FlexDirection) {
    super();

    super.AddStyle({
      display: "flex",
      "flex-direction": "row"
    });

    if (direction != undefined) {
      super.AddStyle({
        "flex-direction": direction
      });
    }



    if (alignItem != undefined) {
      super.AddStyle({
        "align-items": alignItem
      });
    } else {
      super.AddStyle({
        "align-items": Flex.BaseLine
      });
    }
    


    if (justifyContent != undefined) {
      super.AddStyle({
        "justify-content": justifyContent
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


class Column2 extends div {
  constructor(obj: (Widget|string|number)[], justifyContent?: Flex, alignItem?: Flex, direction?: FlexDirection) {
    super();

    super.AddStyle({
      display: "flex",
      "flex-direction": "column"
    });

    if (direction != undefined) {
      super.AddStyle({
        "flex-direction": direction
      });
    }



    if (alignItem != undefined) {
      super.AddStyle({
        "align-items": alignItem
      });
    } else {
      super.AddStyle({
        "align-items": Flex.BaseLine
      });
    }
    


    if (justifyContent != undefined) {
      super.AddStyle({
        "justify-content": justifyContent
      })
    }

    for (const item of obj) {
      if (item instanceof Widget) {
        super.Add(item);
      } else if (typeof(item) == "number") {
        super.Add(new div().AddStyle({height: `${item}px`}));
      } else if (typeof(item) == "string") {
        super.Add(new Text({text: item}));
      }
    }
  }
}


class Column extends div {
  constructor(obj: (Widget|string|number)[], justifyContent?: Flex, alignItem?: Flex, direction?: FlexDirection) {
    super();

    super.AddStyle({
      display: "block"
    });

    if (direction != undefined) {
      super.AddStyle({
        "flex-direction": direction
      });
    }

    if (alignItem != undefined) {
      super.AddStyle({
        "align-items": alignItem
      });
    } else {
      super.AddStyle({
        "align-items": Flex.BaseLine
      });
    }

    if (justifyContent != undefined) {
      super.AddStyle({
        "justify-content": justifyContent
      })
    }

    for (const item of obj) {
      if (item instanceof Widget) {
        super.Add(item);
      } else if (typeof(item) == "number") {
        super.Add(new div().AddStyle({height: `${item}px`}));
      } else if (typeof(item) == "string") {
        super.Add(new Text({text: item}))
      }
    }
  }
}

class ModalModern extends div {
  // promise: Promise<unknown>
  // resolvefn: (value: unknown) => void = () => {}
  size?: Size 
  content: div
  dialog: Dialog
  lbl?: string |Widget
  footer?: Row
  isFullScreen?: boolean
  isMaxHeight?: boolean
  constructor(o: {
    label?: string | Widget,
    size?: Size,
    footer?: Row,
    isFullScreen?: boolean,
    isMaxHeight?: boolean,
  }) {
    super();
    
    // this.promise = new Promise((resolve) => {
    //   this.resolvefn = resolve;
    // });

    this.lbl = o.label;
    this.footer = o.footer;
    this.size = o.size;
    this.isFullScreen = o.isFullScreen;
    this.isMaxHeight = o.isMaxHeight;
    this.dialog = new Dialog();
    this.content = new div().AddStyle({
      "max-height": "calc(100vh - 100px)",
      "overflow-y": "auto",
      "overflow-x": "hidden"
    });

    if (this.isMaxHeight != undefined && this.isMaxHeight) {

      this.content = new div().AddStyle({
        "height": "calc(100vh - 110px)",
        "overflow-y": "auto",
        "overflow-x": "hidden"
      });

    }

    //@ts-ignore
    document.activeElement.blur();
  }

  add(obj: Widget) {
    this.content.Add(obj);
  }

  async show() {


    const exit = new Button({text: "x", color: Color.Danger, size: Size.Xs}).AddStyle({
          "width": "30px"
    });

    exit.AddEventListener("click", () => {
      this.hide();
    });

    let size = `798px`;
    if (this.size != undefined)
      if (this.size == Size.Xs) {
        size = `298px`
      } else if (this.size == Size.Sm) {
        size = `480px`
      } else if (this.size == Size.Md) {
        size = `798px`
      } else if (this.size == Size.Lg) {
        size = `994px`
      }

    return await this.dialog.show({
      padding: 7,
      width: `${size}`,
      wholeScreen: this.isFullScreen != undefined && this.isFullScreen,
      widget: new Column([
        new Row([this.lbl != undefined ? this.lbl : "", exit], Flex.SpaceBetween).AddStyle({"height": "30px", "margin-bottom": "5px"}),
        this.content,
        this.footer != undefined ? this.footer.AddStyle({"height": "40px", "margin-top": "5px"}) : new Row([]).AddStyle({"height": "40px", "margin-top": "5px"}),
      ]),
      backdropOpacity: 0.3,
      maxHeight: this.isMaxHeight
    });

  }

  hide(msg: string|null = null) {
    this.dialog.close(msg);
  }
}


class Modal extends div {
  backdrop: div
  promise: Promise<unknown>
  resolvefn: (value: unknown) => void = () => {}
  content: div
  constructor(o: {
    label?: string | Widget,
    size?: Size,
    footer?: (Widget)[]
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
    body.AddStyle({
      "max-height": "calc(100vh - 200px)",
      "overflow-y": "auto"
    });
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

    //@ts-ignore
    document.activeElement.blur();
  }

  add(obj: Widget) {
    this.content.Add(obj);
  }

  async show() {

    this.body.appendChild(this.control);
    this.body.classList.add("modal-open");

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
    
    this.body.classList.remove("modal-open");

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
    border?: boolean,
    header_style?: {[key: string]: string}[],
    header_color?: Color,
    striped?: boolean,
    condensed?: boolean,
    sticky?: {
      height: string
    }
  }) {
    super();
    super.AddClass("table-responsive");

    this.table = new table().AddClass("table");
    
    this.table.AddStyle({
      "margin": "0px",
      "padding": "0px"
    });

    if ( o.size != undefined ) {
      this.table.AddClass("table-" + o.size);
    }

    super.Add(this.table);
    if (o.header != undefined) {
      //draw the header
      const tr1 = new tr();

      if (o.header_color != undefined) {
        tr1.AddClass(`bg-${o.header_color}`);
      }

      let i = 0;
      for (const item of o.header) {
        const th1 = new th();
        
        if (typeof(item) == "string") {
          th1.Add(new Text(item));
        } else {
          th1.Add(item);
        }

        if (o.header_style != undefined && typeof(o.header_style[i]) != "undefined") {
          th1.AddStyle(o.header_style[i]);
        }

        tr1.Add(th1);
        i++;
      }
      const thd = new thead().Add(tr1);
      this.table.Add(thd);

      if (o.sticky != undefined) {
        thd.AddStyle({
          "position": "sticky",
          "top": "-1px",
          "z-index": "3"
        });

        this.AddStyle({
          height: o.sticky.height,
          "overflow-y": "auto"
        });
       
      }
    }

    if (o.hover != undefined && o.hover) {
      this.table.AddClass("table-hover");
    } 

    if (o.border != undefined && o.border) {
      this.table.AddClass("table-bordered");
    }

    if (o.striped != undefined && o.striped) {
      this.table.AddClass("table-striped");
    }

    if (o.condensed != undefined && o.condensed) {
      this.table.AddClass("table-condensed");
    }

    this.tbody = new tbody();

    this.table.Add(this.tbody);

    this.list = [];

  }
  
  add(o: {
    item: (string|Widget)[],
    header_style?: {[key: string]: string}[]
  }): tr {
    
    const tr1 = new tr();
    let i = 0;
    for (const item of o.item) {
      const th1 = new td();
      
      if (typeof(item) == "string") {
        th1.Add(new Text(item));
      } else {
        th1.Add(item);
      }

      if (o.header_style != undefined && typeof(o.header_style[i]) != "undefined") {
        th1.AddStyle(o.header_style[i]);
      }

      tr1.Add(th1);
      i++;
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

class ContainerFluid extends div {
  constructor(p: {
    body: Widget
  }) {
    super();
    
    super.AddClass("container-fluid");

    super.Add(p.body);

  }
}

class Container extends div {
  constructor(p: {
    body: Widget
  }) {
    super();
    
    super.AddClass("container");

    super.Add(p.body);

  }
}

class Grid extends div {
  space_bot?: number
  zero_gap?: boolean
  constructor(o: {
    spacingBottom?: number,
    zeroGap?: boolean
  }) {
    super();
    super.AddClass("row");

    this.space_bot = o.spacingBottom;
    this.zero_gap = o.zeroGap;
  }
  add(obj: Widget, grid: GridSize[]): Widget{
    const panel = new Panel().AddClass(grid);

    if (this.zero_gap != undefined && this.zero_gap) {
      panel.AddStyle({
        "margin": "0px",
        "padding": "0px",
        "padding-right": "5px"
      });
    }

    panel.Add(obj);

    super.Add(panel);

    if (this.space_bot != undefined) {
      panel.AddStyle({
        "margin-bottom": `${this.space_bot}px`
      });
    }

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

  init(option: {
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

  update() {
    this.chart.update();
  }

  public Dispose(): void {
    this.chart.destroy();
    //@ts-ignore
    this.chart = null; // Javascript
    console.log('clearing chart!');
  }
}

class SelectBoxAddon extends div{
  tf: SelectBox
  err: Panel
  filterPanel: Panel = new Panel()
  items: {key: string, value: string}[]
  constructor(o: { 
    size?: Size,
    type?: InputType,
    prefix?: string | Widget,
    suffix?: string | Widget,
    suffix_fn?: () => void,
    hasfeedback?: boolean,
    filter?: {
      /// this is an optional since if url is not set, 
      // it only search from the data ,
      // url can be get only
      url?: string,
      // header example the authentication
      header?: {[key: string]: string},
      emptyOption?: string,
      // default to 555 ms
      delay?: number, 
      /*sample:
        filter: {
          url: "http://localhost:5000/api/cashier/dv-search?q=payee",
          header: {
            "X-Auth": `${localStorage.getItem("xauth")}`
          },
          emptyOption: "[ Select Payee ]",
          delay: 0
        }
      */
    },
    placeholder?: string
  }) {
    super();
    super.AddClass("input-group");

    super.AddClass("input-group").AddStyle({
      "width": "100%"
    });

    super.AddStyle({
      "position": "relative"
    });
    this.tf = new SelectBox({});

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

    this.err = new Panel().AddStyle({
      position: "absolute",
      bottom: "-20px",
      right: "0px"
    });
    if (o.hasfeedback != undefined && o.hasfeedback) {
      super.AddClass(["has-feedback"]);
      super.Add(this.err);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// START local filter ///////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.items = [];
    if (o.filter != undefined) {

      const search = new TextFieldAddon({
        prefix: o.prefix != undefined ? new Icon(Icons.Search) : undefined,
        hasfeedback: o.hasfeedback,
        size: o.size,
        placeholder: o.placeholder
      });
      const search_content = new Panel().AddStyle({
        "max-height": "300px",
        width: "100%",
        "overflow-y": "auto"
      }).AddClass("b-filter-panel");
      // panel

      this.filterPanel = new Panel().AddStyle({
        "position": "absolute",
        "top": "0px",
        "left": "0px",
        "width": `100%`,
        "background-color": "white",
        "border-radius": "3px 3px 3px 3px",
        "box-shadow": "0 0 2px rgba(0, 0, 0, 0.3)",
        "z-index": "100",
        "display": "none"
      });
      const blocker = new Panel().AddStyle({
        "position": "absolute",
        "left": "0",
        "top": "0",
        "width": "100%",
        "height": "100%",
        "z-index": "50",
        "cursor": "pointer"
      });

      this.Add(blocker);
      this.Add(this.filterPanel);
      // here the logic here 
      let selected_index = 0;
      let search_result: {key: string, panel: Panel}[] = [];
      
      const clearResultActive = () => {
        for (const item of search_result) {
          item.panel.DeleteClass("b-search-active-item");
        }
      }

      const searchfn = async (v: string|null = null) => {
        // plot all the available search
        search_content.Clear();
        search_result.length = 0;

        // load the items here 
        // try to check if there is a network for search
        if (o.filter?.url != undefined) {

          try {
            let url = o.filter.url;
            
            if (url.indexOf("?") > -1) {
              url = url + "&search=" + search.value()
            } else {
              url = url + "?search=" + search.value()
            }

            const xhr = new Http({
              method: "POST",
              url: url,
              body: {search: `${search.value()}`},
              header: o.filter.header == undefined ? {} : o.filter.header,
            });
            
            const res = JSON.parse(await xhr.Load() as string) as {
              key: string,
              value: string
            }[]

            // clear 
            this.clear();
          
            this.add("", o.filter.emptyOption != undefined ? o.filter.emptyOption : "");

            for (const ii of res) {      
              this.add(ii.key, ii.value);
            }

          } catch (e) {
            console.warn(e);
          }
          
        }

        for (const item of this.items) {

          const txt = new Panel().Add(new Text({text: item.value})).AddClass("b-search-filter-item").AddEventListener("click", () => {
            this.tf.value(item.key);
            /// back to normal
            this.tf.DeleteAttr("disabled");
            this.filterPanel.Hide();
            selected_index = 0;

            this.tf.control.dispatchEvent(new Event('change'));
          });

          if (item.value.toLocaleLowerCase().indexOf(`${search.value()}`.toLowerCase()) > -1) {
            search_content.Add(txt);
            search_result.push({key: item.key, panel: txt});
          }

          if (item.key == v) {
            txt.AddClass("b-search-active-item");
          }
        }

      };

      this.tf.AddEventListener("click", (e) => {
        this.tf.AddAttr({"disabled": ""});
        e.preventDefault();
        e.stopPropagation();
        this.filterPanel.Show();
        searchfn();
        search.tf.control.focus();
        const len = `${search.value()}`.length;
        //@ts-ignore
        search.tf.control.setSelectionRange(len, len);
      });
      // for blocker event to avoid showing the option list
      blocker.AddEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.tf.AddAttr({"disabled": ""});
        this.filterPanel.Show();
        searchfn();
        search.tf.control.focus();
        const len = `${search.value()}`.length;
        //@ts-ignore
        search.tf.control.setSelectionRange(len, len);
      });

      this.tf.AddEventListener("keyup", () => {
        searchfn();
      });
      
      // stopPropagation
      this.filterPanel.AddEventListener("click", (e) => {
        e.stopPropagation();

      });
      document.addEventListener("click", this.documentEvent);

      

      this.filterPanel.Add(search);
      this.filterPanel.Add(search_content);

      let time = 0;
      search.AddEventListener("keyup", (e) => {
        //clearTimeout(time);
        //time = setTimeout(() => { 
        // 40 -> down 
        // 38 -> up
        //@ts-ignore
        const code = e.keyCode as number;
        if (![40, 38, 13].includes(code)) {
          // reset to zero
          selected_index = 0;

          if (o.filter?.url != undefined) {
            // add delay
            clearTimeout(time);
            //@ts-ignore
            time = setTimeout(() => {
              searchfn();
            }, o.filter.delay != undefined ? o.filter.delay : 555);  
          } else {
            searchfn();
          }

          if (search_result.length > 0) {
            search_result[selected_index].panel.AddClass("b-search-active-item");  
          }

        } else if (code == 40) {
          if (search_result.length == 0) return;
          clearResultActive();
          selected_index++;
          // if down
          if (selected_index > search_result.length - 1) {
            selected_index = search_result.length - 1;
          }

          search_content.control.scrollTop = search_result[selected_index].panel.control.offsetTop - search_result[selected_index].panel.control.offsetHeight * 3;
          search_result[selected_index].panel.AddClass("b-search-active-item");
        
        } else if (code == 38) {
          if (search_result.length == 0) return;   
          // if up
          clearResultActive();
          selected_index--;
          
          if (selected_index <= 0) {
            selected_index = 0;
          }

          search_content.control.scrollTop = search_result[selected_index].panel.control.offsetTop - search_result[selected_index].panel.control.offsetHeight * 3;

          search_result[selected_index].panel.AddClass("b-search-active-item");
          
        } else if (code == 13) {
          // enter key
          if (search_result.length == 0) return; // avoid undefined error

          this.tf.value(search_result[selected_index].key);
          /// back to normal
          this.tf.DeleteAttr("disabled");
          this.filterPanel.Hide();
          selected_index = 0;
          this.tf.control.dispatchEvent(new Event('change'));
        }
        //}, 500);
      });

    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// END local filter ///////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  }

  private documentEvent = (e: Event) => {
    e.stopPropagation();

    this.tf.DeleteAttr("disabled");
    this.filterPanel.Hide();

  }

  public Dispose(): void {
    // clean up goes here
    document.removeEventListener("click", this.documentEvent);
    console.log("document event removed");
  }

  check(msg: string, type: Message, hide: boolean = false) {
    
    if (hide) {
      super.DeleteClass(["has-success", "has-warning", "has-error"]);
      this.err.Hide();  
      return;
    }

    super.DeleteClass(["has-success", "has-warning", "has-error"]);
    this.err.DeleteClass([`text-${Color.Success}`, `text-${Color.Warning}`, `text-${Color.Danger}`])
    
    if (type == Message.Success) {
      super.AddClass("has-success");
      this.err.AddClass(`text-${Color.Success}`);
    } else if (type == Message.Warning) {
      super.AddClass("has-warning");
      this.err.AddClass(`text-${Color.Warning}`);
    } else {
      super.AddClass("has-error");
      this.err.AddClass(`text-${Color.Danger}`);
    }

    if (msg == "") {
      this.err.Hide();
    } else {
      this.err.Show();
      this.err.Clear();
      this.err.Html(msg);
    }
  }

  clear() {
    // clear the time contentts
    this.items.length = 0;
    this.tf.Clear();
  }

  add(key: string, value: string) {
    this.items.push({
      key: key,
      value: value
    });

    const o = new option();
    o.AddAttr({value: key});
    o.Text(value);
    this.tf.Add(o);
  }

  value(v: string|null = null) {
    if (v == null) {
      return this.tf.GetValue();
    } else {
      this.tf.AddValue(v);
    }
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

class Dialog extends Panel {
  gbody: Panel = new Panel()
  promise: Promise<unknown>
  resolvefn: (value: unknown) => void = () => {}

  constructor() {
    super();

    super.AddStyle({
      "position": "fixed",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100vh",
      "background-color": "rgba(0, 0, 0, 0.8)",
      "z-index": "2000",
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "overflow-y": "auto"
    })

    this.promise = new Promise((resolve) => {
      this.resolvefn = resolve;
    });

  }

  async show(o: {
    widget: Column,
    dismissable?: boolean,
    width?: string,
    height?: string,
    wholeScreen?: boolean,
    padding?: number,
    opacity?: number,
    backdropOpacity?: number,
    borderRadius?: string,
    maxHeight?: boolean
  }) {

    // add the componts here 
    const body = new Panel().AddStyle({
      "background-color": "white",
      "border-radius": "5px",
      "max-width": "98%",
      "position": "relative"
    });

    if (o.borderRadius != undefined) {
      body.AddStyle({
        "border-radius": `${o.borderRadius}`
      });
    }

    if (o.opacity != undefined) {
      body.AddStyle({
        "background-color": `rgba(0, 0, 0, ${o.opacity})`
      });
    }

    if (o.backdropOpacity != undefined) {
      super.AddStyle({
        "background-color": `rgba(0, 0, 0, ${o.backdropOpacity})`
      });
    }

    if (o.padding != undefined) {
      body.AddStyle({
        padding: `${o.padding}px`
      });
    }


    if (o.width != undefined) {
      body.AddStyle({
        "width": o.width
      });
    }

    if (o.height != undefined) {
      body.AddStyle({
        "height": o.height
      });
    }

    if (o.wholeScreen != undefined && o.wholeScreen) {
      body.AddStyle({
        "width": "100%",
        "height": "100%",
        "max-width": "100%",
        "max-height": "100%",
        "border-radius": "0px"
      });
    }

    if (o.maxHeight != undefined && o.maxHeight) {
      body.AddStyle({
          "height": "calc(100% - 20px)"
      });
    }

    body.AddClass("dialog-show");
    this.gbody = body;

    if (o.dismissable != undefined && o.dismissable) {
      this.AddEventListener("click", () => {
        this.close();
      });

      body.AddEventListener("click", o => o.stopPropagation());
    }

    body.Add(o.widget);

    this.Add(body);
    this.body.appendChild(this.control);
    //@ts-ignore
    document.activeElement.blur();
    return this.promise;
  }

  close(msg: string|boolean|null = null) {
    this.AddStyle({
      "background-color": "rgba(0, 0, 0, 0)"
    });
    this.gbody.DeleteClass("dialog-show");
    this.gbody.AddClass("dialog-hide");

    setTimeout(() => {
      this.resolvefn(msg);
      this.Delete();
    }, 300);
  }


}

const Alert = async (msg: string, color?: Color) => {

  const dialog = new Dialog();
  const logo = new Icon(Icons.Alert).AddClass("dialog-alert-icon");
  if (color != undefined) {
    logo.AddClass(["text-" + color]);
  }
  const okay = new Button({text: new Row([new Icon(Icons.Check), 5, "OK"]), color: Color.Default});


  const keydown_event = (e: KeyboardEvent) => {
    if (e.keyCode == 13) {
      dialog.close(true);
    }
  };
  
  document.addEventListener("keydown", keydown_event);
  
  dialog.SetDispose(() => {
    document.removeEventListener("keydown", keydown_event);
  });

  okay.AddStyle({
    "padding-left": "20px",
    "padding-right": "20px"
  });

  okay.AddEventListener("click", () => {
    dialog.close(true);
  });

  return dialog.show({
    padding: 7,
    width: "480px",
    widget: new Column([
      new center().Add(logo),
      20,
      new center().Add(new Text(msg)).AddStyle({ "font-size": "15px", "font-weight": "bold", "letter-spacing": "2px", "padding-left": "40px", "padding-right": "40px" }),
      new hr(),
      new center().Add([
        okay
      ])
    ])
  });
}

const Confirm = async (msg: string, color?: Color) => {
  const dialog = new Dialog();
  const logo = new Icon(Icons.QuestionSign).AddClass("dialog-alert-icon");
  if (color != undefined) {
    logo.AddClass(["text-" + color]);
  }
  const okay = new Button({text: new Row([new Icon(Icons.Check), 5, "OK"]), color: Color.Default});
  okay.AddStyle({
    "width": "90px"
  });

  const cancel = new Button({text: new Row([new Icon(Icons.Trash), 5, "CANCEL"]), color: Color.Default});
  cancel.AddStyle({
    "margin-left": "10px",
    "width": "90px"
  });

  
  const keydown_event = (e: KeyboardEvent) => {
    if (e.keyCode == 13) {
      dialog.close(true);
    }
  };
  document.addEventListener("keydown", keydown_event);
  dialog.SetDispose(() => {
    document.removeEventListener("keydown", keydown_event);
  });

  okay.AddEventListener("click", () => {
    dialog.close(true);
  });

  cancel.AddEventListener("click", () => {
    dialog.close(false);
  });

  return dialog.show({
    padding: 7,
    width: "480px",
    widget: new Column([
      new center().Add(logo),
      20,
      new center().Add(new Text(msg)).AddStyle({ "font-size": "15px", "font-weight": "bold", "letter-spacing": "2px", "padding-left": "40px", "padding-right": "40px" }),
      new hr(),
      new center().Add([
        okay, cancel
      ])
    ])
  });
};


class DataTable extends div {
  entry: SelectBoxAddon
  search: TextFieldAddon
  table: Table
  page: Pagination
  label: Widget
  show_page: number
  total_page: number
  total_item: number

  local_items: (string)[][]
  local_cb: ((items: (string)[][]) => void) | null

  constructor(p: {
    header: (string|Widget)[],
    hover?: boolean,
    size?: Size,
    border?: boolean,
    header_style?: {[key: string]: string}[],
    header_color?: Color,
    striped?: boolean,
    condensed?: boolean,
    sticky?: {
      height: string
    }
  }) {

    super();

    this.entry = new SelectBoxAddon({});
    this.search = new TextFieldAddon({});

    this.table = new Table(p);
    this.page = new Pagination({});
    this.label = new span();

    this.show_page = 0;
    this.total_page = 0;
    this.total_item = 0;

    this.local_items = [];
    this.local_cb = null;
  }

  init(p: {
    page_fn: (n: number) => void,
    search_fn?: (search: string) => void,
    limit_fn?: (n: number) => void
  }) {

    this.label = new span();

    this.entry = new SelectBoxAddon({
      filter: {}
    });

    this.entry.AddStyle({
      width: "73px"
    });

    this.entry.add("10", "10");
    this.entry.add("50", "50");
    this.entry.add("100", "100");
    this.entry.add("500", "500");
    this.entry.add("1000", "1000");
    this.entry.add("2000", "2000");

    this.search = new TextFieldAddon({
      placeholder: "Search..."
    });

    this.search.AddStyle({
      "width": "150px"
    });

    if (p.search_fn != undefined) 
      this.search.tf.AddEventListener("keyup", () => {
        if (p.search_fn != undefined)
          p.search_fn(this.search.value().toString());
      });
    else
      this.search.Hide();

    if (p.limit_fn != undefined) 
      this.entry.tf.AddEventListener("change", () => {
        if (p.limit_fn != undefined) 
          p.limit_fn(parseInt(`${this.entry.value()}`));
      });
    else
      this.entry.Hide();

    this.page = new Pagination({
      change: (n) => {
        this.label.Html(`PAGE ${n} OF ${this.total_page == 0 ? 1 : this.total_page}  / ${this.total_item}`);
        p.page_fn(n);
      }
    });

    
    //new Row([ this.label, 20, this.search, 3, this.entry ], Flex.SpaceBetween)
    super.Add(new Column([
      new Row([
        new Panel().AddStyle({width: "100%"}).Add(new Row([ this.entry, 3, this.search ], Flex.FlexStart)),
        new Panel().AddStyle({width: "100%"}).Add(new Row([ this.label ], Flex.FlexEnd, Flex.BaseLine))
      ]),
      2,
      this.table,
      2,
      new Row([this.page], undefined, undefined, FlexDirection.ROW_REVERSE)
    ]));

  }

  update(total_page: number, total_item: number = 0) {
    this.total_page = total_page;
    this.total_item = total_item;
    this.label.Html(`PAGE 1 OF ${this.total_page == 0 ? 1: this.total_page} / ${total_item}`);
    this.page.update(total_page > 0 ? 1 : 0, total_page < 10 ? total_page : 10, total_page);
    this.page.setActive(1);
  }

  add(o: {
    item: (string|Widget)[],
    header_style?: {[key: string]: string}[]
  }): tr {
    return this.table.add(o);
  }

  clear() {
    this.table.clear();
  }

  filter(local_items: (string)[][], cb: (items: (string)[][]) => void, opt?:{
    limit: (10|50|100|500|1000|2000)
  }) {
    // we avoid using hide and show, to avoid hang up the browser
    this.local_items = local_items;
    this.local_cb = cb;

    let cur_page = 1;
    let cur_search = "";
    let cur_limit = 10;

    if (opt != undefined) {
      cur_limit = opt.limit;
    }

    const process_algo = (o: {
      page_clicked?: boolean 
    }) => {
      // here the algorith for the search
      // update_pagination
      const emp_list: (string)[][] = [];

      for (let i = 0; i < this.local_items.length; i++) {
        const item = this.local_items[i];
        // here the filter happened
        for (const subitem of item) {
          if (subitem.toLowerCase().indexOf(`${cur_search}`.toLowerCase()) > -1) {
            emp_list.push(item);
            break;
          }
        }

      }  
      
      if (o.page_clicked == undefined || !o.page_clicked) {
        let total_page = Math.ceil(emp_list.length / cur_limit);
        this.update(total_page, emp_list.length);
        cur_page = 1;
      }

      const final_list: (string)[][] = [];
      // get the limit
      let found = 0;
      for (let i = (cur_page - 1) * cur_limit; i < emp_list.length; i++) {
        const item = emp_list[i];
        final_list.push(item);

        // get the limit
        found++;
        if (found >= cur_limit) {
          break;
        }
      }

      if (this.local_cb != null) {
        this.clear();
        this.local_cb(final_list);
      }
    };

    this.init({
      page_fn: (n) => {
        cur_page = n;
        process_algo({page_clicked: true});
      },
      search_fn: (search) => {
        cur_search = search;
        process_algo({});
      },
      limit_fn: (n) => {
        cur_limit = n;
        process_algo({});
      }
    });

    this.update(1, local_items.length);
    process_algo({});

    this.entry.value(`${cur_limit}`);
  }

}


class NetworkQueue {
  limit: number;
  activeCount: number = 0;
  queue: Array<() => Promise<void>> = [];
  resolving: boolean = false;

  constructor(limit: number = 1) {
    this.limit = limit;
  }

  add(fn: () => Promise<unknown>) {
    this.queue.push(() => this.execute(fn));
    this.process();
    return this;
  }

  private async execute(fn: () => Promise<unknown>) {
    this.activeCount++;
    try {
      await fn();
    } catch (error) {
      console.error('Request failed:', error);
    } finally {
      this.activeCount--;
      this.process(); // Continue processing remaining tasks
    }
  }

  private process() {
    // Launch new promises while under limit and queue not empty
    while (this.activeCount <= this.limit && this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        task();
      }
    }
  }
}

/*
  
  const net = new NetworkQueue(10); limit of 10 queue

  for (const fn of reqs) {
    net.Add(fn);
  } 

*/
// utils

class Loader extends div {
  dialog: Dialog
  constructor() {
    super();
  
    this.dialog = new Dialog();
    
  }

  show() {
    this.dialog.show({
      widget: new Column([
        new Panel().AddClass("loader002").AddStyle({
          "position": "absolute",
          "left": "0",
          "right": "0",
          "bottom": "0",
          "top": "0",
          "margin": "auto"
        })
      ]),
      width: "80px",
      height: "80px",
      backdropOpacity: 0.1,
      borderRadius: "5px"
    });
    return this;
  }

  hide() {
    this.dialog.Hide();
  }

}

class DatePicker extends Panel {
  constructor() {
    
    super();

    super.AddStyle({
      "width": "320px",
      "height": "300px",
      "border": "1px solid grey"
    });

    let cur_date = new Date();
    const last_day = new Date(cur_date.getFullYear(), cur_date.getMonth() + 1, 0).getDate();

    let i = 1;
    let start_flag = false;
    let series = 1;
    let isbreak = false;
    for (let row = 1; row <= 6; row++) {
      for (let col = 1; col <= 7; col++) {  
        const square = new div().AddStyle({
          "width": "30px",
          "height":"30px",
          "border": "1px solid blue",
          "display": "inline-block",
          "text-align": "center",
          "cursor": "pointer"
        });
        square.Html("-");
        const idx_week = cur_date.getDay()-1;

        super.Add(square);
        if (i == idx_week) {
          start_flag = true;
        }

        if (start_flag) {
          // here the starting of ploting the date
          square.Text(`${series}`);
          if (series == last_day) {
            isbreak = true
            break;          
          }
          

          
          series++;
        }

        i++;
      }
      super.Add(new div());
      if (isbreak) {
        break;
      }
    }

  
  }
}

class Center extends center {
  constructor(o: string|Widget) {
    super();
    if (typeof(o) == "string") {
      super.Text(o);
    } else {
      super.Add(o);
    }

  }
}


class FaIcon extends i {
  constructor(icon: FaIcons) {
    super();
    this.AddClass(["fa", icon]);
  }
}

export {NetworkQueue};

// plugin

export {
  DatePicker
}

export {
  Loader,
  Color,
  Size,
  Icons,
  InputType,
  Message,
  Flex,
  GridSize,
  ChartType,
  FlexDirection
};

export {
  FaIcon,
  FaIcons,
  Center,
  Column2,
  Container,
  ContainerFluid,
  Confirm,
  Alert,
  ChartV1,
  Form,
  SelectBox,
  SelectBoxAddon,
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
  CardV2,
  Dialog,
  Tab2,
  DataTable,
  ModalModern
};