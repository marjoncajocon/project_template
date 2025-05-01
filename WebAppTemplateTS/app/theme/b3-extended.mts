import { button, div, Widget } from "../plugin/core/core.mts";
import { Button, Color, Column, Icon, Icons, JustifyContent, Row, Text } from "./b3.mts";

class WebScaffold extends div {
  constructor(option: {
    appBar?: {
      title?: string|Widget,
      drawer?: {
        header?: Widget
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
        overflowY: 'auto'
      });

      top_nav.AddClass('bg-primary');

      const row = new Row({});
      row.AddStyle({
        height: '100%',
        width: '240px'
      })

      if (drawer != undefined) {
        const {header} = drawer;
        const bar = new button();
        bar.AddStyle({
          height: '46px', width: '46px',
          color: 'inherit',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          border: 'none',
          borderRadius: '10px'
        });

        bar.Add(new Icon({icon: Icons.MenuHamburger}));
        row.AddWidget({widget: bar});


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


      super.Add(top_nav);
    }
    



    

  }
}

export default WebScaffold;