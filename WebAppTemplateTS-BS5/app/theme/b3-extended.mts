import { button, div, Widget } from "../plugin/core/core.mts";
import { Button, Color, Column, Icon, Icons, JustifyContent, Panel, Row, Text } from "./b3.mts";


class MenuButton extends div {
  constructor() {
    super();
  }
}


class WebScaffold extends div {
  back_drop: div|undefined
  side_bar: div|undefined
  body_content: div|undefined
  constructor(option: {
    appBar?: {
      backgroundColor?: Color,
      title?: string|Widget,
      drawer?: {
        content?: Widget,
        copyTitle?: boolean
      },
      action?: Widget[]
    }
  }) {
    super();
    const {appBar} = option;

    if (appBar != undefined) {
      // working with the appBar

      const {title, drawer, action, backgroundColor} = appBar;

      const top_nav = new div().AddStyle({
        height: '56px',
        width: '100%',
        overflowY: 'auto',
        position: 'fixed',
        top: '0px',
        left: '0px'
      });
      if (backgroundColor != undefined) {
        top_nav.AddClass(`bg-${backgroundColor}`); 
      } else {
        top_nav.AddClass('bg-primary');
      }
      const row = new Row({});
      row.AddStyle({
        height: '100%',
        width: '240px'
      })

      this.back_drop = new div();

      this.back_drop.AddStyle({
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        display: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      });

      if (drawer != undefined) {
        const {content, copyTitle} = drawer;
        const bar = new button();
        bar.AddStyle({
          height: '46px', width: '46px',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          border: 'none',
          borderRadius: '10px',
          fontSize: '24px'
        });

        bar.AddClass(`text-${Color.White}`);

        bar.Add(new Icon({icon: Icons.MenuHamburger}));
        row.AddWidget({widget: bar});


        this.side_bar = new div();
        this.side_bar.AddStyle({
          width: '240px',
          height: '100%',
          position: 'absolute',
          left: '0px',
          top: '0px',
          boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)'
        });
        
        this.side_bar.AddClass(`bg-light`);
        this.side_bar.AddEventListener('click', (e) => {
          e.stopPropagation();
        });

        this.back_drop.Add(this.side_bar);

    
        bar.AddEventListener('click', () => {
          this.ShowSideBar();
        });
        

        this.back_drop.AddEventListener('click', () => {
          this.HideSideBar();
        });
        this.body.appendChild(this.back_drop.control);


        // add the title

        if (copyTitle != undefined && copyTitle) {
          const row = new Row({});
          row.AddStyle({
            height: '100%',
            width: '100%',
            borderBottom: '1px solid #ddd'
          });

          const bar = new button();
          bar.AddStyle({
            height: '46px', width: '46px',
            color: 'inherit',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: 'none',
            borderRadius: '10px',
            fontSize: '24px'
          });

          bar.AddEventListener('click', () => {
            this.HideSideBar();
          });

          bar.Add(new Icon({icon: Icons.MenuHamburger}));
          row.AddWidget({widget: bar});

          if (title != undefined) {
            if (typeof(title) == 'string') {
              const btitle = new button().AddStyle({
                fontSize: '20px',
                letterSpacing: '2px',
                height: '46px',
                backgroundColor: 'rgba(0,0,0,0)',
                border: 'none',
                textAlign: 'left',
                padding: '0px'
              });
              btitle.Html(title);
    
              row.AddWidget({widget: btitle});
            } else {
              row.AddWidget({widget: title})
            }
          }
          



          this.side_bar.Add(new Column({widgets: [row], justify: JustifyContent.Center}).AddStyle({height: '56px'}));
        }

        if (content != undefined) {
          this.side_bar.Add(
            new Panel({}).Add(content).AddStyle({
              height: 'calc(100% - 56px)',
              overflowX: 'auto'
            })
          );
        }

      }

      if (title != undefined) {
        if (typeof(title) == 'string') {
          const btitle = new button().AddStyle({
            fontSize: '20px',
            letterSpacing: '2px',
            height: '46px',
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'inherit',
            border: 'none',
            textAlign: 'left',
            padding: '0px'
          });
          btitle.Html(title);
          btitle.AddClass(`text-${Color.White}`);

          row.AddWidget({widget: btitle});
        } else {
          row.AddWidget({widget: title})
        }
      }
      

      const rightRow = new Row({
        justify: JustifyContent.End
      });

      if (action != undefined) {
        for (const w of action) {
          rightRow.AddWidget({widget: w});
        }
      }

      rightRow.AddStyle({ width: '100%'})

      top_nav.Add(new Row({widgets: [
        new Column({widgets: [row], justify: JustifyContent.Center}).AddStyle({height: '56px'}), 
        new Column({widgets: [rightRow], justify: JustifyContent.Center}).AddStyle({height: '56px'})
      ],justify: JustifyContent.Between}));

      this.body_content = new div().AddStyle({
        paddingTop: '56px',
        overflowX: 'auto'
      });
      super.Add(top_nav);

      super.Add(this.body_content);
    }
    
    

  }


  public SetBody(content: Widget) {
    if (this.body_content == undefined) return;
    this.body_content.Clear();
    this.body_content.Add(content);
  }

  public ShowSideBar() {
    if (this.back_drop == undefined || this.side_bar == undefined) return;

    this.back_drop.AddClass('b3-show');
    this.side_bar.AddClass('b3-sidebar-show');
    this.body.style.overflow = 'hidden';
  }

  public HideSideBar() {
    if (this.back_drop == undefined || this.side_bar == undefined) return;
    this.side_bar.DeleteClass('b3-sidebar-show');
    this.side_bar.AddClass('b3-sidebar-hide');

    setTimeout(() => {
      if (this.back_drop == undefined || this.side_bar == undefined) return;
    
      this.back_drop.DeleteClass('b3-show');
      this.side_bar.DeleteClass('b3-sidebar-hide');

      this.body.style.overflow = '';
    }, 200);
  }

  public Dispose(): void {
    if (this.back_drop == undefined || this.side_bar == undefined) return;    
    this.back_drop.Delete();
    this.HideSideBar();
  }
}

export default WebScaffold;

export {MenuButton};