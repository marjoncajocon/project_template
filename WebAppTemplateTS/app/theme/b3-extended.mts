import { button, div, Widget } from "../plugin/core/core.mts";
import { Button, Color, Column, Icon, Icons, JustifyContent, Row, Text } from "./b3.mts";

class WebScaffold extends div {
  back_drop: div
  side_bar: div
  body_content: div
  constructor(option: {
    appBar?: {
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

      const {title, drawer, action} = appBar;

      const top_nav = new div().AddStyle({
        height: '56px',
        width: '100%',
        overflowY: 'auto',
        position: 'fixed',
        top: '0px',
        left: '0px'
      });

      top_nav.AddClass('bg-primary');

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
          color: 'inherit',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          border: 'none',
          borderRadius: '10px',
          fontSize: '24px'
        });

        bar.Add(new Icon({icon: Icons.MenuHamburger}));
        row.AddWidget({widget: bar});


        this.side_bar = new div();
        this.side_bar.AddStyle({
          width: '240px',
          height: '100%',
          position: 'absolute',
          left: '0px',
          top: '0px',
          boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)'
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
                color: 'inherit',
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
          this.side_bar.Add(content);
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
        paddingTop: '58px'
      });
      super.Add(top_nav);

      super.Add(this.body_content);
    }
    
    

  }


  public SetBody(content: Widget) {
    this.body_content.Clear();
    this.body_content.Add(content);
  }

  private ShowSideBar() {
    this.back_drop.AddClass('b3-show');
    this.side_bar.AddClass('b3-sidebar-show');
    this.body.style.overflow = 'hidden';
  }

  private HideSideBar() {
    this.side_bar.DeleteClass('b3-sidebar-show');
    this.side_bar.AddClass('b3-sidebar-hide');

    setTimeout(() => {
      this.back_drop.DeleteClass('b3-show');
      this.side_bar.DeleteClass('b3-sidebar-hide');

      this.body.style.overflow = '';
    }, 200);
  }

  public Dispose(): void {
    this.back_drop.Delete();
    this.HideSideBar();
  }
}

export default WebScaffold;